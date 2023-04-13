import Logo from './Logo';
import Sns from './Sns';
import Navigation from './Navigation';
import Copyright from './Copyright';

import styles from '@/styles/components/footers/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upperContents}>
          <div className={styles.leftContents}>
            <Logo />
            <Sns />
          </div>

          <div className={styles.rightContents}>
            <Navigation />
          </div>
        </div>
        {/* upperContents */}

        <div className={styles.lowerContents}>
          <Copyright />
        </div>
      </div>
      {/* container */}
    </footer>
  )
}

export default Footer