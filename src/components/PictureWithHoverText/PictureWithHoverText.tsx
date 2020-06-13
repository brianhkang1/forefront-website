import React from 'react';
import styles from './PictureWithHoverText.module.css';
import { classNames } from '../../util';

interface Props {
  title: React.ReactNode;
  description: string;
  image: React.ReactNode;
  className?: string;
  titleClassName: string;
  descriptionClassName: string;
}

type State = {
  isHovering: boolean;
};

class PictureWithHoverText extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
    };
  }

  render() {
    const {
      title,
      description,
      image,
      className,
      titleClassName,
      descriptionClassName,
    } = this.props;
    const { isHovering } = this.state;

    return (
      <div
        className={classNames(styles.root, className)}
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={() => this.setState({ isHovering: true })}
        onMouseLeave={() => this.setState({ isHovering: false })}
      >
        <div className={styles.container}>
          {!isHovering && (
            <div className={classNames(styles.title, titleClassName)}>
              {title}
            </div>
          )}

          {isHovering && (
            <div
              className={classNames(styles.description, descriptionClassName)}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PictureWithHoverText;
