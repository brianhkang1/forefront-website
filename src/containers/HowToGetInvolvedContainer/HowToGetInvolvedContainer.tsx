import React from 'react';
import styles from './HowToGetInvolvedContainer.module.css';
import HowToGetInvolvedItem from '../../components/HowToGetInvolvedItem';
import BackgroundImage from '../../Images/HowToGetInvolved.jpg';

type HowToGetInvolvedItemType = {
  title: string;
  description: string;
  backgroundImage: string;
}

const HowToGetInvolvedItems = [
  {
    title: 'Donate Now',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage})`
  },
  {
    title: 'Start A Fundraiser',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage})`
  },
  {
    title: 'Become a Builder',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage})`
  }
]

class HowToGetInvolvedContainer extends React.Component {
  render(){
    return(
      <div className={styles.root}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <span className={styles.highlight}>How Can I Help?</span>
          </div>
        </div>
        <div className={styles.howToGetInvolvedItemsContainer}>
          {HowToGetInvolvedItems.map((item: HowToGetInvolvedItemType, index: number) => (
            <HowToGetInvolvedItem 
              key={`HowToGetInvolvedItem${index+1}`}
              title={item.title}
              description={item.description}
              backgroundImage={item.backgroundImage}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default HowToGetInvolvedContainer;