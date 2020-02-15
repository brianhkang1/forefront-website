import React from 'react';
import styles from './SubscribeContainer.module.css';
import EmailForm from '../../components/EmailForm';
import PictureFilter from '../../components/PictureFilter';
import PictureText from '../../components/PictureText';
import Spacer from '../../components/Spacer';

const SubscribeContainer = () => {
  return (
    <>
    <Spacer/>
    <div className={styles.root}>
      <PictureFilter>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <PictureText opacity={0.8}>
              Get Email Updates
            </PictureText>
          </div>
          <div className={styles.subTitle}>
            <PictureText opacity={0.8}>
              Sign up for our newsletter to hear updates from our team and how you can help share the message of hope. 
              CHANGE THIS.
            </PictureText>
          </div>
          <EmailForm/>
        </div>
      </PictureFilter>
    </div>
    </>
  )
}

export default SubscribeContainer; 