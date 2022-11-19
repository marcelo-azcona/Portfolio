import React from 'react';
import './Link.styles.scss';

type LinkProps = {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  extraClass?: string;
};

const LinkWhite = ({ href, target, rel, extraClass, children }: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`link link__light ${extraClass} `}
    >
      {children}
    </a>
  );
};

export default LinkWhite;
