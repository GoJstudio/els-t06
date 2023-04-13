import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import { FaChevronRight } from "react-icons/fa";

import { dataProducts } from '@/data/dataProducts';
import styles from '@/styles/components/products/products.module.scss';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftAligned, setIsLeftAligned] = useState(true);
  
  function rotateData() {
    setCurrentIndex((currentIndex + 1) % dataProducts.length);
    
    if (currentIndex === dataProducts.length - 1) {
      setCurrentIndex(0);
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        rotateData();
        setIsLeftAligned(isLeftAligned => !isLeftAligned);
    }, 5000); // Rotate every 5 seconds and change Left and Right layout.
    
    return () => clearInterval(intervalId); // Cleanup function
  }, [currentIndex, dataProducts.length]); // useEffect triggered whenever the value of 'currentIndex' changes.

  return (
    <section className={styles.products}>
      <div
        className={styles.container}
        style = {{flexDirection: isLeftAligned ? 'row' : 'row-reverse'}}
      >
        <div className={styles.textContent}>
          <h4 className={styles.title}>{dataProducts[currentIndex].title}</h4>
          <p className={styles.display}>{dataProducts[currentIndex].display}</p>
          <p className={styles.desc}>{dataProducts[currentIndex].desc}</p>

          <div className={styles.btnWrapper}>
            <button className={styles.btnIcon}>
              Learn more
              <FaChevronRight />
            </button>
          </div>
        </div>        
        {/* textContent */}

        <div className={styles.imageContent}>
          <Image
            alt='Flash, marius-masalar-unsplash'
            src={dataProducts[currentIndex].image}
            fill
            sizes='100vw'
            className={styles.img}
          />
        </div>
        {/* imageContent */}
      </div>
      {/* container */}
    </section>
  )
}

export default Products