import React from 'react';
import styles from './OurApproachPage.module.css';

import OurApproachFeatureContainer from '../../OurApproachFeatureContainer';
import YourResponseContainer from '../../YourResponseContainer';
import PictureFilter from '../../../components/PictureFilter';
import Title from '../../../components/Title';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureText from '../../../components/PictureText';
import Picture from '../../../components/Picture';
import LongTermSustainabilityImage from '../../../Images/OurApproachPage/LongTermSustainability.jpg';

class OurApproachPage extends React.Component {
  render() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

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
                  <div>change a community's course.</div>
                </>
              ) : (
                <div>
                  Breaking barriers, no matter how small, has the power to
                  change a community's course.
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
            title="Long-term Sustainability"
            description="Our M&E (Monitoring & Evaluation) initiative measures and assesses our project results to inform, adapt, and ensure that all projects are effective and beneficial. We currently maintain a robust project monitoring plan to collect and verify results from our water & sanitation, education, and health initiatives ensuring healthier, happier villagers."
          />

          <Picture
            src={LongTermSustainabilityImage}
            width="100vw"
            height="70vh"
          />
        </div>

        <YourResponseContainer />

        <Footer />
      </div>
    );
  }
}

export default OurApproachPage;
