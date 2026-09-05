import { ReactNode } from 'react';
export interface CodeSurfaceProps {
    /** The editor or viewer itself - a CodeMirror mount, or plain markup. */
    children: ReactNode;
    toolbar?: ReactNode;
    status?: ReactNode;
    className?: string;
}
/**
 * Chrome around a code editor or viewer: border, focus ring, optional toolbar
 * and status line.
 *
 * wertkit deliberately does not depend on an editor library. It owns the frame
 * and the --wk-syntax-* roles, so every code surface across the apps highlights
 * identically regardless of which engine renders inside. See
 * spec/code-surfaces.md for the CodeMirror HighlightStyle that maps the roles.
 */
export declare function CodeSurface({ children, toolbar, status, className }: CodeSurfaceProps): import("react").JSX.Element;
export interface CodeBlockProps {
    code: string;
    /** Names the region, e.g. "Generated cURL command". */
    'aria-label'?: string;
    className?: string;
}
/** Static, non-editable code. Mount an editor inside CodeSurface when editable. */
export declare function CodeBlock({ code, className, ...aria }: CodeBlockProps): import("react").JSX.Element;
