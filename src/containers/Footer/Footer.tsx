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
              Get Email Updates To Stay Up To Date
            </div>
            <EmailForm/>
          </div>

          <div className={styles.iconsContainer}>
            <span className={styles.whiteIcon}><Icon name="facebook f" size="big" /></span>
            <span className={styles.whiteIcon}><Icon name="tumblr" size="big" /></span>
            <span className={styles.whiteIcon}><Icon name="amazon" size="big" /></span>
            <span className={styles.whiteIcon}><Icon name="twitter" size="big" /></span>
            <span className={styles.whiteIcon}><Icon name="connectdevelop" size="big" /></span>
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
