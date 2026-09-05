import * as RadixSelect from '@radix-ui/react-select';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '../../utils';
import { CheckIcon, ChevronDownIcon } from '../../icons';
import { useField } from '../Field/Field';
import styles from './Select.module.css';

export interface SelectProps extends Omit<RadixSelect.SelectProps, 'children'> {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  id?: string;
  'aria-label'?: string;
}

/**
 * Portalled by default so opening it never shifts surrounding layout.
 * Compose with SelectItem / SelectGroup / SelectSeparator.
 */
export function Select({
  placeholder,
  size = 'md',
  children,
  className,
  id,
  'aria-label': ariaLabel,
  ...rest
}: SelectProps) {
  const field = useField();
  return (
    <RadixSelect.Root {...rest}>
      <RadixSelect.Trigger
        id={id ?? field?.inputId}
        aria-label={ariaLabel}
        aria-invalid={field?.invalid || undefined}
        aria-describedby={field?.describedBy}
        className={cn(styles.trigger, styles[size], className)}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className={styles.icon}>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={styles.content} position="popper" sideOffset={4}>
          <RadixSelect.Viewport className={styles.viewport}>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

export const SelectItem = forwardRef<HTMLDivElement, RadixSelect.SelectItemProps>(
  function SelectItem({ className, children, ...rest }, ref) {
    return (
      <RadixSelect.Item ref={ref} className={cn(styles.item, className)} {...rest}>
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className={styles.itemIndicator}>
          <CheckIcon />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  },
);

export function SelectGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <RadixSelect.Group>
      <RadixSelect.Label className={styles.label}>{label}</RadixSelect.Label>
      {children}
    </RadixSelect.Group>
  );
}

export function SelectSeparator() {
  return <RadixSelect.Separator className={styles.separator} />;
}
