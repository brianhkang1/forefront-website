import React from 'react';
import styles from './Title.module.css'

type Props = {
  smallTitle?: string;
  bigTitle?: string;
  description?: string;
}

class Title extends React.Component<Props> {
  render(){
    const { smallTitle, bigTitle, description } = this.props;

    return(
      <div className={styles.root}>
        {smallTitle && (
          <div className={styles.smallTitle}>
            {smallTitle.toUpperCase()}
          </div>
        )}

        {bigTitle && (
          <div className={styles.bigTitle}>
            {bigTitle}
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