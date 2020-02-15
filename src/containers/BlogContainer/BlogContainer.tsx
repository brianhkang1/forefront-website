import React from 'react';
import styles from './BlogContainer.module.css';
import Title from '../../components/Title';
import Button from '../../components/Button';
import PictureFilter from '../../components/PictureFilter';

const BlogContainer = () => {
  return (
    <div>
      <Title
        smallTitle='Learn More'
        bigTitle='Who are we helping?'
        description="Meet Priyanka, 16-year-old change-maker. Before the water pump, a water truck used to come to Priyanka's village every day but only delivered clean water
        Priyanka's village every day but only delivered clean water village has access to clean water. FOREFRONT understands that basic necessities are foundational to a self-sustaining community. 
        By providing basic necessities like clean water, girls like Priyanka can make their dream of becoming a community leader a reality."
      />

      <div className={styles.pictureContainer}>
        <PictureFilter>
          <div className={styles.buttonContainer}>
            <Button size="large" className={styles.button}>Our Blog</Button>
          </div>
        </PictureFilter>
      </div>
    </div>
  )
}

export default BlogContainer;