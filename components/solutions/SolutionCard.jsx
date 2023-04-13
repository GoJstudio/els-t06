import { FaChevronRight } from "react-icons/fa";

import stylesCard from '@/styles/components/solutions/solutionCard.module.scss';

const SolutionCard = ({ title, desc, children }) => {
  return (
    <div className={stylesCard.iconCard}>
      <div className={stylesCard.cardContents}>
        <div className={stylesCard.iconWrapper}>
          { children }
        </div>
        
        <div className={stylesCard.cardText}>
          <h4 className={stylesCard.title}>{ title }</h4>
          <p className={stylesCard.desc}>{ desc }</p>
        </div>
      </div>

      <div className={stylesCard.btnWrapper}>
        <button className={stylesCard.btnIcon}>
          Learn more
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default SolutionCard