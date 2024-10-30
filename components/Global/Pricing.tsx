import React from "react";
import { Gutter } from "../UI/Gutter";
import { pricing } from "@/contant";
import { ArrowRight, Check } from "lucide-react";

const Pricing = () => {
  return (
    <Gutter className="py-10 md:py-20 flex flex-col gap-10" id="Pricing">
      <h1 className="text-2xl z-10 md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal ">
        Choose The Plan That Fits <br /> Your Needs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {pricing.map((item) => (
          <div
            key={item.id}
            className={`w-full flex flex-col gap-6 p-6 border border-[#ccc3] rounded-md ${
              item.title === "Pro Plan" ? "bg-primary" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <h1
                className={`text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text inline-block ${
                  item.title !== "Pro Plan"
                    ? "from-black to-slate-800"
                    : "from-white to-slate-100"
                }`}
              >
                {item.title}
              </h1>
              {item.title === "Pro Plan" ? (
                <p className="text-primary rounded-full bg-white font-medium capitalize px-2">
                  Most popular
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h1
                  className={`text-3xl font-bold ${
                    item.title !== "Pro Plan" ? "text-black " : "text-white "
                  }`}
                >
                  {item.price}
                </h1>
                {item.id == 1 ? (
                  <></>
                ) : (
                  <p
                    className={`text-sm ${
                      item.title !== "Pro Plan" ? "text-black " : "text-white "
                    }`}
                  >
                    /Month
                  </p>
                )}
              </div>
              <p
                className={`text-base ${
                  item.id == 2 ? "text-white/70" : "text-black/70"
                }`}
              >
                {item.description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {item.features.map((list) => (
                <div
                  key={list}
                  className="flex items-center justify-start gap-2"
                >
                  <Check
                    className={`min-w-6 min-h-6 ${
                      item.id == 2 ? "text-white" : "text-primary"
                    }`}
                    size={24}
                  />
                  <p
                    className={`text-base ${
                      item.id == 2 ? "text-white" : "text-black"
                    }`}
                  >
                    {list}
                  </p>
                </div>
              ))}
            </div>
            {item.id == 2 ? (
              <button className="w-full flex text-center gap-2 items-center justify-center py-3 text-primary font-semibold hover:border-white hover:bg-primary hover:text-white duration-150  bg-white border-2 border-primary rounded-full">
                Get Started <ArrowRight />
              </button>
            ) : (
              <button className="w-full flex text-center gap-2 items-center justify-center py-3 text-primary font-semibold hover:bg-primary hover:text-white duration-150 bg-white border-2 border-primary rounded-full">
                Get Started <ArrowRight />
              </button>
            )}
          </div>
        ))}
      </div>
    </Gutter>
  );
};

export default Pricing;
