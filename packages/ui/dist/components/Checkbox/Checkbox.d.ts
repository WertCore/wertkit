import { ReactNode } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
export interface CheckboxProps extends Omit<RadixCheckbox.CheckboxProps, 'asChild' | 'children'> {
    label?: ReactNode;
}
/** Pass checked="indeterminate" for the mixed state (select-all headers). */
export declare const Checkbox: import('react').ForwardRefExoticComponent<CheckboxProps & import('react').RefAttributes<HTMLButtonElement>>;
