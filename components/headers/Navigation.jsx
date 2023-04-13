import { useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/components//headers/headerNavigation.module.scss';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if(e.target.id === "item" || e.target.id === "sub-menu" ) {
    setOpen(!open);
    }
  }

  // const handleEnter = () => {
  //   setOpen(!open);
  // }

  // const handleLeave = (e) => {
  //   if(e.target.id === "item" || e.target.id === "sub-menu" ) {
  //     setOpen(!open);
  //   }
  // }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li className={styles.navmenu}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.navmenu}>
          <Link href='/about'>About</Link>
        </li>
        
        <li
          id="item"
          className={styles.navmenu}
          onClick={handleClick}
        >Products
          {/* <Link href='/products'>Products</Link> */}
          <ul
            id="sub-menu"
            className={`${styles.sublist} ${open ? styles.open : styles}`}
          >
            <li className={styles.submenu}>
            <Link href='/products/solarpanels'>Solar Panels</Link>
            </li>
            <li>
            <Link href='/products/powersystem'>Power System</Link>
            </li>
          </ul>
        </li>
        <li className={styles.navmenu}>
          <Link href='/solutions'>Solutions</Link>
        </li>
        <li className={styles.navmenu}>
          <Link href='/resources'>Resources</Link>
        </li>
        <li className={styles.navmenu}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar