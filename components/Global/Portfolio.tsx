import React from "react";
import { Gutter } from "../UI/Gutter";
import { portfolio } from "@/contant";
import Image from "next/image";

const Portfolio = () => {
  return (
    <Gutter
      className="bg-foreground py-10 md:py-20 flex flex-col gap-8"
      id="Portfolio"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl z-10 md:text-3xl lg:text-4xl xl:text-5xl text-background  font-semibold">
          Success Stories
        </h1>
        <p className="max-w-full z-10 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] text-white/70 text-base tracking-normal	 leading-normal">
          See How VSLTranslator.io Helped Brands Unlock New Markets
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="relative w-full group h-[500px] border-[#ccc3] border rounded-md overflow-hidden"
          >
            <Image
              height={500}
              width={500}
              src={`/${item.image}`}
              priority
              alt={item.title}
              className="h-full w-full bg-contain "
            />
            <h1 className="absolute  text-foreground group-hover:translate-y-0 duration-150 translate-y-20 bottom-0 left-0 p-6 text-xl w-full bg-white">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </Gutter>
  );
};

export default Portfolio;
