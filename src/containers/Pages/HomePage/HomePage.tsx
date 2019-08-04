import React from 'react';
import styles from './HomePage.module.css'
import FourPillarsContainer from '../../FourPillarsContainer';
import WhatWeDoContainer from '../../WhatWeDoContainer';
import HomePageVideoContainer from '../../HomePageVideoContainer';
import StatisticsVisual from '../../../components/StatisticsVisual';
import FundraiseCarousel from '../../../components/FundraiseCarousel';
import HowToGetInvolvedContainer from '../../HowToGetInvolvedContainer';
import Header from '../../Header';
import Footer from '../../Footer';
import Logo from '../../../Images/Logos/LogoWhite.png';

class HomePage extends React.Component{

  render(){
    return (
        <>
          <div className={styles.FeaturePictureContainer}> 
            <div className={styles.header}>
              <Header/>
            </div> 

            <div className={styles.title}>
              <span>
                MOVING PEOPLE FORW
                  <span className={styles.logo}>
                    <img 
                      src={Logo} 
                      alt="Logo"
                      style={{width: '2.5rem', height: '5rem'}}
                      />
                  </span>
                RD
              </span>
            </div>  
          </div>


          <WhatWeDoContainer/>
          <HomePageVideoContainer/>
          <FourPillarsContainer/>
          <StatisticsVisual/>
          <FundraiseCarousel/>
          <HowToGetInvolvedContainer/>

          <Footer/>
        </>
    );
  }
}

export default HomePage;
