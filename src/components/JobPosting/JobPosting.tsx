import React from 'react';
import styles from './JobPosting.module.css';
// @ts-ignore
import ChiefMarketingOfficerApp from '../../Documents/Chief_Marketing_Officer.doc';
// @ts-ignore
import CopyWriteLeadApp from '../../Documents/Copy_Write_Lead.doc';
// @ts-ignore
import DirectorOfMedicalApp from '../../Documents/Director_of_Medical.doc';
// @ts-ignore
import DirectorOfProgramsApp from '../../Documents/Director_of_Programs.doc';
// @ts-ignore
import PeopleAndCultureLeadApp from '../../Documents/People_And_Culture_Lead.doc';
// @ts-ignore
import PublicRelationsLeadApp from '../../Documents/Public_Relations_Lead.doc';

const JobPostingInfo = [
  {
    title: 'Chief Marketing Officer',
    link: ChiefMarketingOfficerApp
  },
  {
    title: 'Copy-Write Lead',
    link: CopyWriteLeadApp
  },
  {
    title: 'Director of Medical',
    link: DirectorOfMedicalApp
  },
  {
    title: 'Director of Programs',
    link: DirectorOfProgramsApp
  },
  {
    title: 'People & Culture Lead',
    link: PeopleAndCultureLeadApp
  },
  {
    title: 'Public Relations Lead',
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobPosting;