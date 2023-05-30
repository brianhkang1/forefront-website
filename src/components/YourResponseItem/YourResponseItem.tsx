import React from 'react';
import styles from './YourResponseItem.module.css';
import Button from '../Button';
import PictureFilter from '../PictureFilter';

type Props = {
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
};

class YourResponseItem extends React.Component<Props> {
  render() {
    const { title, description, backgroundImage, link } = this.props;

    return (
      <div className={styles.root} style={{ backgroundImage, backgroundSize: 'cover' }}>
        <PictureFilter className={styles.pictureFilter}>
          <div className={styles.container}>
            <div className={styles.description}>{description}</div>
            <Button>
              <a href={link} target={title === 'Become a Builder' ? '_self' : '_blank'} rel='noopener noreferrer'>
                {title}
              </a>
            </Button>
          </div>
        </PictureFilter>
      </div>
    );
  }
}

export default YourResponseItem;
