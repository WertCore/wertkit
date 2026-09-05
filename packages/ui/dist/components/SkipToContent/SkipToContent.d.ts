export interface SkipToContentProps {
    /** id of the main region, without the '#'. AppShell's <main> is a good target. */
    targetId?: string;
    children?: string;
    className?: string;
}
/**
 * Keyboard bypass link. Render as the first child of the app so a keyboard user
 * can jump past the sidebar and toolbars instead of tabbing through them on
 * every page.
 *
 * WCAG 2.4.1. Hidden until focused, then visible.
 */
export declare function SkipToContent({ targetId, children, className, }: SkipToContentProps): import("react").JSX.Element;
