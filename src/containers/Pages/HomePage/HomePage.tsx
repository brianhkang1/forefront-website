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
    type: 'WATER',
    image: GetInvolvedPic1,
    icon: WaterIcon,
    text: '31 water wells; 94% hand-washing rate (up from 39%)'
  },
  {
    type: 'EDUCATION',
    image: GetInvolvedPic1,
    icon: EducationIcon,
    text: '7:1 student to teacher ratio at our After School program'
  },
  {
    type: 'MEDICAL',
    image: GetInvolvedPic1,
    icon: MedicalIcon,
    text: '5 health and wellness workshops'
  },
  {
    type: 'EMPOWERMENT',
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
        <div className={styles.root}>
          {/* mobile view */}
          {window.matchMedia("(max-width: 740px)").matches && (
            <div className={styles.header}>
              <Header/>
            </div>
          )}

          <div className={styles.featurePictureContainer}> 
            <PictureFilter>
            {/* laptop view */}
            {window.matchMedia("(min-width: 741px)").matches && (
                <div className={styles.header}>
                <Header/>
              </div>
            )}

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
              height='40vh'
              backgroundSize='contain'
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
                    mobileWidth='70vw'
                    mobileHeight='70vw'
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
                    <div className={styles.ourImpactType}>
                      {ourImpactItem.type}
                    </div>
                    <div>
                      {ourImpactItem.text}
                    </div>
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
                  className={styles.getInvolvedImage}
                  src={getInvolvedItem.image}
                  width='22rem' 
                  height='25rem'
                  mobileWidth='90vw'
                  mobileHeight='40vh'
                >
                  <PictureFilter className={styles.getInvolvedImage}>
                    {renderPictureText(getInvolvedItem)}
                  </PictureFilter>
                </Picture>
              ))}
            </div>
          </div>

          <Footer/>
        </div>
    );
  }
}

export default HomePage;
