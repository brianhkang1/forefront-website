import React from 'react';
import styles from './HomePage.module.css'
import ReactTypingEffect from 'react-typing-effect';

import OurMissionContainer from '../../OurMissionContainer';
import WhatWeDoContainer from '../../WhatWeDoContainer';
import BlogContainer from '../../BlogContainer';
import FourPillarsContainer from '../../FourPillarsContainer';
import StatisticsVisual from '../../../components/StatisticsVisual';
import FeatureProjectContainer from '../../FeatureProjectContainer';
import Header from '../../Header';
import Footer from '../../Footer';

class HomePage extends React.Component{

  render(){
    return (
        <>
          <div className={styles.featurePictureContainer}> 
            <div className={styles.header}>
              <Header/>
            </div> 

            <div className={styles.title}>
              <ReactTypingEffect
                staticText='We are'
                eraseDelay={1750}
                speed={75}
                text={["compassionate.", "committed.", "at the FOREFRONT." ]}
              />
            </div>  
          </div>


          <OurMissionContainer/>
          <StatisticsVisual/>
          <FeatureProjectContainer/>
          {/* <BlogContainer/> */}
          <FourPillarsContainer/>
          <WhatWeDoContainer/>

          <Footer/>
        </>
    );
  }
}

export default HomePage;
