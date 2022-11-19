import ParagraphDark from '../UI/text/ParagraphDark';
import SectionHeader from '../UI/headings/H2Header';
import AboutMe from './AboutMe';
import './AboutMe.styles.scss';

const AboutSection = () => {
  return (
    <section className="about-section">
      <SectionHeader sectionType="about" text={'About Me'} />
      <AboutMe
        projectTitle={`Hi! 👋 I'm Marcelo`}
        techStack={[
          'HTML5',
          'CSS3',
          'Git & GitHub',
          'JavaScript',
          'TypeScript',
          'ReactJS',
          'Netlify',
          'Linux',
          'Redux',
        ]}
      >
        <ParagraphDark>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          minus aspernatur vero deserunt magnam mollitia maiores delectus
          corrupti enim illum a iusto libero, qui omnis, et distinctio,
          inventore blanditiis! Laudantium!
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          excepturi et facilis facere, at aut. Vel, repellendus dolorem saepe
          asperiores distinctio neque necessitatibus perspiciatis dolores beatae
          quis, ipsam, id autem.
        </ParagraphDark>
        <ParagraphDark>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab autem
          corporis illum ut nam nemo labore repellendus impedit quae, mollitia
          esse unde placeat, eum id optio saepe facilis iure ipsum.
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          consectetur sunt itaque neque porro similique laudantium possimus
          eligendi eos, cum laboriosam aut accusamus, quasi nisi quo placeat.
          Maxime, assumenda ducimus.
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          quaerat esse voluptatem, itaque ducimus dolorum aperiam dolor odio
          tenetur officia iste cum explicabo atque voluptas quos facilis ea
          incidunt voluptatum.
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias
          accusamus repudiandae adipisci at corrupti tempore, aut quod a itaque,
          optio inventore quaerat nisi, porro dolorum laboriosam perspiciatis
          rerum sit.
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vitae similique quidem obcaecati, deleniti incidunt molestiae beatae
          officia ullam necessitatibus quos, ea laudantium ex tempore,
          perferendis voluptatum aliquam alias nemo?.
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          provident magni obcaecati eos quasi ea accusamus doloremque. Sunt
          distinctio mollitia minus aperiam laboriosam ut, ea architecto at
          soluta cum nobis?
        </ParagraphDark>
        <ParagraphDark>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vero
          ipsam dicta dolorum omnis incidunt a voluptas dolor sunt esse, debitis
          porro quia eos ea molestiae possimus quidem tenetur veniam!
        </ParagraphDark>
        <ParagraphDark>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sed eos
          veritatis minima harum fuga quidem natus quae? Deleniti dolorem quis
          dolor iure natus veniam nisi dicta excepturi. Quisquam, quo!
        </ParagraphDark>
      </AboutMe>
    </section>
  );
};

export default AboutSection;
