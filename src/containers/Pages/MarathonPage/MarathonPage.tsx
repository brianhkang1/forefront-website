import React from 'react';
import styles from './MarathonPage.module.css';

import Header from '../../Header';
import Title from '../../../components/Title';
import Picture from '../../../components/Picture';
import Footer from '../../Footer';

import PictureOne from '../../../Images/Marathon/1.jpg';
import PictureTwo from '../../../Images/Marathon/2.jpg';
import PictureThree from '../../../Images/Marathon/3.jpg';
import Forefront_Logo from '../../../Images/Marathon/Forefront_Logo.png';
import Marathon_Logo from '../../../Images/Marathon/Marathon_Logo.png';

class MarathonPage extends React.Component {
  render() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    return (
      <div className={styles.root}>
        {isMobile && (
          <div className={styles.header}>
            <Header />
          </div>
        )}

        <div className={styles.heroPictureContainer}>
          {/* desktop view */}
          {isDesktop && (
            <div className={styles.header}>
              <Header />
            </div>
          )}
        </div>

        <Title
          title='Running Together'
          description={
            <div>
              <p>
                FOREFRONT Charity has been selected as a charity partner of the 2023 TCS New York City Marathon on{' '}
                <b>November 5, 2023!</b> Apply now to become one of our five team members by June 30, 2023. We will
                select our runners from the pool of applicants.
              </p>

              <p>
                When you join our team, you'll be running to provide basic life necessities for all:{' '}
                <b>
                  clean water & proper sanitation, quality education, accessible medical care, and empowerment
                  opportunities!
                </b>
              </p>
            </div>
          }
        />

        <Picture src={PictureOne} width='100vw' height='60vh' />

        <Title
          title='Why Run With FOREFRONT Charity?'
          description={
            <div>
              <p>
                Running with us guarantees your race entry! A spot on the team includes connections to participants and
                experienced marathoners who can offer race-day strategies.
              </p>

              <p>
                We’ll also ensure runners can proudly represent our organization on race day by providing FOREFRONT
                Charity branded gear and a special gift box! Runners will also be invited to select events hosted
                throughout the year in New York and/or Washington DC area.
              </p>

              <p>Required fundraising pledge for each runner: $3,000</p>
            </div>
          }
        />

        <Picture src={PictureTwo} width='100vw' height='60vh' />

        <Title
          title='Fundraising Support And Resources For Our Runners'
          description={
            <div>
              <p>
                We’ll provide FOREFRONT Charity branded materials and guides on how to personalize your fundraising
                page. Our development team will also be available to answer questions and develop personal fundraising
                strategies if needed.
              </p>
            </div>
          }
        />

        <Picture src={PictureThree} width='100vw' height='60vh' />

        <div className={styles.linksContainer}>
          <div>
            <span>Run with Us! </span>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSehuQTp71A9n7T72bcMAGajsaRoYS6ocIxrVnqvq-bDXk44aw/viewform'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click here to apply
            </a>
            <span> to be one of our five team members!</span>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a href='https://givebutter.com/ffmarathon23' target='_blank' rel='noopener noreferrer'>
              Join a marathon team!
            </a>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <span>Learn more about FOREFRONT Charity and </span>
            <a href='https://instagram.com/goforefront' target='_blank' rel='noopener noreferrer'>
              follow us on social!
            </a>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MarathonPage;
