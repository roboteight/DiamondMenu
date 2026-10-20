import { DiamondMenu, type DiamondItem } from './DiamondMenu';

const ITEMS: readonly DiamondItem[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: `item-${n}`,
  label: String(n),
  title: `title ${n}`,
  href: `#item-${n}`,
}));

export default function App() {
  return (
    <main>
      <DiamondMenu items={ITEMS} />
    </main>
  );
}
