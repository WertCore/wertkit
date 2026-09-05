import * as RadixSwitch from '@radix-ui/react-switch';
import { forwardRef, useId, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Switch.module.css';

export interface SwitchProps
  extends Omit<RadixSwitch.SwitchProps, 'asChild' | 'children'> {
  /** Rendered as a real <label>, so clicking the text toggles the control. */
  label?: ReactNode;
}

/**
 * Note the handler is `onCheckedChange(checked: boolean)`, not `onChange`.
 * It receives the boolean directly - there is no event to destructure, and a
 * signature named `onChange` invites exactly that mistake.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { label, className, id, ...rest },
  ref,
) {
  const autoId = useId();
  const switchId = id ?? autoId;
  const control = (
    <RadixSwitch.Root ref={ref} id={switchId} className={cn(styles.root, className)} {...rest}>
      <RadixSwitch.Thumb className={styles.thumb} />
    </RadixSwitch.Root>
  );
  if (!label) return control;
  return (
    <span className={styles.wrapper}>
      {control}
      <label className={styles.label} htmlFor={switchId}>
        {label}
      </label>
    </span>
  );
});
