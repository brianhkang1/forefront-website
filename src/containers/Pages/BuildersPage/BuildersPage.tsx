import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';

import BenefitPic1 from '../../../Images/Portrait/1.jpg';
import BenefitPic2 from '../../../Images/Portrait/2.jpg';
import BenefitPic3 from '../../../Images/Portrait/3.jpg';
import BenefitPic4 from '../../../Images/Portrait/4.jpg';

import TestimonialPic1 from '../../../Images/1.jpg';
import TestimonialPic2 from '../../../Images/2.jpg';
import TestimonialPic3 from '../../../Images/3.jpg';
import TestimonialPic4 from '../../../Images/4.jpg';

import { Icon } from 'semantic-ui-react';
import Carousel from 'react-material-ui-carousel'
import PictureText from '../../../components/PictureText';

export const FourPillarItems = [
  {
    title: 'WATER',
    icon: <div className={styles.icons}><Icon color='blue' name="tint" size="huge"/></div>,
    description: 'Dig clean water wells and provide hand soap'
  },
  {
    title: 'EDUCATION',
    icon: <div className={styles.icons}><Icon color='violet' name="graduation cap" size="huge"/></div>,
    description: 'Build quality schools '
  },
  {
    title: 'MEDICAL',
    icon: <div className={styles.icons}><Icon color='brown' name="band aid" size="huge"/></div>,
    description: 'Create accessible and affordable health clinics'
  },
  {
    title: 'EMPOWERMENT',
    icon: <div className={styles.icons}><Icon color='red' name="users" size="huge"/></div>,
    description: 'Empower leadership training'
  }
]

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
    script.src = 'https://secure.givelively.org/widgets/simple_donation/forefront-charity.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&suggested_donation_amounts[]=20&suggested_donation_amounts[]=30&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100'
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

            <div className={styles.featureText}>
              <div>
                <PictureText>
                  Builders: an unstoppable group of monthly givers
                </PictureText>
              </div>
              <div>
                <PictureText>
                  in building up communities where every person
                </PictureText>
              </div>
              <div>
                <PictureText>
                  has the opportunity to thrive
                </PictureText>
              </div>
            </div>

            <div className={`${styles.widgetContainer} wow fadeIn`} data-wow-delay="0.5s">
              <div 
                data-widget-src='https://secure.givelively.org/donate/forefront-charity?ref=sd_widget' 
                id="give-lively-widget" 
                className="gl-branded-donation-widget"
              />
            </div>
          </PictureFilter>
        </div>

        <div className={styles.blurb}>
            Join other passionate and dedicated group of givers 
            to build up local community leaders that will multiply 
            into a global network of change. By providing basic life 
            necessities, you are giving opportunities to dream and 
            realize their potential. 
        </div>

        <div>
          <div className={styles.sectionTitle}> 
            Your monthly giving will support the four pillars <br/>
            that will equip communities with the necessities 
            to thrive:   
          </div>
          <div className={styles.iconsContainer}>
            {FourPillarItems.map(item => (
              <div className={styles.iconItem}>
                <div>{item.icon}</div>
                <div className={styles.iconDescription}>
                  {item.description}
                </div>
              </div>
              ))}
          </div>
        </div>

        

        <div className={styles.whyBeMonthlyDonor}>
          <div className={styles.title}>
            Why be a monthly donor?
          </div>
          <div className={styles.whyBeMonthlyDonorText}>
            <div className={styles.whyBeMonthlyDonorItem}>
              Shape a sustainable future
            </div>

            <div className={styles.whyBeMonthlyDonorItem}>
              Get updates and news first
            </div>

            <div className={styles.whyBeMonthlyDonorItem}>
              Share love with villagers 
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
                    alt={`testimonial ${index + 1}`}
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

        <Footer/>
      </div>
    );
  }
}

export default BuildersPage;
