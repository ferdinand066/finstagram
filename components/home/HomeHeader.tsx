import { NextComponentType } from "next";
import styles from '../../styles/components/home/header.module.scss';

const HomeHeader: NextComponentType = () => {
    return (
        <div className={styles.header}>
        <div className={styles.title}>Instagram</div>
        <div className={styles.container}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
      </div>
    );
}

export default HomeHeader;