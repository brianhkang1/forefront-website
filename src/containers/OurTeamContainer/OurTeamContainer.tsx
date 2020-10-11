import React from 'react';
import styles from './OurTeamContainer.module.css';
import Picture from '../../components/Picture';
import PictureWithHoverText from '../../components/PictureWithHoverText';
import JobPosting from '../../components/JobPosting';

import InternshipPDF from '../../Documents/Forefront_Internship.pdf';
import TeamPicture from '../../Images/Team/Team.jpg';
import MatthewOhPic from '../../Images/Team/Matthew_Oh.jpg';
import ChanwookParkPic from '../../Images/Team/Chanwook_Park.jpg';
import AnnaChunPic from '../../Images/Team/Anna_Chun.jpg';
import BrianKimPic from '../../Images/Team/Brian_Kim.jpg';
import ChristinaPhilipsPic from '../../Images/Team/Christina_Philips.jpg';
import ChristianaTenaliPic from '../../Images/Team/Christiana_Tenali.jpg';
import DarienKimPic from '../../Images/Team/Darien_Kim.jpg';
import ElenaKimPic from '../../Images/Team/Elena_Kim.jpg';
import EuniceLimPic from '../../Images/Team/Eunice_Lim.jpg';
import HelenParkPic from '../../Images/Team/Helen_Park.jpg';
import JeffLevyPic from '../../Images/Team/Jeff_Levy.jpg';
import JulianaCanalePic from '../../Images/Team/Juliana_Canale.jpg';
import KateKimPic from '../../Images/Team/Kate_Kim.jpg';
import MattLawsonPic from '../../Images/Team/Matt_Lawson.jpg';
import NancyChengPic from '../../Images/Team/Nancy_Cheng.jpg';
import MichelleChangPic from '../../Images/Team/Michelle_Chang.jpg';
import SarahKangPic from '../../Images/Team/Sarah_Kang.jpg';
import SoojiKimPic from '../../Images/Team/Sooji_Kim.jpg';
import VitaMallelaPic from '../../Images/Team/Vita_Mallela.jpg';
import WesanChangPic from '../../Images/Team/Wesan_Chang.jpg';

type Member = {
  title: string;
  image: string;
  description: string;
};

