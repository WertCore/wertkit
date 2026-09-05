import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
export type CardVariant = 'outlined' | 'raised' | 'inset';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
interface CardOwnProps {
    /** Optional heading. Rendered as a real <h3> and wired up with aria-labelledby. */
    title?: ReactNode;
    description?: ReactNode;
    /** Leading adornment, usually an icon. Decorative. */
    icon?: ReactNode;
    /** Top-right slot — a Badge, a menu, a switch. */
    action?: ReactNode;
    /** Separated bottom region, for actions or metadata. */
    footer?: ReactNode;
    children?: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    /**
     * Makes the whole card one control.
     *
     * Renders a real `<button>` rather than a div with a click handler, so it is
     * focusable, keyboard-operable and announced as a control. Use `asChild`
     * instead when the destination is a link — a card that navigates should be an
     * `<a>`, not a button.
     */
    interactive?: boolean;
    /** Render as the single child element instead, keeping the card's styling. */
    asChild?: boolean;
    className?: string;
}
export type CardProps = CardOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof CardOwnProps> & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'>;
/**
 * A bordered surface for a self-contained block of content.
 *
 * The gap this fills: `FormSection` groups and spaces content but draws nothing,
 * so anything that needed a visible container had to hand-roll one — which is
 * how apps drift apart visually.
 */
export declare function Card({ title, description, icon, action, footer, children, variant, padding, interactive, asChild, className, ...rest }: CardProps): import("react").JSX.Element;
export {};
