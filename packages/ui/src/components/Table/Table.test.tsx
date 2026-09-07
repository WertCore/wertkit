import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Table, Tbody, Td, Th, Thead, Tr } from './Table';

function sortableHeader(props: Parameters<typeof Th>[0] = {}) {
  return render(
    <Table caption="Requests">
      <Thead>
        <Tr>
          <Th sortable {...props}>
            Name
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>GET /users</Td>
        </Tr>
      </Tbody>
    </Table>,
  );
}

describe('Th', () => {
  it('renders a plain header cell when not sortable', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
          </Tr>
        </Thead>
      </Table>,
    );
    const th = screen.getByRole('columnheader', { name: 'Name' });
    // An unsortable column must not claim it can sort, and must not put a
    // button in the way of the label.
    expect(th).not.toHaveAttribute('aria-sort');
    expect(th.querySelector('button')).toBeNull();
  });

  it('keeps scope="col" so the header stays associated with its column', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
          </Tr>
        </Thead>
      </Table>,
    );
    expect(screen.getByRole('columnheader', { name: 'Name' })).toHaveAttribute('scope', 'col');
  });

  describe('sortable', () => {
    it('exposes the label as a button', () => {
      sortableHeader();
      // A clickable <th> with no button is a control only a mouse can reach.
      expect(screen.getByRole('button', { name: /Name/ })).toBeTruthy();
    });

    it('announces "none" when sortable but unsorted', () => {
      sortableHeader();
      // Omitting aria-sort entirely would hide that the column CAN sort.
      expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'none');
    });

    it('announces the active direction', () => {
      const { unmount } = sortableHeader({ sortDirection: 'asc' });
      expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'ascending');
      unmount();
      sortableHeader({ sortDirection: 'desc' });
      expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'descending');
    });

    it('announces "none" for a column the table is not sorted by', () => {
      sortableHeader({ sortDirection: null });
      expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'none');
    });

    it('asks for ascending first', () => {
      const onSort = vi.fn();
      sortableHeader({ onSort });
      fireEvent.click(screen.getByRole('button', { name: /Name/ }));
      // Every table would otherwise write this same flip itself.
      expect(onSort).toHaveBeenCalledWith('asc');
    });

    it('flips to descending when already ascending', () => {
      const onSort = vi.fn();
      sortableHeader({ sortDirection: 'asc', onSort });
      fireEvent.click(screen.getByRole('button', { name: /Name/ }));
      expect(onSort).toHaveBeenCalledWith('desc');
    });

    it('returns to ascending from descending', () => {
      const onSort = vi.fn();
      sortableHeader({ sortDirection: 'desc', onSort });
      fireEvent.click(screen.getByRole('button', { name: /Name/ }));
      expect(onSort).toHaveBeenCalledWith('asc');
    });

    it('does not throw when clicked without a handler', () => {
      sortableHeader();
      expect(() => fireEvent.click(screen.getByRole('button', { name: /Name/ }))).not.toThrow();
    });

    it('hides the direction glyph from assistive tech', () => {
      sortableHeader({ sortDirection: 'asc' });
      // aria-sort already carries the state; announcing the arrow repeats it.
      const glyph = screen.getByRole('columnheader').querySelector('[aria-hidden="true"]');
      expect(glyph).not.toBeNull();
      expect(glyph?.getAttribute('data-direction')).toBe('asc');
    });
  });
});

describe('Table', () => {
  it('renders the caption as a real caption element', () => {
    render(
      <Table caption="Requests">
        <Tbody>
          <Tr>
            <Td>x</Td>
          </Tr>
        </Tbody>
      </Table>,
    );
    // A heading placed above the table has no association with it.
    expect(screen.getByRole('table', { name: 'Requests' })).toBeTruthy();
  });

  it('marks a selected row for assistive tech and styling', () => {
    render(
      <Table>
        <Tbody>
          <Tr selected>
            <Td>x</Td>
          </Tr>
        </Tbody>
      </Table>,
    );
    expect(screen.getByRole('row')).toHaveAttribute('data-selected', 'true');
  });
});
