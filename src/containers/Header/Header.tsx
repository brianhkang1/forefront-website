import React from 'react';
import styles from './Header.module.css';
import { classNames } from '../../util';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <header className={classNames(styles.header, styles.sticky)}>
        <div className={styles.headerLeft}>
          <h1>Forefront</h1>
        </div>
        <ul className={styles.headerMiddle}> 
          <span className={styles.links}>
            <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
          </span>
          <span className={styles.links}>
            <NavLink to="/our-approach" activeClassName={styles.active}>Our Approach</NavLink>
          </span>
          <span className={styles.links}>
            <NavLink to="/our-work" activeClassName={styles.active}>Our Work</NavLink>
          </span>
          <span className={styles.links}>
            <NavLink to="/builders" activeClassName={styles.active}>Builders</NavLink>
          </span>
          <span className={styles.links}>
            <NavLink to="/about" activeClassName={styles.active}>About Us</NavLink>
          </span>
        </ul>
        <div className={styles.headerRight}>
          <h3>
            Donate
          </h3>
        </div>
      </header>
    );
  }
}

export default Header;
