import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";

import styles from '@/styles/components/faqUnits/faqAccordion.module.scss';

const FaqAccordion = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  
  return (
    <div className={styles.faqAccordion}>
      <div className={styles.headline}>
        <h5 className={styles.question}>{ props.question }</h5>
        <div className={styles.icon}>
          <FaChevronCircleDown
            onClick={handleClick}
            className={`${styles.arrow} ${open ? styles.up : styles}`}
          />
        </div>
      </div>
      {/* headline */}

      <div className={`${styles.desc} ${open ? styles.open : styles}`}>
        <hr />
        <p className={styles.answer}>{ props.answer }</p>
      </div>
    </div>
  );
}

export default FaqAccordion