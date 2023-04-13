import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaCircle } from "react-icons/fa";

import { dataHero } from '@/data/dataHero';

import styles from '@/styles/components/heros/hero.module.scss';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function rotateData() {
    setCurrentIndex((currentIndex + 1) % dataHero.length);
    
    if (currentIndex === dataHero.length - 1) {
      setCurrentIndex(0);
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        rotateData();
    }, 5000); // Rotate every 5 seconds
    
    return () => clearInterval(intervalId); // Cleanup function
  }, [currentIndex]); // useEffect triggered whenever the value of 'currentIndex' changes.

  // const scaleImg = {
  //   begin: {
  //     opacity: 0.8
  //   },
  //   end: {
  //     opacity: 1,
  //     transition: {
  //       duration: 7,
  //       repeat: Infinity
  //     }
  //   }
  // }

  return (
    <section className={styles.hero}>

      <div className={styles.imageContent}>
        <Image   
          alt='earth night, nasa from unsplash'
          src={dataHero[currentIndex].image}
          quality={100}
          fill
          sizes='100vw'
          className={styles.heroImg}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.textContents}>
          <h1 className={styles.title}>
            <p>{dataHero[currentIndex].upperTitle}</p>
            {dataHero[currentIndex].lowerTitle}
          </h1>
          <p className={styles.desc}>{dataHero[currentIndex].desc}</p>
        </div>
        {/* textContent */}

        <div className={styles.navigation}>
          <FaCircle className={styles.icon} color='#9D9D9D' />
          <FaCircle className={styles.icon} color='#FFFFFF' />
          <FaCircle className={styles.icon} color='#9D9D9D'  />
        </div>
      </div>
      {/* container */}
    </section>
  )
}

export default Hero

