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

import GetInvolvedPic1 from '../../../Images/HomePage/GetInvolved1.jpg';
import GetInvolvedPic2 from '../../../Images/HomePage/GetInvolved2.jpg';
import GetInvolvedPic3 from '../../../Images/HomePage/GetInvolved3.jpg';
import TheirVisionIsOurMission from '../../../Images/HomePage/TheirVisionIsOurMission.png';
import WaterIcon from '../../../Images/Icons/FourPillars/Water_color.png';
import EducationIcon from '../../../Images/Icons/FourPillars/Education_color.png';
import MedicalIcon from '../../../Images/Icons/FourPillars/Medical_color.png';
import EmpowermentIcon from '../../../Images/Icons/FourPillars/Empowerment_color.png';

const OurImpact = [
  {
    image: GetInvolvedPic1,
    icon: WaterIcon,
    text: '31 water wells; 94% hand-washing rate (up from 39%)'
  },
  {
    image: GetInvolvedPic1,
    icon: EducationIcon,
    text: '7:1 student to teacher ratio at our After School program'
  },
  {
    image: GetInvolvedPic1,
    icon: MedicalIcon,
    text: '5 health and wellness workshops'
  },
  {
    image: GetInvolvedPic1,
    icon: EmpowermentIcon,
    text: 'Soap business run by local women'
  },
]

const GetInvolved = [
  {
    image: GetInvolvedPic1,
    text: 'Donate',
    link: 'https://secure.givelively.org/donate/forefront-charity'
  },
  {
    image: GetInvolvedPic2,
    text: 'Monthly Donor',
    link: './builders'
  },
  {
    image: GetInvolvedPic3,
    text: 'Campaign',
    link: 'https://secure.givelively.org/donate/forefront-charity/start-something'
  },
  // {
  //   image: GetInvolvedPic4,
  //   text: 'Start a Chapter',
  //   link: 'https://www.google.com'
  // },
]

class HomePage extends React.Component{
  render(){
    const renderPictureText = (item) => {
      return (
        <div className={styles.link}>
          <Button>
            <a 
              href={item.link} 
              target={item.link === './builders' ? "_self" : "_blank"} 
              rel="noopener noreferrer"
            >
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

          <div className={styles.theirVisionVisual}>
            <Picture
              src={TheirVisionIsOurMission}
              width='80vw'
              height='35vh'
            />
          </div>

          <OurMissionContainer/>
          <FourPillarsContainer/>

          <div className={styles.ourImpactContainer}>
            <Title title='Our Impact'/>
            <div className={styles.ourImpactItemContainer}>
              {OurImpact.map((ourImpactItem, index) => (
                <div className={styles.ourImpactItem}>
                  <Picture 
                    key={`ourImpactItem-${index+1}`} 
                    src={ourImpactItem.image} 
                    className={styles.ourImpactImage} 
                    width='18rem' 
                    height='18rem'
                  >
                    <div className={styles.ourImpactIcon}>
                      <Picture 
                        src={ourImpactItem.icon}  
                        width='5rem' 
                        height='5rem'
                      />
                    </div>
                  </Picture>

                  <div className={styles.ourImpactText}>
                    {ourImpactItem.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.getInvolvedContainer}>
            <Title title='How You Can Get Involved'/>
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
