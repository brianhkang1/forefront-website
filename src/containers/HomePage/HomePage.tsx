import React from 'react';
import styles from './HomePage.module.css'
import Header from '../Header';
import ReactTypingEffect from 'react-typing-effect';

class HomePage extends React.Component{
  render(){
    return (
      <>
        <div className={styles.FeaturePictureContainer}>
          <Header/>

          <div className={styles.typeWriter}>
            <ReactTypingEffect
              staticText='We are'
              eraseDelay={2500}
              speed={100}
              text={["leaders.", "difference-makers.", "avengers." ]}
            />
          </div>
        </div>
        <div className={styles.container2}>
          container 2
        </div>
        <div className={styles.container3}>
          container 3
        </div>
      </>
    );
  }
}

export default HomePage;
