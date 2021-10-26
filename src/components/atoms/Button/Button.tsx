import React, { AnchorHTMLAttributes, FunctionComponentFactory } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  const { id, name, href, disabled } = props;

  return (
    <button
      id={id}
      name={name}
      disabled={disabled}
      onClick={href ? () => (location.href = `${href}`) : props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
