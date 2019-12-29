import React from 'react';
import styles from './FourPillarsItem.module.css';
import PictureFilter from '../PictureFilter';

interface Props {
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  image: React.ReactNode;
}

type State = {
  isHovering: boolean;
}

class FourPillarsItem extends React.Component<Props, State> {
  constructor(props){
    super(props)

    this.state={
      isHovering: false
    }
  }

  render(){
    const { title, description, icon, image } = this.props;
    const { isHovering } = this.state;

    return(
      <div 
        className={styles.root} 
        style={{backgroundImage: `url(${image})`}}
        onMouseEnter={() => this.setState({isHovering: true})}
        onMouseLeave={() => this.setState({isHovering: false})}
      >
        <PictureFilter>
          <div className={styles.container}>
            {!isHovering && (
              <>
                {/* <div>{icon}</div> */}
                <div className={styles.title}>{title}</div>
              </>
            )}

            {isHovering && (
              <div className={styles.description}>{description}</div>
            )}
          </div>
        </PictureFilter>
      </div>
    )
  }
}


export default FourPillarsItem