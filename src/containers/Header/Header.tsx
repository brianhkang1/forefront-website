import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { classNames } from '../../util';

import { Icon } from 'semantic-ui-react';
import ForeFrontLogo from '../../Images/Icons/ForefrontWhite.png';
import ForeFrontLogoColor from '../../Images/Icons/ForefrontColor.png';
import HeaderLinks from '../../components/HeaderLinks';

type State = {
  activeLink: string;
  isMobileMenuActive: boolean;
};

class Header extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: 'home',
      isMobileMenuActive: false,
    };
  }

  handleLinkClick = (e: any, { name }: any) =>
    this.setState({ activeLink: name });

  onMobileMenuClick = () => {
    this.setState({ isMobileMenuActive: !this.state.isMobileMenuActive });
  };

  render() {
    const { isMobileMenuActive } = this.state;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    return isDesktop ? (
      <header className={styles.header}>
        <div className={classNames(styles.headerLeft)}>
          <NavLink exact to="/">
            <img
              src={ForeFrontLogo}
              alt="Forefront Logo"
              style={{ marginLeft: '1rem', width: '20rem', height: '5rem' }}
            />
          </NavLink>
        </div>
        <HeaderLinks handleLinkClick={this.handleLinkClick} />
      </header>
    ) : (
      //mobile view
      <>
        <div className={`${styles.mobileHeader}`}>
          <div className={styles.mobileHeaderLeft}>
            <NavLink exact to="/">
              <img
                src={ForeFrontLogoColor}
                alt="Forefront Logo"
                style={{
                  width: '20rem',
                  height: '5rem',
                  objectFit: 'contain',
                }}
              />
            </NavLink>
          </div>
          <div
            className={styles.mobileMenuIcon}
            onClick={this.onMobileMenuClick}
          >
            <Icon color="grey" name="bars" size="large" />
          </div>
        </div>

        <div
          className={classNames(
            styles.mobileMenu,
            isMobileMenuActive && styles.displayMobileMenu
          )}
        >
          <HeaderLinks isMobile handleLinkClick={this.handleLinkClick} />
        </div>
      </>
    );
  }
}

export default Header;
