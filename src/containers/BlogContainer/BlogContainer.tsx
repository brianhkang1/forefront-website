import React from 'react';
import styles from './BlogContainer.module.css';

const BlogContainer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Raising Change-Makers
      </div>
      <div className={styles.description1}>
        Priyanka is a 16 year old who wants to bring change to Thallur by becoming a political leader. 
        However, instead of dedicating time to education and her dreams, 
        she spends her days making six hour-long trips to retrieve water for her village. 
      </div>

      <div className={styles.description2}>
        Forefront understands that basic necessities are foundational to a self-sustaining community. 
        By providing basic necessities like clean water, girls like Priyanka can make their dream of becoming a community leader a reality.
      </div>

      <div className={styles.button}>Read More on our Blog</div>
    </div>
  )
}

export default BlogContainer;