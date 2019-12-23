import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';

class BuildersPage extends React.Component{
  render(){
    return (
      <div>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div>
        </div>

        <div 
          data-widget-src='https://secure.givelively.org/donate/forefront-charity?ref=sd_widget' 
          id="give-lively-widget" 
          className="gl-branded-donation-widget"
        />

        <Footer/>
      </div>
    );
  }
}

export default BuildersPage;
