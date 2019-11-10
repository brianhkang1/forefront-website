import React from 'react';
import styles from './BlogContainer.module.css';
import Title from '../../components/Title';
import Button from '../../components/Button';

const BlogContainer = () => {
  return (
    <>
    <div style={{paddingTop: '2rem'}}>
      <Title
        title='Our Blog'
      />
    </div>
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          Meet Priyanka,<br/>16-year-old change-maker
        </div>
        <div className={styles.description1}>
          Priyanka wants to bring change to Thallur by becoming a political leader. 
          However, instead of dedicating time to education and her dreams, 
          she spends her days making six hour-long trips to retrieve water for her village. 
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