"use client";
import React from "react";
import { Gutter } from "../UI/Gutter";
import Button from "../UI/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Gutter
      className="relative w-full h-full py-10  lg:py-20 flex flex-col gap-10"
      id="home"
    >
      {/* hero content */}
      <div className="relative flex flex-col items-center justify-center gap-6 ">
        <div className=" relative text-center flex flex-col gap-4">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            // transition={{ duration: 0.1 }}
            className="relative text-[#111] text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  leading-normal text-center"
          >
            Unlock Global Markets with <br className="hidden md:block" />
            Effortless VSL <span className="text-primary">Translations</span>
            <img
              src="cursor.svg"
              alt=""
              className="absolute hidden lg:block -right-2 -bottom-7 lg:-right-12  lg:-bottom-7  w-10 "
            />
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            // transition={{ duration: 0.1 }}
            className="text-[#111]/70 text-base leading-normal"
          >
            Expand your VSL beyond the USA and UK, and tap into new profitable{" "}
            <br className="hidden md:block" />
            markets like France, Germany, Spain, Italy and more.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          // transition={{ duration: 0.1 }}
          className="z-10"
        >
          <Button variant="solid">
            Get Started <ArrowRight />
          </Button>
        </motion.div>
      </div>

      {/* hero Image */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        // transition={{ duration: 0.1 }}
        className="z-[9]"
      >
        <img
          src="hero.jpg"
          alt=""
          className="w-full max-h-auto  z-10 rounded-md"
        />
      </motion.div>
      <div className="absolute animate-pulse bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-60  h-[200px] w-[300px]   md:h-[400px] md:w-[500px] rounded-full  bg-gradient-to-tr from-[#3663FF] from-10% via-[#864AF9] via-30% to-[#E4626F] to-90% blur-[150px]" />

      {/* background pattern */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        // transition={{ duration: 0.1 }}
        className="bg-dots-pattern -z-10 bg-repeat opacity-10 bg-[length:20px] absolute inset-0"
      ></motion.div>
    </Gutter>
  );
};

export default Hero;
