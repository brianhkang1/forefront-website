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
          title="Our Passion"
          description="is people-powered. Many villagers in rural areas lack life necessities. The barriers to clean water, education, medical care, and opportunity limit them from doing much more than just surviving, and a dream stays just that—a dream."
        />

        <Picture
          src={OurMissionPicture1}
          // className={styles.picture}
          // title='Our passion is people-powered.'
          // titleClassName={styles.pictureTitle}
          // description='Many villagers in rural areas lack life necessities. The barriers to clean water, education, medical care, and opportunity limit them from doing much more than just surviving, and a dream stays just that—a dream.'
          // descriptionClassName={styles.pictureDescription}
          width="100vw"
          height="65vh"
          mobileHeight="40vh"
        />

        {/* <div className={styles.textContainer}>
            <div className={styles.dramaticText}>
              Our passion is people-powered.
            </div>
            <div>
              Many villagers in rural areas lack life necessities. The barriers to clean water, education, medical care, and opportunity limit them from doing much more than just surviving, and a dream stays just that—a dream.
            </div>
          </div> */}

        {/* <div
          className={`${styles.container} ${styles.reverseContainerDirection}`}
        >
          <Picture
            src={OurMissionPicture2}
            width="40vw"
            height="100%"
            mobileWidth="95vw"
            mobileHeight="40vh"
          />

          <div className={styles.textContainer}>
            <div>
              That's why we work side by side with locals to provide basic life
              necessities, resources, and training that create{' '}
              <span className={styles.bold}>sustainable</span> change for the
              individual, families, and communities.
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OurMissionContainer;
