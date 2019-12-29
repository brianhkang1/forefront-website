import React, { useState } from 'react';
import styles from './OurApproachFeatureContainer.module.css';
import WaterImage from '../../Images/Water/9.jpg';
import MedicalImage from '../../Images/Medical/2.jpg';
import EducationImage from '../../Images/Education/19.jpg';
import EmpowermentImage from '../../Images/Empowerment/5.jpg';
import { Icon } from 'semantic-ui-react';

enum FourPillars {
  WATER = 'Water',
  EDUCATION = 'Education',
  MEDICAL = 'Medical',
  EMPOWERMENT = 'Empowerment'
}

type FourPillarsApproachType = {
  title: FourPillars;
  icon: React.ReactNode;
  color: string;
  text: string;
  image: React.ReactNode;
}

const FourPillarsApproach = {
  [FourPillars.WATER]: 
    {
      title: FourPillars.WATER,
      icon: <Icon name="tint" size="large"/>,
      color: 'rgb(106,148,225)',
      text: '750 million people lack access to clean water. That is 2.5x the population of the United States. Other areas of sustainability cannot be achieved without meeting this basic need first. That is why our first phase is dedicated to building wells that will provide water that is accessible and consumable allowing families to stay well.  Furthermore, with this access to water we are able to take sanitation a step further and provide soap toys to encourage children to wash their hands to keep infections away.',
      image: WaterImage,
    },
  [FourPillars.EDUCATION]: 
    {
      title: FourPillars.EDUCATION,
      icon: <Icon name="graduation cap" size="large"/>,
      color: 'rgb(238,227,120)',
      text: '57 million children around the globe do not have access to schools. Education is crucial to breaking the cycle of poverty, which is why our second phase is dedicated to building schools. Our long-term hope is that the students will gain vocational skills, attend college, and reinvest their newly acquired skills and knowledge into their communities.',
      image: EducationImage,
    },
  [FourPillars.MEDICAL]: 
    {
      title: FourPillars.MEDICAL,
      icon: <Icon name="band aid" size="large"/>,
      color: 'rgb(217,91,94)',
      text: '75-85% of people in developing nations cannot receive medical treatment, which means most of the world is suffering needlessly. We want to alleviate this dire issue through the construction of clinics that will provide ethical, accessible and affordable healthcare. A healthy community means more children can attend school and more adults can enter the workforce.',
      image: MedicalImage,
    },
  [FourPillars.EMPOWERMENT]: 
    {
      title: FourPillars.EMPOWERMENT,
      icon: <Icon name="users" size="large"/>,
      color: 'rgb(158,92,214)',
      text: '27 million people worldwide are victims of human trafficking. We want to build safehouses that will provide homes, vocational training and counseling for marginalized members of a community, particularly those who are victims of sexual abuse and human trafficking. Our goal is to empower more women to enter the workforce and start their own businesses.',
      image: EmpowermentImage,
    }
}

const OurApproachFeatureContainer = () => {
  const [selectedApproach, setSelectedApproach] = useState(FourPillars.WATER)

  const renderSlideTransition = () => {
    switch(selectedApproach){
      case FourPillars.WATER:
        return 'translateX(0vw)'
      case FourPillars.EDUCATION:
        return 'translateX(-100vw)'
      case FourPillars.MEDICAL:
        return 'translateX(-200vw)'
      case FourPillars.EMPOWERMENT:
          return 'translateX(-300vw)'
    }
  }

  const renderDescription = () => {
    return (
      <div className={styles.slides} style={{
        transform: renderSlideTransition(),
      }}>

      {Object.values(FourPillarsApproach).map(approach => (
        <div 
          className={styles.slideContainer} 
        >
          <div 
            style={{backgroundColor: approach.color}} 
            className={styles.descriptionTextContainer}
          >
            <div className={styles.descriptionText}>
              {approach.text}
            </div>
          </div>  

          <div 
            className={styles.descriptionPicture} 
            style={{
              backgroundImage: `url(${approach.image})`,
            }}
          />
      </div>
    ))}

      </div>
    )
  }

 return (
   <div>
    <div className={styles.optionButtons}>
      {Object.values(FourPillarsApproach).map((approach: FourPillarsApproachType) => (
        <div className={styles.buttonContainer} onClick={() => setSelectedApproach(approach.title)}>
          <div style={{
            backgroundColor: approach.color,
            height: '4rem',
            width: '4rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{color: 'white'}}>{approach.icon}</div>
          </div>
          <div className={styles.buttonTitle}>{approach.title}</div>
        </div>
      ))}
    </div>

    {renderDescription()}
   </div>
 )
}

export default OurApproachFeatureContainer;