import logo from '../../../assets/img/logo.png';
import './NavBar.styles.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__content ">
        <span className="navbar__logo-box">
          <a href="#header" aria-label="Logo">
            <img src={logo} alt="MA logo" className="nav-bar__logo-img" />
          </a>
        </span>
        <ul className="navbar__route-box">
          <li className="navbar__route-item">
            <a href="#section-projects" className="navbar__link">
              Projects
            </a>
          </li>
          <li className="navbar__route-item">
            <a href="#section-about" className="navbar__link">
              About
            </a>
          </li>
          <li className="navbar__route-item">
            <a href="#section-contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
