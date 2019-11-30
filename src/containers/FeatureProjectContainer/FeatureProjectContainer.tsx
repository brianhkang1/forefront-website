import React from 'react';
import styles from './FeatureProjectContainer.module.css';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import Title from '../../components/Title';
import Button from '../../components/Button';

const textItems = [
  {
    title: '400',
    description: 'students per year'
  },
  {
    title: 'Grades 1-5',
    description: 'another description here'
  },
  {
    title: 'Located in Kolluru, India',
    description: '100% funding complete'
  }
]

const FeatureProjectContainer = ({
  history
}: RouteComponentProps) => {
  return(
    <div className={styles.root}>
      <Title
        title='Feature Project'
      />

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.picture}>
            <div className={styles.pictureText}>Forefront International School: Quality education for low-income children</div>
          </div>

          <span className={styles.triangle}/>
          
          <div className={styles.textContainer}>
            <div className={styles.textItems}>
              {textItems.map(text => (
                <div>
                  <div className={styles.boldText}>
                    {text.title}
                  </div>
                  <div className={styles.descriptionText}>
                    {text.description}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.learnMoreContainer}>
              <Button 
                onClick={() => {
                  history.push('/our-work')
                  }} 
                  size="large" 
                  variant="outlined" 
                  className={styles.whiteOutline}
                >
                Learn More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default withRouter(FeatureProjectContainer); 