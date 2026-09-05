/**
 * Emits a schema.org JSON-LD block. Structured data is how a crawler learns
 * what a page *is* rather than guessing from markup.
 *
 *   <JsonLd data={{ '@context':'https://schema.org', '@type':'SoftwareApplication', name:'Selis' }} />
 */
export interface JsonLdProps {
    data: Record<string, unknown> | Array<Record<string, unknown>>;
    /** Required if the app sets a strict script-src CSP. */
    nonce?: string;
}
export declare function JsonLd({ data, nonce }: JsonLdProps): import("react").JSX.Element;
