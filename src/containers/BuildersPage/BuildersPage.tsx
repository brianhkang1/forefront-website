import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../Header';
import Footer from '../Footer';

class BuildersPage extends React.Component{
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

export default BuildersPage;
