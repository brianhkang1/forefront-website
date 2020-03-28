import React from 'react';
import styles from './OurTeamContainer.module.css';

import Picture from '../../components/Picture';
import TeamPicture from '../../Images/Education/11.jpg';
import MemberPicture from '../../Images/Portrait/2.jpg';
import PictureWithHoverText from '../../components/PictureWithHoverText';
import JobPosting from '../../components/JobPosting';

// @ts-ignore
import InternshipPDF from '../../Documents/Forefront_Internship.pdf';

type Member = {
  title: React.ReactNode;
  image: string;
  description: string;
}

const TeamMembers = [
  {
    title: <span>MATTHEW <br/> OH</span>,
    image: MemberPicture,
    description: "Matt is a Cornell University chemical engineer. Matt founded FOREFRONT in 2015 after having gone to India since 2012 and other countries such as El Salvador, Venezuela, and Paraguay and seeing the various severe needs in water/sanitation, education, health, and social justice."
  },
  {
    title: <span>CHANWOOK <br/> PARK</span>,
    image: MemberPicture,
    description: "Chanwook leads the FOREFRONT programs team. He holds B.S. and M.Eng degrees in engineering from Cornell University. His favorite places in the world are Ithaca, Salzburg, and Oscar's Seafood Tacos in San Diego. He hopes that he can be a light to many who are truly poor and needy in this world."
  },
  {
    title: <span>ANNA <br/> CHUN</span>,
    image: MemberPicture,
    description: "Anna studied Civil Engineering at Cornell University and graduated from UC Berkeley with her Masters in Environmental Engineering. In her free time, Anna enjoys hiking. Anna grew up in Sydney, Australia and Long Island, New York."
  },
  {
    title: <span>BRIAN <br/> KIM</span>,
    image: MemberPicture,
    description: "Brian graduated from St. John's University with a degree in accounting.  He enjoys cooking, hiking and gardening."
  },
  {
    title: <span>DARIEN <br/> KIM</span>,
    image: MemberPicture,
    description: "Darien graduated from Cornell University and currently resides in Washington D.C. He loves photography and wishes to pursue a future in it. He loves people hence his passion in portrait photography."
  },
  {
    title: <span>ELENA <br/> KIM</span>,
    image: MemberPicture,
    description: "Elena graduated with her bachelors from Rutgers University for political science. She (recently) received her Masters in Elementary Education from Rutgers Graduate School of Education. Elena does freelance photography & enjoys traveling with friends and family. She is part of our education team!"
  },
  {
    title: <span>EUNICE <br/> LIM</span>,
    image: MemberPicture,
    description: "Eunice will receive her degree in Communications with a specialization in Public Relations. She has been a part of the FOREFRONT family since 2016, working on the marketing team where she has been focused on managing our social media channels and increasing our reach."
  },
  {
    title: <span>JULIANA <br/> CANALE</span>,
    image: MemberPicture,
    description: "Juliana holds a B.S. in Food Science from Cornell University.  Juliana is looking to make a positive impact on society through a unifying medium. She is a bookworm, extreme baker, nature lover, and can carry on a conversation about almost anything."
  },
  {
    title: <span>KATE <br/> KIM</span>,
    image: MemberPicture,
    description: "Kate graduated from the Hotel School of Administration at Cornell University.  On the side, she is a wedding planner / coordinator!  She also loves travelling and spending time with her puppy.  She is excited to be part of this team making an impact around the globe!"
  },
  {
    title: <span>MATT <br/> LAWSON</span>,
    image: MemberPicture,
    description: "Matt is a graduate of Western Kentucky University where he studied International Affairs, Spanish, and Business Administration. Aside from international development, Matt loves learning languages, running and reading."
  },
  {
    title: <span>MICHELLE <br/> CHANG</span>,
    image: MemberPicture,
    description: "Michelle is our Chief Development Officer(CDO). Previously, she was a 2016-2018 Teach for America Corp member and also worked in Sales and Trading at J.P. Morgan, NYC. Michelle holds a B.S. in Business Administration from Georgetown University and a M.S. in Secondary Education from Johns Hopkins University."
  },
  {
    title: <span>SOOJI <br/> KIM</span>,
    image: MemberPicture,
    description: "Sooji graduated with a dual degree in evolutionary anthropology and political science at Rutgers University. Her passion for world issues led her to join the FOREFRONT team. She is a coffee enthusiast and a world traveler."
  },
  {
    title: <span>JEFF <br/> LEVY</span>,
    image: MemberPicture,
    description: "Jeff was inspired by FOREFRONT's vision to help people in another part of the globe according to the needs they share. Jeff enjoys meeting people and finding ways to learn and help. He works as a teacher and coach in the Washington DC area and has taught in the Boston area as well as in South Korea and Japan."
  },
]

const OurTeamContainer: React.FC = () => {
  const scrollToBottomOfPage = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div className={styles.root}>
      <div className={styles.mainPictureContainer}>
        <div className={styles.mainPictureTextContainer}>
          <div className={styles.mainPictureText}>
            Our team
          </div>

          <div className={styles.dashText}>—</div>

          <div className={styles.mainPictureSubtext}>
            We are everyday people that use our skills <br/>
            and talents to serve others!
          </div>

          <div onClick={scrollToBottomOfPage} className={styles.mainPictureLink}>
            Join the Forefront team
          </div>

          <div className={styles.mainPictureLink}>
            <a 
              href={InternshipPDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for an internship
            </a>
          </div>
        </div>

        <Picture 
          src={TeamPicture}
          className={styles.mainPicture} 
          width="70vw"
          height="70vh"
          alt="team picture"
        />
      </div>

      <div className={styles.teamMembersContainer}>
        {TeamMembers.map((member: Member) => (
          <PictureWithHoverText 
            title={member.title}
            description={member.description}
            image={member.image}
            className={styles.teamMemberPicture}
            titleClassName={styles.teamMemberPictureTitle}
            descriptionClassName={styles.teamMemberPictureDescription}
          />
        ))}
      </div>

      <JobPosting/>
    </div>
  )
}

export default OurTeamContainer;