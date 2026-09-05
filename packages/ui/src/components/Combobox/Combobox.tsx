import { useId, useMemo, useRef, useState } from 'react';
import { cn } from '../../utils';
import { Input, type InputProps } from '../Input/Input';
import styles from './Combobox.module.css';

export interface ComboboxSuggestion {
  /** Shown in the list. */
  label: string;
  /** Committed on accept. Defaults to label. */
  value?: string;
  /** Right-aligned annotation, e.g. a type or source. */
  hint?: string;
}

export interface ComboboxProps extends Omit<InputProps, 'value' | 'onChange' | 'children'> {
  value: string;
  onValueChange: (value: string) => void;
  /** Recomputed per keystroke. Return [] to close the list. */
  suggestions: (value: string) => ComboboxSuggestion[];
  /** Fires on Enter when nothing is highlighted. */
  onEnter?: () => void;
  emptyMessage?: string;
}

const commitValue = (s: ComboboxSuggestion) => s.value ?? s.label;

/**
 * Text input with an inline suggestion list - variable completion in a URL bar,
 * header-name hints, and similar.
 *
 * Implements the ARIA 1.2 combobox pattern: the input keeps DOM focus and owns
 * aria-expanded / aria-activedescendant while the listbox is a sibling, so a
 * screen reader announces the highlighted option without focus ever leaving the
 * field. Tab and Enter accept, arrows move, Escape closes.
 */
export function Combobox({
  value,
  onValueChange,
  suggestions,
  onEnter,
  emptyMessage,
  mono,
  className,
  onKeyDown,
  onBlur,
  ...rest
}: ComboboxProps) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = useMemo(() => (open ? suggestions(value) : []), [open, suggestions, value]);
  const visible = open && (items.length > 0 || Boolean(emptyMessage));
  const activeId = active >= 0 && items[active] ? `${listId}-${active}` : undefined;

  const accept = (index: number) => {
    const hit = items[index];
    if (!hit) return;
    onValueChange(commitValue(hit));
    setOpen(false);
    setActive(-1);
  };

  return (
    <div className={styles.wrap}>
      <Input
        role="combobox"
        aria-expanded={visible}
        aria-controls={visible ? listId : undefined}
        aria-activedescendant={activeId}
        aria-autocomplete="list"
        autoComplete="off"
        value={value}
        mono={mono}
        className={className}
        onChange={(e) => {
          onValueChange(e.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          // Deferred so a mousedown on an option lands before the list unmounts.
          blurTimer.current = setTimeout(() => setOpen(false), 120);
          onBlur?.(e);
        }}
        onKeyDown={(e) => {
          onKeyDown?.(e);
          if (e.defaultPrevented) return;
          if (e.key === 'ArrowDown' && items.length) {
            e.preventDefault();
            setOpen(true);
            setActive((i) => (i + 1) % items.length);
          } else if (e.key === 'ArrowUp' && items.length) {
            e.preventDefault();
            setActive((i) => (i <= 0 ? items.length - 1 : i - 1));
          } else if (e.key === 'Enter') {
            if (active >= 0) { e.preventDefault(); accept(active); }
            else onEnter?.();
          } else if (e.key === 'Tab' && active >= 0) {
            e.preventDefault();
            accept(active);
          } else if (e.key === 'Escape' && visible) {
            e.preventDefault();
            setOpen(false);
            setActive(-1);
          }
        }}
        {...rest}
      />
      {visible && (
        <ul className={styles.list} id={listId} role="listbox">
          {items.length === 0 ? (
            <li className={styles.empty}>{emptyMessage}</li>
          ) : (
            items.map((item, i) => (
              <li
                key={`${item.label}-${i}`}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                data-active={i === active}
                className={styles.option}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => {
                  // Prevent the input's blur so the click can commit.
                  e.preventDefault();
                  if (blurTimer.current) clearTimeout(blurTimer.current);
                  accept(i);
                }}
              >
                <span className={cn(styles.label, mono && styles.mono)}>{item.label}</span>
                {item.hint && <span className={styles.hint}>{item.hint}</span>}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
