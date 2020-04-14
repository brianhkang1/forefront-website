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
        <PictureText className={styles.title}>
          Get Email Updates
        </PictureText>
        
        <PictureText className={styles.subTitle}>
          Sign up for our newsletter to hear updates from our team and how you can help share the message of hope. 
          CHANGE THIS.
        </PictureText>
        
        <div className={styles.emailButton}>
          <EmailForm/>
        </div>
      </PictureFilter>
    </div>
    </>
  )
}

export default SubscribeContainer; 