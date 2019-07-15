import React from 'react';
import styles from './WhatWeDoItem.module.css'

type Props = {
  number: string;
  title: string;
  description: string;
}


const WhatWeDoItem = (props: Props) => {
  const { number, title, description } = props;
  
  return (
    <div className=
    {`${styles.root} wow slideInUp`} data-wow-delay={`${parseInt(number) * 0.1}s`}>
      <div className={styles.cardContent}>
        <div className={styles.number}>{number}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

export default WhatWeDoItem;