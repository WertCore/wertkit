import { ReactNode } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
export interface TabsProps extends RadixTabs.TabsProps {
    children: ReactNode;
}
export declare function Tabs({ className, ...rest }: TabsProps): import("react").JSX.Element;
export declare function TabsList({ className, ...rest }: RadixTabs.TabsListProps): import("react").JSX.Element;
export declare const TabsTrigger: import('react').ForwardRefExoticComponent<RadixTabs.TabsTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare function TabsContent({ className, ...rest }: RadixTabs.TabsContentProps): import("react").JSX.Element;
