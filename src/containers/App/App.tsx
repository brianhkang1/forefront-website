import React from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import WOW from "wow.js/dist/wow.js";

import Header from '../Header';
import Footer from '../Footer';
import HomePage from '../HomePage';
import OurApproachPage from '../OurApproachPage';
import OurWorkPage from '../OurWorkPage';
import BuildersPage from '../BuildersPage';
import AboutUsPage from '../AboutUsPage';

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }
  
  render(){
    return (
      <div className={styles.site}>
        <div className={styles.header}>
          <Header/>
        </div>
  
        <div className={styles.content}>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/our-approach" component={OurApproachPage} />
              <Route path="/our-work" component={OurWorkPage} />
              <Route path="/builders" component={BuildersPage} />
              <Route path="/about" component={AboutUsPage} />
          </Switch>   
        </div>
        
        <div className={styles.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
