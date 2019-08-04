import React from 'react';
import styles from './WhatWeDoContainer.module.css';
import Logo from '../../Images/Logos/LogoColor.jpg';

const WhatWeDoContainer = () => {
  return(
    <div className={styles.root}>
      <div className={styles.whiteDivider}/>
      <div className={`${styles.titleContainer}`}>
        <div className={styles.title}>
          <span className={styles.highlight}>OUR MISSION</span>
        </div>
      </div>

      <div className={styles.subHeaderContainer}>
        Forefront is a non-profit charity organization randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
      </div>

      <div className={`${styles.descriptionContainer}`}>
        <span className={styles.description}>
          Enable every person
        </span>

        <span className={styles.forwardSlash}> / </span>

        <span className={styles.description}>
          Equip leaders
        </span>

        <span className={styles.forwardSlash}> / </span>

        <span className={styles.description}>
          Establish self-sustaining communities
        </span>

      </div>

      <div className={styles.logo}>
        <img 
          src={Logo} 
          alt="Logo"
          style={{width: '5rem', height: '5rem'}}
        />
      </div>

    </div>
  )
}

export default WhatWeDoContainer;