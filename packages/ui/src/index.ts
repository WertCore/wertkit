// Layer order must be declared before any component stylesheet is emitted.
import './styles/layers.css';
import './styles/base.css';

export { cn } from './utils';
export { CheckIcon, ChevronDownIcon, CloseIcon } from './icons';

export { ThemeProvider, useTheme } from './components/ThemeProvider/ThemeProvider';
export type {
  ThemeProviderProps, ThemeName, ThemeSetting, BuiltInTheme, Density,
} from './components/ThemeProvider/ThemeProvider';
export { ThemeScript } from './components/ThemeProvider/ThemeScript';
export type { ThemeScriptProps } from './components/ThemeProvider/ThemeScript';

export { Button } from './components/Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button';

export { Field, useField } from './components/Field/Field';
export type { FieldProps } from './components/Field/Field';
export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Select, SelectItem, SelectGroup, SelectSeparator } from './components/Select/Select';
export type { SelectProps } from './components/Select/Select';
export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';
export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';

export { Dialog, DialogClose } from './components/Dialog/Dialog';
export type { DialogProps } from './components/Dialog/Dialog';
export { Menu, MenuItem, MenuLabel, MenuSeparator } from './components/Menu/Menu';
export type { MenuProps, MenuItemProps } from './components/Menu/Menu';
export { Tooltip, TooltipProvider } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs/Tabs';
export type { TabsProps } from './components/Tabs/Tabs';
export { ToastProvider, useToast } from './components/Toast/Toast';
export type { ToastOptions, ToastTone, ToastProviderProps } from './components/Toast/Toast';

export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';
export { Combobox } from './components/Combobox/Combobox';
export type { ComboboxProps, ComboboxSuggestion } from './components/Combobox/Combobox';
export { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
export type { SegmentedControlProps, SegmentedOption } from './components/SegmentedControl/SegmentedControl';

export { Alert } from './components/Alert/Alert';
export type { AlertProps, AlertTone } from './components/Alert/Alert';
export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';
export { Spinner } from './components/Spinner/Spinner';
export type { SpinnerProps } from './components/Spinner/Spinner';
export { Kbd } from './components/Kbd/Kbd';
export type { KbdProps } from './components/Kbd/Kbd';
export { SplitPane } from './components/SplitPane/SplitPane';
export type { SplitPaneProps } from './components/SplitPane/SplitPane';

export { Table, Thead, Tbody, Tr, Th, Td } from './components/Table/Table';
export type { TableProps, TrProps, ThProps, TdProps } from './components/Table/Table';
export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';
export { AppShell } from './components/AppShell/AppShell';
export type { AppShellProps } from './components/AppShell/AppShell';

// Semantic + SEO layer
export { Heading } from './components/Semantic/Heading';
export type { HeadingProps, HeadingLevel, TextSize } from './components/Semantic/Heading';
export { Text } from './components/Semantic/Text';
export type { TextProps } from './components/Semantic/Text';
export { Link } from './components/Semantic/Link';
export type { LinkProps } from './components/Semantic/Link';
export { VisuallyHidden } from './components/Semantic/VisuallyHidden';
export { Image } from './components/Media/Image';
export type { ImageProps } from './components/Media/Image';
export { Skeleton } from './components/Media/Skeleton';
export type { SkeletonProps } from './components/Media/Skeleton';
export { JsonLd } from './components/Seo/JsonLd';
export type { JsonLdProps } from './components/Seo/JsonLd';
export { Breadcrumbs } from './components/Seo/Breadcrumbs';
export type { BreadcrumbsProps, Crumb } from './components/Seo/Breadcrumbs';
