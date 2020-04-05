import React from 'react';
import styles from './JobPosting.module.css';
// @ts-ignore
import ChiefMarketingOfficerApp from '../../Documents/Chief_Marketing_Officer.doc';
// @ts-ignore
import CopyWriteLeadApp from '../../Documents/Copy_Write_Lead.doc';
// @ts-ignore
import DirectorOfEducationApp from '../../Documents/Director_of_Education.doc';
// @ts-ignore
import DirectorOfMedicalApp from '../../Documents/Director_of_Medical.doc';
// @ts-ignore
import DirectorOfProgramsApp from '../../Documents/Director_of_Programs.doc';
// @ts-ignore
import EventsLeadApp from '../../Documents/Events_Lead.doc';
// @ts-ignore
import PeopleAndCultureLeadApp from '../../Documents/People_And_Culture_Lead.doc';
// @ts-ignore
import PublicRelationsLeadApp from '../../Documents/Public_Relations_Lead.doc';

const JobPostingInfo = [
  {
    title: 'Chief Marketing Officer',
    description: 'Lorem ipsum dolor sit amet',
    link: ChiefMarketingOfficerApp
  },
  {
    title: 'Copy-Write Lead',
    description: 'Lorem ipsum dolor sit amet',
    link: CopyWriteLeadApp
  },
  {
    title: 'Director Of Education',
    description: 'Lorem ipsum dolor sit amet',
    link: DirectorOfEducationApp
  },
  {
    title: 'Director of Medical',
    description: 'Lorem ipsum dolor sit amet',
    link: DirectorOfMedicalApp
  },
  {
    title: 'Director of Programs',
    description: 'Lorem ipsum dolor sit amet',
    link: DirectorOfProgramsApp
  },
  {
    title: 'Events Lead',
    description: 'Lorem ipsum dolor sit amet',
    link: EventsLeadApp
  },
  {
    title: 'People & Culture Lead',
    description: 'Lorem ipsum dolor sit amet',
    link: PeopleAndCultureLeadApp
  },
  {
    title: 'Public Relations Lead',
    description: 'Lorem ipsum dolor sit amet',
    link: PublicRelationsLeadApp
  },

]

const JobPosting: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.containerTitle}>
        Available Roles
      </div>

      <div className={styles.jobPostingContainer}>
        {JobPostingInfo.map(posting => (
          <div className={styles.jobPosting}>
              <div className={styles.jobTitle}>
                <a href={posting.link} target="_blank" rel="noopener noreferrer">
                  {posting.title}
                </a>
              </div>
              <div className={styles.jobDescription}>
                {posting.description}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobPosting;