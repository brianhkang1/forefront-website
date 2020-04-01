import React from 'react';
import styles from './JobPosting.module.css';
// @ts-ignore
import WebDevApp from '../../Documents/Web_Developer_Application.pdf';


const JobPostingInfo = [
  {
    title: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet',
    link: WebDevApp
  },
  // {
  //   title: 'Fake Job 2',
  //   description: 'Lorem ipsum dolor sit amet',
  //   link: InternshipPDF
  // },
  // {
  //   title: 'Fake job 3',
  //   description: 'Lorem ipsum dolor sit amet',
  //   link: InternshipPDF
  // },
  // {
  //   title: 'Fake job 4',
  //   description: 'Lorem ipsum dolor sit amet',
  //   link: InternshipPDF
  // }
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