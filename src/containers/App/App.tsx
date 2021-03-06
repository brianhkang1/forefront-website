import React from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import WOW from 'wow.js/dist/wow.js';

import HomePage from '../Pages/HomePage';
import OurApproachPage from '../Pages/OurApproachPage';
import OurWorkPage from '../Pages/OurWorkPage';
import BuildersPage from '../Pages/BuildersPage';
import AboutUsPage from '../Pages/AboutUsPage';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/our-approach', name: 'Our Approach', Component: OurApproachPage },
  { path: '/our-work', name: 'Our Work', Component: OurWorkPage },
  { path: '/builders', name: 'Builders', Component: BuildersPage },
  { path: '/about-us', name: 'About Us', Component: AboutUsPage },
];

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  renderRoutes = location => {
    return (
      <Switch location={location}>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <div className={styles.page}>
              <Component />
            </div>
          </Route>
        ))}
      </Switch>
    );
  };

  renderRoutesWithTransitionAnimation = (match, location) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        in={match !== null}
        timeout={1500}
        classNames={{
          appear: styles.pageFadeAppear,
          appearActive: styles.pageFadeAppearActive,
          appearDone: styles.pageFadeAppearDone,
          enter: styles.pageFadeEnter,
          enterActive: styles.pageFadeEnterActive,
          enterDone: styles.pageFadeEnterDone,
          exit: styles.pageFadeExit,
          exitActive: styles.pageFadeExitActive,
          exitDone: styles.pageFadeExitDone,
        }}
        unmountOnExit
      >
        {this.renderRoutes(location)}
      </CSSTransition>
    </TransitionGroup>
  );

  render() {
    return (
      <Route
        render={({ match, location }) => (
          <div className={styles.root}>
            <div className={styles.content}>
              {/* only desktop gets page transition animations */}
              {window.matchMedia('(min-width: 769px)').matches
                ? this.renderRoutesWithTransitionAnimation(match, location)
                : this.renderRoutes(location)}
            </div>
          </div>
        )}
      />
    );
  }
}

export default App;
