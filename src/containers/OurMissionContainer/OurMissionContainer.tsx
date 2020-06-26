import React from 'react';
import styles from './OurMissionContainer.module.css';

import Picture from '../../components/Picture';
import OurMissionPicture1 from '../../Images/HomePage/Mission1.jpg';
import Title from '../../components/Title';
// import OurMissionPicture2 from '../../Images/HomePage/Mission2.jpg';

const OurMissionContainer = () => {
  return (
    <>
      <div className={styles.root}>
        <Title
          title="Our Passion is People-Powered."
          description="Villagers in rural areas lack basic life necessities. The barriers to clean water, education, medical care, and opportunity limit them from doing much more than just surviving, and a dream stays just that— a dream. That’s why we believe in their vision and seeing it through."
        />

        <Picture
          src={OurMissionPicture1}
          width="100vw"
          height="65vh"
          mobileHeight="40vh"
        />
      </div>
    </>
  );
};

export default OurMissionContainer;
