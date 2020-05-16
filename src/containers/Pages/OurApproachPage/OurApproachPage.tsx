import React from 'react';
import styles from './OurApproachPage.module.css';

import OurApproachFeatureContainer from '../../OurApproachFeatureContainer';
import YourResponseContainer from '../../YourResponseContainer';
import PictureFilter from '../../../components/PictureFilter';
import Title from '../../../components/Title';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureText from '../../../components/PictureText'
import Picture from '../../../components/Picture';
import LongTermSustainabilityImage from '../../../Images/OurApproachPage/LongTermSustainability.jpg';

class OurApproachPage extends React.Component{
  render(){
    return (
      <div>
        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div> 
            
            <PictureText className={styles.heroText} padding='1rem 2rem'>
              <div>Breaking barriers, no matter</div>
              <div>how small, has the power to</div>
              <div>change a community's course.</div>
            </PictureText>
          </PictureFilter>
        </div>

        <Title
          title='Four Pillars'
          description="Because villagers in rural areas lack basic life necessities,
          such as clean water, access to education, medical care, and
          opportunity, it limits them to dream or realize their potential."
        />

        <OurApproachFeatureContainer/>

        <div>
          <Title
            title='Long-term Sustainability'
            description="By moving beyond these barriers which everyone should have access to,
            individuals powerfully become more than their challenges and are able to contribute
            back to their village."
          />

          <Picture
            src={LongTermSustainabilityImage}
            width='100vw'
            height='75vh'
          />
        </div>

        <YourResponseContainer/>

        <Footer/>
      </div>
    );
  }
}

export default OurApproachPage;
