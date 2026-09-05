import { ReactNode } from 'react';
export interface KeyValuePair {
    id: string;
    key: string;
    value: string;
    /** Unchecked rows stay in the list but are excluded by the caller. */
    enabled?: boolean;
}
export interface KeyValueEditorProps {
    rows: KeyValuePair[];
    onChange: (rows: KeyValuePair[]) => void;
    keyLabel?: string;
    valueLabel?: string;
    keyPlaceholder?: string;
    valuePlaceholder?: string;
    /** Suggestions for the key column - header names, known variables. */
    onNewRowId?: () => string;
    /** Hide the enable/disable column when every row always applies. */
    selectable?: boolean;
    addLabel?: string;
    emptyMessage?: ReactNode;
    /** Values are secrets: render them masked. */
    maskValues?: boolean;
    className?: string;
}
/**
 * Editable key/value list - headers, query params, environment variables,
 * form fields.
 *
 * Each column is a real labelled input (the label is visually hidden per row),
 * so a screen reader announces "Header name, row 3" rather than an unlabelled
 * textbox. Rows are keyed by a caller-supplied id, never by index, so
 * reordering or removing a row does not shuffle focus into the wrong field.
 */
export declare function KeyValueEditor({ rows, onChange, keyLabel, valueLabel, keyPlaceholder, valuePlaceholder, onNewRowId, selectable, addLabel, emptyMessage, maskValues, className, }: KeyValueEditorProps): import("react").JSX.Element;
