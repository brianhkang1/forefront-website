import React from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import HomePage from '../HomePage';
import OurApproachPage from '../OurApproachPage';
import OurWorkPage from '../OurWorkPage';
import BuildersPage from '../BuildersPage';
import AboutUsPage from '../AboutUsPage';

function App() {
  return (
    <div className={styles.site}>
      <Header/>

      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/our-approach" component={OurApproachPage} />
          <Route path="/our-work" component={OurWorkPage} />
          <Route path="/builders" component={BuildersPage} />
          <Route path="/about" component={AboutUsPage} />
        </Switch>   
      </div>

      <Footer/>
    </div>
  );
}

export default App;
