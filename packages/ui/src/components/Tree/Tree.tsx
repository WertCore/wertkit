import {
  createContext, useCallback, useContext, useMemo, useRef, useState,
  type KeyboardEvent, type ReactNode,
} from 'react';
import { cn } from '../../utils';
import { ChevronDownIcon } from '../../icons';
import styles from './Tree.module.css';

interface TreeContextValue {
  activeId: string | null;
  setActiveId: (id: string) => void;
  register: (id: string) => void;
}

const TreeContext = createContext<TreeContextValue | null>(null);

export interface TreeProps {
  children: ReactNode;
  /** Fires when an item is activated by Enter/Space or click. */
  onActivate?: (id: string) => void;
  /** Fires for ArrowRight on a collapsed node / ArrowLeft on an expanded one. */
  onToggle?: (id: string, expanded: boolean) => void;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  className?: string;
}

/**
 * Accessible tree container.
 *
 * Deliberately does NOT own the data: callers pass already-flattened rows as
 * TreeItem children. That keeps it compatible with windowing - render only the
 * visible slice through any virtualiser and pass posInSet/setSize so the full
 * size is still announced. A tree that owns its data cannot be virtualised
 * without forking it.
 *
 * Roving tabindex: the tree is one Tab stop; arrows move between items.
 */
export function Tree({ children, onActivate, onToggle, className, ...aria }: TreeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const ids = useRef<string[]>([]);

  // Items register in render order, so DOM order drives arrow navigation.
  ids.current = [];
  const register = useCallback((id: string) => {
    ids.current.push(id);
  }, []);

  const focusItem = (id: string) => {
    setActiveId(id);
    ref.current?.querySelector<HTMLElement>(`[data-tree-id="${CSS.escape(id)}"]`)?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const list = ids.current;
    if (!list.length) return;
    const i = activeId ? list.indexOf(activeId) : -1;
    const el = activeId
      ? ref.current?.querySelector<HTMLElement>(`[data-tree-id="${CSS.escape(activeId)}"]`)
      : null;
    const expanded = el?.getAttribute('aria-expanded');

    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); focusItem(list[Math.min(i + 1, list.length - 1)]); break;
      case 'ArrowUp': e.preventDefault(); focusItem(list[Math.max(i - 1, 0)]); break;
      case 'Home': e.preventDefault(); focusItem(list[0]); break;
      case 'End': e.preventDefault(); focusItem(list[list.length - 1]); break;
      case 'ArrowRight':
        if (expanded === 'false' && activeId) { e.preventDefault(); onToggle?.(activeId, true); }
        else if (expanded === 'true') { e.preventDefault(); focusItem(list[Math.min(i + 1, list.length - 1)]); }
        break;
      case 'ArrowLeft':
        if (expanded === 'true' && activeId) { e.preventDefault(); onToggle?.(activeId, false); }
        else if (i > 0) { e.preventDefault(); focusItem(list[i - 1]); }
        break;
      case 'Enter':
      case ' ':
        if (activeId) { e.preventDefault(); onActivate?.(activeId); }
        break;
      default: break;
    }
  };

  const ctx = useMemo<TreeContextValue>(
    () => ({ activeId, setActiveId, register }),
    [activeId, register],
  );

  return (
    <TreeContext.Provider value={ctx}>
      <div
        ref={ref}
        role="tree"
        className={cn(styles.root, className)}
        onKeyDown={onKeyDown}
        {...aria}
      >
        {children}
      </div>
    </TreeContext.Provider>
  );
}

export interface TreeItemProps {
  id: string;
  /** 1-based depth. Required: aria-level is how depth is conveyed. */
  level: number;
  children: ReactNode;
  hasChildren?: boolean;
  expanded?: boolean;
  selected?: boolean;
  /** Leading glyph, rendered after the twisty. */
  icon?: ReactNode;
  /** Trailing content - counts, method tags, hover actions. */
  endSlot?: ReactNode;
  onSelect?: (id: string) => void;
  onToggle?: (id: string, expanded: boolean) => void;
  /** Pass both when windowing, so the full set size is still announced. */
  posInSet?: number;
  setSize?: number;
  indent?: number;
  className?: string;
}

export function TreeItem({
  id, level, children, hasChildren = false, expanded, selected = false,
  icon, endSlot, onSelect, onToggle, posInSet, setSize, indent = 14, className,
}: TreeItemProps) {
  const ctx = useContext(TreeContext);
  if (!ctx) throw new Error('TreeItem must be used inside <Tree>');
  ctx.register(id);

  const isActive = ctx.activeId === id || (ctx.activeId === null && level === 1 && posInSet === 1);

  return (
    <div
      role="treeitem"
      data-tree-id={id}
      aria-level={level}
      aria-expanded={hasChildren ? Boolean(expanded) : undefined}
      aria-selected={selected}
      aria-posinset={posInSet}
      aria-setsize={setSize}
      tabIndex={isActive ? 0 : -1}
      className={cn(styles.item, className)}
      style={{ paddingInlineStart: (level - 1) * indent + 4 }}
      onFocus={() => ctx.setActiveId(id)}
      onClick={() => {
        ctx.setActiveId(id);
        onSelect?.(id);
      }}
    >
      {hasChildren ? (
        <span
          className={styles.twisty}
          data-expanded={Boolean(expanded)}
          onClick={(e) => {
            // Toggling must not also select the row.
            e.stopPropagation();
            onToggle?.(id, !expanded);
          }}
        >
          <ChevronDownIcon />
        </span>
      ) : (
        <span className={styles.spacer} />
      )}
      {icon}
      <span className={styles.label}>{children}</span>
      {endSlot}
    </div>
  );
}
