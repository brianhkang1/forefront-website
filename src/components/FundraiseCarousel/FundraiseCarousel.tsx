import React from 'react';
import styles from './FundraiseCarousel.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Pic1 from '../../Images/1.jpg';
import Pic2 from '../../Images/2.jpg';
import Pic3 from '../../Images/3.jpg';
import Pic4 from '../../Images/4.jpg';
import Pic5 from '../../Images/5.jpg';

const CarouselItems = [
  {
    title: 'Pic 1',
    image: Pic1,
    description: 'hello'
  },
  {
    title: 'Pic 2',
    image: Pic2,
    description: 'hello'
  },
  {
    title: 'Pic 3',
    image: Pic3,
    description: 'hello'
  },
  {
    title: 'Pic 4',
    image: Pic4,
    description: 'hello'
  },
  {
    title: 'Pic 5',
    image: Pic5,
    description: 'hello'
  }
]

const FundraiseCarousel = () => {
  return(
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <span className={styles.highlight}>Our Fundraising</span>
        </div>
      </div>

        <Carousel 
          infiniteLoop
          autoPlay
          emulateTouch
          showThumbs={false}
          showStatus={false}
          interval={4000}
          width='100vw'
        >
          {CarouselItems.map(item => (
            <div className={styles.carouselContainer}>
              <div className={styles.sliderPicContainer}>
                <img className={styles.sliderPic} src={item.image} />
              </div>
              <p className={`legend`}>{item.description}</p>
            </div>
          ))}
        </Carousel>

      <div className={styles.whiteDivider}/>
    </div>
  )
}

export default FundraiseCarousel;