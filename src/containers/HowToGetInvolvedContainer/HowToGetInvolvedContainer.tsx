import React from 'react';
import styles from './HowToGetInvolvedContainer.module.css';
import HowToGetInvolvedItem from '../../components/HowToGetInvolvedItem';
import BackgroundImage from '../../images/HowToGetInvolved.jpg';

type HowToGetInvolvedItemType = {
  title: string;
  description: string;
  backgroundImage: string;
}

const HowToGetInvolvedItems = [
  {
    title: 'Create A Chapter',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage})`
  },
  {
    title: 'Peer To Peer',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage})`
  },
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
        <div className={styles.title}>How Can I Help?</div>
        <div className={styles.howToGetInvolvedItemsContainer}>
          {HowToGetInvolvedItems.map((item: HowToGetInvolvedItemType) => (
            <HowToGetInvolvedItem 
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