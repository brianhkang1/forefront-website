import React from 'react';
import styles from './SubscribeContainer.module.css';
import EmailForm from '../../components/EmailForm';
import Spacer from '../../components/Spacer';

const SubscribeContainer = () => {
  return (
    <>
    <Spacer/>
    <div className={styles.root}>
      <div className={styles.title}>Get Email Updates</div>
      <div className={styles.subTitle}>Sign up for our newsletter to hear updates from our team and how you can help share the message of hope. CHANGE THIS.</div>
      <EmailForm/>
    </div>
    </>
  )
}

export default SubscribeContainer; 