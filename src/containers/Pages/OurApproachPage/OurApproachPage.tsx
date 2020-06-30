import React from 'react';
import styles from './OurApproachPage.module.css';

import OurApproachFeatureContainer from '../../OurApproachFeatureContainer';
import PictureFilter from '../../../components/PictureFilter';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureText from '../../../components/PictureText';
import Picture from '../../../components/Picture';

import GetInvolvedPic1 from '../../../Images/HomePage/GetInvolved1.jpg';
import GetInvolvedPic2 from '../../../Images/HomePage/GetInvolved2.jpg';
import GetInvolvedPic3 from '../../../Images/HomePage/GetInvolved3.jpg';
import LongTermSustainabilityImage from '../../../Images/OurApproachPage/LongTermSustainability.jpg';

const GetInvolved = [
  {
    image: GetInvolvedPic1,
    text: 'Donate',
    link: 'https://secure.givelively.org/donate/forefront-charity',
  },
  {
    image: GetInvolvedPic2,
    text: 'Become a Builder',
    link: './builders',
  },
  {
    image: GetInvolvedPic3,
    text: 'Start a Fundraiser',
    link:
      'https://secure.givelively.org/donate/forefront-charity/start-something/fundraisers/options',
  },
];

class OurApproachPage extends React.Component {
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
        {/* mobile view */}
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

            <PictureText className={styles.heroText} padding="1rem 2rem">
              {isDesktop ? (
                <>
                  <div>Breaking barriers, no matter</div>
                  <div>how small, has the power to</div>
                  <div>change a community's course</div>
                </>
              ) : (
                <div>
                  Breaking barriers, no matter how small, has the power to
                  change a community's course
                </div>
              )}
            </PictureText>
          </PictureFilter>
        </div>

        <Title
          title="Four Pillars"
          description="The lack of clean water, education, medical care, and opportunity in rural areas limits villagers’ potential. We want to replace these barriers with foundations for growth."
        />

        <OurApproachFeatureContainer />

        <div>
          <Title
            title="Monitoring & Evaluation (M&E)"
            description="Our M&E initiative measures and assesses our project results to inform, adapt, and ensure that all projects are effective and beneficial. We currently maintain a robust project monitoring plan to collect and verify results from our water & sanitation, education, and health initiatives ensuring healthier, happier villagers."
          />

          <Picture
            src={LongTermSustainabilityImage}
            width="100vw"
            height="70vh"
          />
        </div>

        <div className={styles.getInvolvedContainer}>
          <Title
            title="How You Can Get Involved"
            description="Take action today and enable future leaders to make local-to-local impact."
          />
          <div className={styles.getInvolvedItemContainer}>
            {GetInvolved.map((getInvolvedItem, index) => (
              <Picture
                key={'getInvolvedItem' + (index + 1)}
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

export default OurApproachPage;
