import React from 'react';
import styles from './OurWorkPage.module.css';
import { Spring } from 'react-spring/renderprops';
import Header from '../Header';
import Footer from '../Footer';

class OurWorkPage extends React.Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Header
            isBlackText
          />
        </div>
        
        <div className={styles.titleContainer}>
          <div className={styles.title}>Our Work</div>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.featureContainer}>
          <div className={`${styles.featurePicture} wow fadeIn`}></div>
          <div className={styles.featureText}>
            <div className={`${styles.bigText} wow fadeIn`} style={{animationDelay: "1s"}}>
              We invest your donations towards innovative and sustainable projects that are centered around local solutions.
            </div> 
            
            <div className={`${styles.smallText} wow fadeIn`} style={{animationDelay: "2s"}}>
              Another focus is to ensure project transparency that reports back the results of all our initiatives.  
              Learn more about the impact of our work.
            </div>
            
            <div className={`${styles.redirect} wow fadeIn`} style={{animationDelay: "3s"}}>
              add icon here
            </div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statsItem}>
          <Spring
            from={{ number: 0 }}
            to={{ number: 50000 }}>
            {props => 
              <div className="wow zoomIn">
                <span className={styles.numberCounterItem}>{props.number.toFixed(0)}+</span> <div>villagers with accessible water</div>
              </div>
            }
          </Spring>
          </div>
          <div className={styles.statsItem}>
          <Spring
            from={{ number: 0 }}
            to={{ number: 2500 }}>
            {props => 
              <div className="wow zoomIn">
                <span className={styles.numberCounterItem}>{props.number.toFixed(0)}+</span> <div>soaps distributed</div>
              </div>
            }
          </Spring>
          </div>
          <div className={styles.statsItem}>
          <Spring
            from={{ number: 0 }}
            to={{ number: 19000 }}>
            {props => 
              <div className="wow zoomIn">
                <span className={styles.numberCounterItem}>{props.number.toFixed(0)} sq ft</span> <div>school building in progress</div>
              </div>
            }
          </Spring>
          </div>
          <div className={styles.statsItem}>
          <Spring
            from={{ number: 0 }}
            to={{ number: 500 }}>
            {props => 
              <div className="wow zoomIn">
                <span className={styles.numberCounterItem}>{props.number.toFixed(0)}+</span> <div>rando stat number</div>
              </div>
            }
          </Spring>
          </div>
        </div>

        <div className={styles.currentProjectsContainer}>
          <div className={styles.title}>Current Projects</div>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.footerContainer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default OurWorkPage;
