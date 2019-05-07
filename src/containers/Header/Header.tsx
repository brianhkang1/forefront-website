import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import MobileMenu from '../../components/MobileMenu'

class Header extends React.Component{
  state = { activeItem: 'home' }

  handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name })
  
  render(){
    const { activeItem } = this.state
    return (
      window.matchMedia("(min-width: 601px)").matches
        ? (
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
                <a href="#">Shop</a>
              </span>
              <span className={styles.link}>
                <a href="#">Donate</a>
              </span>
            </ul>
          </header>
          )
        : (
          <>
          <header className={styles.mobileHeader}>
            <div className={styles.mobileHeaderLeft}>
              <span className={styles.mobileTitle}>FOREFRONT</span>
            </div>
            <div>
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
