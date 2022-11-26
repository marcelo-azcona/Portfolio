import hero1 from '../../assets/img/hero1.webp';
import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconGitHub from '../../assets/img/icon-github.webp';
import H3Header from '../UI/headings/H3Header';
import H4Header from '../UI/headings/H4Header';
import ParagraphBlack from '../UI/text/ParagraphDark';
import IconBlack from '../UI/icon/IconBlack';
import TechStack from '../UI/techstacks/TechStack';
import LinkWhite from '../UI/links/LinkLight';
import Timeline from '../UI/timeline/Timeline';
import './AboutMe.styles.scss';

type AboutMeProps = {
  projectTitle: string;
  techStack: string[];
  children: React.ReactNode;
};

const AboutMe = ({ projectTitle, techStack, children }: AboutMeProps) => {
  return (
    <div className="about-container">
      <div className="about__left">
        <Timeline />
        <div className="about__resume-link">
          <LinkWhite
            href={'resume'}
            target="_blank"
            rel="noreferrer"
            extraClass="link__light--bf"
          >
            Get my Resume
          </LinkWhite>
        </div>
        <div className="about__connect">
          <IconBlack
            icon={iconLinkedIn}
            href="https://www.linkedin.com/in/marceloazcona86"
            ariaLabel="LinkedIn"
          >
            LinkedIn
          </IconBlack>
          <IconBlack
            icon={iconGitHub}
            href="https://github.com/marcelo-azcona"
            ariaLabel="GitHub"
          >
            GitHub
          </IconBlack>
        </div>
      </div>
      <div className="about__right">
        <H3Header className="">{projectTitle}</H3Header>
        {children}
        <H4Header>My tech stack</H4Header>
        <ParagraphBlack>
          I'm proficient with the following relevant technologies:
        </ParagraphBlack>
        <div className="about__techstack">
          <TechStack color={'black'} usedTech={techStack} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
