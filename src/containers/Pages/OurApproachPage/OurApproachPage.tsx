import React from 'react';
import styles from './OurApproachPage.module.css';

import OurApproachFeatureContainer from '../../OurApproachFeatureContainer';
import HowToGetInvolvedContainer from '../../HowToGetInvolvedContainer';
import Header from '../../Header';
import Footer from '../../Footer';

class OurApproachPage extends React.Component{
  render(){
    return (
      <div>
        <div className={styles.featurePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div> 
          
          <div className={styles.featureTitle}>Our Approach</div>
        </div>

        <p className={styles.paragraph}>
          To achieve our mission to enable every person, equip leaders, establish self-sustaining communities, Forefront uses a unique four-pillar approach. 
          These areas are what have been determined to be the most impactful.
        </p>

        <OurApproachFeatureContainer/>
        <HowToGetInvolvedContainer/>

        <Footer/>
      </div>
    );
  }
}

export default OurApproachPage;
