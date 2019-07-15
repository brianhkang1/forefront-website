import React from 'react';
import styles from './HomePage.module.css'
import ReactTypingEffect from 'react-typing-effect';
import TextLoop from "react-text-loop";
import FourPillarsContainer from '../FourPillarsContainer'
import WhatWeDoContainer from '../WhatWeDoContainer'
import HowToGetInvolvedContainer from '../HowToGetInvolvedContainer'
import Header from '../Header';
import Footer from '../Footer';

class HomePage extends React.Component{

  renderFeatureTitle = () => {
    // if mobile browser
    if(window.matchMedia("(max-width: 600px)").matches){
      return (
      <>
        <div className={styles.mobileTitlePadding}>We are</div>
        <TextLoop children={["leaders.", "revolutionaries.", "avengers."]}/>
      </>
      ) 
    }
    //if laptop browser
    else if (window.matchMedia("(min-width: 601px)").matches){
      return (
      <>
        <ReactTypingEffect
          staticText='We are'
          eraseDelay={2500}
          speed={100}
          text={["leaders.", "difference-makers.", "avengers." ]}
        />
      </>
      )
    }
  }

  render(){
    return (
        <>
          <div className={styles.FeaturePictureContainer}> 
            <div className={styles.header}>
              <Header/>
            </div> 

            <div className={styles.typeWriter}>
              {this.renderFeatureTitle()}
            </div>  
          </div>

          <WhatWeDoContainer/>
          <FourPillarsContainer/>
          <HowToGetInvolvedContainer/>

          <Footer/>
        </>
    );
  }
}

export default HomePage;
