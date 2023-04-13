import { FaChevronRight } from "react-icons/fa";

import styles from '@/styles/components/emails/emails.module.scss';

const Emails = () => {
  return (
    <section className={styles.emails}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Get the latest news and offers</h2>
          <p className={styles.desc}>Sign up to receive our latest news, updates, and exclusive offers.</p>
        </div>
        {/* headline */}
      
        <form className={styles.signup}>
          <input
            type='email'
            placeholder='Enter your email here'
          />
          <button>
            <FaChevronRight />
          </button>
        </form>
      </div>
      {/* container */}
    </section>
  )
}

export default Emails