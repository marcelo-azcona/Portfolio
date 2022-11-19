import './Icon.styles.scss';

const IconBlack = ({
  extraClass,
  href,
  ariaLabel,
  icon,
  children,
  alt,
}: {
  extraClass?: string;
  href: string;
  ariaLabel?: string;
  icon: string;
  children: string;
  alt?: string;
}) => {
  return (
    <div className={`icon ${extraClass}`}>
      <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        <img src={icon} alt="Social media img" className="icon__img" />
      </a>
      <p className="icon__text">{children}</p>
    </div>
  );
};

export default IconBlack;
