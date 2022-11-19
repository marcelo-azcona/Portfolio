import ProjectRight from './ProjectRight';
import ProjectLeft from './ProjectLeft';
import H2Header from '../UI/headings/H2Header';
import ParagraphLight from '../UI/text/ParagraphLight';
import H4Header from '../UI/headings/H4Header';
import './Projects.styles.scss';

export type ProjectProps = {
  projectTitle: string;
  children: React.ReactNode;
  techStack: string[];
  buttonWatchItLive: string;
  buttonDescription: string;
  buttonGitHub: string;
};

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="projects-section">
      <H2Header sectionType="projects" text={'Projects'} />

      <ProjectRight
        projectTitle={'Climbours'}
        techStack={[
          'HTML5',
          'CSS3',
          'Git & GitHub',
          'JavaScript',
          'ReactJS',
          'TypeScript',
        ]}
        buttonWatchItLive={'LINK TO THE SITE'}
        buttonDescription={'COMPONENT WITH ROUTE TO THE DESCRIPTION'}
        buttonGitHub={'GITHUB LINK'}
      >
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            magni, vel fugit voluptatum tempora aliquam sequi doloremque
            corporis, incidunt exercitationem laudantium ullam, quas accusantium
            ab voluptate eligendi laboriosam minima ad!
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            asperiores sunt ipsam adipisci ducimus exercitationem. Eaque
            molestias inventore rem quaerat earum voluptatibus, omnis suscipit
            dolore dolorem, ad delectus, animi amet?
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <H4Header extraClass="h4header--white">Lessons learned</H4Header>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            temporibus pariatur impedit dolores similique est ea perferendis!
            Ab, molestiae, minus, illum reprehenderit reiciendis architecto
            accusamus corrupti blanditiis laborum vel consectetur.
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            fugit, eligendi non quasi mollitia ipsa sequi? Praesentium aliquid
            consequatur, molestiae omnis facere pariatur hic iure dolorem ipsa
            impedit aut illum.
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            pariatur voluptas doloremque totam repudiandae assumenda similique
            soluta corrupti ad dolores! Quos nam asperiores aspernatur fuga
            error voluptas beatae fugiat odio?
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, sed dignissimos? Dicta itaque odio ex? Adipisci porro
            voluptas ipsa. Optio quia molestiae repudiandae ducimus similique
            officia quisquam rerum necessitatibus beatae?
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            dignissimos laborum voluptatibus? Qui, excepturi nam deserunt,
            officia incidunt blanditiis sit vel sed eos atque, omnis quasi
            cumque nesciunt repellat aperiam.
          </p>
        </ParagraphLight>
      </ProjectRight>
      {/**
       * PROJECT END
       */}
      <ProjectLeft
        projectTitle={'To-Do app'}
        techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
        buttonWatchItLive={'LINK TO THE SITE'}
        buttonDescription={'COMPONENT WITH ROUTE TO THE DESCRIPTION'}
        buttonGitHub={'GITHUB LINK'}
      >
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            praesentium asperiores suscipit assumenda quam nostrum corrupti
            aliquam, commodi rem impedit enim recusandae laudantium facere ea
            similique ut! Eaque, delectus reiciendis.
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <H4Header className="h4header--white">Lessons learned</H4Header>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            cumque repellat maiores tenetur ipsam et expedita quidem
            exercitationem soluta commodi iusto nobis ea laudantium, libero
            distinctio aut quae ad.
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            placeat exercitationem, nobis quos repudiandae illo eius voluptates
            cum nihil quisquam ad. Tempora delectus obcaecati soluta dolore
            maiores officiis odio nulla?
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas et
            ipsam soluta aliquam rem doloremque! Neque dignissimos, ea culpa
            nemo, inventore saepe delectus natus eum ratione voluptates iure
            fugiat corporis.
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            quas, explicabo, sit natus voluptates sunt beatae aut eaque dolores
            adipisci expedita nostrum soluta accusantium dolorum eveniet? Natus
            dolorem aliquam dolorum.
          </p>
        </ParagraphLight>
        <ParagraphLight>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, eos! Eaque voluptatum expedita dolorum illo modi quos
            ullam soluta commodi animi quae. Magnam, obcaecati ex consequatur
            iure ad quam omnis.
          </p>
        </ParagraphLight>
      </ProjectLeft>
    </section>
  );
};

export default ProjectsSection;
