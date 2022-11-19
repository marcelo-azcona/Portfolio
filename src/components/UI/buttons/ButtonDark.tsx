import React from 'react';
import './Button.styles.scss';

type Props = {
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonDark = (props: Props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonDark;
