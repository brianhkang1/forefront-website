import React from 'react';
import styles from './OurWorkPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';

class OurWorkPage extends React.Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.featurePictureContainer}>
          <div className={styles.header}>
            <Header
            />
          </div>
          
          {/* <div className={styles.titleContainer}>
            <div className={styles.title}>Our Work</div>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.featureContainer}>
            <div className={`${styles.featurePicture} wow fadeIn`}></div>
            <div className={styles.featureText}>
              <div className={`${styles.bigText} wow fadeIn`} style={{animationDelay: "1s"}}>
                We invest your donations towards innovative and sustainable projects that are centered around local solutions.
              </div> 
              
              <div className={`${styles.smallText} wow fadeIn`} style={{animationDelay: "2s"}}>
                Another focus is to ensure project transparency that reports back the results of all our initiatives.  
                Learn more about the impact of our work.
              </div>
              
              <div className={`${styles.redirect} wow fadeIn`} style={{animationDelay: "3s"}}>
                add icon here
              </div>
            </div>
          </div> */}
        </div>

        <div className={styles.currentProjectsContainer}>
          <div className={styles.title}>Current Projects</div>
          <div className={styles.divider}></div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default OurWorkPage;
