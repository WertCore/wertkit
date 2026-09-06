import * as RadixDialog from '@radix-ui/react-dialog';
import {
  createContext,
  useLayoutEffect, useContext, useEffect, useId, useMemo, useRef, useState,
  type ReactNode,
} from 'react';
import { cn } from '../../utils';
import { VisuallyHidden } from '../Semantic/VisuallyHidden';
import styles from './CommandPalette.module.css';

interface PaletteContextValue {
  activeId: string | null;
  /** Called during an item's render so its handler stays current. */
  register: (id: string, run: () => void) => void;
  /**
   * Called from an item's LAYOUT EFFECT to join the ordered list; returns its
   * own cleanup.
   *
   * This half has to exist. The items render inside a Radix Portal, which
   * mounts in a SEPARATE commit — so a ref the parent fills during render and
   * reads in its own effect is still empty, and the parent never re-renders
   * to look again. Only a state update from the child brings it back.
   */
  attach: (id: string) => () => void;
  listId: string;
}
const PaletteContext = createContext<PaletteContextValue | null>(null);

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  query: string;
  onQueryChange: (query: string) => void;
  children: ReactNode;
  placeholder?: string;
  /** Accessible name for the dialog. Visually hidden. */
  title?: string;
  footer?: ReactNode;
  className?: string;
}

/**
 * The Cmd+K surface: overlay, filter input, and a keyboard-driven listbox.
 *
 * Filtering and command registries stay in the app - this owns only the
 * interaction and the ARIA. The input keeps focus and drives the list through
 * aria-activedescendant (combobox pattern), so arrows move the highlight
 * without focus ever leaving the field.
 */
export function CommandPalette({
  open, onOpenChange, query, onQueryChange, children,
  placeholder = 'Type a command or search…',
  title = 'Command palette', footer, className,
}: CommandPaletteProps) {
  const listId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  // Ordered ids in STATE so a late-mounting item re-renders the palette;
  // handlers in a ref so each render's closure stays fresh without disturbing
  // the order.
  const [ids, setIds] = useState<string[]>([]);
  const runs = useRef<Map<string, () => void>>(new Map());

  const register = useMemo(
    () => (id: string, run: () => void) => {
      runs.current.set(id, run);
    },
    [],
  );

  const attach = useMemo(
    () => (id: string) => {
      setIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
      return () => {
        setIds((prev) => prev.filter((x) => x !== id));
        runs.current.delete(id);
      };
    },
    [],
  );

  // A new query produces a new result set; highlighting the stale index would
  // run the wrong command on Enter.
  useEffect(() => setActiveIndex(0), [query]);

  const count = ids.length;
  const activeId = ids[activeIndex] ?? ids[0] ?? null;

  const ctx = useMemo<PaletteContextValue>(
    () => ({ activeId, register, attach, listId }),
    [activeId, register, attach, listId],
  );

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={cn(styles.content, className)}>
          <RadixDialog.Title asChild>
            <VisuallyHidden>{title}</VisuallyHidden>
          </RadixDialog.Title>
          <PaletteContext.Provider value={ctx}>
            <div className={styles.search}>
              <span className={styles.searchIcon} aria-hidden="true">⌕</span>
              <input
                className={styles.input}
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={placeholder}
                role="combobox"
                aria-expanded
                aria-controls={listId}
                aria-activedescendant={activeId ? `${listId}-${activeId}` : undefined}
                aria-autocomplete="list"
                autoComplete="off"
                // biome-ignore lint: the palette is explicitly a focus-on-open surface
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' && count) {
                    e.preventDefault();
                    setActiveIndex((i) => (i + 1) % count);
                  } else if (e.key === 'ArrowUp' && count) {
                    e.preventDefault();
                    setActiveIndex((i) => (i <= 0 ? count - 1 : i - 1));
                  } else if (e.key === 'Enter') {
                    const id = ids[activeIndex] ?? ids[0];
                    const run = id ? runs.current.get(id) : undefined;
                    if (!run) return;
                    e.preventDefault();
                    run();
                  }
                }}
              />
            </div>
            <ul className={styles.list} id={listId} role="listbox" aria-label={title}>
              {children}
            </ul>
            {footer && <div className={styles.footer}>{footer}</div>}
          </PaletteContext.Provider>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

export function CommandGroup({ heading, children }: { heading?: ReactNode; children: ReactNode }) {
  return (
    <li className={styles.group}>
      {heading && <div className={styles.heading}>{heading}</div>}
      <ul role="group" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {children}
      </ul>
    </li>
  );
}

export interface CommandItemProps {
  id: string;
  children: ReactNode;
  onSelect: () => void;
  icon?: ReactNode;
  /** Right-aligned annotation - a shortcut, path, or source. */
  hint?: ReactNode;
}

export function CommandItem({ id, children, onSelect, icon, hint }: CommandItemProps) {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error('CommandItem must be used inside <CommandPalette>');
  ctx.register(id, onSelect);
  // Joining the list is an EFFECT, not a render-time mutation: the parent
  // needs a state update to learn this item exists, and a ref write cannot
  // deliver one across the portal boundary.
  const { attach } = ctx;
  useLayoutEffect(() => attach(id), [attach, id]);
  const active = ctx.activeId === id;

  return (
    <li
      id={`${ctx.listId}-${id}`}
      role="option"
      aria-selected={active}
      data-active={active}
      className={styles.item}
      // mousedown, not click: the input must not lose focus first.
      onMouseDown={(e) => {
        e.preventDefault();
        onSelect();
      }}
    >
      {icon && <span className={styles.itemIcon}>{icon}</span>}
      <span className={styles.itemLabel}>{children}</span>
      {hint && <span className={styles.itemHint}>{hint}</span>}
    </li>
  );
}

export function CommandEmpty({ children }: { children: ReactNode }) {
  return <li className={styles.empty}>{children}</li>;
}
