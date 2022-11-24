import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ProjectProps } from './ProjectsSection';
import H3Header from '../UI/headings/H3Header';
import H4Header from '../UI/headings/H4Header';
import TechStack from '../UI/techstacks/TechStack';
import LinkWhite from '../UI/links/LinkLight';
import ParagraphLight from '../UI/text/ParagraphLight';
import './Projects.styles.scss';

const ProjectRight = ({
  buttonWatchItLive,
  buttonDescription,
  buttonGitHub,
  projectTitle,
  children,
  techStack,
}: ProjectProps) => {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true });

  return (
    <div className="project-right">
      <div
        ref={viewRef}
        className={
          isInView ? 'project-links' : 'project-links project-links--off'
        }
      >
        <div ref={viewRef} className="project-links__btn">
          <LinkWhite
            extraClass="link__light--bf"
            href={buttonWatchItLive}
            target="_blank"
            rel="noreferrer"
          >
            Watch it live
          </LinkWhite>
          <LinkWhite
            extraClass="link__light--bf"
            href={buttonDescription}
            target="_blank"
            rel="noreferrer"
          >
            Full description
          </LinkWhite>
          <LinkWhite
            extraClass="link__light--bf"
            href={buttonGitHub}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </LinkWhite>
        </div>

        <div className="project-links__videobox">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/A98da5UbppY"
            title="Climbours app demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="project-description">
        <H3Header extraClass="h3header--white">{projectTitle}</H3Header>
        {children}

        <H4Header extraClass="h4header--white">Tech stack</H4Header>
        <ParagraphLight className="">
          <p>For this project I used the following technologies:</p>
        </ParagraphLight>
        <div className="project-description__tech">
          <TechStack color={'white'} usedTech={techStack} />
        </div>
      </div>
    </div>
  );
};

export default ProjectRight;
