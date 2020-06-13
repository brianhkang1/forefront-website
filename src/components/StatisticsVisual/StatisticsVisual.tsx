import React from 'react';
import styles from './StatisticsVisual.module.css';
import PictureFilter from '../PictureFilter';
// import Spacer from '../Spacer';

const StatisticsVisual = () => {
  return (
    <>
      {/* <Spacer height='3rem'/> */}

      <div className={styles.root}>
        <PictureFilter>
          <div className={styles.container}>
            <div className={styles.title}> Your Impact: </div>
            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>925</div>
              <div>Unique Donors</div>
            </div>

            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>$625,000</div>
              <div>Total Support</div>
            </div>

            <div className={`${styles.statsItem} wow zoomIn`}>
              <div className={styles.numberCounterItem}>
                20,230 ft<sup>2</sup>
              </div>
              <div>School Building in Progress</div>
            </div>
          </div>
        </PictureFilter>
      </div>

      {/* <Spacer height='3rem'/> */}
    </>
  );
};

export default StatisticsVisual;
