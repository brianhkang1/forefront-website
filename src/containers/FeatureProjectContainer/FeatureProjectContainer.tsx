import React from 'react';
import styles from './FeatureProjectContainer.module.css';
import Title from '../../components/Title';

const textItems = [
  {
    title: '200,000',
    description: 'targeted population'
  },
  {
    title: '4.5 years',
    description: 'October 2016 to March 2021'
  },
  {
    title: 'Districts of Kasungu, Chitipa',
    description: '100% complete'
  }
]

const FeatureProjectContainer = () => {
  return(
    <div className={styles.root}>
      <Title
        title='Feature Project'
      />

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.picture}>
            <div className={styles.pictureText}>The School Project: need an appropriate subtitle for this picture as soon as possible</div>
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
              <div className={styles.button}>Learn More</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FeatureProjectContainer; 