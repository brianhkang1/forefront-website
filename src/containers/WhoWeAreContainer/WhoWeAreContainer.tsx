import React from 'react';
import styles from './WhoWeAreContainer.module.css';

class WhoWeAreContainer extends React.Component{

  render(){
  return(
    <div className={styles.root}>
      <div className={`${styles.titleContainer} wow fadeIn`}>
        <div className={styles.title}> 
          <span className={styles.highlight}>WHO WE ARE </span>
        </div>
      </div>

      <div className={styles.subTitleContainer}>
        <div className={styles.subTitle}>
            Forefront is a non-profit charity organization lorem ipsum has been the industrys standard dummy text.
            It is a long established fact that a reader will be distracted by the readable content of a page when 
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
            of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </div>
      </div>

    </div>
  )
}
}

export default WhoWeAreContainer;