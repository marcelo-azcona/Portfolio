const NavbarFooter = () => {
  return (
    <nav className="footer__right">
      <ul className="footer__list">
        <li>
          <a href="#projects-section" className="footer__route">
            Projects
          </a>
        </li>

        <li>
          <a href="#section-about" className="footer__route">
            About
          </a>
        </li>

        <li>
          <a href="#section-contact" className="footer__route">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarFooter;
