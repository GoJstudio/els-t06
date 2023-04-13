import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { dataHeader } from '@/data/dataHeader';

import styles from '@/styles/components//headers/headerNavigation.module.scss';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = dataHeader;

  const handleMenuMouseEnter = (id) => {
    if (activeMenuItem !== id) {
      setActiveMenuItem(id);
    }
  }

  const handleMenuMouseLeave = () => {
    setActiveMenuItem(null);
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>

        {menuItems.map((menuItem) => (
          <li
          className={styles.navmenu}
          key={menuItem.id}
          onMouseEnter={() => handleMenuMouseEnter(menuItem.id)}
          onMouseLeave={handleMenuMouseLeave}
          >
            {menuItem.subMenu ? (
              menuItem.name
            ) : (
                <Link href={`/${menuItem.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  {menuItem.name}
                </Link>
            )}

            {/* submenu */}
            {menuItem.subMenu && activeMenuItem === menuItem.id && (
              <ul
              className={styles.sublist}
              >
                {menuItem.subMenu.map((subMenuItem) => (
                  <li
                    className={styles.submenu}
                    key={subMenuItem.id}
                  >
                  <Link href={`/${menuItem.name.replace(/\s+/g, '-').toLowerCase()}/${subMenuItem.name.replace(/\s+/g, '-').toLowerCase()}`}>{subMenuItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
            {/* submenu */}
            
          </li>
        ))}

      </ul>
    </nav>
  )
}

export default NavigationBar