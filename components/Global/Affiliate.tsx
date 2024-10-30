import React from "react";
import { Gutter } from "../UI/Gutter";
import { affiliate } from "@/contant";
import Card from "../UI/Card";
import { ArrowRight } from "lucide-react";

function Affiliate() {
  return (
    <Gutter className="flex items-center justify-center flex-col w-full py-10 md:py-20 gap-8 ">
      <div className="flex items-center justify-center flex-col  gap-6">
        <h1 className="text-2xl z-10 md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center leading-normal">
          Become a VSLTranslator.io Affiliate And{" "}
          <br className="hidden md:block" /> Earn 30% Recurring Commissions!
        </h1>
        <p className="text-base tracking-normal	 leading-normal text-black/70 text-center md:w-[90%] w-full lg:w-[52%]">
          When you refer customers to VSLTranslator.io, you earn 30% recurring
          commissions on every payment they make. That means as long as the
          customer you referred continues to use our service, you'll get paid
          month after month — building a steady stream of passive income!
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-items-center gap-5">
        {affiliate.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.icon}
            content={item.content}
          />
        ))}
      </div>
      <button className=" px-8 flex  gap-2 items-center justify-center py-3 text-primary font-semibold hover:bg-primary hover:text-white duration-150 bg-white border-2 border-primary rounded-full">
        Sign Up Now <ArrowRight />
      </button>
    </Gutter>
  );
}

export default Affiliate;
