import React from 'react';
import ReactGA from 'react-ga4';
import { GoogleEventAction, GoogleEventCategory, GoogleEventLabel } from '../../util';
// https://developers.google.com/analytics/devguides/collection/analyticsjs/events

type Props = {
  children: any;
  category: GoogleEventCategory;
  action: GoogleEventAction;
  label?: GoogleEventLabel;
  value?: number;
  nonInteraction?: boolean;
  transport?: 'image' | 'beacon' | 'xhr';
};

const GoogleEventTracker: React.FC<Props> = ({
  children,
  category,
  action,
  label,
  value,
  nonInteraction,
  transport,
}) => {
  const onClick = () => {
    ReactGA.event({
      category,
      action,
      label,
      value,
      nonInteraction,
      transport,
    });
  };

  return <div onClick={onClick}>{children}</div>;
};

export default GoogleEventTracker;
