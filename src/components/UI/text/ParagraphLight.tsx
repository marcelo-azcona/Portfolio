import React from 'react';
import './Paragraph.styles.scss';

const ParagraphLight = ({
  children,
  className,
  extraClass,
}: {
  className?: string;
  children: React.ReactNode;
  extraClass?: string;
}) => {
  return (
    <div className={`paragraph-light ${extraClass ? extraClass : ''}`}>
      {children}
    </div>
  );
};

export default ParagraphLight;
