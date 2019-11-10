import React from 'react';
import styles from './OurMissionContainer.module.css';
import { classNames } from '../../util';
import Title from '../../components/Title';

const OurMissionContainer = () => {
  return(
    <div className={styles.root}>

      <Title title="Who We Are"/>
      
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

        <div className={styles.video}>
          <iframe
            title='home page video'
            style={{
              width: '45vw',
              height: '40vh',
              borderRadius: '10px'
            }}
            src={`https://www.youtube.com/embed/VVfv3N4yLyM`}
            frameBorder="0"
            allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          />
        </div>
      </div>
     
        <div className={styles.missionsContainer}>
          <div className={styles.missionTitle}>Our Mission: </div>
          <div className={styles.mission}>ENABLE <br/> <span className={styles.subText}>every person</span></div>
          <div className={styles.mission}>EQUIP <br/> <span>leaders</span></div>
          <div className={styles.mission}>ESTABLISH <br/> <span>sustainable communities</span></div>
        </div>
    </div>
  )
}

export default OurMissionContainer;