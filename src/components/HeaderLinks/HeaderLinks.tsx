import React, { useState } from 'react';
import styles from './HeaderLinks.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import EventTracker from '../EventTracker';
import { TrackingEventAction, TrackingEventLabel } from '../../util';
import DonationModal from '../DonationModal';

interface Props {
  isMobile?: boolean;
  onGiveClick?: () => void;
}

const HeaderLinks = ({ isMobile, onGiveClick }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.headerLinks}>
        {isMobile ? (
          <div className={styles.link}>
            <NavLink exact to='/' activeClassName={styles.active}>
              Home
            </NavLink>
          </div>
        ) : null}
        <div className={styles.link}>
          <NavLink exact to='/our-approach' activeClassName={styles.active}>
            Our Approach
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink exact to='/our-work' activeClassName={styles.active}>
            Our Work
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink exact to='/builders' activeClassName={styles.active}>
            Builders
          </NavLink>
        </div>
        <div className={styles.link}>
          <a href={'https://givebutter.com/empoweringdreams'} target='_blank' rel='noopener noreferrer'>
            Education
          </a>
        </div>
        <div className={styles.link}>
          <NavLink exact to='/about-us' activeClassName={styles.active}>
            About Us
          </NavLink>
        </div>
        <EventTracker action={TrackingEventAction.OUTBOUND_CLICK} label={TrackingEventLabel.DONATE}>
          <div className={styles.link} onClick={() => setIsModalOpen(true)}>
            {isMobile ? (
              <span onClick={() => onGiveClick?.()}>Give</span>
            ) : (
              <Button>
                <span>Give</span>
              </Button>
            )}
          </div>
        </EventTracker>
      </div>

      <DonationModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default HeaderLinks;
