import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CommandItem, CommandPalette } from './CommandPalette';

// The search slot rendered U+2315 as a TEXT CHARACTER:
//
//   <span class="searchIcon" aria-hidden="true">⌕</span>
//
// Unicode names that codepoint TELEPHONE RECORDER. As a glyph it is whatever
// the user's font decides — thin, vertically off, missing altogether where the
// font has no coverage — and it cannot inherit the stroke weight of the icons
// beside it. Every other glyph in this library is an inline SVG for exactly
// that reason; this one was the exception, and nothing said so.

function open(extra: Partial<React.ComponentProps<typeof CommandPalette>> = {}) {
  return render(
    <CommandPalette open onOpenChange={() => {}} query="" onQueryChange={() => {}} {...extra}>
      <CommandItem id="a" onSelect={() => {}}>
        Alpha
      </CommandItem>
    </CommandPalette>,
  );
}

/** The icon slot, found the way the component builds it. */
function iconSlot(): HTMLElement {
  const input = screen.getByRole('combobox');
  const row = input.parentElement;
  if (!row) throw new Error('the search row is gone');
  const slot = row.querySelector('[aria-hidden="true"]');
  if (!(slot instanceof HTMLElement)) throw new Error('no icon slot in the search row');
  return slot;
}

describe('CommandPalette search icon', () => {
  it('draws an SVG, not a font glyph', () => {
    open();
    const slot = iconSlot();
    expect(slot.querySelector('svg'), 'the search icon is not an SVG').not.toBeNull();
    // The specific regression: no stray text in the slot. A font glyph would
    // satisfy "renders something" while looking broken.
    expect(slot.textContent?.trim()).toBe('');
    expect(slot.textContent).not.toContain('⌕');
  });

  it('inherits colour and stroke like the rest of the icon set', () => {
    open();
    const svg = iconSlot().querySelector('svg');
    // `currentColor` is what lets .searchIcon's own colour reach it; a
    // hard-coded stroke would ignore the theme.
    expect(svg?.getAttribute('stroke')).toBe('currentColor');
    // 1em, so the slot's font-size is the icon size (see the module CSS).
    expect(svg?.getAttribute('width')).toBe('1em');
    expect(svg?.getAttribute('height')).toBe('1em');
  });

  it('is hidden from assistive tech — the input carries the accessible name', () => {
    open();
    expect(iconSlot().getAttribute('aria-hidden')).toBe('true');
  });

  it('can be replaced by the app, so a palette can match its own icons', () => {
    open({ searchIcon: <span data-testid="mine">M</span> });
    const slot = iconSlot();
    expect(screen.getByTestId('mine')).toBeTruthy();
    // The default must not render alongside the override.
    expect(slot.querySelector('svg')).toBeNull();
  });
});
