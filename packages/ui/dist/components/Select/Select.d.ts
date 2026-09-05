import { ReactNode } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
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
export declare function Select({ placeholder, size, children, className, id, 'aria-label': ariaLabel, ...rest }: SelectProps): import("react").JSX.Element;
export declare const SelectItem: import('react').ForwardRefExoticComponent<RadixSelect.SelectItemProps & import('react').RefAttributes<HTMLDivElement>>;
export declare function SelectGroup({ label, children }: {
    label: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function SelectSeparator(): import("react").JSX.Element;
