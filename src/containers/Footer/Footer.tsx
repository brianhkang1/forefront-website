import React from 'react';
import styles from './Footer.module.css'
import { Icon } from 'semantic-ui-react';

class Footer extends React.Component{
  render(){
    return (
      <footer className={styles.footer}>
        <div className={styles.leftAlign}>
          <span className={styles.item}>
            <div className={styles.text}>
              © 2019 by FOREFRONT Charity 

              {/* laptop view */}
              {window.matchMedia("(min-width: 601px)").matches
                  ? ' / ' : ''
              }
            </div> 
            <div className={styles.text}>
              PO Box 1818 New York, NY 10163

              {/* laptop view */}
              {window.matchMedia("(min-width: 601px)").matches
                ? ' / ' : ''
              }
            </div> 
            <div className={styles.text}>contact@goforefront.org</div> 
          </span>
        </div>
        <div className={styles.rightAlign}>
          <span className={styles.whiteIcon}><Icon name="facebook f" size="large" /></span>
          <span className={styles.whiteIcon}><Icon name="tumblr" size="large" /></span>
          <span className={styles.whiteIcon}><Icon name="amazon" size="large" /></span>
          <span className={styles.whiteIcon}><Icon name="twitter" size="large" /></span>
          <span className={styles.whiteIcon}><Icon name="connectdevelop" size="large" /></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
