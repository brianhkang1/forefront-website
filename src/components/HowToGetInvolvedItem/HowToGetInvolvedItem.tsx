import React from 'react';
import styles from './HowToGetInvolvedItem.module.css';
import Button from '../Button';

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
          <Button className={styles.whiteOutline}>
            <a href="#">{title}</a>
          </Button>
      </div>
    )
  }
}

export default HowToGetInvolvedItem;