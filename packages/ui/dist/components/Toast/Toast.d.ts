import { ReactNode } from 'react';
import * as RadixToast from '@radix-ui/react-toast';
export type ToastTone = 'neutral' | 'danger' | 'warn' | 'success' | 'info';
export interface ToastOptions {
    title: ReactNode;
    description?: ReactNode;
    tone?: ToastTone;
    /** Milliseconds. Errors default to sticky, since they need to be read. */
    duration?: number;
}
interface ToastContextValue {
    toast: (options: ToastOptions) => void;
    dismiss: (id: number) => void;
}
export interface ToastProviderProps {
    children: ReactNode;
    /** 'foreground' interrupts a screen reader; reserve it for errors. */
    swipeDirection?: RadixToast.ToastProviderProps['swipeDirection'];
}
export declare function ToastProvider({ children, swipeDirection }: ToastProviderProps): import("react").JSX.Element;
export declare function useToast(): ToastContextValue;
export {};
