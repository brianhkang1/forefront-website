import React, { useEffect, useRef } from 'react';
import styles from './BuildersPage.module.css';
import useIsMobile from '../../../hooks/useIsMobile';

import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';
import Picture from '../../../components/Picture';
import PictureText from '../../../components/PictureText';
import Title from '../../../components/Title';
import Video from '../../../components/Video';
import Button from '../../../components/Button';

import TestimonialAnil from '../../../Images/BuildersPage/Testimonial/Anil.jpg';
import TestimonialBoshanam from '../../../Images/BuildersPage/Testimonial/Boshanam.jpg';
import TestimonialMani from '../../../Images/BuildersPage/Testimonial/Mani.jpg';
import TestimonialTimothy from '../../../Images/BuildersPage/Testimonial/Timothy.jpg';
import TestimonialVinod from '../../../Images/BuildersPage/Testimonial/Vinod.jpg';
import WaterIcon from '../../../Images/Icons/FourPillars/Water.png';
import EducationIcon from '../../../Images/Icons/FourPillars/Education.png';
import MedicalIcon from '../../../Images/Icons/FourPillars/Medical.png';
import EmpowermentIcon from '../../../Images/Icons/FourPillars/Empowerment.png';
import WhyBeBuilder1 from '../../../Images/BuildersPage/WhyBeBuilder1.png';
import WhyBeBuilder2 from '../../../Images/BuildersPage/WhyBeBuilder2.png';
import WhyBeBuilder3 from '../../../Images/BuildersPage/WhyBeBuilder3.png';
import RippleEffect_Water from '../../../Images/BuildersPage/RippleEffect_Water.jpg';
import RippleEffect_Tuition from '../../../Images/BuildersPage/RippleEffect_Tuition.jpg';
import RippleEffect_StaffHousing from '../../../Images/BuildersPage/RippleEffect_StaffHousing.jpg';
import RippleEffect_Curriculum from '../../../Images/BuildersPage/RippleEffect_Curriculum.jpg';
import Quotes1 from '../../../Images/BuildersPage/Quotes1.png';
import Quotes2 from '../../../Images/BuildersPage/Quotes2.png';
import Quotes3 from '../../../Images/BuildersPage/Quotes3.png';
import Quotes4 from '../../../Images/BuildersPage/Quotes4.png';
import BecomeABuilderPic from '../../../Images/BuildersPage/BecomeABuilder.jpg';

import Carousel from 'react-material-ui-carousel';

const QuotePics = [Quotes1, Quotes2, Quotes3, Quotes4];

const RippleEffectItems = [
  {
    key: 'Water',
    text: 'Clean water for a family',
    amount: '$20',
    img: RippleEffect_Water
  },
  {
    key: 'Tuition',
    text: "One month student's tuition",
    amount: '$30',
    img: RippleEffect_Tuition
  },
  {
    key: 'StaffHousing',
    text: "One month staff's housing",
    amount: '$50',
    img: RippleEffect_StaffHousing
  },
  {
    key: 'Curriculum',
    text: "A classroom's curriculum",
    amount: '$100',
    img: RippleEffect_Curriculum
  }
];

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
    title: 'MEDICAL CARE',
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
];

const Testimonials = [
  {
    name: 'Anil',
    image: TestimonialAnil,
    description:
      'I didn’t have a chance to study but through this school, children will now be able to. This is for their future.'
  },
  {
    name: 'Timothy',
    image: TestimonialTimothy,
    description:
      'I like to help build the school because I know it will help many people.'
  },
  {
    name: 'Vinod',
    image: TestimonialVinod,
    description:
      'I can’t even sign my own name. So I’m happy to impact children’s education. I hope this helps kids get good jobs. '
  },
  {
    name: 'Boshanam',
    image: TestimonialBoshanam,
    description:
      'Because of the school, the future of many children will be brighter. There’s been no development on this side of the village and I’m glad the school is going to change our community. '
  },
  {
    name: 'Mani',
    image: TestimonialMani,
    description:
      'I have grandkids and I want them and their kids to study here.'
  }
];

const WhyBeABuilder = [
  {
    image: WhyBeBuilder1,
    text: 'Builders Newsletters'
  },
  {
    image: WhyBeBuilder2,
    text: 'Builders Exclusive Content'
  },
  {
    image: WhyBeBuilder3,
    text: 'Behind the Scenes Updates'
  }
];

const DonationWidget: React.FC = () => {
  return (
    <div
      className={`${styles.widgetContainer} wow fadeIn`}
      data-wow-delay='0.75s'
    >
      <div
        data-widget-src='https://secure.givelively.org/donate/forefront-charity?ref=sd_widget'
        id='give-lively-widget'
        className='gl-branded-donation-widget'
      />
      <div className={styles.widgetDisclaimer}>
        Thanks to a generous donor, your 2.2% credit card fee will be covered.
      </div>
    </div>
  );
};

