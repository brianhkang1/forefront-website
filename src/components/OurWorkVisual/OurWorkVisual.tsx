import React from 'react';
import { classNames } from '../../util';
import styles from './OurWorkVisual.module.css';

type Props = {
  backgroundColor: string;
  visualData: VisualData[];
}

type State = {
  selectedIndex: number;
}

type VisualData = {
  name: string;
  icon: React.ReactNode;
  chart:  React.ReactNode;
  bigNumber: React.ReactNode;
  subTitle: React.ReactNode;
  description: React.ReactNode;
}

class OurWorkVisual extends React.Component<Props, State> {
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  onIconClick = (idx: number) => {
    this.setState({
      selectedIndex: idx
    })
  }

  render(){
    const { backgroundColor, visualData } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div 
        style={{
          backgroundColor: backgroundColor,
        }}
        className={`${styles.root} wow fadeIn`}  
      >
        <div className={styles.chartContainer}>
          <div className={styles.chartDescription}>
            <div className={styles.bigNumber}>
              {visualData[selectedIndex].bigNumber}
            </div>

            <div>
              {visualData[selectedIndex].subTitle}
            </div>

            <div className={styles.iconsContainer}>
              {visualData.map((item: VisualData, idx: number) => (
                <span 
                  key={`icon-${item.name}`}
                  className={classNames(styles.icon, selectedIndex === idx ? styles.selectedIcon : '')} 
                  onClick={() => this.onIconClick(idx)}
                >
                  {item.icon}
                </span>
              ))}
            </div>
          </div>

          {visualData[selectedIndex].chart}
        </div>

        <div className={styles.description}>
          {visualData[selectedIndex].description}
        </div>
      </div>
    )
  }
}

export default OurWorkVisual;