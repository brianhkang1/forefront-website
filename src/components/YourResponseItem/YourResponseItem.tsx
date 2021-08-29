import React from 'react';
import styles from './YourResponseItem.module.css';
import Button from '../Button';
import PictureFilter from '../PictureFilter';
import GoogleEventTracker from '../GoogleEventTracker';
import {
  GoogleEventAction,
  GoogleEventCategory,
  GoogleEventLabel
} from '../../util';

type Props = {
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
  isGoogleEvent?: boolean;
  googleEventCategory?: GoogleEventCategory;
  googleEventAction?: GoogleEventAction;
  googleEventLabel?: GoogleEventLabel;
};

class YourResponseItem extends React.Component<Props> {
  render() {
    const {
      title,
      description,
      backgroundImage,
      link,
      isGoogleEvent,
      googleEventCategory,
      googleEventAction,
      googleEventLabel
    } = this.props;

    return (
      <div
        className={styles.root}
        style={{ backgroundImage, backgroundSize: 'cover' }}
      >
        <PictureFilter className={styles.pictureFilter}>
          <div className={styles.container}>
            <div className={styles.description}>{description}</div>
            {isGoogleEvent && googleEventCategory && googleEventAction ? (
              <GoogleEventTracker
                category={googleEventCategory}
                action={googleEventAction}
                label={googleEventLabel}
              >
                <Button>
                  <a
                    href={link}
                    target={title === 'Become a Builder' ? '_self' : '_blank'}
                    rel='noopener noreferrer'
                  >
                    {title}
                  </a>
                </Button>
              </GoogleEventTracker>
            ) : (
              <Button>
                <a
                  href={link}
                  target={title === 'Become a Builder' ? '_self' : '_blank'}
                  rel='noopener noreferrer'
                >
                  {title}
                </a>
              </Button>
            )}
          </div>
        </PictureFilter>
      </div>
    );
  }
}

export default YourResponseItem;