const BuildersPage: React.FC = () => {
  const isMobile = useIsMobile();
  const mobileDonationWidget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://secure.givelively.org/widgets/simple_donation/forefront-charity.js?show_suggested_amount_buttons=true&address_required=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100';
    document.getElementsByTagName('head')[0].appendChild(script);
  }, []);

  return (
    <div className={styles.root}>
      {isMobile && (
        <div className={styles.header}>
          <Header />
        </div>
      )}

      <div className={styles.heroPictureContainer}>
        <PictureFilter>
          {!isMobile && (
            <div className={styles.header}>
              <Header />
            </div>
          )}

          <div className={styles.heroTextContainer}>
            <div className={styles.heroText}>
              <PictureText padding='1rem 1.5rem'>
                Builders: Monthly givers that invest in communities where every
                person has the opportunity to thrive
              </PictureText>
            </div>
            {/* hacky way of ensuring heroText takes up space to place
            widget below appropriately */}
            <div className={styles.hiddenHeroText}>
              Builders: Monthly givers that invest in communities where every
              person has the opportunity to thrive
            </div>

            {!isMobile && <DonationWidget />}
          </div>
        </PictureFilter>
      </div>

      {isMobile && (
        <div ref={mobileDonationWidget}>
          <Title title='Make a Donation' />
          <DonationWidget />
        </div>
      )}

      <div>
        <Title
          title='Make a Ripple Effect of Change'
          description='Even a small drop of generosity every day, month, and year wells up into waves of positive impact. Together, we can make that legacy.'
        />

        <div className={styles.rippleEffectItemContainer}>
          {RippleEffectItems.map((rippleEffectItem, index) => (
            <div key={rippleEffectItem.key} className={styles.rippleEffectItem}>
              <Picture
                key={`ourImpactItem-${index + 1}`}
                src={rippleEffectItem.img}
                className={styles.rippleEffectImage}
                width='18rem'
                height='18rem'
                mobileWidth='70vw'
                mobileHeight='70vw'
              >
                <div className={styles.rippleEffectIcon}>
                  {rippleEffectItem.amount}
                </div>
              </Picture>

              <div className={styles.rippleEffectText}>
                <div>{rippleEffectItem.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.titleContainer}>
          <Title
            title='Become a Builder'
            description={
              <div>
                Join other passionate and dedicated monthly givers to build up
                local community leaders who will multiply into a global network
                of change. Your giving equips communities with the necessities
                to thrive:
              </div>
            }
          />
        </div>

        <div className={styles.iconsContainer}>
          {FourPillarItems.map(item => (
            <div
              key={item.title}
              className={styles.iconItem}
              style={{ backgroundColor: item.color }}
            >
              <Picture src={item.icon} width='6rem' height='6rem' />
              <div className={styles.iconDescription}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Title
          title='Our Story'
          description='Since 2015, we have embarked on an incredible journey to make sustainable change.'
        />

        <div className={styles.ourStoryVideoContainer}>
          <Video />
        </div>
      </div>

      <div>
        <Title
          title='Calling Everyday Heroes'
          description='Everyday people make everyday heroes who make everyday impact. Creating change doesn’t require credentials, just a giving heart. Why be a Builder?'
        />

        <div className={styles.whyBeBuilderContainer}>
          {WhyBeABuilder.map((whyBeBuilderItem, index) => (
            <div
              key={'whyBeBuilderItem' + (index + 1)}
              className={styles.whyBeBuilderItem}
            >
              <Picture
                src={whyBeBuilderItem.image}
                height='18rem'
                width='18rem'
              />

              <div className={styles.whyBeBuilderText}>
                {whyBeBuilderItem.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Title
          title='Our on the Ground Builders'
          description='These everyday heroes partner with us to make a brighter future.'
        />

        <div className={styles.carouselContainer}>
          <Carousel
            indicators={true}
            autoPlay={true}
            interval={5000}
            navButtonsAlwaysVisible={true}
            className={styles.carousel}
          >
            {Testimonials.map((item, index) => (
              <div key={item.name} className={styles.carouselPicContainer}>
                <img
                  src={item.image}
                  className={styles.testimonialPic}
                  style={{ objectFit: 'cover' }}
                  alt={`testimonial ${index + 1}`}
                />

                <div className={styles.testimonialTextContainer}>
                  <PictureText className={styles.testimonialText}>
                    <span className={styles.bold}>{item.name}: </span>
                    <span>"{item.description}"</span>
                  </PictureText>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div>
        <Title
          title='Join These Builders'
          description='You can join this community and they are people just like you from all over the country. They are visionaries and want to see a bright future for all. We would love to have you.'
        />

        <div className={styles.carouselContainer}>
          <Carousel
            indicators={true}
            autoPlay={true}
            interval={5000}
            navButtonsAlwaysVisible={true}
            className={styles.carousel}
          >
            {QuotePics.map((img, index) => (
              <div
                key={`Quote${index + 1}`}
                className={styles.carouselPicContainer}
              >
                <img
                  src={img}
                  className={styles.quotePic}
                  style={{ objectFit: 'contain' }}
                  alt={`quote ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div>
        <Picture
          src={BecomeABuilderPic}
          width='100vw'
          height='60vh'
          mobileHeight='50vh'
        >
          <div
            className={styles.link}
            onClick={() => {
              const scrollToTop = isMobile
                ? (mobileDonationWidget?.current?.offsetTop || 50) - 50
                : 0;

              window.scrollTo({
                top: scrollToTop,
                behavior: 'smooth'
              });
            }}
          >
            <Button size={isMobile ? 'medium' : 'large'}>
              Become A Builder
            </Button>
          </div>
        </Picture>
      </div>

      <Footer />
    </div>
  );
};

export default BuildersPage;
