import React from 'react';
import styles from './FourPillarsContainer.module.css';

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
};

const FourPillarItems = [
  {
    title: 'WATER',
    description:
      'Our clean water wells, soap distribution, and sanitation education make for healthier villagers & more time for learning.',
    image: WaterImage,
  },
  {
    title: 'EDUCATION',
    description:
      'Our school provides academically rigorous but joyful learning to develop students with character, creativity, and critical thinking to go from community dwellers to community builders.',
    image: EducationImage,
  },
  {
    title: 'MEDICAL',
    description:
      'Our low-cost, high-volume interventions enable villagers to work, provide for families, and send children to school—improving overall wellness in many communities.',
    image: MedicalImage,
  },
  {
    title: 'EMPOWERMENT',
    description: `Our leadership training amplifies the impact of local leaders to inspire more change in their neighboring communities.`,
    image: EmpowermentImage,
  },
];

const FourPillarsContainer = () => {
  return (
    <div className={styles.root}>
      <Title
        title="Our Solution"
        description="Transforming developing areas into sustainable communities starts with the community—empowering future leaders with a wealth of resources to invest in their villages. With fundamental access to clean water, education, medical care, and training, leaders multiply local-to-local impact. This generational change starts with creating fundamental access to:"
      />

      <div className={styles.fourPillarsVisual}>
        {FourPillarItems.map((item: FourPillarItemType, index: number) => (
          <PictureWithHoverText
            className={styles.pictureSize}
            key={`fourPillarItem${index + 1}`}
            title={item.title}
            description={item.description}
            image={item.image}
            titleClassName={styles.fourPillarTitle}
            descriptionClassName={styles.fourPillarDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default FourPillarsContainer;
