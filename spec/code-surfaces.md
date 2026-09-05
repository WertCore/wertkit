# Code surfaces

wertkit owns the frame and the colours; it does not own the editor. `CodeSurface`
supplies border, focus ring, toolbar and status slots. The `--wk-syntax-*` roles
supply the palette, per theme.

That split is deliberate: pulling CodeMirror into `@wertkit/ui` would force it on
every consumer, including apps that only ever show a static snippet.

## Roles

`--wk-syntax-{keyword,string,number,comment,function,variable,type,operator,punctuation,tag,attribute,invalid}`

## CodeMirror 6

Map the roles once, in the app:

```ts
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

const v = (role: string) => `var(--wk-syntax-${role})`;

export const wertkitHighlight = HighlightStyle.define([
  { tag: [t.keyword, t.controlKeyword, t.moduleKeyword], color: v('keyword') },
  { tag: [t.string, t.special(t.string)], color: v('string') },
  { tag: [t.number, t.bool, t.null], color: v('number') },
  { tag: [t.comment, t.lineComment, t.blockComment], color: v('comment'), fontStyle: 'italic' },
  { tag: [t.function(t.variableName), t.labelName], color: v('function') },
  { tag: [t.variableName, t.propertyName], color: v('variable') },
  { tag: [t.typeName, t.className, t.namespace], color: v('type') },
  { tag: [t.operator, t.operatorKeyword], color: v('operator') },
  { tag: [t.punctuation, t.bracket, t.separator], color: v('punctuation') },
  { tag: [t.tagName], color: v('tag') },
  { tag: [t.attributeName], color: v('attribute') },
  { tag: [t.invalid], color: v('invalid') },
]);

export const wertkitTheme = EditorView.theme({
  '&': { backgroundColor: 'transparent', color: 'var(--wk-syntax-variable)' },
  '.cm-gutters': {
    backgroundColor: 'transparent',
    color: 'var(--wk-fg-subtle)',
    borderRight: '1px solid var(--wk-border)',
  },
  '.cm-activeLine': { backgroundColor: 'var(--wk-bg-subtle)' },
  '.cm-selectionBackground': { backgroundColor: 'var(--wk-accent-subtle)' },
  '.cm-cursor': { borderLeftColor: 'var(--wk-accent)' },
});
```

Because these read CSS custom properties, switching `data-theme` re-colours the
editor with no CodeMirror reconfiguration and no remount.

Mount it inside the frame:

```tsx
<CodeSurface toolbar={<span>request.json</span>} status={<span>{lines} lines</span>}>
  <div ref={editorMount} />
</CodeSurface>
```

Use `CodeBlock` instead when the code is static - it needs no editor at all.
