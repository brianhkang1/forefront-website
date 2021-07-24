import React from 'react';
import styles from './StatisticsVisual.module.css';
import PictureFilter from '../PictureFilter';

const StatisticsVisual = () => {
  return (
    <>
      <div className={styles.root}>
        <PictureFilter>
          <div className={styles.container}>
            <div className={styles.title}> Your Impact: </div>
            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>1000+</div>
              <div>Unique Donors</div>
            </div>

            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>$855,628</div>
              <div>Total Support</div>
            </div>

            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>70+</div>
              <div>Builders (Monthly Donors)</div>
            </div>
          </div>
        </PictureFilter>
      </div>
    </>
  );
};

export default StatisticsVisual;
