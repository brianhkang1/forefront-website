import React from 'react';
import styles from './OurApproachPage.module.css';
import Header from '../Header';
import Footer from '../Footer';

class OurApproachPage extends React.Component{
  render(){
    return (
      <div>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div> 
        </div>

        <Footer/>
      </div>
    );
  }
}

export default OurApproachPage;
