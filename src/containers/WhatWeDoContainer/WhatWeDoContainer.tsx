import React from 'react';
import styles from './WhatWeDoContainer.module.css'

const whatWeDoItems = [
  {
    number: '01',
    title: 'ENABLE',
    description: 'Enable Every Person.'
  },
  {
    number: '02',
    title: 'EQUIP',
    description: 'Equip Leaders.'
  },
  {
    number: '03',
    title: 'ESTABLISH',
    description: 'Establish Self-Sustaining Communities.'
  },

]

const WhatWeDoContainer = () => {
  return(
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          What We Do
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoContainer;