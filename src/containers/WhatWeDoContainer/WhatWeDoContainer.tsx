import React from 'react';
import styles from './WhatWeDoContainer.module.css';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Title from '../../components/Title';

import OurApproachImage from '../../Images/10.jpg';
import OurWorkImage from '../../Images/11.jpg';
import OurBuildersImage from '../../Images/2.jpg';

const PictureItems = [
  {
    title: 'Our Approach',
    backgroundImage: `url(${OurApproachImage})`,
    link: '/our-approach'
  },
  {
    title: 'Our Work',
    backgroundImage: `url(${OurWorkImage})`,
    link: '/our-work'
  },
  {
    title: 'Our Builders',
    backgroundImage: `url(${OurBuildersImage})`,
    link: '/builders'
  }
]

class WhatWeDoContainer extends React.Component<RouteComponentProps> {
  render(){
    return(
      <>
      <div style={{paddingTop: '2rem'}}>
        <Title
          title='What We Do'
          description='There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which dont look even slightly believable.'
        />
      </div>

        <div className={styles.picturesContainer}>
          {PictureItems.map(p => (
            <div 
              className={styles.picture} 
              style={{
                backgroundImage: p.backgroundImage, 
                backgroundSize: 'cover'
              }}
              onClick={() => this.props.history.push(p.link)}
            >
              <div className={styles.title}>
                {p.title}
              </div>     
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default withRouter(WhatWeDoContainer);