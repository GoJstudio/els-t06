import FaqAccordion from '../faqUnits/FaqAccordion'

import { dataFaqs } from '@/data/dataFaqs';
import styles from '@/styles/components/faqs/faqs.module.scss';

const Faqs = () => {
  return (
    <section className={styles.faqs}>
      <hr />
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.desc}>Our FAQ section addresses the most common questions and concerns that our customers have about our solutions and services. We provide clear and concise answers to help customers make informed decisions.</p>
        </div>
        {/* headline */}

        <div className={styles.faqsContainer}>
          {dataFaqs.map((faq) => 
            <FaqAccordion
              key={faq.idx}
              question={faq.question}
              answer={faq.answer}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Faqs