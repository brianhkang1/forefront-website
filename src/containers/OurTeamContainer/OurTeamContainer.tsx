import React from 'react';
import styles from './OurTeamContainer.module.css';
import Picture from '../../components/Picture';
import PictureWithHoverText from '../../components/PictureWithHoverText';
import JobPosting from '../../components/JobPosting';

// import InternshipDoc from '../../Documents/Forefront_Internship.docx';
import TeamPicture from '../../Images/Team/Team.jpg';
import MatthewOhPic from '../../Images/Team/Matthew_Oh.jpg';
import ChanwookParkPic from '../../Images/Team/Chanwook_Park.jpg';
import ChristinaPhilipsPic from '../../Images/Team/Christina_Philips.jpg';
import ChristianaTenaliPic from '../../Images/Team/Christiana_Tenali.jpg';
import ElenaKimPic from '../../Images/Team/Elena_Kim.jpg';
import EuniceLimPic from '../../Images/Team/Eunice_Lim.jpg';
import JulianaCanalePic from '../../Images/Team/Juliana_Canale.jpg';
import KateKimPic from '../../Images/Team/Kate_Kim.jpg';
import MattLawsonPic from '../../Images/Team/Matt_Lawson.jpg';
import NancyChengPic from '../../Images/Team/Nancy_Cheng.jpg';
import MichelleChangPic from '../../Images/Team/Michelle_Chang.jpg';
import SarahKangPic from '../../Images/Team/Sarah_Kang.jpg';
import JosephLeePic from '../../Images/Team/Joseph_Lee.jpg';
import JasonChoePic from '../../Images/Team/Jason_Choe.jpg';
import DanielKimPic from '../../Images/Team/Daniel_Kim.jpg';
import AndreParkPic from '../../Images/Team/Andre_Park.jpg';
import AndrewPyonPic from '../../Images/Team/Andrew_Pyon.jpg';
import BethGelmanPic from '../../Images/Team/Beth_Gelman.jpg';
import JenniferHerreraPic from '../../Images/Team/Jennifer_Herrera.jpg';
import YashDalviPic from '../../Images/Team/Yash_Dalvi.jpg';

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
    title: 'NANCY CHENG',
    image: NancyChengPic,
    description:
      'Nancy holds a BFA in graphic design. She has a passion to serve anyone in need. In addition to design, she loves to dance! Nancy is excited to bring her design elements into the world of education!',
  },
  {
    title: 'CHANWOOK PARK',
    image: ChanwookParkPic,
    description:
      "Chanwook leads the FOREFRONT programs team. He holds B.S. and M.Eng degrees in engineering from Cornell University. His favorite places in the world are Ithaca, Salzburg, and Oscar's Seafood Tacos in San Diego. He hopes that he can be a light to many who are truly poor and needy in this world.",
  },
  {
    title: 'ANDRE PARK',
    image: AndreParkPic,
    description:
      "Andre leads the B2B sales initiatives at a tech-startup in NYC. As Forefront's People & Culture Lead, Andre helps curate the culture of our growing team and organization through full-cycle recruiting, team member engagement and internal events. Outside of his day-to-day, Andre loves raising his beagle, Rogen, watching the Lakers win championships, and organizing game nights with friends and family.",
  },
  {
    title: 'ANDREW PYON',
    image: AndrewPyonPic,
    description:
      'Andrew is a member of the water and sanitation team. He has a passion for increasing clean water access and wishes to help implement more and more sustainable solutions with Forefront in the future. He holds a B.S. in business administration from Georgia Tech.',
  },
  {
    title: 'BETH GELMAN',
    image: BethGelmanPic,
    description:
      'Beth is a pediatrician, recently retired from her private practice. She is honored to be a part of the Forefront team and excited to be a part of improving the health and wellbeing of the communities Forefront serves. Beth loves kayaking, hiking, cross-country skiing and baking: and yes, there will be cookies for the team to enjoy at meetings!',
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
    title: 'DANIEL KIM',
    image: DanielKimPic,
    description:
      "Daniel holds a B.S. in Industrial and Labor Relations from Cornell University and currently works as a consultant for his day job. Daniel was inspired to join by Forefront's mission and the heart that the team members have for India. He currently helps Forefront in the finance team. He enjoys photography, hiking, and Marvel movies.",
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
    title: 'JASON CHOE',
    image: JasonChoePic,
    description:
      'Jason is born and raised in Philadelphia, PA. He is a transplant pharmacist during the day and an avid Philadelphia sports fan at night. He is also a proud uncle of 3 (aka the 3 Musketeers). His heart is to give back and serve others with God’s love.',
  },
  {
    title: 'JENNIFER HERRERA',
    image: JenniferHerreraPic,
    description:
      'Jennifer is a junior majoring in Applied Economics and Management and minoring in Fashion Studies at Cornell University. She hopes to utilize her passion for marketing to help communities in need so that they too can pursue their own dreams and passions. In her free time she enjoys thrifting, getting boba with friends, and watching Marvel movies.',
  },
  {
    title: 'JOSEPH LEE',
    image: JosephLeePic,
    description:
      'Joseph holds a B.S. in Operations Research Engineering from Cornell and is currently working as a Data Analyst in a HealthTech company. In his free time, he loves to explore nature and play basketball. He got into photography during his time in Ithaca and loves to take photos for his friends. He hopes he can now capture memories of Forefront School now as a member of the Education Team.',
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
    title: 'SARAH KANG',
    image: SarahKangPic,
    description:
      "Sarah is a 7th grade English teacher at River Dell Middle School in River Edge, New Jersey. She graduated from Rutgers University-New Brunswick with a B.A. in English and a Masters in Education. Her goal is for her students to develop into confident, loving, difference-makers in today's society.",
  },
  {
    title: 'YASH DALVI',
    image: YashDalviPic,
    description:
      'Yash lives in NYC and has a career in digital marketing technology. He spends his free time trying new restaurants, snowboarding, and watching sports. Being part of the marketing team his goal is to spread Forefront’s Mission & Vision to as many people as possible.',
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
            <a href={'https://form.jotform.com/80993600806157'} target='_blank' rel='noopener noreferrer'>
              Become a Volunteer
            </a>
          </div>

          {/* <div className={styles.mainPictureLink}>
            <a href={InternshipDoc} target='_blank' rel='noopener noreferrer'>
              Apply For An Internship
            </a>
          </div> */}
        </div>

        <Picture src={TeamPicture} width='70vw' height='70vh' mobileWidth='100vw' mobileHeight='30vh' />
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
