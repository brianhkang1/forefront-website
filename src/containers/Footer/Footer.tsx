import React from 'react';
import styles from './Footer.module.css';
import { Icon } from 'semantic-ui-react';
import EmailForm from '../../components/EmailForm';
import ExposureIcon from '../../Images/Icons/exposureWhite.png';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.leftAlign}>
          <div className={styles.emailFormContainer}>
            <div className={styles.title}>Get Email Updates</div>
            <EmailForm />
          </div>

          <div className={styles.iconsContainer}>
            <a
              className={styles.whiteIcon}
              href={'https://www.facebook.com/goforefront'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="facebook f" size="large" />
            </a>
            <a
              className={styles.whiteIcon}
              href={'https://www.instagram.com/goforefront'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" size="large" />
            </a>
            <a
              className={styles.whiteIcon}
              href={'http://smile.amazon.com/ch/47-3373120'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="amazon" size="large" />
            </a>
            <a
              className={styles.whiteIcon}
              href={'https://twitter.com/goforefront'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="twitter" size="large" />
            </a>
            <a
              className={styles.whiteIcon}
              href={'https://blog.goforefront.org/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.exposureIcon}
                src={ExposureIcon}
                width="28px"
                height="28px"
                alt="Exposure icon"
              />
            </a>
          </div>
        </div>

        <div className={styles.rightAlign}>
          <div className={styles.text}>© 2021 by FOREFRONT Charity</div>
          <div className={`${styles.text} ${styles.textCenterAlign}`}>
            <div>450 Lexington Ave #1818</div>
            <div>New York, NY, 10017</div>             
          </div>
          <div className={styles.text}>contact@goforefront.org</div>
          <div className={styles.text}>
            US 501(c)(3) Public Charity, EIN 47-3373120
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
