import Link from 'next/link';

import { FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa";

import styles from '@/styles/components/footers/footerSns.module.scss';

const Sns = () => {
  return (
    <div className={styles.sns}>
      <Link href="/aaa" className={styles.link}>
        <FaYoutube className={styles.icon} />
      </Link>
      <Link href="/bbb" className={styles.link}>
        <FaTwitter className={styles.icon} />
      </Link>
      <Link href="/ccc" className={styles.link}>
        <FaInstagramSquare className={styles.icon} />
      </Link>
    </div>
  )
}

export default Sns