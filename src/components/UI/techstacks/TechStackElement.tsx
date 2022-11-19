import React from 'react';
import './TechElement.styles.scss';

const TechStackElement = ({
  className,
  icon,
  children,
  color,
}: {
  className?: string;
  color?: string;
  icon: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${className ? className : ''}techstack`}>
      <img
        src={icon}
        className={`${
          className ? className : ''
        }techstack__img techstack__img--${color}`}
        alt="A programming technology logo"
      />
      <span className={`techstack__text techstack__text--${color}`}>
        {children}
      </span>
    </div>
  );
};

export default TechStackElement;
