import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}
