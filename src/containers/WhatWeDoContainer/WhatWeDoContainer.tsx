import React from 'react';
import styles from './WhatWeDoContainer.module.css';
import WhatWeDoItem from '../../components/WhatWeDoItem';

type WhatWeDoItemType = {
  number: string;
  title: string;
  description: string;
}

const whatWeDoItems = [
  {
    number: '01',
    title: 'ENABLE',
    description: 'every person. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    number: '02',
    title: 'EQUIP',
    description: 'leaders. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    number: '03',
    title: 'ESTABLISH',
    description: 'self-sustaining communities. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },

]

const WhatWeDoContainer = () => {

  const renderTitle = () => {
    //laptop browser
    if(window.matchMedia("(min-width: 601px)").matches){
      return (
        <>
          <div className={styles.title}>WHAT</div>
          <div className={styles.title}>WE </div>
          <div className={styles.title}>DO</div>
        </>
      ) 
    } else {
      //mobile browser
      return (
        <div className={styles.title}> WHAT WE DO </div>
      )
    }

  }
  return(
    <div className={styles.root}>
      
      <div className={styles.titleContainer}>
        { renderTitle() }
      </div>

      <div className={styles.whatWeDoVisual}>
        {whatWeDoItems.map((item: WhatWeDoItemType, index: number) => (
            <WhatWeDoItem
              key={`whatWeDoItem${index+1}`}
              number={item.number}
              title={item.title}
              description={item.description}
            />
        ))}
      </div>

    </div>
  )
}

export default WhatWeDoContainer;