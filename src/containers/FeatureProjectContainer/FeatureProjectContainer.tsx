import React from 'react';
import styles from './FeatureProjectContainer.module.css';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import Title from '../../components/Title';
import PictureFilter from '../../components/PictureFilter';
import PictureText from '../../components/PictureText';

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
        description='We need to empower the locals, the people who know their community best. 
        All future leaders must first be equipped with their fundamental human rights to clean water, education, 
        and access to basic medical care if they are to succeed in becoming an empowered change maker. CHANGE THIS' 
      />

      <div className={styles.container}>
        <div className={styles.picture}>
          <PictureFilter>
            <PictureText className={styles.pictureText} padding='1.5rem 1rem'>
              Forefront International School: 
              Quality education for low-income children
            </PictureText>
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
        </div>
      </div>
    </div>
  )
}

export default withRouter(FeatureProjectContainer); 