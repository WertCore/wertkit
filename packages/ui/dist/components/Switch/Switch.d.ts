import { ReactNode } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
export interface SwitchProps extends Omit<RadixSwitch.SwitchProps, 'asChild' | 'children'> {
    /** Rendered as a real <label>, so clicking the text toggles the control. */
    label?: ReactNode;
}
/**
 * Note the handler is `onCheckedChange(checked: boolean)`, not `onChange`.
 * It receives the boolean directly - there is no event to destructure, and a
 * signature named `onChange` invites exactly that mistake.
 */
export declare const Switch: import('react').ForwardRefExoticComponent<SwitchProps & import('react').RefAttributes<HTMLButtonElement>>;
