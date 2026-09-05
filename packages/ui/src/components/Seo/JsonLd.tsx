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

export function JsonLd({ data, nonce }: JsonLdProps) {
  // "<" is escaped so a string in the payload cannot close the script tag.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: json }} />
  );
}
