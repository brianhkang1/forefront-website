import React from 'react';
import styles from './BuildersPage.module.css';
import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';
import Picture from '../../../components/Picture';
import PictureText from '../../../components/PictureText';

import TestimonialAnil from '../../../Images/BuildersPage/Testimonial/Anil.jpg';
import TestimonialBoshanam from '../../../Images/BuildersPage/Testimonial/Boshanam.jpg';
import TestimonialBujji from '../../../Images/BuildersPage/Testimonial/Bujji.jpg';
import TestimonialMani from '../../../Images/BuildersPage/Testimonial/Mani.jpg';
import TestimonialTimothy from '../../../Images/BuildersPage/Testimonial/Timothy.jpg';
import TestimonialVinod from '../../../Images/BuildersPage/Testimonial/Vinod.jpg';

import RandomPic from '../../../Images/BuildersPage/RandomPic.jpg';
import WaterIcon from '../../../Images/Icons/FourPillars/Water.png';
import EducationIcon from '../../../Images/Icons/FourPillars/Education.png';
import MedicalIcon from '../../../Images/Icons/FourPillars/Medical.png';
import EmpowermentIcon from '../../../Images/Icons/FourPillars/Empowerment.png';
import WhyBeBuilder1 from '../../../Images/BuildersPage/WhyBeBuilder1.png';
import WhyBeBuilder2 from '../../../Images/BuildersPage/WhyBeBuilder2.png';
import WhyBeBuilder3 from '../../../Images/BuildersPage/WhyBeBuilder3.png';

import Carousel from 'react-material-ui-carousel'

export const FourPillarItems = [
  {
    title: 'WATER',
    icon: WaterIcon,
    description: 'Dig clean water wells and provide hand soap',
    color: 'var(--blue-color)'
  },
  {
    title: 'EDUCATION',
    icon: EducationIcon,
    description: 'Provide quality education for children',
    color: 'var(--yellow-color)'
  },
  {
    title: 'MEDICAL',
    icon: MedicalIcon,
    description: 'Create accessible and affordable health clinics',
    color: 'var(--red-color)'
  },
  {
    title: 'EMPOWERMENT',
    icon: EmpowermentIcon,
    description: 'Empower leadership training',
    color: 'var(--purple-color)'
  }
]

const Testimonials = [
  {
    name: 'Anil',
    image: TestimonialAnil,
    description: 'We didn’t study but somebody else will. This is for their future.'
  },
  {
    name: 'Timothy',
    image: TestimonialTimothy,
    description: 'I like to work on building the school as it’s going to help others.'
  },
  {
    name: 'Vinod',
    image: TestimonialVinod,
    description: 'I’m happy to be a part of children’s education, I can’t even sign my own name. I hope this helps kids get good jobs unlike me.'
  },
  {
    name: 'Boshanam',
    image: TestimonialBoshanam,
    description: 'Because of the school, the future of little kids is going to change. There’s been no development on this side of the village and I’m glad the school is going  to change that.'
  },
  {
    name: 'Bujji',
    image: TestimonialBujji,
    description: 'I hope my grandkids can study here.'
  },
  {
    name: 'Mani',
    image: TestimonialMani,
    description: 'I have grandkids and I want them and their kids to study here.'
  },
]

const WhyBeABuilder = [
  {
    image: WhyBeBuilder1,
    text: 'Share love with vllagers'
  },
  {
    image: WhyBeBuilder2,
    text: 'Shape a sustainable future'
  },
  {
    image: WhyBeBuilder3,
    text: 'Get updates and news first'
  }
]

class BuildersPage extends React.Component{
  componentDidMount(){
    const script = document.createElement("script");
    script.src = 'https://secure.givelively.org/widgets/simple_donation/forefront-charity.js?show_suggested_amount_buttons=true&address_required=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100'
    // 'https://secure.givelively.org/widgets/simple_donation/forefront-charity.js?address_required=false'
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

            <div className={styles.heroTextAndWidgetContainer}>
              <div className={styles.heroText}>
                <PictureText padding='1rem 1.5rem'>
                  Builders: an unstoppable group of monthly givers
                  in building up communities where every person
                  has the opportunity to thrive
                </PictureText>
              </div>
              {/* hacky way of ensuring heroText takes up space to place
              widget below appropriately */}
              <div className={styles.hiddenHeroText}>
                Builders: an unstoppable group of monthly givers
                in building up communities where every person
                has the opportunity to thrive
              </div>

              <div className={`${styles.widgetContainer} wow fadeIn`} data-wow-delay="0.75s">
                <div 
                  data-widget-src='https://secure.givelively.org/donate/forefront-charity?ref=sd_widget' 
                  id="give-lively-widget" 
                  className="gl-branded-donation-widget"
                />
              </div>
            </div>
          </PictureFilter>
        </div>

        <div className={styles.blurb}>
          Become a Builder and join other passionate and dedicated group of givers 
          to build up local community leaders that will multiply 
          into a global network of change. Your monthly giving equips communities with the necessities to thrive:
        </div>

        <div className={styles.iconsContainer}>
          {FourPillarItems.map(item => (
            <div className={styles.iconItem} style={{backgroundColor: item.color}}>
              <Picture
                src={item.icon}
                width='6rem'
                height='6rem'
              />
              <div className={styles.iconDescription}>
                {item.description}
              </div>
            </div>
            ))}
        </div>

        <div className={styles.blurb}>
          You too, along with many other givers, can also make impact. 
          It's everyday people who through their own act of generosity, 
          makes ripple effect positively changing people's lives. 
          You can also do the same. Together, we will leave a legacy 
          in this world.
        </div>

        <Picture
          src={RandomPic}
          width="100vw"
          height='60vh'
        />

        <div className={styles.blurb}>
          Making change doesn't require you to have credentials 
          but just a giving kind heart. 
          It's everyday people who are everyday heroes. 
          So we are bringing everyday heroes together to make 
          everyday impact. Why be a builder?
        </div>

        <div className={styles.whyBeMonthlyDonorContainer}>
          {WhyBeABuilder.map(whyBeBuilderItem => (
            <div className={styles.whyBeMonthlyDonorItem}>
              <Picture
                src={whyBeBuilderItem.image}
                height='18rem'
                width='18rem'
              />

              <div>
                {whyBeBuilderItem.text}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselContainer}>
          <Carousel
            animation={"slide"}
            indicators={true}
            autoPlay={true}
            interval={6000}
            navButtonsAlwaysVisible={true}
            className={styles.carousel}
          >
            {Testimonials.map((item, index) => (
              <div key={item.name} className={styles.testimonialPicContainer}>
                <img
                  src={item.image}
                  className={styles.testimonialPic}
                  alt={`testimonial ${index + 1}`}
                />
                
                <div className={styles.testimonialTextContainer}>
                  <PictureText className={styles.testimonialText}>
                    <span className={styles.bold}>{item.name}: </span>
                    <span>{item.description}</span>
                  </PictureText>
                </div>
              </div>
            ))

            }
          </Carousel>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default BuildersPage;
