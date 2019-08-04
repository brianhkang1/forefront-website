import React from 'react';
import styles from './HomePageVideoContainer.module.css';

class HomePageVideoContainer extends React.Component {
  render(){
    return(
      <div className={styles.root}>
        <div className={styles.video}>
          <iframe
            title='home page video'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: "thin solid transparent",
              borderRadius: "10px",
            }}
            src={`https://www.youtube.com/embed/VVfv3N4yLyM`}
            frameBorder="0"
            allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          />
      </div>
    </div>
    )
  }
}

export default HomePageVideoContainer;