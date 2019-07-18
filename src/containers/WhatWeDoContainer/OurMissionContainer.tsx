import React from 'react';
import styles from './OurMissionContainer.module.css';
import TextLoop from "react-text-loop";

const OurMissionContainer = () => {
  return(
    <div className={styles.root}>
      <div className={`${styles.titleContainer} wow fadeIn`}>
        <div className={styles.title}>OUR MISSION</div>
      </div>

      <div className={`${styles.descriptionContainer} wow fadeIn`}>
        <TextLoop 
          children={["Enable every person", "Equip leaders", "Establish self-sustaining communities" ]}
          className={styles.description}
          interval={3000}
        />
      </div>

      {/* <div>
        <div className={styles.button}>Learn more</div>
      </div> */}
    </div>
  )
}

export default OurMissionContainer;