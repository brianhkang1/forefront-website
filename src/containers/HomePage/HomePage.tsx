import React from 'react';
import styles from './HomePage.module.css'
import ReactTypingEffect from 'react-typing-effect';
import TextLoop from "react-text-loop";
import { Icon } from 'semantic-ui-react';
import FourPillarItem from '../../components/FourPillarItem';

const FourPillarItems = [
  {
    icon: <Icon name="tint" size="huge" color="grey"/>,
    title: 'WATER',
    description: '99 Million without access to improved drinking water sources'
  },
  {
    icon: <Icon name="graduation cap" size="huge" color="grey"/>,
    title: 'EDUCATION',
    description: 'Over 50% of girls fail to enroll in school. Most girls drop out by the age of 12'
  },
  {
    icon: <Icon name="band aid" size="huge" color="grey"/>,
    title: 'MEDICAL',
    description: 'Over 60% do not have access to adequate health care provision'
  },
  {
    icon: <Icon name="users" size="huge" color="grey"/>,
    title: 'EMPOWERMENT',
    description: `India is 102th out of 144 in the United Nation's Gender Inequality Index`
  }
]

class HomePage extends React.Component{

  renderFeatureTitle = () => {
    // if mobile browser
    if(window.matchMedia("(max-width: 600px)").matches){
      return (
      <>
        <div className={styles.mobileTitlePadding}>We are</div>
        <TextLoop children={["leaders.", "revolutionaries.", "avengers."]}/>
      </>
      ) 
    }
    //if laptop browser
    else if (window.matchMedia("(min-width: 601px)").matches){
      return (
      <>
        <ReactTypingEffect
          staticText='We are'
          eraseDelay={2500}
          speed={100}
          text={["leaders.", "difference-makers.", "avengers." ]}
        />
      </>
      )
    }
  }

  render(){
    return (
      <div>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.typeWriter}>
            {this.renderFeatureTitle()}
          </div>  
        </div>

        <div className={styles.fourPillarsContainer}>
          <div className={styles.fourPillarsHeader}>
            <div className={styles.fourPillarsTitle}>
              FOUR PILLAR APPROACH
            </div>
            <div className={styles.fourPillarsSubTitle}> some description </div>
          </div>
          <div className={styles.fourPillarsVisual}>
            {FourPillarItems.map(item => (
              <FourPillarItem
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        <div className={styles.container3}>
          container 3
        </div>
      </div>
    );
  }
}

export default HomePage;
