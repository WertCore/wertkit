import { useId, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Form.module.css';

export interface FormSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  /** Top-right slot - a toggle, "Add", or a Badge. */
  action?: ReactNode;
  className?: string;
}

/**
 * A titled group of settings. Renders a real <section> wired to its heading
 * with aria-labelledby, so each group is a navigable landmark rather than a
 * styled div.
 */
export function FormSection({ title, description, children, action, className }: FormSectionProps) {
  const id = useId();
  return (
    <section className={cn(styles.section, className)} aria-labelledby={title ? id : undefined}>
      {(title || action) && (
        <div className={styles.sectionTop}>
          <div className={styles.sectionHead}>
            {title && <h2 className={styles.sectionTitle} id={id}>{title}</h2>}
            {description && <p className={styles.sectionDesc}>{description}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export interface SettingRowProps {
  label: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  /** Put the control on its own line - for inputs and selects that need width. */
  stacked?: boolean;
  className?: string;
}

/**
 * Label and description on one side, control on the other - the settings-page
 * workhorse. Stacks below 560px so a narrowed Tauri window stays usable.
 *
 * The label is intentionally not a <label> element: the control is often a
 * group (radios, a segmented control) that a single label cannot legally point
 * at. Nest a Field inside when you need true label-for-input association.
 */
export function SettingRow({ label, description, children, stacked, className }: SettingRowProps) {
  return (
    <div className={cn(styles.row, stacked && styles.stacked, className)}>
      <div className={styles.rowText}>
        <span className={styles.rowLabel}>{label}</span>
        {description && <p className={styles.rowDesc}>{description}</p>}
      </div>
      <div className={styles.rowControl}>{children}</div>
    </div>
  );
}
