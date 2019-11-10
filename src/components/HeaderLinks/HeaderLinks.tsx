import React from 'react'
import styles from './HeaderLinks.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../Button';

interface Props {
  handleLinkClick: (e: any, name: string) => void;
  isMobile?: boolean;
  isBlackText?: boolean;
}

class HeaderLinks extends React.Component<Props> {
  render(){
    const { isBlackText } = this.props;
    
    return(
      <div className={styles.headerLinks}>
      {this.props.isMobile
        ? (
          <div className={styles.link}>
            <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
          </div>
        )
        : null    
      } 
        <div className={isBlackText ? styles.blackLink : styles.link}>
          <NavLink exact to="/our-approach" activeClassName={styles.active}>Our Approach</NavLink>
        </div>
        <div className={isBlackText ? styles.blackLink : styles.link}>
          <NavLink exact to="/our-work" activeClassName={styles.active}>Our Work</NavLink>
        </div>
        <div className={isBlackText ? styles.blackLink : styles.link}>
          <NavLink exact to="/builders" activeClassName={styles.active}>Builders</NavLink>
        </div>
        <div className={isBlackText ? styles.blackLink : styles.link}>
          <NavLink exact to="/about" activeClassName={styles.active}>About Us</NavLink>
        </div>
        <div className={isBlackText ? styles.blackLink : styles.link}>
          <Button><a href="#">Donate</a></Button>
        </div>
      </div>
    )

  }
}

export default HeaderLinks