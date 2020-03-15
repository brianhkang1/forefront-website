import React from 'react';
import styles from './OurTeamContainer.module.css';

import Picture from '../../components/Picture';
import TeamPicture from '../../Images/Education/11.jpg';
import MemberPicture from '../../Images/Portrait/2.jpg';
import PictureWithHoverText from '../../components/PictureWithHoverText';

type Member = {
  title: React.ReactNode;
  image: string;
  description: string;
}

const TeamMembers = [
  {
    title: <span>MATTHEW <br/> OH</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>CHANWOOK <br/> PARK</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>ANNA <br/> CHUN</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>BRIAN <br/> KIM</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>DARIEN <br/> KIM</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>ELENA <br/> KIM</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>EUNICE <br/> LIM</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>JULIANA <br/> CANALE</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>KATE <br/> KIM</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>MATT <br/> LAWSON</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>MICHELLE <br/> CHANG</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>SOOJI <br/> KIM</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: <span>JEFF <br/> LEVY</span>,
    image: MemberPicture,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

const OurTeamContainer: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainPictureContainer}>
        <div className={styles.mainPictureTextContainer}>
          <div className={styles.mainPictureText}>
            Our team
          </div>

          <div className={styles.dashText}>—</div>

          <div className={styles.mainPictureSubtext}>
            We are everyday people that use our skills and 
            talents to serve others!
          </div>

          <div className={styles.mainPictureLink}>
            <a href="#">Join the Forefront team!</a>
          </div>

          <div className={styles.mainPictureLink}>
            <a href="#">Apply for an internship</a>
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
    </div>
  )
}

export default OurTeamContainer;