import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <NavLink exact to="/" activeClassName={styles.active}>FOREFRONT</NavLink>
        </div>
        <ul className={styles.headerLinks}> 
          {/* <span className={styles.link}>
            <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
          </span> */}
          <span className={styles.link}>
            <NavLink to="/our-approach" activeClassName={styles.active}>Our Approach</NavLink>
          </span>
          <span className={styles.link}>
            <NavLink to="/our-work" activeClassName={styles.active}>Our Work</NavLink>
          </span>
          <span className={styles.link}>
            <NavLink to="/builders" activeClassName={styles.active}>Builders</NavLink>
          </span>
          <span className={styles.link}>
            <NavLink to="/about" activeClassName={styles.active}>About Us</NavLink>
          </span>
          <span className={styles.link}>
            <a href="#">Donate</a>
          </span>
          <span className={styles.link}>
            <a href="#">Shop</a>
          </span>
        </ul>
      </header>
    );
  }
}

export default Header;
