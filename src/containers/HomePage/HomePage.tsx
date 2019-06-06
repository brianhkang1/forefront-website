import React from 'react';
import styles from './HomePage.module.css'
import ReactTypingEffect from 'react-typing-effect';
import TextLoop from "react-text-loop";
import { Icon } from 'semantic-ui-react';

class HomePage extends React.Component{

  renderFeatureTitle = () => {
    // if mobile browser
    if(window.matchMedia("(max-width: 600px)").matches){
      return (
      <>
        <div className={styles.mobileTitlePadding}>We are</div>
        <TextLoop children={["leaders.", "difference-makers.", "avengers."]}/>
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
      <div>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.typeWriter}>
            {this.renderFeatureTitle()}
          </div>  
        </div>

        <div className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDoHeader}>
            <div className={styles.whatWeDoTitle}>WHAT WE DO</div>
            <div className={styles.whatWeDoSubTitle}> some description </div>
          </div>
          <div className={styles.whatWeDoVisual}>

          </div>
        </div>

        <div className={styles.container3}>
          container 3
        </div>
      </div>
    );
  }
}

export default HomePage;
