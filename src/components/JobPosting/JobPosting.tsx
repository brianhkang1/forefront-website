import React from 'react';
import styles from './JobPosting.module.css';

import ChiefMarketingOfficerApp from '../../Documents/Chief_Marketing_Officer.docx';
import DirectorOfMedicalAndHealthApp from '../../Documents/Director_Of_Medical_Health.docx';
import DirectorOfWaterAndSanitationsApp from '../../Documents/Director_Of_Water_And_Sanitations.docx';
import DonorRelationsLeadApp from '../../Documents/Donor_Relations_Lead.docx';
import FinanceLeadApp from '../../Documents/Finance_Lead.docx';
import MarketingLeading_CopywriterCreative from '../../Documents/Marketing_Lead_Copywriter_Creative.docx';
import PeopleAndCultureLeadApp from '../../Documents/People_And_Culture_Lead.docx';

const JobPostingInfo = [
  {
    title: 'Chief Marketing Officer',
    link: ChiefMarketingOfficerApp
  },
  {
    title: 'Director of Medical & Health',
    link: DirectorOfMedicalAndHealthApp
  },
  {
    title: 'Director of Water & Sanitations',
    link: DirectorOfWaterAndSanitationsApp
  },
  {
    title: 'Donor Relations Lead',
    link: DonorRelationsLeadApp
  },
  {
    title: 'Finance Lead',
    link: FinanceLeadApp
  },
  {
    title: 'Marketing Lead - Copywriter/Creative',
    link: MarketingLeading_CopywriterCreative
  },
  {
    title: 'People & Culture Lead',
    link: PeopleAndCultureLeadApp
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
          <div key={posting.title} className={styles.jobPosting}>
            <div className={styles.jobTitle}>
              <a href={posting.link} target='_blank' rel='noopener noreferrer'>
                {posting.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPosting;
