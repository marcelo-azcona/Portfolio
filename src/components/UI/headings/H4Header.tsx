import React from 'react';
import './Header.styles.scss';

const H4Header = ({
  className,
  extraClass,
  children,
}: {
  className?: string;
  extraClass?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h4 className={`h4header ${extraClass ? extraClass : ''}`}>{children}</h4>
  );
};

export default H4Header;
