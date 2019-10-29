import React from 'react';
import styles from './OurMissionContainer.module.css';
import { classNames } from '../../util';
import Title from '../../components/Title';

const OurMissionContainer = () => {
  return(
    <div className={styles.root}>

      <div className={styles.textContainer}>
        <div className={styles.definitionContainer}>
          <div className={styles.forefront}>FOREFRONT</div>
          <div className={styles.grayText}>
            <span>/ˈfɔrˌfrʌnt/</span>
            <span className={styles.italic}>Noun</span>
          </div>
          <div className={classNames(styles.grayText, styles.definition)}>
            A non-profit organization that facilitates sustainable, 
            local projects in India and
            around the world to increase access to clean water,
            education, health care, and leadership training.
          </div>
        </div>
        <div className={styles.missionsContainer}>
          <div className={styles.missionTitle}>OUR MISSION</div>
          <div className={styles.mission}>Enable every person</div>
          <div className={styles.mission}>Equip leaders</div>
          <div className={styles.mission}>Establish sustainable communities</div>
        </div>
      </div>
     
        <div className={styles.video}>
          <iframe
            title='home page video'
            style={{
              width: '60vw',
              height: '50vh',
              borderRadius: '10px'
            }}
            src={`https://www.youtube.com/embed/VVfv3N4yLyM`}
            frameBorder="0"
            allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          />
        </div>
    </div>
  )
}

export default OurMissionContainer;