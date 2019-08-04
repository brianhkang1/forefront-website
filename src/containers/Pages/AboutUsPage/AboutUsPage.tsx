import React from 'react';
import styles from './AboutUsPage.module.css'
import Header from '../../Header';
import Footer from '../../Footer';

class AboutUsPage extends React.Component{
  render(){
    return (
      <>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default AboutUsPage;
