import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('marks the last item as the current page, without being told which', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#a">Collection</BreadcrumbItem>
        <BreadcrumbItem href="#b">Auth</BreadcrumbItem>
        <BreadcrumbItem>Login</BreadcrumbItem>
      </Breadcrumb>,
    );
    // The trail is built from a variable-length path, so requiring every call
    // site to say which item is current is a rule that gets broken.
    expect(screen.getByText('Login')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Auth')).not.toHaveAttribute('aria-current');
  });

  it('renders the current item as text, not a dead link', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#a">Collection</BreadcrumbItem>
        <BreadcrumbItem>Login</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByRole('link', { name: 'Collection' })).toBeTruthy();
    // Linking to where you already are is a control that does nothing.
    expect(screen.queryByRole('link', { name: 'Login' })).toBeNull();
  });

  it('is a nav landmark wrapping an ordered list', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#a">A</BreadcrumbItem>
        <BreadcrumbItem>B</BreadcrumbItem>
      </Breadcrumb>,
    );
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    // The ordered list is how position-in-set and set-size get announced;
    // a row of divs and slashes conveys neither.
    expect(nav.querySelector('ol')).not.toBeNull();
    expect(nav.querySelectorAll('li')).toHaveLength(2);
  });

  it('hides separators from assistive tech', () => {
    const { container } = render(
      <Breadcrumb separator=">">
        <BreadcrumbItem href="#a">A</BreadcrumbItem>
        <BreadcrumbItem>B</BreadcrumbItem>
      </Breadcrumb>,
    );
    const sep = [...container.querySelectorAll('[aria-hidden="true"]')];
    expect(sep.some((n) => n.textContent === '>')).toBe(true);
  });

  it('puts no separator before the first item', () => {
    const { container } = render(
      <Breadcrumb separator="/">
        <BreadcrumbItem href="#a">A</BreadcrumbItem>
        <BreadcrumbItem>B</BreadcrumbItem>
      </Breadcrumb>,
    );
    // A leading slash reads as a path from root, which is a different claim.
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1);
  });

  it('skips nullish children rather than leaving a stray separator', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem href="#a">A</BreadcrumbItem>
        {null}
        {false}
        <BreadcrumbItem>B</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1);
  });

  it('fires onClick for in-app navigation', () => {
    const onClick = vi.fn();
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#a" onClick={onClick}>
          Collection
        </BreadcrumbItem>
        <BreadcrumbItem>Login</BreadcrumbItem>
      </Breadcrumb>,
    );
    fireEvent.click(screen.getByRole('link', { name: 'Collection' }));
    expect(onClick).toHaveBeenCalled();
  });

  describe('collapsing', () => {
    const deep = (
      <>
        <BreadcrumbItem href="#1">One</BreadcrumbItem>
        <BreadcrumbItem href="#2">Two</BreadcrumbItem>
        <BreadcrumbItem href="#3">Three</BreadcrumbItem>
        <BreadcrumbItem href="#4">Four</BreadcrumbItem>
        <BreadcrumbItem>Five</BreadcrumbItem>
      </>
    );

    it('keeps the first and the tail when the trail is too long', () => {
      render(<Breadcrumb maxItems={4}>{deep}</Breadcrumb>);
      // First, because it is the root you want to get back to; tail, because
      // it says where you are. The middle is the part nobody reads.
      expect(screen.getByText('One')).toBeTruthy();
      expect(screen.getByText('Four')).toBeTruthy();
      expect(screen.getByText('Five')).toBeTruthy();
      expect(screen.queryByText('Two')).toBeNull();
    });

    it('expands the full trail from the ellipsis', () => {
      render(<Breadcrumb maxItems={4}>{deep}</Breadcrumb>);
      // Elided must not mean unreachable — otherwise a deep path loses its
      // middle levels entirely.
      fireEvent.click(screen.getByRole('button', { name: 'Show the full path' }));
      expect(screen.getByText('Two')).toBeTruthy();
      expect(screen.getByText('Three')).toBeTruthy();
    });

    it('does not collapse a trail that already fits', () => {
      render(<Breadcrumb maxItems={5}>{deep}</Breadcrumb>);
      expect(screen.queryByRole('button', { name: 'Show the full path' })).toBeNull();
      expect(screen.getByText('Two')).toBeTruthy();
    });

    it('ignores a maxItems too small to leave room for the ellipsis', () => {
      // At 2 the collapsed form would be first + ellipsis + nothing, which
      // hides the current page — worse than not collapsing.
      render(<Breadcrumb maxItems={2}>{deep}</Breadcrumb>);
      expect(screen.getByText('Five')).toBeTruthy();
      expect(screen.queryByRole('button', { name: 'Show the full path' })).toBeNull();
    });

    it('still marks the real last item as current when collapsed', () => {
      render(<Breadcrumb maxItems={4}>{deep}</Breadcrumb>);
      expect(screen.getByText('Five')).toHaveAttribute('aria-current', 'page');
    });
  });
});
