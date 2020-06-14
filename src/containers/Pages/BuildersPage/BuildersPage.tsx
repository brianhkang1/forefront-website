import React, { useEffect, useRef } from 'react';
import styles from './BuildersPage.module.css';
import useIsMobile from '../../../hooks/useIsMobile';

import Header from '../../Header';
import Footer from '../../Footer';
import PictureFilter from '../../../components/PictureFilter';
import Picture from '../../../components/Picture';
import PictureText from '../../../components/PictureText';
import Title from '../../../components/Title';

import TestimonialAnil from '../../../Images/BuildersPage/Testimonial/Anil.jpg';
import TestimonialBoshanam from '../../../Images/BuildersPage/Testimonial/Boshanam.jpg';
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

import Carousel from 'react-material-ui-carousel';

export const FourPillarItems = [
  {
    title: 'WATER',
    icon: WaterIcon,
    description: 'Dig clean water wells and provide hand soap',
    color: 'var(--blue-color)',
  },
  {
    title: 'EDUCATION',
    icon: EducationIcon,
    description: 'Provide quality education for children',
    color: 'var(--yellow-color)',
  },
  {
    title: 'MEDICAL',
    icon: MedicalIcon,
    description: 'Create accessible and affordable health clinics',
    color: 'var(--red-color)',
  },
  {
    title: 'EMPOWERMENT',
    icon: EmpowermentIcon,
    description: 'Empower leadership training',
    color: 'var(--purple-color)',
  },
];

const Testimonials = [
  {
    name: 'Anil',
    image: TestimonialAnil,
    description:
      'I didn’t have a chance to study but through this school, children will now be able to. This is for their future.',
  },
  {
    name: 'Timothy',
    image: TestimonialTimothy,
    description:
      'I like to help build the school because I know it will help many people.',
  },
  {
    name: 'Vinod',
    image: TestimonialVinod,
    description:
      'I can’t even sign my own name. So I’m happy to impact children’s education. I hope this helps kids get good jobs. ',
  },
  {
    name: 'Boshanam',
    image: TestimonialBoshanam,
    description:
      'Because of the school, the future of many children will be brighter. There’s been no development on this side of the village and I’m glad the school is going to change our community. ',
  },
  {
    name: 'Mani',
    image: TestimonialMani,
    description:
      'I have grandkids and I want them and their kids to study here.',
  },
];

const WhyBeABuilder = [
  {
    image: WhyBeBuilder1,
    text: 'Share love with villagers',
  },
  {
    image: WhyBeBuilder2,
    text: 'Shape a sustainable future',
  },
  {
    image: WhyBeBuilder3,
    text: 'Get updates and news first',
  },
];

const DonationWidget: React.FC = () => {
  return (
    <div
      className={`${styles.widgetContainer} wow fadeIn`}
      data-wow-delay="0.75s"
    >
      <div
        data-widget-src="https://secure.givelively.org/donate/forefront-charity?ref=sd_widget"
        id="give-lively-widget"
        className="gl-branded-donation-widget"
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
    // 'https://secure.givelively.org/widgets/simple_donation/forefront-charity.js?address_required=false'
    document.getElementsByTagName('head')[0].appendChild(script);
  }, []);

  const renderBecomeABuilderDescription = () => {
    if (isMobile) {
      return (
        <span>
          <span
            className={styles.mobileDonationWidgetLink}
            onClick={scrollToMobileDonationWidget}
          >
            Join other passionate and dedicated givers
          </span>{' '}
          to build up local community leaders that will multiply into a global
          network of change. Your monthly giving equips communities with the
          necessities to thrive:
        </span>
      );
    } else {
      return 'Join other passionate and dedicated givers to build up local community leaders that will multiply into a global network of change. Your monthly giving equips communities with the necessities to thrive:';
    }
  };

  const scrollToMobileDonationWidget = () => {
    if (mobileDonationWidget && mobileDonationWidget.current) {
      window.scrollTo({
        top: mobileDonationWidget.current.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

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
              <PictureText padding="1rem 1.5rem">
                Builders: an unstoppable group of monthly givers in building up
                communities where every person has the opportunity to thrive
              </PictureText>
            </div>
            {/* hacky way of ensuring heroText takes up space to place
            widget below appropriately */}
            <div className={styles.hiddenHeroText}>
              Builders: an unstoppable group of monthly givers in building up
              communities where every person has the opportunity to thrive
            </div>

            {!isMobile && <DonationWidget />}
          </div>
        </PictureFilter>
      </div>

      <div className={styles.titleContainer}>
        <Title
          title="Become a Builder"
          description={renderBecomeABuilderDescription()}
        />
      </div>

      <div className={styles.iconsContainer}>
        {FourPillarItems.map(item => (
          <div
            className={styles.iconItem}
            style={{ backgroundColor: item.color }}
          >
            <Picture src={item.icon} width="6rem" height="6rem" />
            <div className={styles.iconDescription}>{item.description}</div>
          </div>
        ))}
      </div>

      <Title
        title="Make a Ripple Effect of Change"
        description="You too, along with many other givers, can also make impact. 
        It's everyday people who through their own act of generosity, 
        makes ripple effect positively changing people's lives. 
        You can also do the same. Together, we will leave a legacy 
        in this world."
      />

      <Picture src={RandomPic} width="100vw" height="60vh" />

      <Title
        title="Calling Everyday Heroes"
        description="Making change doesn't require you to have credentials 
        but just a giving kind heart. It's everyday people who are everyday heroes. 
        So we are bringing everyday heroes together to make everyday impact. 
        Why be a builder?"
      />

      <div className={styles.whyBeMonthlyDonorContainer}>
        {WhyBeABuilder.map(whyBeBuilderItem => (
          <div className={styles.whyBeMonthlyDonorItem}>
            <Picture
              src={whyBeBuilderItem.image}
              height="18rem"
              width="18rem"
            />

            <div className={styles.whyBeMonthlyDonorText}>
              {whyBeBuilderItem.text}
            </div>
          </div>
        ))}
      </div>

      <Title
        title="Meet the People on the Ground..."
        description="who are making this all possible. They are everyday heroes on the ground who believe in partnering with us to make a brighter future."
      />

      <div className={styles.carouselContainer}>
        <Carousel
          animation={'slide'}
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
                  <span>"{item.description}"</span>
                </PictureText>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {isMobile && (
        <div ref={mobileDonationWidget}>
          <Title title="Make a Donation" />
          <DonationWidget />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BuildersPage;
