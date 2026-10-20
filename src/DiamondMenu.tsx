import styles from './DiamondMenu.module.scss';

export interface DiamondItem {
  /** Stable identity, used as the React key. */
  id: string;
  /** What the diamond shows (the number in the original). */
  label: string;
  /** Tooltip, as the original's `title` attribute. */
  title: string;
  href: string;
  /** Optional icon image; the original had an empty slot for one. */
  icon?: string;
}

interface DiamondMenuProps {
  items: readonly DiamondItem[];
  /** Accessible name of the menu. */
  label?: string;
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

export function DiamondMenu({ items, label = 'Diamond menu' }: DiamondMenuProps) {
  return (
    <nav aria-label={label}>
      <ul className={styles.list}>
        {items.map((item) => {
          // only links that leave the site open a new tab
          const external = isExternal(item.href);
          return (
            <li className={styles.panel} key={item.id}>
              <div className={styles.shift}>
                <a
                  className={styles.trigger}
                  href={item.href}
                  title={item.title}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <span className={styles.title}>{item.label}</span>
                  <span className={`${styles.edge} ${styles.left}`} />
                  <span className={`${styles.edge} ${styles.right}`} />
                  <span className={styles.surface}>
                    {item.icon && <img className={styles.icon} src={item.icon} alt="" />}
                  </span>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
