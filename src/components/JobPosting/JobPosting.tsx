import React from 'react';
import styles from './JobPosting.module.css';

import ChiefMarketingOfficerApp from '../../Documents/Chief_Marketing_Officer.docx';
import DirectorOfMedicalAndHealthApp from '../../Documents/Director_Of_Medical_Health.docx';
import DonorRelationsLeadApp from '../../Documents/Donor_Relations_Lead.docx';
import FinanceLeadApp from '../../Documents/Finance_Lead.docx';
import MarketingLeading_CopywriterCreative from '../../Documents/Marketing_Lead_Copywriter_Creative.docx';
import PeopleAndCultureLeadApp from '../../Documents/People_And_Culture_Lead.docx';
import GoogleEventTracker from '../GoogleEventTracker';
import { GoogleEventCategory, GoogleEventAction } from '../../util';

const JobPostingInfo = [
  {
    title: 'Chief Marketing Officer',
    link: ChiefMarketingOfficerApp,
    googleEventCategory: GoogleEventCategory.JOB_CHIEF_MARKETING_OFFICER,
    googleEventAction: GoogleEventAction.CLICK
  },
  {
    title: 'Director of Medical & Health',
    link: DirectorOfMedicalAndHealthApp,
    googleEventCategory: GoogleEventCategory.JOB_DIRECTOR_OF_MEDICAL_HEALTH,
    googleEventAction: GoogleEventAction.CLICK
  },
  {
    title: 'Donor Relations Lead',
    link: DonorRelationsLeadApp,
    googleEventCategory: GoogleEventCategory.JOB_DONOR_RELATIONS_LEAD,
    googleEventAction: GoogleEventAction.CLICK
  },
  {
    title: 'Finance Lead',
    link: FinanceLeadApp,
    googleEventCategory: GoogleEventCategory.JOB_FINANCE_LEAD,
    googleEventAction: GoogleEventAction.CLICK
  },
  {
    title: 'Marketing Lead - Copywriter/Creative',
    link: MarketingLeading_CopywriterCreative,
    googleEventCategory: GoogleEventCategory.JOB_MARKETING_LEAD_COPYWRITER,
    googleEventAction: GoogleEventAction.CLICK
  },
  {
    title: 'People & Culture Lead',
    link: PeopleAndCultureLeadApp,
    googleEventCategory: GoogleEventCategory.JOB_PEOPLE_CULTURE_LEAD,
    googleEventAction: GoogleEventAction.CLICK
  }
];

const JobPosting: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.containerTitle}>
        Available Roles (NY/DC metro area only)
      </div>

      <div className={styles.jobPostingContainer}>
        {JobPostingInfo.map(posting => (
          <GoogleEventTracker
            category={posting.googleEventCategory}
            action={posting.googleEventAction}
          >
            <div key={posting.title} className={styles.jobPosting}>
              <div className={styles.jobTitle}>
                <a
                  href={posting.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {posting.title}
                </a>
              </div>
            </div>
          </GoogleEventTracker>
        ))}
      </div>
    </div>
  );
};

export default JobPosting;
