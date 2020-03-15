import React from 'react';
import styles from './OurMissionContainer.module.css';
import PictureText from '../../components/PictureText';

const OurMissionContainer = () => {
  return(
    <>
      <div className={styles.root}>
        <div className={styles.container}>
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
              <div style={{fontSize: '3rem', whiteSpace: 'nowrap'}}>OUR MISSION:</div>

              <div className={styles.missionsContainer}>
                <div>Enable every person</div>
                <div>Equip leaders</div>
                <div>Establish self-sustaining communities</div>

                {/* <div className={styles.buttonContainer}>
                  <Button>
                    <a href="">Learn More</a>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>       
          <div className={styles.picturesContainer}>
            <div className={styles.filter}>
              <div style={{fontSize: '3rem', whiteSpace: 'nowrap'}}>THE PROBLEM:</div>

              <div className={styles.missionsContainer}>
                <div>Problem</div>
                <div>Say Something</div>
                <div>Another One</div>

                {/* <div className={styles.buttonContainer}>
                  <Button>
                    <a href="">Learn More</a>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>

          <div/>

          <div className={styles.textContainer}>
            <div className={styles.definition}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMissionContainer;