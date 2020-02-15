import React from 'react';
import styles from './HomePage.module.css'
import ReactTypingEffect from 'react-typing-effect';

import OurMissionContainer from '../../OurMissionContainer';
import BlogContainer from '../../BlogContainer';
import FourPillarsContainer from '../../FourPillarsContainer';
// import TheProblemContainer from '../../TheProblemContainer';
import FeatureProjectContainer from '../../FeatureProjectContainer';
import PictureText from '../../../components/PictureText';
import Header from '../../Header';
import Footer from '../../Footer';

class HomePage extends React.Component{
  renderText = () => {
    return (
      <PictureText opacity={1} padding="0 0 0 1.5rem">
        We are 
      </PictureText>
      )
  }

  render(){
    return (
        <>
          <div className={styles.featurePictureContainer}> 
            <div className={styles.header}>
              <Header/>
            </div> 

            <div className={styles.title}>
              <ReactTypingEffect
                staticText={this.renderText()}
                eraseDelay={1750}
                speed={75}
                text={["compassionate.", "committed.", "at the FOREFRONT." ]}
              />
            </div>  
          </div>


          <OurMissionContainer/>
          {/* <TheProblemContainer/> */}
          <FourPillarsContainer/>
          <FeatureProjectContainer/>
          <BlogContainer/>

          <Footer/>
        </>
    );
  }
}

export default HomePage;
