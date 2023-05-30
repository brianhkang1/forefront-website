import React from 'react';
import ReactGA from 'react-ga4';
import { TrackingEventAction, TrackingEventLabel } from '../../util';

type Props = {
  children: any;
  action: TrackingEventAction;
  label: TrackingEventLabel;
};

const EventTracker: React.FC<Props> = ({ children, action, label }) => {
  const onClick = () => {
    //GA-4 tracking
    ReactGA.event(action, {
      label,
    });

    //Microsoft tracking (see index.html)
    window.uet_report_conversion(action, label);
  };

  return <div onClick={onClick}>{children}</div>;
};

export default EventTracker;
