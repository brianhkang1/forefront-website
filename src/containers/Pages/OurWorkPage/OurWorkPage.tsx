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
import Spacer from '../../../components/Spacer';

import HatIcon from '../../../Images/OurWorkPage/Hat.png';
import HatShadowIcon from '../../../Images/OurWorkPage/HatShadow.png';
import SchoolIcon from '../../../Images/OurWorkPage/School.png';
import SchoolShadowIcon from '../../../Images/OurWorkPage/SchoolShadow.png';
import SoapIcon from '../../../Images/OurWorkPage/Soap.png';
import SoapShadowIcon from '../../../Images/OurWorkPage/SoapShadow.png';
import WaterIcon from '../../../Images/OurWorkPage/Water.png';
import WaterShadowIcon from '../../../Images/OurWorkPage/WaterShadow.png';

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
    icon: WaterIcon,
    selectedIcon: WaterShadowIcon,
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
    icon: SoapIcon,
    selectedIcon: SoapShadowIcon,
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
    icon: SchoolIcon,
    selectedIcon: SchoolShadowIcon,
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
    icon: HatIcon,
    selectedIcon: HatShadowIcon,
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
        {/* mobile view */}
        {window.matchMedia("(max-width: 740px)").matches && (
          <div className={styles.header}>
            <Header/>
          </div>
        )}

        <div className={styles.featurePictureContainer}>
          <PictureFilter>
            {/* laptop view */}
            {window.matchMedia("(min-width: 741px)").matches && (
              <div className={styles.header}>
                <Header/>
              </div>
            )}   
        
            <PictureText className={styles.heroText}>
              <div className={styles.boldHeroText}>Our Work</div>
              Your donations are invested into building sustainable, community-owned and led initiatives. 
              Our team work closely with local partners to ensure that it is impactful, helps the people 
              in most need, and that every dollar is well spent and accounted for.
            </PictureText>
          </PictureFilter>
        </div>

        <OurWorkVisual
          backgroundColor={'var(--blue-color)'}
          visualData={waterVisualData}
        />

        <OurWorkVisual
          backgroundColor={'var(--yellow-color)'}
          visualData={schoolVisualData}
        />
        
        <Spacer height='2.5rem'/>
        <StatisticsVisual/>

        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default OurWorkPage;
