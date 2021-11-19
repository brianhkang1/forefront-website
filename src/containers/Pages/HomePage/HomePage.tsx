import React from 'react';
import styles from './HomePage.module.css';
import ReactTypingEffect from 'react-typing-effect';
import { isMobile, isDesktop } from '../../../util';

import CovidReliefPic from '../../../Images/CovidRelief.jpg';
import Button from '../../../components/Button';

import PictureText from '../../../components/PictureText';
import OurMissionContainer from '../../OurMissionContainer';
import FourPillarsContainer from '../../FourPillarsContainer';
import Picture from '../../../components/Picture';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';
import Title from '../../../components/Title';
import Popup from '../../../components/Popup';
import YourResponseContainer from '../../YourResponseContainer';

import OurImpactWater from '../../../Images/HomePage/OurImpact_Water.jpg';
import OurImpactEducation from '../../../Images/HomePage/OurImpact_Education.jpg';
import OurImpactMedical from '../../../Images/HomePage/OurImpact_Medical.png';
import OurImpactEmpowerment from '../../../Images/HomePage/OurImpact_Empowerment.jpg';
import TheirVisionIsOurMissionDesktop from '../../../Images/HomePage/TVIOM_Desktop.png';
import TheirVisionIsOurMissionMobile from '../../../Images/HomePage/TVIOM_Mobile.png';
import WaterIcon from '../../../Images/Icons/FourPillars/Water_color.png';
import EducationIcon from '../../../Images/Icons/FourPillars/Education_color.png';
import MedicalIcon from '../../../Images/Icons/FourPillars/Medical_color.png';
import EmpowermentIcon from '../../../Images/Icons/FourPillars/Empowerment_color.png';

// import GoogleEventTracker from '../../../components/GoogleEventTracker';
// import {
//   GoogleEventAction,
//   GoogleEventCategory,
//   GoogleEventLabel
// } from '../../../util';

const OurImpact = [
  {
    type: 'WATER & SANITATION',
    image: OurImpactWater,
    icon: WaterIcon,
    text: (
      <span>
        <span className={styles.greenBold}>45</span> water wells
        <br />
        <span className={styles.greenBold}>94%</span> hand-washing rate
        <Popup content='Up from 39%' />
      </span>
    )
  },
  {
    type: 'EDUCATION',
    image: OurImpactEducation,
    icon: EducationIcon,
    text: (
      <span>
        <span className={styles.greenBold}>20:1</span> student to teacher ratio
        at FOREFRONT School
      </span>
    )
  },
  {
    type: 'MEDICAL CARE',
    image: OurImpactMedical,
    icon: MedicalIcon,
    text: (
      <span>
        <span className={styles.greenBold}>5</span> health and wellness
        workshops
      </span>
    )
  },
  {
    type: 'EMPOWERMENT',
    image: OurImpactEmpowerment,
    icon: EmpowermentIcon,
    text: <span>Soap business run by local women</span>
  }
];

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        {isMobile && (
          <div className={styles.header}>
            <Header />
          </div>
        )}

        <div className={styles.heroPictureContainer}>
          <PictureFilter>
            {/* desktop view */}
            {isDesktop && (
              <div className={styles.header}>
                <Header />
              </div>
            )}

            {/* TODO: reintroduce after HomePage2 is deprecated */}
            {/* <PictureText padding='1.5rem' className={styles.heroText}>
              <div>We build a future where dreamers become </div>
              <ReactTypingEffect
                speed={75}
                eraseDelay={1000000}
                text='global changemakers'
              />
            </PictureText> */}
          </PictureFilter>
        </div>

        <div className={styles.covidReliefContainer}>
          <Title
            highlightTitle
            title='India COVID-19 Relief'
            description='Infections and deaths are rising in rural areas. Social distancing, lockdowns, and quarantining are more difficult in rural India. 
            With a lack of medical access, shortage of supplies, vaccines, and oxygen tanks, villagers are living in fear. 
            Our communities are in dire situations. To stop the spread, FOREFRONT Charity is: 
            (1) mobilizing a COVID-19 Task Force with the highest level of Personal Protective Equipment (PPE), 
            (2) distributing masks, food & soap, and 
            (3) spreading awareness/information through banner outreach and digital video via WhatsApp.'
          />

          <Picture
            src={CovidReliefPic}
            width='100vw'
            height='60vh'
            mobileHeight='50vh'
          >
            <div className={styles.link}>
              <Button size={isMobile ? 'medium' : 'large'}>
                <a
                  href={
                    'https://secure.givelively.org/donate/forefront-charity/covid-relief-fund?utm_source=wb'
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Give Towards COVID-19 Relief
                </a>
              </Button>
            </div>
          </Picture>
        </div>

        <div className={styles.theirVisionVisual}>
          <Picture
            src={
              isDesktop
                ? TheirVisionIsOurMissionDesktop
                : TheirVisionIsOurMissionMobile
            }
            width={isDesktop ? '70vw' : '80vw'}
            height={isDesktop ? '30vh' : '40vh'}
            backgroundSize='contain'
          />
        </div>

        <OurMissionContainer />
        <FourPillarsContainer />

        <div className={styles.ourImpactContainer}>
          <Title
            title='Our Impact'
            description='Our passion is changing the narrative to make changemakers. That’s why 100% of your donations go directly to our work on the ground.'
          />
          <div className={styles.ourImpactItemContainer}>
            {OurImpact.map((ourImpactItem, index) => (
              <div
                key={`ourImpactItem-${index + 1}`}
                className={styles.ourImpactItem}
              >
                <Picture
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
                  <div>{ourImpactItem.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <YourResponseContainer />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
