import React from 'react';
import styles from './FourPillarsContainer.module.css'
import { Icon } from 'semantic-ui-react';

import Title from '../../components/Title';
import FourPillarsItem from '../../components/FourPillarsItem';
import WaterImage from '../../Images/water.jpg';
import MedicalImage from '../../Images/medical.jpg';
import EducationImage from '../../Images/education.jpg';
import EmpowermentImage from '../../Images/empowerment.jpg';

type FourPillarItemType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: React.ReactNode;
}

const FourPillarItems = [
  {
    icon: <div className={styles.iconsContainer}><Icon name="tint" size="huge"/></div>,
    title: 'WATER',
    description: '99 Million without access to improved drinking water sources',
    image: WaterImage
  },
  {
    icon: <div className={styles.iconsContainer}><Icon name="graduation cap" size="huge"/></div>,
    title: 'EDUCATION',
    description: 'Over 50% of girls fail to enroll in school. Most girls drop out by the age of 12',
    image: EducationImage
  },
  {
    icon: <div className={styles.iconsContainer}><Icon name="band aid" size="huge"/></div>,
    title: 'MEDICAL',
    description: 'Over 60% do not have access to adequate health care provision',
    image: MedicalImage
  },
  {
    icon: <div className={styles.iconsContainer}><Icon name="users" size="huge"/></div>,
    title: 'EMPOWERMENT',
    description: `India is 102th out of 144 in the United Nation's Gender Inequality Index`,
    image: EmpowermentImage
  }
]

const FourPillarsContainer = () => {
  return (
    <div className={styles.root}>
      <Title
        title='Four Pillars'
        description='There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, 
        by injected humour, or randomised words which dont look even slightly believable.'
      />

      <div className={styles.fourPillarsVisual}>
        {FourPillarItems.map((item: FourPillarItemType, index: number) => (
          <FourPillarsItem
            key={`fourPillarItem${index+1}`}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default FourPillarsContainer