import React from 'react';
import styles from './HomePage.module.css';
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
import Popup from '../../../components/Popup';

import OurImpactWater from '../../../Images/HomePage/OurImpact_Water.jpg';
import OurImpactEducation from '../../../Images/HomePage/OurImpact_Education.jpg';
import OurImpactMedical from '../../../Images/HomePage/OurImpact_Medical.png';
import OurImpactEmpowerment from '../../../Images/HomePage/OurImpact_Empowerment.jpg';
import GetInvolvedPic1 from '../../../Images/HomePage/GetInvolved1.jpg';
import GetInvolvedPic2 from '../../../Images/HomePage/GetInvolved2.jpg';
import GetInvolvedPic3 from '../../../Images/HomePage/GetInvolved3.jpg';
import TheirVisionIsOurMissionDesktop from '../../../Images/HomePage/TVIOM_Desktop.png';
import TheirVisionIsOurMissionMobile from '../../../Images/HomePage/TVIOM_Mobile.png';
import WaterIcon from '../../../Images/Icons/FourPillars/Water_color.png';
import EducationIcon from '../../../Images/Icons/FourPillars/Education_color.png';
import MedicalIcon from '../../../Images/Icons/FourPillars/Medical_color.png';
import EmpowermentIcon from '../../../Images/Icons/FourPillars/Empowerment_color.png';

const OurImpact = [
  {
    type: 'WATER & SANITATION',
    image: OurImpactWater,
    icon: WaterIcon,
    text: (
      <span>
        <span className={styles.greenBold}>34</span> water wells
        <br />
        <span className={styles.greenBold}>94%</span> hand-washing rate
        <Popup content="Up from 39%" />
      </span>
    ),
  },
  {
    type: 'EDUCATION',
    image: OurImpactEducation,
    icon: EducationIcon,
    text: (
      <span>
        <span className={styles.greenBold}>7:1</span> student to teacher ratio
        at our After School program
      </span>
    ),
  },
  {
    type: 'MEDICAL',
    image: OurImpactMedical,
    icon: MedicalIcon,
    text: (
      <span>
        <span className={styles.greenBold}>5</span> health and wellness
        workshops
      </span>
    ),
  },
  {
    type: 'EMPOWERMENT',
    image: OurImpactEmpowerment,
    icon: EmpowermentIcon,
    text: <span>Soap business run by local women</span>,
  },
];

const GetInvolved = [
  {
    image: GetInvolvedPic1,
    text: 'Donate',
    link: 'https://secure.givelively.org/donate/forefront-charity',
  },
  {
    image: GetInvolvedPic2,
    text: 'Monthly Donor',
    link: './builders',
  },
  {
    image: GetInvolvedPic3,
    text: 'Campaign',
    link:
      'https://secure.givelively.org/donate/forefront-charity/start-something',
  },
];

class HomePage extends React.Component {
  render() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    const renderPictureText = item => {
      return (
        <div className={styles.link}>
          <Button>
            <a
              href={item.link}
              target={item.link === './builders' ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          </Button>
        </div>
      );
    };

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

            <PictureText padding="1.5rem" className={styles.heroText}>
              <div>We build a future where dreamers</div>
              <ReactTypingEffect
                speed={75}
                eraseDelay={1000000}
                text="become changemakers."
              />
            </PictureText>
          </PictureFilter>
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
            backgroundSize="contain"
          />
        </div>

        <OurMissionContainer />
        <FourPillarsContainer />

        <div className={styles.ourImpactContainer}>
          <Title
            title="Our Impact"
            description="We are passionate and serious about making changemakers.  
              That’s why 100% of your donation goes to our efforts and impact."
          />
          <div className={styles.ourImpactItemContainer}>
            {OurImpact.map((ourImpactItem, index) => (
              <div className={styles.ourImpactItem}>
                <Picture
                  key={`ourImpactItem-${index + 1}`}
                  src={ourImpactItem.image}
                  className={styles.ourImpactImage}
                  width="18rem"
                  height="18rem"
                  mobileWidth="70vw"
                  mobileHeight="70vw"
                >
                  <div className={styles.ourImpactIcon}>
                    <Picture
                      src={ourImpactItem.icon}
                      width="5rem"
                      height="5rem"
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

        <div className={styles.getInvolvedContainer}>
          <Title
            title="How You Can Get Involved"
            description="Take action today and enable future leaders to make local-to-local impact."
          />
          <div className={styles.getInvolvedItemContainer}>
            {GetInvolved.map(getInvolvedItem => (
              <Picture
                className={styles.getInvolvedImage}
                src={getInvolvedItem.image}
                width="22rem"
                height="25rem"
                mobileWidth="90vw"
                mobileHeight="40vh"
              >
                {renderPictureText(getInvolvedItem)}
              </Picture>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
