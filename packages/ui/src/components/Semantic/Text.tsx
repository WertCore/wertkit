import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Semantic.module.css';
import { sizeClassName, type TextSize } from './Heading';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'label' | 'dd' | 'dt';
  size?: TextSize;
  tone?: 'default' | 'muted' | 'subtle' | 'danger';
  mono?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { as = 'p', size = 'md', tone = 'default', mono = false, className, ...rest },
  ref,
) {
  const Tag = as as 'p';
  return (
    <Tag
      ref={ref as never}
      className={cn(
        styles.text,
        sizeClassName[size],
        tone !== 'default' && styles[tone],
        mono && styles.mono,
        className,
      )}
      {...rest}
    />
  );
});
