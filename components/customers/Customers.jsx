import Image from 'next/image';

import Logos from '@/public/images/customer-logos.png';
import styles from '@/styles/components/customers/customers.module.scss';

const Customers = () => {
  return (
    <section className={styles.customers}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>More than 40 giants choose ELS</h2>
          <p className={styles.desc}>Trusted by industry leaders: Our solutions are trusted by more than 40 industry leaders, including Fortune 500 companies, government agencies, and leading healthcare and hospitality organizations. We are proud to partner with these giants and help them achieve their energy and sustainability goals.</p>
        </div>
        {/* headline */}
      
        <div className={styles.imageContent}>
          <Image
            alt='Flash, marius-masalar-unsplash'
            src={Logos}
            fill
            sizes='100vw'
            className={styles.heroImg}
          />
        </div>
        {/* imageContent */}
      </div>
      {/* container */}
    </section>
  )
}

export default Customers