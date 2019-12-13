import React from 'react';
import styles from './OurMissionContainer.module.css';
import Button from '../../components/Button';

const OurMissionContainer = () => {
  return(
    <>
      <div className={styles.spacer} />
      <div className={styles.root}>
        <div className={styles.textContainer}>
          <div className={styles.definition}>
            FOREFRONT is a non-profit organization that facilitates sustainable, 
            local projects in India and
            around the world to increase access to clean water,
            education, health care, and leadership training.
          </div>
        </div>

        <div/>
      
        <div className={styles.picturesContainer}>
          <div className={styles.filter}>
            <div style={{fontSize: '3rem', whiteSpace: 'nowrap'}}>OUR MISSION</div>

            <div className={styles.missionsContainer}>
              <div>Enable every person</div>
              <div>Equip leaders</div>
              <div style={{paddingBottom: '5rem'}}>Establish self-sustaining communities</div>

              <div className={styles.buttonContainer}>
                <Button>
                  <a href="">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMissionContainer;