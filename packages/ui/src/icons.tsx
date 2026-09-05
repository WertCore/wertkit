/**
 * Minimal inline glyphs used by wertkit's own components. This is deliberately
 * NOT an icon library - apps bring their own. Kept here so @wertkit/ui has no
 * icon dependency.
 */
import type { SVGProps } from 'react';

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: '1em', height: '1em', viewBox: '0 0 16 16', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const, 'aria-hidden': true, ...p,
});

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 8.5 6.5 12 13 4.5" /></svg>
);
export const ChevronDownIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m4 6 4 4 4-4" /></svg>
);
export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 4l8 8M12 4l-8 8" /></svg>
);
