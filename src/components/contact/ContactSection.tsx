import ContactForm from './ContactForm';
import LinkWhite from '../UI/links/LinkLight';
import H3Header from '../UI/headings/H3Header';
import ParagraphLight from '../UI/text/ParagraphLight';
import H2Header from '../UI/headings/H2Header';
import './ContactSection.styles.scss';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <H2Header sectionType="contact" text={'Contact'} />
      <div className="contact__container">
        <H3Header extraClass="h3header--white">Let's get in touch!</H3Header>

        <div className="contact__links">
          <LinkWhite
            extraClass="link__light--mw"
            href="mailto:marceloazcona86@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            marceloazcona86@gmail.com
          </LinkWhite>

          <LinkWhite
            extraClass="link__light--mw"
            href="https://www.linkedin.com/in/marceloazcona86"
            target="_blank"
            rel="noreferrer"
          >
            Message me on LinkedIn
          </LinkWhite>
        </div>
        <ParagraphLight extraClass="paragraph-light--bf paragraph-light--ct ">
          You can send me an email, a message on LinkedIn, or use the contact
          form below. Do you have a question? Just want to say hi? I’ll try my
          best to get back to you as fast as I can!
        </ParagraphLight>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
