import React from 'react';
import styles from './AboutUsPage.module.css'
import Header from '../../Header';
import Footer from '../../Footer';
import Button from '../../../components/Button';
import { Dropdown } from 'semantic-ui-react'
import { classNames } from '../../../util';

import AnnualReportIcon from '../../../Images/Icons/annualReport_icon.png';
import BlogIcon from '../../../Images/Icons/blog_icon.png';
import SoTIcon from '../../../Images/Icons/SoT_icon.png';
// @ts-ignore
import Report2017 from '../../../Documents/annual_report_2017.pdf';
// @ts-ignore
import Report2018 from '../../../Documents/annual_report_2018.pdf';
// @ts-ignore
import Report2019 from '../../../Documents/annual_report_2019.pdf';
import PictureFilter from '../../../components/PictureFilter';
import PictureText from '../../../components/PictureText';
import OurTeamContainer from '../../OurTeamContainer';

const AnnualReports = [
  {
    year: '2019',
    href: Report2019
  },
  {
    year: '2018',
    href: Report2018
  },
  {
    year: '2017',
    href: Report2017
  },
]

class AboutUsPage extends React.Component{
  renderLaptopHeroText = () => {
    return (
      <div className={styles.heroTextContainer}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <PictureText padding='1.75rem' className={classNames(styles.heroText1, styles.heroText)}>
            <div>Enable every person</div>
          </PictureText>

          <PictureText padding='1.75rem' className={classNames(styles.heroText, styles.heroText2)}>
            <div>Equip leaders</div>
          </PictureText>

          <PictureText padding='1.75rem' className={classNames(styles.heroText, styles.heroText3)}>
            <div>Establish self-sustaining communities</div>
          </PictureText>

          <div className={styles.buttonContainer}>
            <Button>
              <a 
                href="https://blog.goforefront.org/unlocking-leaders-of-change" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  renderMobileHeroText = () => {
    return (
      <div className={styles.heroTextContainer}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <PictureText padding='1rem' className={classNames(styles.heroText1, styles.heroText)}>
            <div>Enable every person</div>
          </PictureText>

          <PictureText padding='1rem' className={classNames(styles.heroText, styles.heroText2)}>
            <div>Equip leaders</div>
          </PictureText>

          <PictureText padding='1rem' className={classNames(styles.heroText, styles.heroText3)}>
            <div>Establish </div>
            <div>self-sustaining</div>
            <div>communities</div>
          </PictureText>

          <div className={styles.buttonContainer}>
            <Button>
              <a 
                href="https://blog.goforefront.org/unlocking-leaders-of-change" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

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

            {// laptop view
              window.matchMedia("(min-width: 741px)").matches
               ? this.renderLaptopHeroText()
               : this.renderMobileHeroText()
            }
          </PictureFilter>
        </div>
        
        <div className={styles.iconsContainer}>
            <div className={styles.iconContainer}>
                <div className={styles.icon} style={{backgroundImage: `url(${SoTIcon})`}}/>
                <div className={styles.iconText}>We are a 501(c)(3) non-profit <br/>committed to transparency.</div>
                <div className={styles.iconLink}>
                  <a 
                    href="https://www.guidestar.org/profile/47-3373120" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    We are gold certified
                  </a>
                </div>
            </div>

          <div className={styles.iconContainer}>
              <div className={styles.icon} style={{backgroundImage: `url(${AnnualReportIcon})`}}/>
              <div className={styles.iconText}>
              Read our annual reports for <br/>full transparency and program impact.
              </div>
              
              <div className={styles.dropdownContainer}>
                <Dropdown placeholder="Select a year" selection>
                  <Dropdown.Menu>
                    {AnnualReports.map(report => (
                      <Dropdown.Item
                        text={report.year}
                        onClick={() => window.open(report.href)}
                      />
  
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
          </div>

          <div className={styles.iconContainer}>
              <div className={styles.icon} style={{backgroundImage: `url(${BlogIcon})`}}/>
              <div className={styles.iconText}>Read our personal stories and <br/>the impact we are making from the field.</div>
              <div className={styles.iconLink}>
              <a 
                href="https://blog.goforefront.org" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out our blog
              </a>
                </div>
          </div>
        </div>

        <OurTeamContainer/>
        <Footer/>
      </div>
    );
  }
}

export default AboutUsPage;
