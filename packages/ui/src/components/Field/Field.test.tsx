import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Field } from './Field';
import { Input } from '../Input/Input';

function labelledField(props: Partial<Parameters<typeof Field>[0]> = {}) {
  return render(
    <Field label="Request URL" hint="Scheme is required." {...props}>
      <Input />
    </Field>,
  );
}

function labelElement(): HTMLLabelElement {
  const label = document.querySelector('label');
  if (!label) throw new Error('expected a label element');
  return label;
}

describe('Field', () => {
  it('points its label at the control', () => {
    labelledField();
    // Assert the wiring, not the text: an unassociated label reads identically
    // on screen and names nothing.
    expect(labelElement()).toHaveAttribute('for', screen.getByLabelText('Request URL').id);
  });

  it('keeps the accessible name when the label is hidden', () => {
    labelledField({ labelHidden: true });
    // getByLabelText only resolves through a real label/for pair, so this fails
    // if hiding the label costs the control its name. That is the whole point
    // of the prop: the pixels go, the announcement stays.
    expect(screen.getByLabelText('Request URL')).toBeInTheDocument();
  });

  it('adds a hiding class only when asked', () => {
    const { unmount } = labelledField();
    const plain = labelElement().className;
    unmount();

    labelledField({ labelHidden: true });
    // happy-dom does not load the CSS modules, so the clip itself cannot be
    // asserted here - only that the modifier class is wired up for it. The
    // visual check is the kitchen sink.
    expect(labelElement().className).not.toBe(plain);
  });

  it('keeps the required marker inside the label so it cannot orphan', () => {
    labelledField({ labelHidden: true, required: true });
    const marker = document.querySelector('[aria-hidden="true"]');
    expect(marker).toBeInTheDocument();
    // The marker is a child of the label, so the clip covers it too. Asserting
    // containment is the property that guarantees no stray "*" is left beside
    // an unlabelled control.
    expect(labelElement()).toContainElement(marker as HTMLElement);
  });

  it('prefers the error over the hint and describes the control with it', () => {
    labelledField({ error: 'Must be an absolute URL.' });
    const input = screen.getByLabelText('Request URL');
    expect(screen.getByRole('alert')).toHaveTextContent('Must be an absolute URL.');
    expect(input).toHaveAccessibleDescription('Must be an absolute URL.');
    expect(screen.queryByText('Scheme is required.')).toBeNull();
  });

  it('describes the control with the hint when there is no error', () => {
    labelledField();
    expect(screen.getByLabelText('Request URL')).toHaveAccessibleDescription(
      'Scheme is required.',
    );
  });

  it('renders no label element when there is no label', () => {
    render(
      <Field>
        <Input aria-label="Unlabelled" />
      </Field>,
    );
    expect(document.querySelector('label')).toBeNull();
  });
});
