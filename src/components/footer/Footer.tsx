import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconGitHub from '../../assets/img/icon-github.webp';
import IconBlack from '../UI/icon/IconBlack';
import NavbarFooter from './NavbarFooter';
import LinkGray from '../UI/links/LinkDark';
import LinkWhite from '../UI/links/LinkLight';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <NavbarFooter />
      <div className="footer__left">
        <div className="footer__content">
          <div className="footer__contact">
            <h1 className="footer__title">
              <span className="footer__name">Marcelo Azcona,</span>
              <br />
              <span className="footer__subname">
                web
                <br />
                developer
              </span>
            </h1>
            <div className="footer__links">
              <LinkGray
                extraClass="link__dark--bmr"
                href={'resume'}
                target="_blank"
                rel="noreferrer"
              >
                Get my Resume
              </LinkGray>
              <LinkWhite
                href="mailto:marceloazcona86@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                marceloazcona86@gmail.com
              </LinkWhite>
            </div>
          </div>

          <div className="footer__media">
            <IconBlack
              extraClass="icon--footer"
              icon={iconLinkedIn}
              href="https://www.linkedin.com/in/marceloazcona86"
              ariaLabel="LinkedIn"
            >
              LinkedIn
            </IconBlack>
            <IconBlack
              extraClass="icon--footer"
              icon={iconGitHub}
              href="https://github.com/marcelo-azcona"
              ariaLabel="GitHub"
            >
              GitHub
            </IconBlack>
          </div>
          <p className="footer__sign">
            Portfolio site made by Marcelo Azcona, using ReactJS, SASS and
            TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
