import React from 'react';
import styles from './OurWorkPage.module.css';

import Header from '../../Header';
import Footer from '../../Footer';
import BarChart from '../../../components/BarChart';
import StatisticsVisual from '../../../components/StatisticsVisual';
import PictureFilter from '../../../components/PictureFilter';
import PictureText from '../../../components/PictureText';
import Map from '../../../components/Map';

const waterWellData = [
  {
    'name': 2015,
    'value': 2
  },
  {
    'name': 2016,
    'value': 6
  },
  {
    'name': 2017,
    'value': 12
  },
  {
    'name': 2018,
    'value': 19
  },
  {
    'name': 2019,
    'value': 28
  },
]

const soapToysData = [
  {
    'name': 2015,
    'value': 0
  },
  {
    'name': 2016,
    'value': 1000
  },
  {
    'name': 2017,
    'value': 2000
  },
  {
    'name': 2018,
    'value': 3000
  },
  {
    'name': 2019,
    'value': 3500
  },
]

const schoolFundsData = [
  {
    'name': 2015,
    'value': 0
  },
  {
    'name': 2016,
    'value': 0
  },
  {
    'name': 2017,
    'value': 60000
  },
  {
    'name': 2018,
    'value': 170000
  },
  {
    'name': 2019,
    'value': 230000
  },
]

class OurWorkPage extends React.Component{
  // componentDidMount(){
  //   setTimeout(() => window.scrollTo({top: 0, left: 0}), 1000)
  // }

  render(){
    return (
      <div className={styles.root}>
        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div>    
        
            <PictureText className={styles.title}>
              Some sort of <br/> title here
            </PictureText>
          </PictureFilter>
        </div>

        <div 
          style={{backgroundColor: 'rgb(64,116,177)'}}
          className={`${styles.chartContainer} wow fadeIn`} 
        >
          <div className={styles.chartDescription}>
            <div className={styles.bigNumber}>+11</div>
            <div>water wells</div>
            <div>projected in 2020</div>
          </div>

          <div className={styles.chart}>
            <BarChart 
              data={waterWellData} 
              domain={[0, 30]} 
              isWhite
            />
          </div>
        </div>

        <div 
          style={{backgroundColor: 'rgb(69,158,172)'}}
          className={`${styles.chartContainer} wow fadeIn`}
        >
          <div className={styles.chart}>
            <BarChart 
              data={soapToysData} 
              domain={[0, 3500]} 
              isWhite
            />
          </div>

          <div className={styles.chartDescription}>
            <div className={styles.bigNumber}>3500+</div>
            <div>total soap toys</div>
          </div>
        </div>

        <div 
          style={{backgroundColor: 'rgb(217,91,94)'}}
          className={`${styles.chartContainer} wow fadeIn`}
        >
          <div className={styles.chartDescription}>
            <div className={styles.bigNumber}>$470K</div>
            <div>fundraised</div>
            <div>for school</div>
          </div>

          <div className={styles.chart}>
            <BarChart 
              data={schoolFundsData} 
              domain={[0, 250000]} 
              isWhite
              isMoney
            />
          </div>
        </div>

        <StatisticsVisual/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default OurWorkPage;
