import styles from './DiamondMenu.module.scss';

export interface DiamondItem {
  /** What the diamond shows (the number in the original). */
  label: string;
  /** Tooltip, as the original's `title` attribute. */
  title: string;
  href?: string;
  /** Optional icon image; the original had an empty slot for one. */
  icon?: string;
}

interface DiamondMenuProps {
  items: readonly DiamondItem[];
  /** Accessible name of the menu. */
  label?: string;
}

export function DiamondMenu({ items, label = 'Diamond menu' }: DiamondMenuProps) {
  return (
    <nav className={styles.wrapper} aria-label={label}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.panel} key={item.label}>
            <div className={styles.shift}>
              <a className={styles.trigger} href={item.href ?? '#'} target="_blank" rel="noopener noreferrer" title={item.title}>
                <span className={styles.title}>{item.label}</span>
                <span className={`${styles.edge} ${styles.left}`} />
                <span className={`${styles.edge} ${styles.right}`} />
                <span className={styles.surface}>{item.icon && <img src={item.icon} alt="" />}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
