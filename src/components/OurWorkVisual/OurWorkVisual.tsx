import React from 'react';
import styles from './OurWorkVisual.module.css';
import Picture from '../Picture';

type Props = {
  backgroundColor: string;
  visualData: VisualData[];
}

type State = {
  selectedIndex: number;
}

type VisualData = {
  name: string;
  icon: string;
  selectedIcon: string;
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
        <div className={styles.iconsContainer}>
          {visualData.map((item: VisualData, idx: number) => (
            <div 
              key={`icon-${item.name}`}
              onClick={() => this.onIconClick(idx)}
              style={{
                opacity: selectedIndex === idx ? '1' : '0.2'
              }}
            >
              <div className={styles.icon}>
                <Picture
                  src={selectedIndex === idx ? item.selectedIcon : item.icon}
                  // {item.icon}
                  width='4rem'
                  height='4rem'
                  backgroundSize='contain'
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.chartContainer}>
          <div className={styles.chartDescription}>
            <div className={styles.bigNumber}>
              {visualData[selectedIndex].bigNumber}
            </div>

            <div>
              {visualData[selectedIndex].subTitle}
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