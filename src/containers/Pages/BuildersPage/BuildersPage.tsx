import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';

class BuildersPage extends React.Component{
  componentDidMount(){
    const script = document.createElement("script");
    script.src = 'https://secure.givelively.org/widgets/branded_donation/forefront-charity.js';
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  render(){
    return (
      <div>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.header}>
            <Header/>
          </div>
        </div>

        <div style={{height: '100vh'}}>
          <div 
            data-widget-src='https://secure.givelively.org/donate/forefront-charity?ref=sd_widget' 
            id="give-lively-widget" 
            className="gl-branded-donation-widget"
          />
        </div>

        <Footer/>
      </div>
    );
  }
}

export default BuildersPage;
