import React from 'react';
import styles from './BlogContainer.module.css';
import Title from '../../components/Title';
import Button from '../../components/Button';

const BlogContainer = () => {
  return (
    <>
    <div style={{paddingTop: '2rem'}}>
      <Title
        title='Learn More'
      />
    </div>
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          Meet Priyanka,<br/>16-year-old change-maker
        </div>
        <div className={styles.description1}>
          Before the water pump, a water truck used to come to Priyanka's village every day but only delivered clean water
          Priyanka's village every day but only delivered clean water village has access to clean water.
        </div>

        <div className={styles.description2}>
          Forefront understands that basic necessities are foundational to a self-sustaining community. 
          By providing basic necessities like clean water, girls like Priyanka can make their dream of becoming a community leader a reality.
        </div>

        <Button>Read More</Button>
      </div>

      <div className={styles.picture}/>
    </div>
    </>
  )
}

export default BlogContainer;