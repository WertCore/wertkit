import { InputProps } from '../Input/Input';
export interface ComboboxSuggestion {
    /** Shown in the list. */
    label: string;
    /** Committed on accept. Defaults to label. */
    value?: string;
    /** Right-aligned annotation, e.g. a type or source. */
    hint?: string;
}
export interface ComboboxProps extends Omit<InputProps, 'value' | 'onChange' | 'children'> {
    value: string;
    onValueChange: (value: string) => void;
    /** Recomputed per keystroke. Return [] to close the list. */
    suggestions: (value: string) => ComboboxSuggestion[];
    /** Fires on Enter when nothing is highlighted. */
    onEnter?: () => void;
    emptyMessage?: string;
}
/**
 * Text input with an inline suggestion list - variable completion in a URL bar,
 * header-name hints, and similar.
 *
 * Implements the ARIA 1.2 combobox pattern: the input keeps DOM focus and owns
 * aria-expanded / aria-activedescendant while the listbox is a sibling, so a
 * screen reader announces the highlighted option without focus ever leaving the
 * field. Tab and Enter accept, arrows move, Escape closes.
 */
export declare function Combobox({ value, onValueChange, suggestions, onEnter, emptyMessage, mono, className, onKeyDown, onBlur, ...rest }: ComboboxProps): import("react").JSX.Element;
