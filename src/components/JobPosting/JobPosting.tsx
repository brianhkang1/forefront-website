import React from 'react';
import styles from './JobPosting.module.css';
import EventTracker from '../EventTracker/EventTracker';
import { TrackingEventAction, TrackingEventLabel } from '../../util';

const JobPosting: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.containerTitle}>Available Roles (NY/DC metro area only)</div>

      <EventTracker action={TrackingEventAction.OUTBOUND_CLICK} label={TrackingEventLabel.SEE_OPEN_ROLES}>
        <div className={styles.link}>
          <a href='https://www.linkedin.com/company/goforefront/jobs/' target='_blank' rel='noopener noreferrer'>
            Click here to see our open roles!
          </a>
        </div>
      </EventTracker>
    </div>
  );
};

export default JobPosting;
