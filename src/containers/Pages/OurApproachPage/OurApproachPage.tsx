import React from 'react';
import styles from './OurApproachPage.module.css';

import FourPillarsContainer from '../../FourPillarsContainer';
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

        <FourPillarsContainer/>
        <HowToGetInvolvedContainer/>

        <Footer/>
      </div>
    );
  }
}

export default OurApproachPage;
