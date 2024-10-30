import React from "react";
import { HowItWorksContent } from "@/contant";
import { Gutter } from "../UI/Gutter";
import Card from "../UI/Card";

function HowItWorks() {
  return (
    <Gutter
      className="grid lg:grid-cols-4 py-10 md:py-20 gap-8 "
      id="How-it-Works"
    >
      <div className="flex flex-col col-span-2 gap-4 w-full">
        <h1 className="text-xl z-10 md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Here’s How It Works
        </h1>
        <p className=" text-base tracking-normal	 leading-normal lg:max-w-[80%] text-[#111]/70 ">
          Yes, translating a VSL isn't complicated, but the real difficulty lies
          in matching the translated voiceover with the video scenes. And if
          your video editor doesn't speak the language you're targeting, this
          becomes even more time-consuming and costly.
        </p>
      </div>
      <div className="col-span-2">
        <div className="grid md:grid-cols-2 grid-cols-1   gap-4 w-full">
          {HowItWorksContent.map((item) => (
            <Card
              title={item.title}
              image={item.icon}
              id={item.id}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </Gutter>
  );
}

export default HowItWorks;
