import React from 'react';
import styles from './Title.module.css'

type Props = {
  title?: string;
  description?: string;
}

class Title extends React.Component<Props> {
  render(){
    const { title, description } = this.props;

    return(
      <div className={styles.root}>
        {title && (
          <div className={styles.title}>
            {title}
          </div>
        )}
        
        {description && (
          <div className={styles.description}>
            { description }
          </div>
        )}
      </div>
    )
  }
}

export default Title;