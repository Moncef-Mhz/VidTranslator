import React from "react";
import { Gutter } from "../UI/Gutter";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <Gutter className="bg-foreground overflow-hidden py-10  md:py-20 relative space-y-8">
      <div className="space-y-6">
        <h1 className="text-background text-2xl z-10 md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal">
          Expand Your Business <br /> Maximize Your Profits.
        </h1>
        <p className="text-white/70 text-base tracking-normal	 leading-normal max-w-[75%] md:max-w-[80%]">
          VSLTranslator.io takes care of this automatically, ensuring the new
          voice <br className="hidden md:block" /> matches seamlessly with the
          video, just like in the original.
        </p>
      </div>
      <button className=" px-8 flex  gap-2 items-center justify-center py-3 text-primary font-semibold hover:bg-primary hover:text-white duration-150 bg-white border-2 border-primary rounded-full">
        Get Started <ArrowRight />
      </button>
      <img
        src="arch.svg"
        alt=""
        className="w-[50px] md:w-[100px] lg:w-[150px] h-[150px] absolute right-0 md:-right-2 -top-20 md:-top-12 lg:-top-8"
      />
      <img
        src="cross.svg"
        alt=""
        className="w-[100px] md:w-[150px] lg:w-[200px] h-[200px] absolute -right-14 -bottom-20 lg:-bottom-14"
      />
    </Gutter>
  );
}

export default CTA;
