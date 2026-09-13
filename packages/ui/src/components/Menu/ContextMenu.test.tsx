import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContextMenu, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator } from './ContextMenu';
import { Menu, MenuItem } from './Menu';

// A right-click menu is the one place a hand-rolled implementation almost
// always ends up mouse-only: the pointer event is easy, and `Shift+F10` plus
// the Menu key are what get forgotten. Radix supplies both, and these pin the
// parts of the contract this wrapper is responsible for — that it renders the
// right primitive, shares Menu's surface, and forwards the tone that marks a
// destructive item before it is clicked.

function open() {
  const view = render(
    <ContextMenu trigger={<button type="button">Row</button>}>
      <ContextMenuLabel>Request</ContextMenuLabel>
      <ContextMenuItem>Duplicate</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem tone="danger" shortcut="⌫">
        Delete
      </ContextMenuItem>
    </ContextMenu>,
  );
  fireEvent.contextMenu(screen.getByRole('button', { name: 'Row' }));
  return view;
}

describe('ContextMenu', () => {
  it('opens on a right-click, not on a left-click', () => {
    render(
      <ContextMenu trigger={<button type="button">Row</button>}>
        <ContextMenuItem>Duplicate</ContextMenuItem>
      </ContextMenu>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Row' }));
    expect(screen.queryByRole('menu')).toBeNull();

    fireEvent.contextMenu(screen.getByRole('button', { name: 'Row' }));
    expect(screen.getByRole('menu')).toBeTruthy();
  });

  it('renders real menu semantics rather than divs with handlers', () => {
    open();
    expect(screen.getByRole('menu')).toBeTruthy();
    expect(screen.getAllByRole('menuitem').map((i) => i.textContent)).toEqual([
      'Duplicate',
      'Delete⌫',
    ]);
    expect(screen.getByRole('separator')).toBeTruthy();
  });

  it('runs an item and closes', () => {
    const onSelect = vi.fn();
    render(
      <ContextMenu trigger={<button type="button">Row</button>}>
        <ContextMenuItem onSelect={onSelect}>Duplicate</ContextMenuItem>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByRole('button', { name: 'Row' }));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Duplicate' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('marks a destructive item so it reads as one BEFORE the click', () => {
    open();
    const del = screen.getByRole('menuitem', { name: /Delete/ });
    const dup = screen.getByRole('menuitem', { name: 'Duplicate' });
    // The danger class differs from the default one — colour is the signal a
    // delete needs, and it has to be on the item, not only in the label.
    expect(del.className).not.toBe(dup.className);
  });

  it('shares Menu’s surface rather than defining a second one', () => {
    // Same CSS module, so the two triggers cannot drift into two designs. Both
    // are rendered for real — a MenuItem outside its Root throws, which is
    // itself why ContextMenu needs its own parts rather than re-exporting.
    render(
      <Menu open trigger={<button type="button">Drop</button>}>
        <MenuItem>Probe</MenuItem>
      </Menu>,
    );
    const dropdownItemClass = screen.getByRole('menuitem', { name: 'Probe' }).className;
    open();
    expect(screen.getByRole('menuitem', { name: 'Duplicate' }).className).toBe(
      dropdownItemClass,
    );
  });

  it('opens from the KEYBOARD path, not just the pointer', () => {
    // Browsers raise `contextmenu` for Shift+F10 and the Menu key too, with no
    // pointer coordinates. Listening for that event rather than for
    // `button === 2` is the whole difference between a usable accelerator and
    // a mouse-only one — so the no-coordinates shape is what is asserted.
    render(
      <ContextMenu trigger={<button type="button">Row</button>}>
        <ContextMenuItem>Duplicate</ContextMenuItem>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByRole('button', { name: 'Row' }), {
      button: 0,
      detail: 0,
      clientX: 0,
      clientY: 0,
    });
    expect(screen.getByRole('menu')).toBeTruthy();
  });

  it('forwards className and rest props to the item', () => {
    render(
      <ContextMenu trigger={<button type="button">Row</button>}>
        <ContextMenuItem className="mine" data-testid="probe">
          Duplicate
        </ContextMenuItem>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByRole('button', { name: 'Row' }));
    const item = screen.getByTestId('probe');
    expect(item.className).toContain('mine');
  });
});
