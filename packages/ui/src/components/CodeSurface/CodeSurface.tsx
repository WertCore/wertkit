import type { ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './CodeSurface.module.css';

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
export function CodeSurface({ children, toolbar, status, className }: CodeSurfaceProps) {
  return (
    <div className={cn(styles.root, className)}>
      {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
      <div className={styles.body}>{children}</div>
      {status && <div className={styles.status}>{status}</div>}
    </div>
  );
}

export interface CodeBlockProps {
  code: string;
  /** Names the region, e.g. "Generated cURL command". */
  'aria-label'?: string;
  className?: string;
}

/** Static, non-editable code. Mount an editor inside CodeSurface when editable. */
export function CodeBlock({ code, className, ...aria }: CodeBlockProps) {
  return (
    <pre className={cn(styles.pre, className)} tabIndex={0} {...aria}>
      <code>{code}</code>
    </pre>
  );
}
