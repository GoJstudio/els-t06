import Image from 'next/image';

import { FaPowerOff, FaSolarPanel, FaChargingStation } from "react-icons/fa";

import SolutionCard from './SolutionCard';
import styles from '@/styles/components/solutions/solutions.module.scss';
import stylesCard from '@/styles/components/solutions/solutionCard.module.scss';

const Solutions = () => {
  return (
    <section className={styles.solutions}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Innovative Energy Solutions</h2>
          <p className={styles.desc}>From advanced power systems and solar energy solutions to our EV charging platform, we offer a comprehensive suite of solutions to help you reduce your environmental footprint and achieve your sustainability goals.</p>
        </div>
        {/* headline */}

        <div className={styles.cardContents}>
          <SolutionCard
            title='Power Fusion'
            desc='Log 6 critical AC/DC backup power solutions for power utilities'
          >
            <FaPowerOff className={stylesCard.icon} />
          </SolutionCard>

          <SolutionCard
            title='Solar Energy'
            desc='Solar energy grid-tie or off-grid, an OPEX model'
          >
            <FaSolarPanel className={stylesCard.icon} />
          </SolutionCard>

          <SolutionCard
            title='EV Charger'
            desc='EV Charging Platform and multi-point systems'
          >
            <FaChargingStation className={stylesCard.icon} />
          </SolutionCard>
        </div>
        {/* cardContents */}
      </div>
      {/* container */}      
    </section>
  )
}

export default Solutions