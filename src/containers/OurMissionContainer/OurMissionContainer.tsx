import React from 'react';
import styles from './OurMissionContainer.module.css';
import Picture from '../../components/Picture';

import OurMissionPicture1 from "../../Images/HomePage/Mission1.jpg";
import OurMissionPicture2 from "../../Images/HomePage/Mission2.jpg";

const OurMissionContainer = () => {
  return(
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <Picture
            src={OurMissionPicture1}
            width='40vw'
            height='100%'
          />

          <div className={styles.textContainer}>
            We are more than a charity. We are people-powered.
            To become a changemaker starts with an opportunity.
            That's why we work side by side with locals to provide basic
            life necessities, resources, and training that create
            sustainable change for the individual, families,
            and communities. 
          </div>
        </div>

        <div className={styles.container}>       
          <div className={styles.textContainer}>
            With just one opportunity, imagine how many leaders 
            will be raised and communities changed. So we believe
            in their vision and stand with all the changemakers to create
            a future for what it can be.
          </div>

          <Picture
            src={OurMissionPicture2}
            width='40vw'
            height='100%'
          />
        </div>
      </div>
    </>
  )
}

export default OurMissionContainer;