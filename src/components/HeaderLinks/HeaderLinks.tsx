import React from 'react'
import styles from './HeaderLinks.module.css'
import { NavLink } from 'react-router-dom';

interface Props {
  handleLinkClick: (e: any, name: string) => void;
}

class HeaderLinks extends React.Component<Props> {
  render(){
    return(
      <div className={styles.headerLinks}>
      {/* show home link in mobile view */}
      {window.matchMedia("(max-width: 600px)").matches
        ? (
          <div className={styles.link}>
            <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
          </div>
        )
        : null    
      } 
        <div className={styles.link}>
          <NavLink to="/our-approach" activeClassName={styles.active}>Our Approach</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to="/our-work" activeClassName={styles.active}>Our Work</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to="/builders" activeClassName={styles.active}>Builders</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to="/about" activeClassName={styles.active}>About Us</NavLink>
        </div>
        <div className={styles.link}>
          <a href="#">Shop</a>
        </div>
        <div className={styles.link}>
          <a href="#">Donate</a>
        </div>
      </div>
    )

  }
}

export default HeaderLinks