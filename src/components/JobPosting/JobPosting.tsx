import React from 'react';
import styles from './JobPosting.module.css';

import OperationsDevelopmentLeadApp from '../../Documents/Operations_Development_Lead.pdf';
import GoogleEventTracker from '../GoogleEventTracker';
import { GoogleEventCategory, GoogleEventAction } from '../../util';

const JobPostingInfo = [
  {
    title: 'Operations Development Lead',
    link: OperationsDevelopmentLeadApp,
    googleEventCategory: GoogleEventCategory.JOB_OPERATIONS_DEVELOPMENT_LEAD,
    googleEventAction: GoogleEventAction.CLICK,
  },
];

const JobPosting: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.containerTitle}>
        Available Roles (NY/DC metro area only)
      </div>

      <div className={styles.jobPostingContainer}>
        {JobPostingInfo.map((posting) => (
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
