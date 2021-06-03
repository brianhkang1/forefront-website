import React from 'react';
import styles from './Title.module.css';

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  highlightTitle?: boolean;
};

class Title extends React.Component<Props> {
  render() {
    const { title, description, highlightTitle } = this.props;

    return (
      <div className={styles.root}>
        {title && (
          <div className={styles.title}>
            <span className={highlightTitle ? styles.highlightTitle : ''}>
              {title}
            </span>
          </div>
        )}

        {description && <div className={styles.description}>{description}</div>}
      </div>
    );
  }
}

export default Title;
