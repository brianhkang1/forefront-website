import React from 'react';
import styles from './FourPillarsContainer.module.css'

import Title from '../../components/Title';
import PictureWithHoverText from '../../components/PictureWithHoverText';
import WaterImage from '../../Images/FourPillars/Water.jpg';
import MedicalImage from '../../Images/FourPillars/Medical.jpg';
import EducationImage from '../../Images/FourPillars/Education.jpg';
import EmpowermentImage from '../../Images/FourPillars/Empowerment.jpg';

type FourPillarItemType = {
  title: string;
  description: string;
  image: React.ReactNode;
}

const FourPillarItems = [
  {
    title: 'WATER',
    description: 'Through our clean water wells, soap distribution, and sanitation education, our villagers are healthier and have more time for learning',
    image: WaterImage
  },
  {
    title: 'EDUCATION',
    description: 'Through our school, students will engage in academically rigorous and joyful learning. Our students will develop skills in critical thinking, character, and creativity to become active change agents',
    image: EducationImage
  },
  {
    title: 'MEDICAL',
    description: 'Through our low-cost, high-volume interventions, we will improve the wellness of many communities. More villagers will be allowed to work, provide for their families, and send their children to school',
    image: MedicalImage
  },
  {
    title: 'EMPOWERMENT',
    description: `Through our leadership training, local leaders will amplify their impact and inspire more change in their neighboring communities with their newfound resources`,
    image: EmpowermentImage
  }
]

const FourPillarsContainer = () => {
  return (
    <div className={styles.root}>
      <Title
        title='The Solution'
        description='The key to establishing sustainable communities in developing areas is 
        empowering locals. They know their communities best. We equip future leaders with
        fundamental human rights to clean water, quality education, access to medical
        care, and leadership training. With these resources, leaders invest in their communities,
        multipying local-to-local long-term change. There will be a day when everyone:'
      />

      <div className={styles.fourPillarsVisual}>
        {FourPillarItems.map((item: FourPillarItemType, index: number) => (
          <PictureWithHoverText
            className={styles.pictureSize}
            key={`fourPillarItem${index+1}`}
            title={item.title}
            description={item.description}
            image={item.image}
            titleClassName={styles.fourPillarTitle}
            descriptionClassName={styles.fourPillarDescription}
          />
        ))}
      </div>
    </div>
  )
}

export default FourPillarsContainer