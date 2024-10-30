import React, { Ref, forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export const Gutter: React.FC<Props> = (props, ref) => {
  const { className, children, id } = props;

  return (
    <main
      className={[
        className,
        "max-w-[1920px] px-4  lg:px-[60px] 2xl:px-[160px] mx-auto",
      ]
        .filter(Boolean)
        .join(" ")}
      id={id}
    >
      {children}
    </main>
  );
};
