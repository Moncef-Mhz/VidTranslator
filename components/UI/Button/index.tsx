"use client";
import React, { ReactNode, useMemo } from "react";

interface ButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  variant: "solid" | "outline" | "ghost";
  onClick?: () => void;
  className?: string;
}

const Button = ({
  variant,
  children,
  isLoading,
  isDisabled,
  leftIcon,
  rightIcon,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  if (variant == "solid") {
    return (
      <button
        className={`text-base select-none capitalize gap-1 outline-none font-semibold text-center align-middle flex items-center justify-center bg-primary rounded-full px-5 py-2 text-background tracking-wider hover:bg-white hover:border-2 hover:border-primary hover:text-primary border-2 border-primary duration-150 ${className}`}
        onClick={() => onClick}
      >
        {children}
      </button>
    );
  } else if (variant == "outline") {
    return (
      <button
        className="text-base select-none capitalize gap-1 outline-none font-semibold text-center align-middle flex items-center justify-center bg-white rounded-full px-5 py-3 text-primary border-2 border-primary tracking-wider hover:bg-primary hover:border-2 hover:border-primary hover:text-background duration-150"
        onClick={() => onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="text-base select-none capitalize gap-1 outline-none font-semibold text-center align-middle flex items-center justify-center bg-transparent rounded-full px-5 py-3 text-background  tracking-wider"
        onClick={() => onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
