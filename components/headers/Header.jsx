import Link from 'next/link';

import { FaYoutube, FaTwitter, FaInstagramSquare, FaBars } from "react-icons/fa";

import Logo from './Logo';
import Sns from './Sns';
import Navigation from './Navigation';

import styles from '@/styles/components/headers/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.menuContents}>
          <div className={styles.menuContact}>
            <Link href="/">
              <p className={styles.email}>customer@lettherebelight.cn</p>
            </Link>
            <Sns />
          </div>
          {/* menuContact */}
          
          <Navigation/>
        </div>
        {/* menuContents */}
        
        <FaBars className={styles.menuBars} />
      </div>
      {/* Container */}
    </header>
  )
}

export default Header