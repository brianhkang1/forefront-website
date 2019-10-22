import React from 'react';
import styles from './AboutUsPage.module.css'
import Header from '../../Header';
import Footer from '../../Footer';
import Title from '../../../components/Title';
import AnnualReportIcon from '../../../Images/Icons/annualReport_icon.jpg';
import BlogIcon from '../../../Images/Icons/blog_icon.png';
import SoTIcon from '../../../Images/Icons/SoT_icon.png';
// @ts-ignore
import Report from '../../../Documents/annual_report_2018.pdf';

class AboutUsPage extends React.Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.featurePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div>

          <div className={styles.title}>
            Change happens through <br/> powerful individuals
          </div>

          <div className={styles.button}>
            <a 
              style={{color: 'white', opacity: 0.8}} 
              href="https://blog.goforefront.org/the-force-of-four" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.iconsContainerTitle}>
          <Title title="Check us out"/>
        </div>

        <div className={styles.iconsContainer}>
          <a 
            href="https://www.guidestar.org/profile/47-3373120" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${SoTIcon})`}}/>
                <div className={styles.iconLink}>GUIDESTAR CERTIFIED</div>
            </div>
          </a>
          <a 
            href={Report} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${AnnualReportIcon})`}}/>
                <div className={styles.iconLink}>ANNUAL REPORT</div>
            </div>
          </a>
          <a 
            href="https://blog.goforefront.org" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${BlogIcon})`}}/>
                <div className={styles.iconLink}>OUR BLOG</div>
            </div>
          </a>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutUsPage;
