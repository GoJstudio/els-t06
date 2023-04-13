import Image from 'next/image';

import { FaChevronRight } from "react-icons/fa";

import Solar from '@/public/images/anders-j-unsplash.jpg';
import DataCenter from '@/public/images/jordan-harrison-unsplash.jpg';
import Fruits from '@/public/images/andrey-metelev-unsplash.jpg';

import stylesCard from '@/styles/components/works/workCard.module.scss';

const WorkCard = ({ date, title, children }) => {
  return (
    <div className={stylesCard.workCard}>
      <div className={stylesCard.imageWrapper}>
        { children }
        {/* <Image
          alt='solar energy installation,  andrey j from unsplash'
          src={Solar}
          fill
          sizes='100vw'
          className={stylesCard.img}
        /> */}
      </div>
      
      <div className={stylesCard.cardText}>
        <p className={stylesCard.date}>{ date }</p>
        <h4 className={stylesCard.title}>{ title }</h4>
        <div className={stylesCard.btnWrapper}>
          <button className={stylesCard.btnIcon}>
            Read more
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard