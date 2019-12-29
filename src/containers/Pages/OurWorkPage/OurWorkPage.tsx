import React from 'react';
import styles from './OurWorkPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';
import StatisticsVisual from '../../../components/StatisticsVisual';
import PictureFilter from '../../../components/PictureFilter';

class OurWorkPage extends React.Component{
  componentDidMount(){
    setTimeout(() => window.scrollTo({top: 0, left: 0}), 1000)
  }

  render(){
    return (
      <div className={styles.root}>
        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div>       
          </PictureFilter>
        </div>

        <div className={styles.currentProjectsContainer}>
          <div className={styles.title}>Current Projects</div>
          <div className={styles.divider}></div>
        </div>

        <StatisticsVisual/>
        <Footer/>
      </div>
    );
  }
}

export default OurWorkPage;
