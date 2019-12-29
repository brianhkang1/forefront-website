import React from 'react';
import styles from './HowToGetInvolvedItem.module.css';
import Button from '../Button';
import PictureFilter from '../PictureFilter';

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
        <PictureFilter className={styles.pictureFilter}>
          <div className={styles.container}>
            <div className={styles.description}>{description}</div>
            <Button>
              <a href="#">{title}</a>
            </Button>
          </div>
        </PictureFilter>
      </div>
    )
  }
}

export default HowToGetInvolvedItem;