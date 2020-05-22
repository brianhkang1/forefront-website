import React, { useState } from 'react';
import styles from './OurApproachFeatureContainer.module.css';

import Picture from '../../components/Picture';
import WaterImage from '../../Images/OurApproachPage/FourPillarsWater.jpg';
import MedicalImage from '../../Images/OurApproachPage/FourPillarsMedical.jpg';
import EducationImage from '../../Images/OurApproachPage/FourPillarsEducation.jpg';
import EmpowermentImage from '../../Images/OurApproachPage/FourPillarsEmpowerment.jpg';
import WaterIcon from '../../Images/Icons/FourPillars/Water_color.png';
import EducationIcon from '../../Images/Icons/FourPillars/Education_color.png';
import MedicalIcon from '../../Images/Icons/FourPillars/Medical_color.png';
import EmpowermentIcon from '../../Images/Icons/FourPillars/Empowerment_color.png';

enum FourPillars {
  WATER = 'Water',
  EDUCATION = 'Education',
  MEDICAL = 'Medical',
  EMPOWERMENT = 'Empowerment'
}

type FourPillarsApproachType = {
  title: FourPillars;
  icon: string;
  color: string;
  text: string;
  image: React.ReactNode;
}

const FourPillarsApproach = {
  [FourPillars.WATER]: 
    {
      title: FourPillars.WATER,
      icon: WaterIcon,
      color: 'var(--blue-color)',
      text: '750 million people lack access to clean water-- other areas of sustainability cannot be achieved without meeting this basic need first. That is why our first phase is dedicated to building accessible water wells, along with soap toys to encourage children to wash their hands to keep infections away.',
      image: WaterImage,
    },
  [FourPillars.EDUCATION]: 
    {
      title: FourPillars.EDUCATION,
      icon: EducationIcon,
      color: 'var(--yellow-color)',
      text: '57 million children around the globe do not have access to schools. Education is crucial to breaking the cycle of poverty. Our long-term hope is that the students will gain vocational skills, attend college, and reinvest their newly acquired skills and knowledge into their communities.',
      image: EducationImage,
    },
  [FourPillars.MEDICAL]: 
    {
      title: FourPillars.MEDICAL,
      icon: MedicalIcon,
      color: 'var(--red-color)',
      text: '75-85% of people in developing nations cannot receive medical treatment. We want to alleviate this dire issue through the construction of clinics that will provide ethical, accessible and affordable healthcare. A healthy community means more children can attend school and more adults can enter the workforce.',
      image: MedicalImage,
    },
  [FourPillars.EMPOWERMENT]: 
    {
      title: FourPillars.EMPOWERMENT,
      icon: EmpowermentIcon,
      color: 'var(--purple-color)',
      text: '27 million people worldwide are victims of human trafficking. We want to build safehouses that will provide homes, vocational training and counseling for marginalized victims of sexual abuse and human trafficking. Our goal is to empower more women to enter the workforce and start their own businesses.',
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
        <div 
          className={`${selectedApproach === approach.title ? styles.selectedButtonContainer : styles.buttonContainer}`} 
          onClick={() => setSelectedApproach(approach.title)}
          style={{
            boxShadow: `
              ${selectedApproach === approach.title ? 'inset' : ''} 
              2px 
              2px 
              12px 
              ${approach.color}
            `
          }}
        >
          <div className={styles.iconContainer}>
            <Picture 
              src={approach.icon}  
              width='5rem' 
              height='5rem'
            />
          </div>

          {/* laptop view */}
          {window.matchMedia("(min-width: 741px)").matches && (
            <div className={styles.buttonTitle} style={{color: approach.color}}>
              {approach.title}
           </div>
          )}
        </div>
      ))}
    </div>

    {renderDescription()}
   </div>
 )
}

export default OurApproachFeatureContainer;