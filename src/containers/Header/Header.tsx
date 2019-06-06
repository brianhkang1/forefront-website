import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { classNames } from '../../util';

import { Icon } from 'semantic-ui-react';
import HeaderLinks from '../../components/HeaderLinks'

type State = {
  activeLink: string;
  isMobileMenuActive: boolean;
}

class Header extends React.Component<{}, State>{
  constructor(props){
    super(props)

    this.state = {
      activeLink: 'home',
      isMobileMenuActive: false
    }
  }

  handleLinkClick = (e: any, { name }: any) => this.setState({ activeLink: name })
  
  onMobileMenuClick = () => {
    this.setState({isMobileMenuActive: !this.state.isMobileMenuActive})
  }

  render(){
    const { isMobileMenuActive } = this.state

    return (
      // laptop view
      window.matchMedia("(min-width: 601px)").matches
        ? (
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <NavLink exact to="/">FOREFRONT</NavLink>
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
            <div onClick={this.onMobileMenuClick}>
              <Icon color="grey" name="bars" size="large" />
            </div>
          </header>

          <div className={classNames(styles.mobileMenu, isMobileMenuActive && styles.displayMobileMenu) }>
            <HeaderLinks isMobile handleLinkClick={this.handleLinkClick}/>
          </div>
        </>
        )
      )
    };
}

export default Header;
