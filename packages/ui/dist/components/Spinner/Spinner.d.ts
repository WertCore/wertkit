export interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    /** Announced to screen readers. Pass null inside an already-labelled region. */
    label?: string | null;
    className?: string;
}
export declare function Spinner({ size, label, className }: SpinnerProps): import("react").JSX.Element;
