import Link from 'next/link';

import { dataFooter } from '@/data/dataFooter';

import styles from '@/styles/components/footers/footerNavigation.module.scss';

const Navigation = () => {
  const menuList = dataFooter;

  return (
    menuList.map((menu) => (
      <div key={menu[0]} className={styles.navigation}>
        <h6 className={styles.menu}>{menu[0]}</h6>
        <ul className={styles.list}>
          {menu[1].map((item) => (
            <li key={item} className={styles.item}>
              <Link href={`/${menu[0].replace(/\s+/g, '-').toLowerCase()}/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))
  )
}

export default Navigation