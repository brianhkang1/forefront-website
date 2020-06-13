import React from 'react';
import YourResponseItem from '../../components/YourResponseItem';
import Title from '../../components/Title';
import BackgroundImage1 from '../../Images/Portrait/1.jpg';
import BackgroundImage2 from '../../Images/Portrait/5.jpg';
import BackgroundImage3 from '../../Images/Portrait/3.jpg';

import styles from './YourResponseContainer.module.css';

type HowToGetInvolvedItemType = {
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
};

const HowToGetInvolvedItems = [
  {
    title: 'Donate',
    description: 'Building the future starts with a gift of any amount',
    backgroundImage: `url(${BackgroundImage1})`,
    link: 'https://secure.givelively.org/donate/forefront-charity',
  },
  {
    title: 'Start A Fundraiser',
    description: 'Be a changemaker today',
    backgroundImage: `url(${BackgroundImage2})`,
    link:
      'https://secure.givelively.org/donate/forefront-charity/start-something',
  },
  {
    title: 'Become a Builder',
    description: 'You can build up communities today',
    backgroundImage: `url(${BackgroundImage3})`,
    link: './builders',
  },
];

class YourResponseContainer extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Title
          title="Your Response"
          description="Never underestimate the impact you can have on someone else's life. 
            In India, access to clean water means more time for women to earn money and children to attend school, so
            they can build a better future for themselves. Thank you for giving and investing in these future leaders!"
        />

        <div className={styles.howToGetInvolvedItemsContainer}>
          {HowToGetInvolvedItems.map(
            (item: HowToGetInvolvedItemType, index: number) => (
              <YourResponseItem
                key={`HowToGetInvolvedItem${index + 1}`}
                title={item.title}
                description={item.description}
                backgroundImage={item.backgroundImage}
                link={item.link}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default YourResponseContainer;
