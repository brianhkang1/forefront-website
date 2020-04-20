import React from 'react';
import styles from './OurApproachPage.module.css';

import OurApproachFeatureContainer from '../../OurApproachFeatureContainer';
import HowToGetInvolvedContainer from '../../HowToGetInvolvedContainer';
import PictureFilter from '../../../components/PictureFilter';
import Title from '../../../components/Title';
import Header from '../../Header';
import Footer from '../../Footer';
import Button from '../../../components/Button';
import PictureText from '../../../components/PictureText'

class OurApproachPage extends React.Component{
  render(){
    return (
      <div>
        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div> 
            
            <PictureText className={styles.featureTitle} padding='1rem 2rem'>
              <div>Some sort of</div>
              <div>title here</div>
            </PictureText>
          </PictureFilter>
        </div>

        <Title
          title='Four Pillars'
          description="To achieve our mission to enable every person, equip leaders, establish self-sustaining communities, Forefront uses a unique four-pillar approach. 
          These areas are what have been determined to be the most impactful."
        />

        <OurApproachFeatureContainer/>

        <div>
          <Title
            title='Long-term Sustainability'
            description="To achieve our mission to enable every person, equip leaders, establish self-sustaining communities, Forefront uses a unique four-pillar approach. 
            These areas are what have been determined to be the most impactful."
          />

          <div className={styles.pictureContainer}>
            <PictureFilter>
              <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button size="large" className={styles.button}>Learn More</Button>
              </div>
            </PictureFilter>
          </div>
        </div>

        <HowToGetInvolvedContainer/>

        <Footer/>
      </div>
    );
  }
}

export default OurApproachPage;