const TeamMembers = [
  {
    title: 'MATTHEW OH',
    image: MatthewOhPic,
    description:
      'Matt is a Cornell University chemical engineer. Matt founded FOREFRONT in 2015 after having gone to India since 2012 and other countries such as El Salvador, Venezuela, and Paraguay and seeing the various severe needs in water/sanitation, education, health, and social justice.',
  },
  {
    title: 'MICHELLE CHANG',
    image: MichelleChangPic,
    description:
      'Michelle is our Chief Development Officer (CDO). She leads our finance, fundraising, donors relations, and partnership efforts. Michelle holds a B.S. in Business Administration from Georgetown University and a M.S. in Secondary Education from Johns Hopkins University. In her free time, Michelle enjoys teaching children, hiking, piano, and ballet.',
  },
  {
    title: 'CHANWOOK PARK',
    image: ChanwookParkPic,
    description:
      "Chanwook leads the FOREFRONT programs team. He holds B.S. and M.Eng degrees in engineering from Cornell University. His favorite places in the world are Ithaca, Salzburg, and Oscar's Seafood Tacos in San Diego. He hopes that he can be a light to many who are truly poor and needy in this world.",
  },
  {
    title: 'ANNA CHUN',
    image: AnnaChunPic,
    description:
      'Anna studied Civil Engineering at Cornell University and graduated from UC Berkeley with her Masters in Environmental Engineering. In her free time, Anna enjoys hiking. Anna grew up in Sydney, Australia and Long Island, New York.',
  },
  {
    title: 'BRIAN KIM',
    image: BrianKimPic,
    description:
      "Brian graduated from St. John's University with a degree in accounting.  He enjoys cooking, hiking and gardening.",
  },
  {
    title: 'CHRISTINA PHILIPS',
    image: ChristinaPhilipsPic,
    description:
      'Christina graduated from the University of Connecticut with a B.S. in Molecular and Cellular Biology.  Born in Bangalore, India holds a special place in her heart and she hopes to help give back to the community. In her free time, she enjoys baking and hiking.',
  },
  {
    title: 'CHRISTIANA TENALI',
    image: ChristianaTenaliPic,
    description:
      "Christiana is from Michigan and blessed with two beautiful daughters Chloe and Clara.  Christiana's passion to serve children started from a young age through her father's ministry and is excited to be part of the community engagement team.",
  },
  {
    title: 'DARIEN KIM',
    image: DarienKimPic,
    description:
      'Darien graduated from Cornell University with a degree in Design & Environmental Analysis. He has practiced in all sorts of design ranging from graphics to architecture to photography. Currently he resides in Los Angeles freelancing and growing in his photography!',
  },
  {
    title: 'ELENA KIM',
    image: ElenaKimPic,
    description:
      'Elena graduated with her bachelors from Rutgers University for political science. She received her Masters in Elementary Education from Rutgers Graduate School of Education in May 2019. Elena does freelance photography & enjoys traveling with friends and family. She is part of our education team!',
  },
  {
    title: 'EUNICE LIM',
    image: EuniceLimPic,
    description:
      'Eunice started out as an intern in 2016 while attending Rutgers University. She has since transitioned into a full time member working on the marketing team to strategize and execute digital campaigns on our various social platforms. Anyone that knows Eunice knows that she is obsessed with noodles.',
  },
  {
    title: 'HELEN PARK',
    image: HelenParkPic,
    description:
      'Helen studied architecture at Pratt Institute and is currently working at a small architecture firm in NYC. She enjoys trying new things like plant-based cooking, video editing, and learning new languages. She is constantly inspired by those that use their skills and talents to help others and is honored to be part of the FOREFRONT team.',
  },
  {
    title: 'JEFF LEVY',
    image: JeffLevyPic,
    description:
      "Jeff was inspired by FOREFRONT's vision to help people in another part of the globe according to the needs they share. Jeff enjoys meeting people and finding ways to learn and help. He works as a teacher and coach in the Washington DC area and has taught in the Boston area as well as in South Korea and Japan.",
  },
  {
    title: 'JULIANA CANALE',
    image: JulianaCanalePic,
    description:
      'Juliana holds a B.S. in Food Science from Cornell University.  Juliana is looking to make a positive impact on society through a unifying medium. She is a bookworm, extreme baker, nature lover, and can carry on a conversation about almost anything.',
  },
  {
    title: 'KATE KIM',
    image: KateKimPic,
    description:
      'Kate graduated from the Hotel School of Administration at Cornell University.  On the side, she is a wedding planner / coordinator!  She also loves travelling and spending time with her puppy.  She is excited to be part of this team making an impact around the globe!',
  },
  {
    title: 'MATT LAWSON',
    image: MattLawsonPic,
    description:
      'Matt is a graduate of Western Kentucky University where he studied International Affairs, Spanish, and Business Administration. Aside from international development, Matt loves learning languages, running and reading.',
  },
  {
    title: 'NANCY CHENG',
    image: NancyChengPic,
    description:
      'Nancy holds a BFA in graphic design. She has a passion to serve anyone in need. In addition to design, she loves to dance! Nancy is excited to bring her design elements into the world of education!',
  },
  {
    title: 'SARAH KANG',
    image: SarahKangPic,
    description:
      "Sarah is a 7th grade English teacher at River Dell Middle School in River Edge, New Jersey. She graduated from Rutgers University-New Brunswick with a B.A. in English and a Masters in Education. Her goal is for her students to develop into confident, loving, difference-makers in today's society.",
  },
  {
    title: 'SOOJI KIM',
    image: SoojiKimPic,
    description:
      'Sooji graduated with a dual degree in evolutionary anthropology and political science at Rutgers University. Her passion for world issues led her to join the FOREFRONT team. She is a coffee enthusiast and a world traveler.',
  },
  {
    title: 'VITA MALLELA',
    image: VitaMallelaPic,
    description:
      'Vita graduated from Washington University in St. Louis majoring in operations & supply chain management and marketing. She was born near Hyderabad, India and is fluent in Telugu. Vita grew up in Texas, Minnesota, and Virginia. Forefront’s work is close to her as it is an opportunity to make a difference in her home state in India.  Outside of work, Vita enjoys tennis, traveling, and exploring restaurants.',
  },
  {
    title: 'WESAN CHANG',
    image: WesanChangPic,
    description:
      'Wesan studied Accounting at Rutgers University and is currently working in corporate finance. Outside of work, she enjoys hiking, exploring new restaurants and hosting gatherings to bring people together. She has a heart for serving the marginalized, so she is excited to be a part of FOREFRONT’s mission of empowering individuals and building up sustainable communities.',
  },
];

const OurTeamContainer: React.FC = () => {
  const jobPostingRef = React.useRef<HTMLDivElement>(null);

  const scrollToJobPostings = () => {
    if (jobPostingRef && jobPostingRef.current) {
      window.scrollTo({
        //-25 is just so that it doesn't scroll just too far
        top: jobPostingRef.current.offsetTop - 25,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.mainPictureContainer}>
        <div className={styles.mainPictureTextContainer}>
          <div className={styles.mainPictureText}>Our Team</div>

          <div className={styles.dashText}>—</div>

          <div className={styles.mainPictureSubtext}>
            We are everyday people that use our skills <br />
            and talents to serve others!
          </div>

          <div onClick={scrollToJobPostings} className={styles.mainPictureLink}>
            Join The FOREFRONT Charity Team
          </div>

          <div className={styles.mainPictureLink}>
            <a
              href={'https://form.jotform.com/80993600806157'}
              target='_blank'
              rel='noopener noreferrer'
            >
              Become a Volunteer
            </a>
          </div>

          <div className={styles.mainPictureLink}>
            <a href={InternshipPDF} target='_blank' rel='noopener noreferrer'>
              Apply For An Internship
            </a>
          </div>
        </div>

        <Picture
          src={TeamPicture}
          width='70vw'
          height='70vh'
          mobileWidth='100vw'
          mobileHeight='30vh'
        />
      </div>

      <div className={styles.teamMembersContainer}>
        {TeamMembers.map((member: Member) => (
          <div key={member.title} className={styles.teamMemberPictureContainer}>
            <PictureWithHoverText
              title={member.title}
              description={member.description}
              image={member.image}
              className={styles.teamMemberPicture}
              titleClassName={styles.teamMemberPictureTitle}
              descriptionClassName={styles.teamMemberPictureDescription}
            />
          </div>
        ))}
      </div>

      <div ref={jobPostingRef}>
        <JobPosting />
      </div>
    </div>
  );
};

export default OurTeamContainer;
