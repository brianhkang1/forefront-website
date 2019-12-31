import React from 'react';
import styles from './StatisticsVisual.module.css'
import PictureFilter from '../PictureFilter';
import Spacer from '../Spacer';

const StatisticsVisual = () => {
  return (
    <>
      <Spacer height='0.5rem'/>
      
      <div className={styles.root}>
        <PictureFilter>
          <div className={styles.container}>
            <div className={styles.title}> Your Impact: </div>
            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>925</div> 
              <div>unique donors</div>
            </div>

            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>$625,000</div> 
              <div>total support</div>
            </div>

            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>20,230 sq ft</div> 
              <div>school building in progress</div>
            </div>
          </div>
        </PictureFilter>
      </div>

      <Spacer height='0.5rem'/>
    </>
  )
}

export default StatisticsVisual;