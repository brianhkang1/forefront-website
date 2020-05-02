import React from 'react';
import styles from './OurWorkPage.module.css';

import Header from '../../Header';
import Footer from '../../Footer';
import BarChart from '../../../components/BarChart';
import OurWorkVisual from '../../../components/OurWorkVisual';
import StatisticsVisual from '../../../components/StatisticsVisual';
import PictureFilter from '../../../components/PictureFilter';
import PictureText from '../../../components/PictureText';
import Map from '../../../components/Map';
import { Icon } from 'semantic-ui-react';

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

const waterVisualData = [
  {
    name: 'waterWells',
    icon: <Icon name="tint" size="large"/>,
    chart: (
      <BarChart 
        data={waterWellData} 
        domain={[0, 30]} 
        isWhite
      />
    ),
    bigNumber: '+11',
    subTitle: <div>water wells projected in 2020</div>,
    description: (
      <>
      <div>
        FOREFRONT is consistently planning and implementing innovative
        solutions to provide clean water with lower downtime and
        a cleaner source of water.
        Retrieving water only takes a fraction of the time, which
        means more time for school and medical attention. This small investment to a 
        community's source of life has the power to strengthen its 
        capacity for a change that lasts.
      </div>
      </>
    )
  },
  {
    name: 'soapToys',
    icon: <Icon name="tint" size="large"/>,
    chart: (
      <BarChart 
        data={soapToysData} 
        domain={[0, 3500]} 
        isWhite
      />
    ),
    bigNumber: '3500+',
    subTitle: <div>total soap toys</div>,
    description: (
      <div>
        add some description text here about soap toys
      </div>
    )
  }
]

const schoolVisualData = [
  {
    name: 'fundraisedAmount',
    icon: <Icon name="graduation cap" size="large"/>,
    chart: (
      <BarChart 
        data={schoolFundsData} 
        domain={[0, 250000]} 
        isWhite
        isMoney
      />
    ),
    bigNumber: '$470K',
    subTitle: <div>fundraised for school</div>,
    description: (
      <div>
        FOREFRONT International School aspires to provide an 
        excellent education to all students,regardless of their
        gender or demographics, so that they can become
        skilled and active future change agents in their communities.
        Teachers and parents will work together to ensure that 
        students at the primary school develop rigorous critical thinking
        skills, core values, and acquire enduring understandings on how
        to exercise appropriate self-care.
        
      </div>
    )
  },
  {
    name: 'soapToys',
    icon: <Icon name="graduation cap" size="large"/>,
    chart: (
      <BarChart 
        data={soapToysData} 
        domain={[0, 3500]} 
        isWhite
      />
    ),
    bigNumber: '3500+',
    subTitle: <div>total soap toys</div>,
    description: (
      <div>
        add some description text here about soap toys
      </div>
    )
  }
]

class OurWorkPage extends React.Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div>    
        
            <PictureText className={styles.heroText}>
              Thanks to you, we accomplished much together,
              and we are excited for the upcoming projects 
              we have in our pipeline! 
            </PictureText>
          </PictureFilter>
        </div>

        <OurWorkVisual
          backgroundColor={'var(--blue-color)'}
          visualData={waterVisualData}
        />

        <StatisticsVisual/>

        <OurWorkVisual
          backgroundColor={'var(--red-color)'}
          visualData={schoolVisualData}
        />

        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default OurWorkPage;
