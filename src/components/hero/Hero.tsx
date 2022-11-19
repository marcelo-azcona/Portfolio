import locationPin from '../../assets/img/locationPin.png';
import hero1 from '../../assets/img/hero1.webp';
import LinkDark from '../UI/links/LinkDark';
import LinkLight from '../UI/links/LinkLight';
import './Hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content-left">
        <div className="hero__logo-box">
          <img
            className="hero__logo-img"
            src={hero1}
            alt="Marcelo Azcona selfie."
          />
        </div>
        <div className="hero__content-right">
          <div className="hero__location-line">
            <span className="hero__location-box">
              <img
                src={locationPin}
                className="hero__location-img"
                alt="Location pin icon"
              />
            </span>
            <span className="hero__location-text"> Villa María, Argentina</span>
          </div>
          <h1 className="hero__main-header">
            <span className="hero__main-name">Marcelo Azcona,</span>
            <br />
            <span className="hero__main-title">web</span>
            <br />
            <span className="hero__main-title">developer</span>
          </h1>
          <p className="hero__main-text">
            I’m a Web Developer based in Villa María, Córdoba. Even though I
            have an Food Engineer degree, coding is what I love and my new
            professional career focus. That is why I started a Master degree in
            Software Engineer. Making fun and interactive applications with code
            has become my passion.
          </p>
          <LinkDark
            href={'resume'} //resume path
            target="_blank"
            rel="noreferrer"
            extraClass="link__dark--bmr"
          >
            Get my Resume
          </LinkDark>
          <div className="hero__drop">
            <LinkLight
              href="mailto:marceloazcona86@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              marceloazcona86@gmail.com
            </LinkLight>
            {/* <EmailOptions /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
