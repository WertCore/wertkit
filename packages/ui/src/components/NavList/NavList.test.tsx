import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NavItem, NavList } from './NavList';

// Same `Slottable` rule as Button, and the same reason for existing: the
// optional icon and badge mean Slot always saw three children, so
// `<NavItem asChild>` threw regardless of whether either was passed.

describe('NavItem asChild', () => {
  it('slots onto the child with no icon or badge', () => {
    render(
      <NavList aria-label="Main">
        <NavItem asChild>
          <a href="/settings">Settings</a>
        </NavItem>
      </NavList>,
    );
    const link = screen.getByRole('link', { name: 'Settings' });
    expect(link.tagName).toBe('A');
    // The consumer's anchor REPLACES the control rather than nesting inside it
    // — a link inside a button is not focusable as a link and is what asChild
    // exists to avoid.
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('carries the icon and badge inside the slotted element', () => {
    render(
      <NavList aria-label="Main">
        <NavItem
          asChild
          icon={<span data-testid="icon">i</span>}
          badge={<span data-testid="badge">3</span>}
        >
          <a href="/inbox">Inbox</a>
        </NavItem>
      </NavList>,
    );
    const link = screen.getByRole('link');
    expect(link).toContainElement(screen.getByTestId('icon'));
    expect(link).toContainElement(screen.getByTestId('badge'));
    expect(link).toHaveTextContent('Inbox');
  });

  it('announces the current item on the slotted element', () => {
    render(
      <NavList aria-label="Main">
        <NavItem asChild current>
          <a href="/now">Now</a>
        </NavItem>
      </NavList>,
    );
    // State announced, not left to colour alone — and it has to land on the
    // element the user actually reaches.
    expect(screen.getByRole('link')).toHaveAttribute('aria-current', 'page');
  });
});

describe('NavItem without asChild', () => {
  it('renders a button and keeps the label wrapper', () => {
    render(
      <NavList aria-label="Main">
        <NavItem icon={<span data-testid="icon">i</span>}>Dashboard</NavItem>
      </NavList>,
    );
    const btn = screen.getByRole('button', { name: /Dashboard/ });
    expect(btn).toHaveAttribute('type', 'button');
    expect(btn).toContainElement(screen.getByTestId('icon'));
  });

  it('is a list, so assistive tech can count and skip it', () => {
    render(
      <NavList aria-label="Main">
        <NavItem>One</NavItem>
        <NavItem>Two</NavItem>
      </NavList>,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
