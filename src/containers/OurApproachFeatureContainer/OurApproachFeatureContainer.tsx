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
      text: "We provide access to clean water and basic sanitation for rural villages in need through a water scorecard that assesses multiple factors, including demographic of the village and location/source of the nearest water source. FOREFRONT Charity is consistently planning and implementing innovative sustainable solutions to provide clean water with lower downtime and a cleaner source of water.  Now, retrieving clean water only takes a fraction of the time which means more time for school and work.  We also promote good hygiene and sanitation by distributing homemade soap toys and teaching lessons on healthy habits which means less sick days and more income to support their family.",
      image: WaterImage,
    },
  [FourPillars.EDUCATION]: 
    {
      title: FourPillars.EDUCATION,
      icon: EducationIcon,
      color: 'var(--yellow-color)',
      text: "FOREFRONT International school aspires to provide an excellent education to all students, regardless of their gender, demographics, or family income, so that they can become skilled and active future change agents in their communities.  Teachers and parents will work together to ensure that students at the primary school develop rigorous critical thinking skills, core values, and acquire enduring understandings on how to make the world a better place.",
      image: EducationImage,
    },
  [FourPillars.MEDICAL]: 
    {
      title: FourPillars.MEDICAL,
      icon: MedicalIcon,
      color: 'var(--red-color)',
      text: "The vision of FOREFRONT Charity’s medical pillar is to provide medical access to all. We provide community engagement sessions on the importance of a healthy diet, active lifestyle, and provide free diabetes, weight, and blood pressure check-ups. Through our efforts, we have been able to test over 200+ people for diabetes, host six health & wellness workshops and have partnered with local health organizations.", 
      image: MedicalImage,
    },
  [FourPillars.EMPOWERMENT]: 
    {
      title: FourPillars.EMPOWERMENT,
      icon: EmpowermentIcon,
      color: 'var(--purple-color)',
      text: "Our aim is to raise next generation leaders, in particular women, to give back to their villages.  In partnership with the local Indian government and the Indian national Swachh Bharat program, FOREFRONT launched a soap business led by a woman local name Elizabeth.  Its aim is to educate about the importance of hand washing and distributing soap to villages without easy access to soap.Community engagement is a unique facet of our organization that allows us to collaborate with and  understand and assess the individual needs of each community we serve. We facilitate programming that will ultimately be empowering to the local men, women and children to take ownership and initiative in their own communities. Community engagement bridges the sustainability of all our pillars.",
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