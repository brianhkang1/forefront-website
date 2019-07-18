import React from 'react';
import styles from './OurApproachPage.module.css';
import { classNames } from '../../util';
import WaterImage from '../../Images/water.jpg';
import MedicalImage from '../../Images/medical.jpg';
import EducationImage from '../../Images/education.jpg';
import EmpowermentImage from '../../Images/7.jpg';

import Header from '../Header';
import Footer from '../Footer';

class OurApproachPage extends React.Component{
  render(){
    return (
      <div>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div> 
          
          <div className={styles.featureTitle}>Dramatic Title</div>
          <div className={styles.featureSubtitle}>
            It is a long established fact that a reader will be distracted.
          </div>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.featureSquare} style={{backgroundImage: `url(${WaterImage})`}}></div>
          <div className={styles.featureSquare} style={{backgroundImage: `url(${EducationImage})`}}></div>
          <div className={styles.featureSquare} style={{backgroundImage: `url(${MedicalImage})`}}></div>
          <div className={styles.featureSquare} style={{backgroundImage: `url(${EmpowermentImage})`}}></div>
        
          {/* <div className={styles.featureSquare}>
            <div className={styles.featureSquareTitle}>
              WATER & SANITATION
            </div>  
            <div className={styles.featureSquareText}>
              750 million people lack access to clean water. That is 2.5x the population of the United States. Other areas of sustainability cannot be achieved without meeting this basic need first. 
            </div>
            <div className={classNames(styles.featureSquareText, styles.italicize)}>
              Our first phase is dedicated to building wells that will provide water that is accessible and consumable allowing families to stay well.  Furthermore, with this access to water we are able to take sanitation a step further and provide soap toys to encourage children to wash their hands to keep infections away.
            </div>  
          </div>

          <div className={classNames(styles.featureSquare)}>
            <div className={styles.featureSquareTitle}>
              EDUCATION
            </div>  
            <div className={styles.featureSquareText}>
              57 million children around the globe do not have access to schools. Education is crucial to breaking the cycle of poverty, which is why our second phase is dedicated to building schools.
            </div>
            <div className={classNames(styles.featureSquareText, styles.italicize)}>
              Our long-term hope is that the students will gain vocational skills, attend college, and reinvest their newly acquired skills and knowledge into their communities.
            </div> 
          </div>

          <div className={styles.featureSquare}>
            <div className={styles.featureSquareTitle}>
              MEDICAL
            </div>  
            <div className={styles.featureSquareText}>
              75-85% of people in developing nations cannot receive medical treatment, which means most of the world is suffering needlessly.
            </div>
            <div className={classNames(styles.featureSquareText, styles.italicize)}>
              We want to alleviate this dire issue through the construction of clinics that will provide ethical, accessible and affordable healthcare. A healthy community means more children can attend school and more adults can enter the workforce.
            </div>
          </div>

          <div className={styles.featureSquare}>
            <div className={styles.featureSquareTitle}>
              EMPOWERMENT
            </div>  
            <div className={styles.featureSquareText}>
              27 million people worldwide are victims of human trafficking. We want to build safehouses that will provide homes, vocational training and counseling for marginalized members of a community, particularly those who are victims of sexual abuse and human trafficking.
            </div>
            <div className={classNames(styles.featureSquareText, styles.italicize)}>
              Our goal is to empower more women to enter the workforce and start their own businesses.
            </div>
          </div> */}
        </div>

        <Footer/>
      </div>
    );
  }
}

export default OurApproachPage;
