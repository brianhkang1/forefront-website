import React from 'react';
import styles from './FeatureProjectContainer.module.css';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import Title from '../../components/Title';
import Button from '../../components/Button';
import PictureFilter from '../../components/PictureFilter';

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
        smallTitle='Feature Project'
        bigTitle='What are we working on?'
        description='We need to empower the locals, the people who know their community best. 
        All future leaders must first be equipped with their fundamental human rights to clean water, education, 
        and access to basic medical care if they are to succeed in becoming an empowered change maker. CHANGE THIS' 
      />

      <div className={styles.container}>
        <div className={styles.picture}>
          <PictureFilter>
            <div className={styles.pictureText}>Forefront International School: Quality education for low-income children</div>
          </PictureFilter>
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
          {/* <div className={styles.learnMoreContainer}>
            <Button 
              onClick={() => {
                history.push('/our-work')
                }} 
              >
              Learn More
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default withRouter(FeatureProjectContainer); 