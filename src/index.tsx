import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from 'react-ga4';

const trackPageView = (location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.send({ hitType: 'pageview', page: location.pathname, title: `Page view: ${location.pathname}` });
};

const initGoogleAnalytics = (history) => {
  ReactGA.initialize([
    {
      trackingId: process.env.REACT_APP_GA_4_MEASUREMENT_ID || '',
      // gtagOptions: {...},
      // gaOptions: {...},
    },
  ]);

  trackPageView(history.location);
  history.listen(trackPageView);
};

const history = createBrowserHistory();
initGoogleAnalytics(history);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Router history={history}>
    <ScrollToTop />
    <App />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
