import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { forwardRef, useId, type ReactNode } from 'react';
import { cn } from '../../utils';
import { CheckIcon } from '../../icons';
import styles from './Checkbox.module.css';

export interface CheckboxProps
  extends Omit<RadixCheckbox.CheckboxProps, 'asChild' | 'children'> {
  label?: ReactNode;
}

/** Pass checked="indeterminate" for the mixed state (select-all headers). */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  { label, className, id, ...rest },
  ref,
) {
  const autoId = useId();
  const boxId = id ?? autoId;
  const control = (
    <RadixCheckbox.Root ref={ref} id={boxId} className={cn(styles.root, className)} {...rest}>
      <RadixCheckbox.Indicator className={styles.indicator}>
        {rest.checked === 'indeterminate' ? (
          <span className={styles.dash} />
        ) : (
          <CheckIcon />
        )}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
  if (!label) return control;
  return (
    <span className={styles.wrapper}>
      {control}
      <label className={styles.label} htmlFor={boxId}>
        {label}
      </label>
    </span>
  );
});
