import Link from 'next/link';

import styles from '@/styles/components/headers/headerLogo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.link}>
        <h3 className={styles.name}>ELS</h3>
        <div className={styles.initial}>
          <p><strong>E</strong>nergy</p>
          <p><strong>L</strong>ighting</p>
          <p><strong>S</strong>ervice</p>
        </div>
      </Link>
    </div>
  )
}

export default Logo