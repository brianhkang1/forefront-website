import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';

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
    icon: <div className={styles.icons}><Icon name="tint" size="huge"/></div>,
    description: 'Dig clean water wells and provide hand soap'
  },
  {
    title: 'EDUCATION',
    icon: <div className={styles.icons}><Icon name="graduation cap" size="huge"/></div>,
    description: 'Build quality schools '
  },
  {
    title: 'MEDICAL',
    icon: <div className={styles.icons}><Icon name="band aid" size="huge"/></div>,
    description: 'Create accessible and affordable health clinics'
  },
  {
    title: 'EMPOWERMENT',
    icon: <div className={styles.icons}><Icon name="users" size="huge"/></div>,
    description: 'Empower leadership training'
  }
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

            <PictureText padding='1rem 1.5rem' className={styles.featureText}>
              Builders: an unstoppable group of monthly givers
              in building up communities where every person
              has the opportunity to thrive
            </PictureText>

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
          Your monthly giving equips communities with the necessities to thrive:
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

        <div className={styles.pictureContainer}>
          <PictureText className={styles.pictureText}>
            The key to establishing sustainable communities in developing areas 
            is empowering the locals, the people who know their community best. 
            All future leaders must first be equipped with their fundamental human rights 
            to clean water, education, and access to basic medical care 
            to give them a platform to succeed.
          </PictureText>
        </div>

        <div className={styles.blurb}>
          Making change doesn't require you to have credentials 
          but just a giving kind heart. 
          It's everyday people who are everyday heroes. 
          So we are bringing everyday heroes together to make 
          everyday impact.
        </div>

        <div className={styles.whyBeMonthlyDonor}>
          <div className={styles.title}>
            Why be a Builder?
          </div>

          <div className={styles.whyBeMonthlyDonorText}>
            <div className={styles.whyBeMonthlyDonorItem}>
              Share love with villagers 
            </div>

            <div className={styles.whyBeMonthlyDonorItem}>
              Shape a sustainable future
            </div>

            <div className={styles.whyBeMonthlyDonorItem}>
              Get updates and news first
            </div>
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
                  />
                  
                  <PictureText className={styles.testimonialText}>
                    {item.description}
                  </PictureText>
                </div>
              ))

              }
            </Carousel>
          </div>
        </div>

        <div className={styles.blurb}>
          You too, along with many other givers, can also make impact. 
          It's everyday people who through their own act of generosity, 
          makes ripple effect positively changing people's lives. 
          You can also do the same. Together, we will leave a legacy 
          in this world.
        </div>

        <Footer/>
      </div>
    );
  }
}

export default BuildersPage;
