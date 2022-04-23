import React from 'react';
import styles from './JobPosting.module.css';

import GoogleEventTracker from '../GoogleEventTracker';
import { GoogleEventCategory, GoogleEventAction } from '../../util';

// const JobPostingInfo = [];

const JobPosting: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.containerTitle}>
        Available Roles (NY/DC metro area only)
      </div>

      <div className={styles.link}>
        <a
          href="https://www.linkedin.com/company/goforefront/jobs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see our open roles!
        </a>
        {/* {JobPostingInfo.map((posting) => (
          <GoogleEventTracker
            key={posting.title}
            category={posting.googleEventCategory}
            action={posting.googleEventAction}
          >
            <div className={styles.jobPosting}>
              <div className={styles.jobTitle}>
                <a
                  href={posting.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {posting.title}
                </a>
              </div>
            </div>
          </GoogleEventTracker>
        ))} */}
      </div>
    </div>
  );
};

export default JobPosting;
