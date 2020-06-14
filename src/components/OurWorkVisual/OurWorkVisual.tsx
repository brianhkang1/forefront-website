import React from 'react';
import styles from './OurWorkVisual.module.css';
import Picture from '../Picture';

type Props = {
  backgroundColor: string;
  visualData: VisualData[];
};

type State = {
  selectedIndex: number;
};

type VisualData = {
  name: string;
  icon: string;
  selectedIcon: string;
  chart: React.ReactNode;
  bigNumber: React.ReactNode;
  subTitle: React.ReactNode;
  description: React.ReactNode;
};

class OurWorkVisual extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  onIconClick = (idx: number) => {
    this.setState({
      selectedIndex: idx,
    });
  };

  render() {
    const { backgroundColor, visualData } = this.props;
    const { selectedIndex } = this.state;

    const determineChartMarginRight = (itemName: string) => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (!isMobile) {
        return '0';
      } else {
        switch (itemName) {
          case 'waterWells':
            return '3rem';

          case 'fundraisedAmount':
          case 'soapToys':
            return '1rem';

          default:
            return '0';
        }
      }
    };

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
            >
              <div
                className={styles.icon}
                style={{
                  boxShadow: `${
                    selectedIndex === idx ? 'inset' : ''
                  } 1px 1px 8px black`,
                  backgroundColor,
                }}
              >
                <Picture
                  src={item.icon}
                  width="2.5rem"
                  height="2.5rem"
                  backgroundSize="contain"
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

            <div>{visualData[selectedIndex].subTitle}</div>
          </div>

          <div
            className={styles.chart}
            style={{
              marginRight: determineChartMarginRight(
                visualData[selectedIndex].name
              ),
            }}
          >
            {visualData[selectedIndex].chart}
          </div>
        </div>

        <div className={styles.description}>
          {visualData[selectedIndex].description}
        </div>
      </div>
    );
  }
}

export default OurWorkVisual;
