import styles from '@/styles/components/footers/footerCopyright.module.scss';

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <p className={styles.desc}>&copy;2023 ELS Ltd,. All rights reserved.</p>
    </div>
  )
}

export default Copyright