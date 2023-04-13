import Link from 'next/link';

import styles from '@/styles/components/footers/footerLogo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.link}>
        <h3 className={styles.name}>ELS</h3>
        <h5 className={styles.slogan}>Let there be light</h5>
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