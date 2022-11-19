import React from 'react';
import './Paragraph.styles.scss';

const ParagraphDark = ({
  children,
  className,
  extraClass,
}: {
  className?: string;
  children: React.ReactNode;
  extraClass?: string;
}) => {
  return (
    <div className={`paragraph-dark${extraClass ? extraClass : ''}`}>
      {children}
    </div>
  );
};

export default ParagraphDark;
