import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ScrollToTop from './components/ScrollToTop';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import GoogleTagManager from 'react-gtm-module';

const GoogleTagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_TRACKING_ID || ''
};

const trackPageView = location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

const initGoogleAnalytics = history => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID || '', {
    debug: true
  });
  GoogleTagManager.initialize(GoogleTagManagerArgs);

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
