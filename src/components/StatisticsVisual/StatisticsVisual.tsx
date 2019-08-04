import React from 'react';
import styles from './StatisticsVisual.module.css'

const StatisticsVisual = () => {
  return (
    <>
      <div className={styles.whiteDivider}/>
      
      <div className={styles.root}>
        <div className={styles.title}> Our Impact: </div>
        <div className={`${styles.statsItem} wow zoomIn`}>
          <div className={styles.numberCounterItem}>50,000+</div> 
          <div>villagers with accessible water</div>
        </div>

        <div className={`${styles.statsItem} wow zoomIn`}>
          <div className={styles.numberCounterItem}>2500+</div> 
          <div>soaps distributed</div>
        </div>

        <div className={`${styles.statsItem} wow zoomIn`}>
          <div className={styles.numberCounterItem}>19,000 sq ft</div> 
          <div>school building in progress</div>
        </div>
      </div>

      <div className={styles.whiteDivider}/>
    </>
  )
}

export default StatisticsVisual;