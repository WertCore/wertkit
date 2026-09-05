import * as RadixTabs from '@radix-ui/react-tabs';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Tabs.module.css';

export interface TabsProps extends RadixTabs.TabsProps {
  children: ReactNode;
}

export function Tabs({ className, ...rest }: TabsProps) {
  return <RadixTabs.Root className={cn(styles.root, className)} {...rest} />;
}

export function TabsList({ className, ...rest }: RadixTabs.TabsListProps) {
  return <RadixTabs.List className={cn(styles.list, className)} {...rest} />;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, RadixTabs.TabsTriggerProps>(
  function TabsTrigger({ className, ...rest }, ref) {
    return <RadixTabs.Trigger ref={ref} className={cn(styles.trigger, className)} {...rest} />;
  },
);

export function TabsContent({ className, ...rest }: RadixTabs.TabsContentProps) {
  return <RadixTabs.Content className={cn(styles.content, className)} {...rest} />;
}
