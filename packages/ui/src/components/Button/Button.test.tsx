import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

// ── `asChild` must survive an EXTERNAL Radix (0.1.1) ─────────────────────────
//
// The package used to bundle its own Radix. Externalising it moved consumers
// onto their own copy, and Radix's Slot is strict about child count:
//
//   !hasSlottable && React.Children.count(children) === 1 && isValidElement(children)
//
// `Children.count` counts the `undefined` from an absent `startIcon` and the
// `false` from `{!loading && endIcon}` exactly like a real element. Button
// always renders three child expressions, so every `<Button asChild>` threw
// "Slot failed to slot onto its children" — with no icons passed at all. The
// bundled older Slot used `Children.toArray`, which drops those, so this only
// appeared once a consumer supplied the Radix copy.
//
// It reached a real app as a blank window: the throw happens during render, so
// nothing mounts. These tests exist because the version that shipped it was
// type-correct, built cleanly, and had no tests at all.

describe('Button asChild', () => {
  it('renders the child element, not a button, with no icons', () => {
    render(
      <Button asChild variant="secondary">
        <a href="/somewhere">Go</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Go' });
    expect(link.tagName).toBe('A');
    // The slot merged onto the anchor rather than wrapping it.
    expect(screen.queryByRole('button')).toBeNull();
    expect(link.className).not.toBe('');
  });

  it('slots onto a child that has children of its own', () => {
    // The exact shape that broke KnockPort: a <label> wrapping an icon, text
    // and a hidden file input.
    render(
      <Button asChild variant="secondary">
        <label data-testid="picker">
          <span>Choose file</span>
          <input type="file" hidden />
        </label>
      </Button>,
    );
    const label = screen.getByTestId('picker');
    expect(label.tagName).toBe('LABEL');
    expect(label.querySelector('input[type="file"]')).not.toBeNull();
    expect(screen.getByText('Choose file')).toBeInTheDocument();
  });

  it('keeps the icons as siblings of the slotted child', () => {
    render(
      <Button asChild startIcon={<span data-testid="start">S</span>} endIcon={<span data-testid="end">E</span>}>
        <a href="/x">Label</a>
      </Button>,
    );
    const link = screen.getByRole('link');
    // `Slottable` puts the surrounding children INSIDE the slotted element —
    // that is the whole reason to use it rather than dropping the icons.
    expect(link).toContainElement(screen.getByTestId('start'));
    expect(link).toContainElement(screen.getByTestId('end'));
    expect(link).toHaveTextContent('Label');
  });

  it('does not put a `type` on a slotted non-button', () => {
    render(
      <Button asChild>
        <a href="/x">Link</a>
      </Button>,
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('type');
  });
});

describe('Button without asChild', () => {
  it('renders a real button, defaulting type to "button"', () => {
    // Not academic: inside a <form>, a missing type submits it.
    render(<Button>Send</Button>);
    const btn = screen.getByRole('button', { name: 'Send' });
    expect(btn.tagName).toBe('BUTTON');
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('renders icons and label together', () => {
    render(
      <Button startIcon={<span data-testid="i">i</span>} endIcon={<span data-testid="e">e</span>}>
        Text
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toContainElement(screen.getByTestId('i'));
    expect(btn).toContainElement(screen.getByTestId('e'));
    expect(btn).toHaveTextContent('Text');
  });

  it('is disabled and marked while loading, and drops the end icon', () => {
    render(
      <Button loading endIcon={<span data-testid="e">e</span>}>
        Saving
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('data-loading', 'true');
    expect(screen.queryByTestId('e')).toBeNull();
  });
});
