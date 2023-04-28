import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { createBrowserHistory } from 'history';
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

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
