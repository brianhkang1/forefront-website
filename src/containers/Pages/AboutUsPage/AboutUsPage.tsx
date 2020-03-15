import React from 'react';
import styles from './AboutUsPage.module.css'
import Header from '../../Header';
import Footer from '../../Footer';
import Button from '../../../components/Button';

import AnnualReportIcon from '../../../Images/Icons/annualReport_icon.png';
import BlogIcon from '../../../Images/Icons/blog_icon.png';
import SoTIcon from '../../../Images/Icons/SoT_icon.png';
// @ts-ignore
import Report from '../../../Documents/annual_report_2018.pdf';
import PictureFilter from '../../../components/PictureFilter';
import PictureText from '../../../components/PictureText';
import OurTeamContainer from '../../OurTeamContainer';

class AboutUsPage extends React.Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div>

            <div className={styles.title}>
              <PictureText>
                Change happens through <br/> powerful individuals
              </PictureText>
            </div>

            <div className={styles.buttonContainer}>
              <Button size="large">
                <a 
                  style={{opacity: 0.8}} 
                  href="https://blog.goforefront.org/the-force-of-four" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </div>

          </PictureFilter>
        </div>
        
        <div className={styles.iconsContainer}>
          <a 
            href="https://www.guidestar.org/profile/47-3373120" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${SoTIcon})`}}/>
                <div className={styles.iconText}>We are a 501(c)(3) non-profit committed to transparency</div>
                <div className={styles.iconLink}>We are gold certified</div>
            </div>
          </a>
          <a 
            href={Report} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${AnnualReportIcon})`}}/>
                <div className={styles.iconText}>We ensure 100% of your <br/> donations go to the cause</div>
                <div className={styles.iconLink}>See our annual report</div>
            </div>
          </a>
          <a 
            href="https://blog.goforefront.org" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${BlogIcon})`}}/>
                <div className={styles.iconText}>Read about our personal <br/> experiences from the field</div>
                <div className={styles.iconLink}>Check out our blog</div>
            </div>
          </a>
        </div>

        <OurTeamContainer/>
        <Footer/>
      </div>
    );
  }
}

export default AboutUsPage;
