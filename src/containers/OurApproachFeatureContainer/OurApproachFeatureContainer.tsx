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
  MEDICAL = 'Medical Care',
  EMPOWERMENT = 'Empowerment',
}

type FourPillarsApproachType = {
  title: FourPillars;
  icon: string;
  color: string;
  text: string;
  image: React.ReactNode;
};

const FourPillarsApproach = {
  [FourPillars.WATER]: {
    title: FourPillars.WATER,
    icon: WaterIcon,
    color: 'var(--blue-color)',
    text:
      'We provide basic sanitation and access to clean water. Our sustainable solutions help villagers retrieve clean water in a fraction of the time it normally takes, and we bring it all together by promoting good hygiene with soap toys and teaching healthy habits to villagers to make for less sick days and more income to support their family.',
    image: WaterImage,
  },
  [FourPillars.EDUCATION]: {
    title: FourPillars.EDUCATION,
    icon: EducationIcon,
    color: 'var(--yellow-color)',
    text:
      'The FOREFRONT International School aspires to provide excellent education to students regardless of gender or demographic. With parents and teachers working together, their partnership ensures that students develop meticulous critical thinking, core values, and lasting self-care, all to become active and effective changers of their communities.',
    image: EducationImage,
  },
  [FourPillars.MEDICAL]: {
    title: FourPillars.MEDICAL,
    icon: MedicalIcon,
    color: 'var(--red-color)',
    text:
      'Our vision is medical access for everyone. Through free diabetes, weight, and blood pressure check-ups, we have tested people for diabetes and continue to host community sessions and health & wellness workshops to promote healthy lifestyles. And having partnered with local health organizations, our efforts will go even further.',
    image: MedicalImage,
  },
  [FourPillars.EMPOWERMENT]: {
    title: FourPillars.EMPOWERMENT,
    icon: EmpowermentIcon,
    color: 'var(--purple-color)',
    text:
      'We aim to raise next generation leaders. By working and collaborating face-to-face with locals, we are able to understand the unique needs of each community we serve. This enables us to facilitate programming that empowers local men, women, and children to take ownership and initiative in their own communities to bridge the sustainability of all our pillars.',
    image: EmpowermentImage,
  },
};

const OurApproachFeatureContainer = () => {
  const [selectedApproach, setSelectedApproach] = useState(FourPillars.WATER);

  const renderSlideTransition = () => {
    switch (selectedApproach) {
      case FourPillars.WATER:
        return 'translateX(0vw)';
      case FourPillars.EDUCATION:
        return 'translateX(-100vw)';
      case FourPillars.MEDICAL:
        return 'translateX(-200vw)';
      case FourPillars.EMPOWERMENT:
        return 'translateX(-300vw)';
    }
  };

  const renderDescription = () => {
    return (
      <div
        className={styles.slides}
        style={{
          transform: renderSlideTransition(),
        }}
      >
        {Object.values(FourPillarsApproach).map(approach => (
          <div className={styles.slideContainer}>
            <div
              style={{ backgroundColor: approach.color }}
              className={styles.descriptionTextContainer}
            >
              <div className={styles.descriptionText}>{approach.text}</div>
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
    );
  };

  return (
    <div>
      <div className={styles.optionButtons}>
        {Object.values(FourPillarsApproach).map(
          (approach: FourPillarsApproachType) => (
            <div
              className={`${
                selectedApproach === approach.title
                  ? styles.selectedButtonContainer
                  : styles.buttonContainer
              }`}
              onClick={() => setSelectedApproach(approach.title)}
              style={{
                boxShadow: `
              ${selectedApproach === approach.title ? 'inset' : ''} 
              2px 
              2px 
              12px 
              ${approach.color}
            `,
              }}
            >
              <div className={styles.iconContainer}>
                <Picture src={approach.icon} width="5rem" height="5rem" />
              </div>

              {/* desktop view */}
              {window.matchMedia('(min-width: 769px)').matches && (
                <div
                  className={styles.buttonTitle}
                  style={{ color: approach.color }}
                >
                  {approach.title}
                </div>
              )}
            </div>
          )
        )}
      </div>

      {renderDescription()}
    </div>
  );
};

export default OurApproachFeatureContainer;
