import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';
import OurApproachFeatureContainer from '../../OurApproachFeatureContainer';

import BenefitPic1 from '../../../Images/Portrait/1.jpg';
import BenefitPic2 from '../../../Images/Portrait/2.jpg';
import BenefitPic3 from '../../../Images/Portrait/3.jpg';
import BenefitPic4 from '../../../Images/Portrait/4.jpg';

import TestimonialPic1 from '../../../Images/1.jpg';
import TestimonialPic2 from '../../../Images/2.jpg';
import TestimonialPic3 from '../../../Images/3.jpg';
import TestimonialPic4 from '../../../Images/4.jpg';

import Carousel from 'react-material-ui-carousel'
import PictureText from '../../../components/PictureText';

const BenefitsPictures = [
  BenefitPic1, BenefitPic2, BenefitPic3, BenefitPic4
]

const Testimonials = [
  {
    image: TestimonialPic1,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, vitae? Molestias, quisquam asperiores odio dolorem ullam'
  },
  {
    image: TestimonialPic2,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, vitae? Molestias, quisquam asperiores odio dolorem ullam'
  },
  {
    image: TestimonialPic3,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, vitae? Molestias, quisquam asperiores odio dolorem ullam'
  },
  {
    image: TestimonialPic4,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, vitae? Molestias, quisquam asperiores odio dolorem ullam'
  },
]

class BuildersPage extends React.Component{
  componentDidMount(){
    const script = document.createElement("script");
    script.src = 'https://secure.givelively.org/widgets/branded_donation/forefront-charity.js';
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  render(){
    return (
      <div>
        <div className={styles.FeaturePictureContainer}>
          <PictureFilter>
            <div className={styles.header}>
              <Header/>
            </div>
          </PictureFilter>
        </div>

        <div className={styles.blurb}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Reiciendis fugit illum quia quo deserunt nam saepe voluptatibus 
          officia repellat soluta, ut inventore reprehenderit? 
        </div>

        <OurApproachFeatureContainer/>

        <div className={styles.whyBeMonthlyDonor}>
          <div className={styles.title}>
            Why be a monthly donor?
          </div>
          <div className={styles.whyBeMonthlyDonorText}>
            <div className={styles.whyBeMonthlyDonorItem}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className={styles.whyBeMonthlyDonorItem}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div className={styles.benefitsContainer}>
          <div className={styles.title}>Benefits</div>
          <div className={styles.benefitsPictures}>
            {BenefitsPictures.map((pic, index) => (
              <img 
                src={pic} 
                alt={`benefit ${index+1}`}
                className={styles.benefitsPic}
              />
            ))}
          </div>
        </div>

        <div className={styles.testimonialContainer}>
          <div className={styles.title}>Testimonials</div>
          <div className={styles.carouselContainer}>
            <Carousel
              animation={"slide"}
              indicators={true}
              interval={3000}
            >
              {Testimonials.map((item, index) => (
                <div className={styles.testimonialPicContainer}>
                  <img
                    src={item.image}
                    className={styles.testimonialPic}
                  >
                    {/* <span className={styles.testimonialText}>
                      <PictureText>{item.description}</PictureText>
                    </span> */}
                  </img>
                  <div className={styles.testimonialText}>
                    <PictureText>{item.description}</PictureText>
                  </div>
                </div>
              ))

              }
            </Carousel>
          </div>
        </div>

        <div style={{height: '120vh'}}>
          <div 
            data-widget-src='https://secure.givelively.org/donate/forefront-charity?ref=sd_widget' 
            id="give-lively-widget" 
            className="gl-branded-donation-widget"
          />
        </div>

        {/* <Footer/> */}
      </div>
    );
  }
}

export default BuildersPage;
