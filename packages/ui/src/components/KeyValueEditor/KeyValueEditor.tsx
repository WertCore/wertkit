import { useId, type ReactNode } from 'react';
import { cn } from '../../utils';
import { CloseIcon } from '../../icons';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import { VisuallyHidden } from '../Semantic/VisuallyHidden';
import styles from './KeyValueEditor.module.css';

export interface KeyValuePair {
  id: string;
  key: string;
  value: string;
  /** Unchecked rows stay in the list but are excluded by the caller. */
  enabled?: boolean;
}

export interface KeyValueEditorProps {
  rows: KeyValuePair[];
  onChange: (rows: KeyValuePair[]) => void;
  keyLabel?: string;
  valueLabel?: string;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  /** Suggestions for the key column - header names, known variables. */
  onNewRowId?: () => string;
  /** Hide the enable/disable column when every row always applies. */
  selectable?: boolean;
  addLabel?: string;
  emptyMessage?: ReactNode;
  /** Values are secrets: render them masked. */
  maskValues?: boolean;
  className?: string;
}

/**
 * Editable key/value list - headers, query params, environment variables,
 * form fields.
 *
 * Each column is a real labelled input (the label is visually hidden per row),
 * so a screen reader announces "Header name, row 3" rather than an unlabelled
 * textbox. Rows are keyed by a caller-supplied id, never by index, so
 * reordering or removing a row does not shuffle focus into the wrong field.
 */
export function KeyValueEditor({
  rows,
  onChange,
  keyLabel = 'Key',
  valueLabel = 'Value',
  keyPlaceholder,
  valuePlaceholder,
  onNewRowId,
  selectable = true,
  addLabel = 'Add row',
  emptyMessage = 'Nothing here yet.',
  maskValues = false,
  className,
}: KeyValueEditorProps) {
  const uid = useId();
  let counter = 0;
  const nextId = () => onNewRowId?.() ?? `${uid}-${rows.length}-${counter++}`;

  const patch = (id: string, next: Partial<KeyValuePair>) =>
    onChange(rows.map((r) => (r.id === id ? { ...r, ...next } : r)));

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.head} aria-hidden="true">
        <span>{selectable ? '' : null}</span>
        <span>{keyLabel}</span>
        <span>{valueLabel}</span>
        <span />
      </div>

      {rows.length === 0 && <p className={styles.empty}>{emptyMessage}</p>}

      {rows.map((row, i) => {
        const enabled = row.enabled ?? true;
        return (
          <div key={row.id} className={styles.row} data-disabled={!enabled}>
            <span className={styles.cell}>
              {selectable && (
                <Checkbox
                  checked={enabled}
                  onCheckedChange={(v) => patch(row.id, { enabled: v === true })}
                  aria-label={`Enable ${row.key || `row ${i + 1}`}`}
                />
              )}
            </span>
            <span className={styles.cell}>
              <Input
                size="sm"
                mono
                value={row.key}
                placeholder={keyPlaceholder}
                aria-label={`${keyLabel}, row ${i + 1}`}
                onChange={(e) => patch(row.id, { key: e.target.value })}
              />
            </span>
            <span className={styles.cell}>
              <Input
                size="sm"
                mono
                type={maskValues ? 'password' : 'text'}
                value={row.value}
                placeholder={valuePlaceholder}
                aria-label={`${valueLabel}, row ${i + 1}`}
                onChange={(e) => patch(row.id, { value: e.target.value })}
              />
            </span>
            <span className={styles.actions}>
              <button
                type="button"
                className={styles.remove}
                onClick={() => onChange(rows.filter((r) => r.id !== row.id))}
              >
                <CloseIcon />
                <VisuallyHidden>Remove {row.key || `row ${i + 1}`}</VisuallyHidden>
              </button>
            </span>
          </div>
        );
      })}

      <div className={styles.footer}>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onChange([...rows, { id: nextId(), key: '', value: '', enabled: true }])}
        >
          + {addLabel}
        </Button>
      </div>
    </div>
  );
}
