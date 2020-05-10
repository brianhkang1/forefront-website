import React from 'react';
import styles from './OurTeamContainer.module.css';
import Picture from '../../components/Picture';
import PictureWithHoverText from '../../components/PictureWithHoverText';
import JobPosting from '../../components/JobPosting';

// @ts-ignore
import InternshipPDF from '../../Documents/Forefront_Internship.pdf';

import MemberPicture from '../../Images/Portrait/2.jpg';
import TeamPicture from '../../Images/Team/Team.jpg';
import MatthewOhPic from '../../Images/Team/Matthew_Oh.jpg';
import ChanwookParkPic from '../../Images/Team/Chanwook_Park.jpg';
import AnnaChunPic from '../../Images/Team/Anna_Chun.jpg';
import BrianKimPic from '../../Images/Team/Brian_Kim.jpg';
// import DarienKimPic from '../../Images/Team/Darien_Kim.jpg';
import ElenaKimPic from '../../Images/Team/Elena_Kim.jpg';
import EuniceLimPic from '../../Images/Team/Eunice_Lim.jpg';
import JulianaCanalePic from '../../Images/Team/Juliana_Canale.jpg';
import KateKimPic from '../../Images/Team/Kate_Kim.jpg';
import MattLawsonPic from '../../Images/Team/Matt_Lawson.jpg';
import MichelleChangPic from '../../Images/Team/Michelle_Chang.jpg';
import SoojiKimPic from '../../Images/Team/Sooji_Kim.jpg';
import JeffLevyPic from '../../Images/Team/Jeff_Levy.jpg';
import NancyChengPic from '../../Images/Team/Nancy_Cheng.jpg';

type Member = {
  title: React.ReactNode;
  image: string;
  description: string;
}

const TeamMembers = [
  {
    title: "MATTHEW OH",
    image: MatthewOhPic,
    description: "Matt is a Cornell University chemical engineer. Matt founded FOREFRONT in 2015 after having gone to India since 2012 and other countries such as El Salvador, Venezuela, and Paraguay and seeing the various severe needs in water/sanitation, education, health, and social justice."
  },
  {
    title: "MICHELLE CHANG",
    image: MichelleChangPic,
    description: "Michelle is our Chief Development Officer(CDO). Previously, she was a 2016-2018 Teach for America Corp member and also worked in Sales and Trading at J.P. Morgan, NYC. Michelle holds a B.S. in Business Administration from Georgetown University and a M.S. in Secondary Education from Johns Hopkins University."
  },
  {
    title: "CHANWOOK PARK",
    image: ChanwookParkPic,
    description: "Chanwook leads the FOREFRONT programs team. He holds B.S. and M.Eng degrees in engineering from Cornell University. His favorite places in the world are Ithaca, Salzburg, and Oscar's Seafood Tacos in San Diego. He hopes that he can be a light to many who are truly poor and needy in this world."
  },
  {
    title: "ANNA CHUN",
    image: AnnaChunPic,
    description: "Anna studied Civil Engineering at Cornell University and graduated from UC Berkeley with her Masters in Environmental Engineering. In her free time, Anna enjoys hiking. Anna grew up in Sydney, Australia and Long Island, New York."
  },
  {
    title: "BRIAN KIM",
    image: BrianKimPic,
    description: "Brian graduated from St. John's University with a degree in accounting.  He enjoys cooking, hiking and gardening."
  },
  {
    title: "DARIEN KIM",
    image: MemberPicture,
    description: "Darien graduated from Cornell University and currently resides in Washington D.C. He loves photography and wishes to pursue a future in it. He loves people hence his passion in portrait photography."
  },
  {
    title: "ELENA KIM",
    image: ElenaKimPic,
    description: "Elena graduated with her bachelors from Rutgers University for political science. She (recently) received her Masters in Elementary Education from Rutgers Graduate School of Education. Elena does freelance photography & enjoys traveling with friends and family. She is part of our education team!"
  },
  {
    title: "EUNICE LIM",
    image: EuniceLimPic,
    description: "Eunice will receive her degree in Communications with a specialization in Public Relations. She has been a part of the FOREFRONT family since 2016, working on the marketing team where she has been focused on managing our social media channels and increasing our reach."
  },
  {
    title: "JEFF LEVY",
    image: JeffLevyPic,
    description: "Jeff was inspired by FOREFRONT's vision to help people in another part of the globe according to the needs they share. Jeff enjoys meeting people and finding ways to learn and help. He works as a teacher and coach in the Washington DC area and has taught in the Boston area as well as in South Korea and Japan."
  },
  {
    title: "JULIANA CANALE",
    image: JulianaCanalePic,
    description: "Juliana holds a B.S. in Food Science from Cornell University.  Juliana is looking to make a positive impact on society through a unifying medium. She is a bookworm, extreme baker, nature lover, and can carry on a conversation about almost anything."
  },
  {
    title: "KATE KIM",
    image: KateKimPic,
    description: "Kate graduated from the Hotel School of Administration at Cornell University.  On the side, she is a wedding planner / coordinator!  She also loves travelling and spending time with her puppy.  She is excited to be part of this team making an impact around the globe!"
  },
  {
    title: "MATT LAWSON",
    image: MattLawsonPic,
    description: "Matt is a graduate of Western Kentucky University where he studied International Affairs, Spanish, and Business Administration. Aside from international development, Matt loves learning languages, running and reading."
  },
  {
    title: "NANCY CHENG",
    image: NancyChengPic,
    description: "Nancy holds a BFA in graphic design. She has a passion to serve anyone in need. In addition to design, she loves to dance! Nancy is excited to bring her design elements into the world of education!"
  },
  {
    title: "SOOJI KIM",
    image: SoojiKimPic,
    description: "Sooji graduated with a dual degree in evolutionary anthropology and political science at Rutgers University. Her passion for world issues led her to join the FOREFRONT team. She is a coffee enthusiast and a world traveler."
  },
]

const OurTeamContainer: React.FC = () => {
  const jobPostingRef = React.useRef<HTMLDivElement>(null);
  
  const scrollToJobPostings = () => {
    if(jobPostingRef && jobPostingRef.current){
      window.scrollTo({
        //-25 is just so that it doesn't scroll just too far
        top: jobPostingRef.current.offsetTop - 25,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.mainPictureContainer}>
        <div className={styles.mainPictureTextContainer}>
          <div className={styles.mainPictureText}>
            Our Team
          </div>

          <div className={styles.dashText}>—</div>

          <div className={styles.mainPictureSubtext}>
            We are everyday people that use our skills <br/>
            and talents to serve others!
          </div>

          <div onClick={scrollToJobPostings} className={styles.mainPictureLink}>
            Join The FOREFRONT Charity Team.
          </div>

          <div className={styles.mainPictureLink}>
            <a 
              href={InternshipPDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply For An Internship
            </a>
          </div>
        </div>

        <Picture 
          src={TeamPicture}
          className={styles.mainPicture} 
          width={window.matchMedia("(min-width: 741px)").matches ? "70vw" : "100vw"}
          height="70vh"
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

      <div ref={jobPostingRef}>
        <JobPosting/>
      </div>
    </div>
  )
}

export default OurTeamContainer;