import { fireEvent, render, screen } from '@testing-library/react';
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

// ── The pointer moves the highlight (KP/wertkit) ────────────────────────────
//
// `CommandItem` had `onMouseDown` and nothing else, and the stylesheet had no
// `:hover` rule — so moving the mouse across the list did nothing at all. The
// item under the cursor looked no different from any other, and Enter ran
// whatever the keyboard had last selected somewhere else entirely.
//
// Combobox already followed the pointer; this is the palette catching up, and
// it shares ONE highlight rather than adding a second hover style — two
// candidates on screen at once is the bug in a different costume.

describe('pointer and keyboard share one highlight', () => {
  function threeItems() {
    return render(
      <CommandPalette open onOpenChange={() => {}} query="" onQueryChange={() => {}}>
        <CommandItem id="a" onSelect={() => {}}>Alpha</CommandItem>
        <CommandItem id="b" onSelect={() => {}}>Beta</CommandItem>
        <CommandItem id="c" onSelect={() => {}}>Gamma</CommandItem>
      </CommandPalette>,
    );
  }
  const active = () =>
    screen.getAllByRole('option').find((o) => o.getAttribute('data-active') === 'true')?.textContent;

  it('starts on the first item', () => {
    threeItems();
    expect(active()).toBe('Alpha');
  });

  it('follows the pointer onto another item', () => {
    threeItems();
    fireEvent.mouseMove(screen.getByText('Gamma'));
    expect(active()).toBe('Gamma');
  });

  it('marks exactly ONE item at a time', () => {
    threeItems();
    fireEvent.mouseMove(screen.getByText('Beta'));
    const marked = screen
      .getAllByRole('option')
      .filter((o) => o.getAttribute('data-active') === 'true');
    expect(marked).toHaveLength(1);
  });

  it('keeps aria-selected in step, so a screen reader agrees with the eye', () => {
    threeItems();
    fireEvent.mouseMove(screen.getByText('Gamma'));
    const gamma = screen.getAllByRole('option').find((o) => o.textContent === 'Gamma');
    expect(gamma?.getAttribute('aria-selected')).toBe('true');
  });

  it('hands the highlight back to the keyboard afterwards', () => {
    threeItems();
    fireEvent.mouseMove(screen.getByText('Gamma'));
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' });
    // From Gamma, down wraps to Alpha — the keyboard continues from where the
    // pointer left it rather than from its own stale index.
    expect(active()).toBe('Alpha');
  });
});
