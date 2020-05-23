import React from 'react';
import styles from './Footer.module.css'
import { Icon } from 'semantic-ui-react';
import EmailForm from '../../components/EmailForm';

class Footer extends React.Component{
  render(){
    return (
      <div className={styles.root}>
        <div className={styles.leftAlign}>
          <div className={styles.emailFormContainer}>
            <div className={styles.title}>
              Get Email Updates
            </div>
            <EmailForm/>
          </div>

          <div className={styles.iconsContainer}>
            <span className={styles.whiteIcon}><Icon name="facebook f" size="large" /></span>
            <span className={styles.whiteIcon}><Icon name="tumblr" size="large" /></span>
            <span className={styles.whiteIcon}><Icon name="amazon" size="large" /></span>
            <span className={styles.whiteIcon}><Icon name="twitter" size="large" /></span>
            <span className={styles.whiteIcon}><Icon name="connectdevelop" size="large" /></span>
          </div>
        </div>

        <div className={styles.rightAlign}>
          <div className={styles.text}>
              © 2020 by FOREFRONT Charity 
            </div> 
            <div className={styles.text}>
              PO Box 1818 New York, NY 10163
            </div> 
            <div className={styles.text}>
              contact@goforefront.org
            </div> 
            <div className={styles.text}>
              US 501(c)(3) Public Charity, EIN 47-3373120
            </div> 
        </div>
      </div>
    );
  }
}

export default Footer;
