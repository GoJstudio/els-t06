import Image from 'next/image';

import WorkCard from './WorkCard';
import styles from '@/styles/components/works/works.module.scss';
import stylesCard from '@/styles/components/works/workCard.module.scss';

const Works = ({ works }) => {

  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Latest Works from ELS</h2>
          <p className={styles.desc}>Client success stories that showcase how our solutions have helped businesses achieve their goals. From reduced energy costs to improved operational efficiency, our clients have achieved impressive results.</p>
        </div>
        {/* headline */}

        <div className={styles.cardContents}>
          {works.map((work, idx) => (
            <WorkCard
              key={idx}
              date={work.date}
              title={work.title}
            >
              <Image
                alt='solar energy installation,  andrey j from unsplash'
                src={`/images/${work.picture}`}
                fill
                sizes='100vw'
                className={stylesCard.img}
              />
          </WorkCard>
          ))}
        </div>
        {/* cardContents */}
      </div>
      {/* container */}      
    </section>
  )
}

export default Works