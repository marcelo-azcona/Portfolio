import React from 'react';
import './Header.styles.scss';

const H3Header = ({
  className,
  extraClass,
  children,
}: {
  className?: string;
  extraClass?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3 className={`h3header ${extraClass ? extraClass : ''}`}>{children}</h3>
  );
};

export default H3Header;
