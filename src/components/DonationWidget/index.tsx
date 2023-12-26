import styles from './DonationWidget.module.css';

const DonationWidget = () => {
  return (
    <div className={styles.widgetContainer}>
      {/* @ts-ignore */}
      <givebutter-widget id='gJ4rdj' align='center'></givebutter-widget>
    </div>
  );
};

export default DonationWidget;
