import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DiamondMenu, type DiamondItem } from './DiamondMenu';

const ITEMS: DiamondItem[] = [
  { id: 'a', label: '1', title: 'first', href: '#a' },
  { id: 'b', label: '2', title: 'second', href: 'https://example.com/b' },
];

describe('DiamondMenu', () => {
  it('is a named navigation landmark containing one link per item', () => {
    render(<DiamondMenu items={ITEMS} label="Sections" />);
    expect(screen.getByRole('navigation', { name: 'Sections' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('opens only external links in a new tab', () => {
    render(<DiamondMenu items={ITEMS} />);
    const internal = screen.getByTitle('first');
    const external = screen.getByTitle('second');
    expect(internal).not.toHaveAttribute('target');
    expect(external).toHaveAttribute('target', '_blank');
    expect(external).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders an icon when given one', () => {
    const { container } = render(<DiamondMenu items={[{ ...ITEMS[0], icon: '/icon.svg' }]} />);
    expect(container.querySelector('img')).toHaveAttribute('src', '/icon.svg');
  });
});
