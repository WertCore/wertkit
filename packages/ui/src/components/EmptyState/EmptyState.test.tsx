import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmptyState } from './EmptyState';

// The component's own doc comment said "rendered as a real heading + paragraph
// rather than styled divs, so the reason a region is empty is announced and
// indexed" — while rendering a `<p>`. The claim was the whole reason to reach
// for the component over a div, and nothing checked it.

describe('EmptyState', () => {
  it('renders the title as a real heading, not a paragraph', () => {
    render(<EmptyState title="No history yet" />);
    // getByRole, not getByText: the point is that assistive tech and the
    // document outline see a heading, which text content alone does not prove.
    const heading = screen.getByRole('heading', { name: 'No history yet' });
    expect(heading.tagName).toBe('H2');
  });

  it('honours an explicit heading level', () => {
    // An empty state filling a whole page is an h1; one inside a card is an h3.
    // A fixed level would make the outline wrong everywhere but one place.
    render(<EmptyState title="Nothing here" headingLevel={3} />);
    expect(screen.getByRole('heading', { name: 'Nothing here' }).tagName).toBe('H3');
  });

  it('renders the description as a paragraph beside it', () => {
    render(<EmptyState title="Empty" description="Add something to see it here." />);
    const p = screen.getByText('Add something to see it here.');
    expect(p.tagName).toBe('P');
  });

  it('hides the icon from assistive tech', () => {
    const { container } = render(
      <EmptyState icon={<svg data-testid="icon" />} title="Empty" />,
    );
    // Decorative: the title already says what is going on, so announcing the
    // icon would just repeat it.
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull();
  });

  it('renders an action when given one', () => {
    render(<EmptyState title="Empty" action={<button type="button">Create one</button>} />);
    expect(screen.getByRole('button', { name: 'Create one' })).toBeTruthy();
  });
});
