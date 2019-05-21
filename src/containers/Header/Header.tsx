import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import MobileMenu from '../../components/MobileMenu'
import HeaderLinks from '../../components/HeaderLinks'

class Header extends React.Component{
  state = { activeLink: 'home' }

  handleLinkClick = (e: any, { name }: any) => this.setState({ activeItem: name })
  
  onClick = () => {

  }

  render(){
    
    return (
      // laptop view
      window.matchMedia("(min-width: 601px)").matches
        ? (
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <NavLink exact to="/" activeClassName={styles.active}>FOREFRONT</NavLink>
            </div>
            <HeaderLinks handleLinkClick={this.handleLinkClick}/>
          </header>
          )
        : (
      //mobile view
          <>
          <header className={styles.mobileHeader}>
            <div className={styles.mobileHeaderLeft}>
              <span className={styles.mobileTitle}>FOREFRONT</span>
            </div>
            <div onClick={this.onClick}>
              <Icon color="grey" name="bars" size="large" />
            </div>
          </header>
          <MobileMenu/>
        </>
        )
      )
    };
}

export default Header;
