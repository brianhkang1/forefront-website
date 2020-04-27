import React from 'react';
import styles from './HomePage.module.css'
import ReactTypingEffect from 'react-typing-effect';

import PictureText from '../../../components/PictureText';
import OurMissionContainer from '../../OurMissionContainer';
import FourPillarsContainer from '../../FourPillarsContainer';
import Picture from '../../../components/Picture';
import Button from '../../../components/Button';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';
import Title from '../../../components/Title';
import { Icon } from 'semantic-ui-react';

import GetInvolvedPic1 from '../../../Images/1.jpg';
import GetInvolvedPic2 from '../../../Images/2.jpg';
import GetInvolvedPic3 from '../../../Images/3.jpg';
import GetInvolvedPic4 from '../../../Images/4.jpg';

const Accomplishments = [
  {
    icon: <Icon name="tint" size="huge"/>,
    text: '31 water wells; 94% hand-washing rate (up from 39%)'
  },
  {
    icon: <Icon name="graduation cap" size="huge"/>,
    text: '7:1 student to teacher ratio at our After School program'
  },
  {
    icon: <Icon name="band aid" size="huge"/>,
    text: '5 health and wellness workshops'
  },
  {
    icon: <Icon name="users" size="huge"/>,
    text: 'Soap business run by local women'
  },
]

const GetInvolved = [
  {
    image: GetInvolvedPic1,
    text: 'Donation',
    link: 'https://www.google.com'
  },
  {
    image: GetInvolvedPic2,
    text: 'Builder',
    link: 'https://www.google.com'
  },
  {
    image: GetInvolvedPic3,
    text: 'Campaign',
    link: 'https://www.google.com'
  },
  {
    image: GetInvolvedPic4,
    text: 'Start a Chapter',
    link: 'https://www.google.com'
  },
]

class HomePage extends React.Component{
  render(){
    const renderPictureText = (item) => {
      return (
        <div className={styles.link}>
          <Button>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </Button>
        </div>
      )
    }

    return (
        <>
          <div className={styles.featurePictureContainer}> 
            <PictureFilter>
              <div className={styles.header}>
                <Header/>
              </div> 

              <PictureText padding='1.5rem' className={styles.heroText}>
                <div>We build a future where dreamers</div>
                <ReactTypingEffect
                  speed={75}
                  eraseDelay={1000000}
                  text='become changemakers.'
                />
              </PictureText>  
            </PictureFilter>
          </div>

          <div className={styles.blurb}>
            Their vision is our mission
          </div>
          <OurMissionContainer/>
          <FourPillarsContainer/>

          <div className={styles.accomplishmentsContainer}>
            <Title title='Accomplishments'/>
            <div className={styles.accomplishmentsItemContainer}>
              {Accomplishments.map((accItem, index) => (
                <div key={`accItem-${index+1}`} className={styles.accomplishmentsItem}>
                  <div className={styles.accomplishmentsIcon}>
                    {accItem.icon}
                  </div>
                  <div className={styles.accomplishmentsText}>
                    {accItem.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.getInvolvedContainer}>
            <Title title='How you can get involved'/>
            <div className={styles.getInvolvedItemContainer}>
              {GetInvolved.map(getInvolvedItem => (
                <Picture
                  src={getInvolvedItem.image}
                  width='100%' 
                  height='400px'
                >
                  <PictureFilter>
                    {renderPictureText(getInvolvedItem)}
                  </PictureFilter>
                </Picture>
              ))}
            </div>
          </div>

          <Footer/>
        </>
    );
  }
}

export default HomePage;
