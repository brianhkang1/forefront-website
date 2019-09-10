import React from 'react';
import styles from './OurMissionContainer.module.css';
import Title from '../../components/Title';

const OurMissionContainer = () => {
  return(
    <div className={styles.root}>
      <div style={{paddingTop: '2rem'}}>
        <Title
          title='Our Mission'
        />
      </div>

      <div className={styles.descriptionContainer}>
        <span className={styles.description}>
          Enable every person
        </span>

        <span className={styles.forwardSlash}> / </span>

        <span className={styles.description}>
          Equip leaders
        </span>

        <span className={styles.forwardSlash}> / </span>

        <span className={styles.description}>
          Establish self-sustaining communities
        </span>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.video}>
          <iframe
            title='home page video'
            style={{
              width: '35vw',
              height: '99.75%',
              borderRadius: '20px 0 0 20px'
              // position: "absolute",
              // top: 0,
              // left: 0,
              // border: "thin solid transparent",
            }}
            src={`https://www.youtube.com/embed/VVfv3N4yLyM`}
            frameBorder="0"
            allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          />
        </div>

        <div className={styles.subHeaderContainer}>
          <div className={styles.whoWeAre}>Who We Are</div>
          <div>
            Forefront is a non-profit charity organization randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
          </div>
        </div>
      </div>


    </div>
  )
}

export default OurMissionContainer;