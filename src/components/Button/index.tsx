import React from "react";

type Props = {
  children?: JSX.Element | string;
  className?: string
};

const Button = ({ children, className }: Props) => {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
};

export default Button;
