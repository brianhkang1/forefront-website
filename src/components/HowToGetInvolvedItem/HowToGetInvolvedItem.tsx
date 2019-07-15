import React from 'react';
import styles from './HowToGetInvolvedItem.module.css';

type Props = {
  title: string;
  description: string;
  backgroundImage: string;
}

class HowToGetInvolvedItem extends React.Component<Props> {
  
  render(){
    const { title, description, backgroundImage } = this.props;

    return(
      <div className={styles.root} style={{backgroundImage, backgroundSize: 'cover'}}>
          <div className={styles.description}>{description}</div>
          <div className={styles.button}>
            <a href="#" className={styles.buttonText}>{title}</a>
          </div>
      </div>
    )
  }
}

export default HowToGetInvolvedItem;