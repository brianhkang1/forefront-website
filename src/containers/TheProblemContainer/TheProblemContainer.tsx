import React from 'react';
import styles from './TheProblemContainer.module.css'
import Title from '../../components/Title';
import PictureFilter from '../../components/PictureFilter';
import Button from '../../components/Button';

const TheProblemContainer = () => {
  return (
    <div className={styles.root}>
      <Title
        smallTitle='The Problem'
        bigTitle='Add some sort of question here?'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />

      <div className={styles.pictureContainer}>
        <PictureFilter>
          <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button size="large" className={styles.button}>Learn More</Button>
          </div>
        </PictureFilter>
      </div>
    </div>
  )
}

export default TheProblemContainer