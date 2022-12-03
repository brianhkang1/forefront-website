import React from 'react';
import styles from './OurWorkPage.module.css';
import {
  waterWellsData,
  soapToysData,
  schoolStudentsData,
  diabetesData,
  engagementSessionsData,
  changemakersData,
} from './data';

import Header from '../../Header';
import Footer from '../../Footer';
import BarChart from '../../../components/BarChart';
import OurWorkVisual from '../../../components/OurWorkVisual';
import StatisticsVisual from '../../../components/StatisticsVisual';
import PictureFilter from '../../../components/PictureFilter';
import PictureText from '../../../components/PictureText';
import Map from '../../../components/Map';
import Picture from '../../../components/Picture';

import HatIcon from '../../../Images/OurWorkPage/Hat.png';
import SchoolIcon from '../../../Images/OurWorkPage/School.png';
import SoapIcon from '../../../Images/OurWorkPage/Soap.png';
import WaterIcon from '../../../Images/OurWorkPage/Water.png';
import SchoolFloorPlan from '../../../Images/OurWorkPage/FloorPlan.png';
import MedicalIcon from '../../../Images/Icons/FourPillars/Medical.png';
import EmpowermentIcon from '../../../Images/Icons/FourPillars/Empowerment.png';
import Diversity3Icon from '../../../Images/Icons/Diversity3.svg';

const blueVisualData = [
  {
    name: 'waterWells',
    icon: WaterIcon,
    chart: <BarChart data={waterWellsData} domain={[0, 80]} isWhite />,
    bigNumber: '61',
    subTitle: <div>total water wells built</div>,
    description: (
      <>
        <div>
          FOREFRONT Charity consistently plans and implements innovative solutions to retrieve cleaner water in a
          fraction of the time. This means more time for school, medical attention, and life. This small investment in a
          community’s source of water provides an overflow of better living that lasts.
        </div>
      </>
    ),
  },
  {
    name: 'soapToys',
    icon: SoapIcon,
    chart: <BarChart data={soapToysData} domain={[0, 8000]} isWhite />,
    bigNumber: '8000+',
    subTitle: <div>total soap toys</div>,
    description: (
      <div>
        Our past partnership includes working with the local Indian government (National Swachh Bharat program) by
        launching a women-led soap business to educate on the importance of hand washing while distributing soaps to
        villagers. Our current aim continues to focus on initiatives to help locals make and distribute soap.
      </div>
    ),
  },
];

const yellowVisualData = [
  {
    name: 'schoolStudents',
    icon: SchoolIcon,
    chart: <BarChart data={schoolStudentsData} domain={[0, 200]} isWhite />,
    bigNumber: '160',
    subTitle: <div>number of students</div>,
    description: (
      <div>
        FOREFRONT School aspires to provide an excellent education to all students, regardless of their gender or
        demographics, so that they can become skilled and active future change agents in their communities. Teachers and
        parents will work together to ensure that students at the primary school develop rigorous critical thinking
        skills, core values, and acquire enduring understandings on how to exercise appropriate self-care.
      </div>
    ),
  },
  {
    name: 'schoolFloorPlan',
    icon: HatIcon,
    chart: (
      <Picture
        src={SchoolFloorPlan}
        width='100%'
        height={window.matchMedia('(min-width: 769px)').matches ? '400px' : '200px'}
        backgroundSize='contain'
      />
    ),
    bigNumber: (
      <span className={styles.schoolFootprintBigNum}>
        20,230 ft<sup>2</sup>
      </span>
    ),
    subTitle: <div className={styles.schoolFootprintSubtitle}>FOREFRONT School Footprint</div>,
    description: (
      <div>
        Our school is located in Kolluru, India, where children have no access to a high quality education. Of the
        18,000 primary-aged children living within 5 miles of our school, 40% are not in attendance. Secondary school
        attendance is 37% in Kolluru vs 74% in India, and 76% worldwide. Just among the 2nd grade children attending
        school within 5 miles from Kolluru, 33% cannot recognize letters, 20% cannot recognize the numbers 1 through 9,
        80% have no computer access, and 44% have no toilet access. Here at our facility, we plan to change that.
      </div>
    ),
  },
];

const redVisualData = [
  {
    name: 'diabetesPatients',
    icon: MedicalIcon,
    chart: <BarChart data={diabetesData} domain={[0, 800]} isWhite />,
    bigNumber: '600+',
    subTitle: <div>individuals reached</div>,
    description: (
      <div>
        Diabetes is one of the most prevalent non-communicable diseases in India today with India having the second
        highest number of diabetic adults in the world.  We provide diabetes awareness, education, detection, and
        prevention to prevent the onset of many more serious illnesses.
      </div>
    ),
  },
];

const purpleVisualData = [
  {
    name: 'engagementSessions',
    icon: Diversity3Icon,
    chart: <BarChart data={engagementSessionsData} domain={[0, 30]} isWhite />,
    bigNumber: '27',
    subTitle: <div>community engagement sessions</div>,
    description: (
      <>
        <div>
          We work closely with locals to understand the unique needs of each community we serve.  With the optimal
          intervention, we hold community engagement sessions which are a gathering of community members to implement
          our programs.  This includes but not limited to: town halls, clean water awareness, diabetes workshops, girls
          empowerment (FOREFRONT Fearless), and feminine hygiene.
        </div>
      </>
    ),
  },
  {
    name: 'changemakers',
    icon: EmpowermentIcon,
    chart: <BarChart data={changemakersData} domain={[0, 200]} isWhite />,
    bigNumber: '150+',
    subTitle: <div>total Changemakers</div>,
    description: (
      <div>
        The Changemaker Leadership Program identifies, trains, and recruits passionate local individuals to make an
        impact in their communities. Our local Changemakers take ownership over and lead all our programs creating a
        ripple effect of sustainable change.
      </div>
    ),
  },
];

class OurWorkPage extends React.Component {
  render() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    return (
      <div className={styles.root}>
        {/* mobile view */}
        {isMobile && (
          <div className={styles.header}>
            <Header />
          </div>
        )}

        <div className={styles.heroPictureContainer}>
          <PictureFilter>
            {/* desktop view */}
            {isDesktop && (
              <div className={styles.header}>
                <Header />
              </div>
            )}

            <PictureText className={styles.heroText}>
              Your donations build sustainable, community-owned and community-led initiatives
            </PictureText>
          </PictureFilter>
        </div>

        <OurWorkVisual backgroundColor={'var(--blue-color)'} visualData={blueVisualData} />
        <OurWorkVisual backgroundColor={'var(--yellow-color)'} visualData={yellowVisualData} />
        <OurWorkVisual backgroundColor={'var(--red-color)'} visualData={redVisualData} />
        <OurWorkVisual backgroundColor={'var(--purple-color)'} visualData={purpleVisualData} />

        <StatisticsVisual />

        <Map />
        <Footer />
      </div>
    );
  }
}

export default OurWorkPage;
