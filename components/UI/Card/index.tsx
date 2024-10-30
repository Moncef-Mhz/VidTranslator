import React from "react";

type Props = {
  title: string;
  id: number;
  content: string;
  image: string;
};

const Card = ({ title, id, content, image }: Props) => {
  return (
    <div
      key={id}
      className="p-8 text-center relative overflow-hidden  bg-foreground rounded-md  items-center flex flex-col gap-6"
    >
      <img src={image} alt="" className="w-16" />
      <div className=" flex flex-col gap-4">
        <h3 className="text-background text-lg">{title}</h3>
        <p className="text-white/70 leading-relaxed tracking-wide text-base">
          {content}
        </p>
      </div>
      <div className="w-20 h-20 absolute top-4 right-4 bg-primary blur-3xl" />
    </div>
  );
};

export default Card;
