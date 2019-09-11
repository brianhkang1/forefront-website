import React from 'react';
import styles from './HowToGetInvolvedContainer.module.css';
import HowToGetInvolvedItem from '../../components/HowToGetInvolvedItem';
import Title from '../../components/Title';
import BackgroundImage1 from '../../Images/HowToGetInvolved.jpg';
import BackgroundImage2 from '../../Images/HowToGetInvolved2.jpg';
import BackgroundImage3 from '../../Images/12.jpg';

type HowToGetInvolvedItemType = {
  title: string;
  description: string;
  backgroundImage: string;
}

const HowToGetInvolvedItems = [
  {
    title: 'Donate Now',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage1})`
  },
  {
    title: 'Start A Fundraiser',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage2})`
  },
  {
    title: 'Become a Builder',
    description: 'Some Description',
    backgroundImage: `url(${BackgroundImage3})`
  }
]

class HowToGetInvolvedContainer extends React.Component {
  render(){
    return(
      <div className={styles.root}>
        <Title
          title='How Can I Help?'
        />

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