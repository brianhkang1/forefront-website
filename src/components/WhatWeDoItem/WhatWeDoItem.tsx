import React from 'react';
import styles from './WhatWeDoItem.module.css'

type Props = {
  number: string;
  title: string;
  description: string;
  index: number;
}


const WhatWeDoItem = (props: Props) => {
  const { number, title, description, index } = props;
  
  const cardClassName = () => {
   if(index === 0){
     return styles.card1
   } else if (index === 1){
     return styles.card2
   } else if (index === 2){
     return styles.card3
   }
  }
  
  return (
    <div className={cardClassName()}>
      <div className={`${styles.root} wow slideInUp`} data-wow-delay={`${parseInt(number) * 0.1}s`}>
        <div className={styles.cardContent}>
          <div className={styles.number}>{number}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>

  )
}

export default WhatWeDoItem;