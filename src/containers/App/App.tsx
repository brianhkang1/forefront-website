import React from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import WOW from "wow.js/dist/wow.js";

import HomePage from '../HomePage';
import OurApproachPage from '../OurApproachPage';
import OurWorkPage from '../OurWorkPage';
import BuildersPage from '../BuildersPage';
import AboutUsPage from '../AboutUsPage';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/our-approach', name: 'Our Approach', Component: OurApproachPage },
  { path: '/our-work', name: 'Our Work', Component: OurWorkPage },
  { path: '/builders', name: 'Builders', Component: BuildersPage },
  { path: '/about', name: 'About Us', Component: AboutUsPage },
]

class App extends React.Component{
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <Route render={({ match, location }) => (
        <div className={styles.root}>

          <div className={styles.content}>
            <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  in={match !== null}
                  timeout={2000}
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
                  <Switch location={location}>
                    {routes.map(({ path, Component }) => (
                      <Route key={path} exact path={path}>         
                        <div className={styles.page}> 
                          <Component/>
                        </div>      
                      </Route> 
                    ))} 
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
  
        </div>
      )}/>
    );
  }
}

export default App;
