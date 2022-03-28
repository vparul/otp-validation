import React, { ReactElement } from "react";
import { ButtonProps } from "./types";

const Button = ({
  text,
  onClick,
  disabled = false,
  type,
  className = "",
}: ButtonProps): ReactElement => (
  <button
    className={`${className} primary-btn`}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
