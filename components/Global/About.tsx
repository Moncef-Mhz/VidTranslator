"use client";
import React from "react";
import { Gutter } from "../UI/Gutter";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <Gutter className="bg-foreground overflow-hidden flex flex-col relative gap-6 py-10 md:py-20 text-background">
      <AnimatePresence>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          // transition={{ duration: 0.1 }}
          className="text-xl z-10 md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
        >
          Why We Built <br className="block md:hidden" /> VSLTranslator.io?
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          // transition={{ duration: 0.1 }}
          className="max-w-full z-10 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] text-white/70   text-base tracking-normal	 leading-normal"
        >
          We saw a massive gap in the market — many businesses are missing out
          on international growth simply because of the complexities of VSL
          translation. So, we created a tool that automates the entire process,
          allowing you to easily expand your reach to non-English-speaking
          markets.
        </motion.p>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.1 }}
          src="z.svg"
          alt=""
          className="w-[200px] opacity-50 md:opacity-100 md:w-[300px] lg:w-[400px] xl:w-[500px] absolute -right-8 -top-8 md:right-0 md:-bottom-10 lg:right-0 lg:-bottom-15 xl:right-40 xl:-bottom-20 2xl:right-60"
        />
        <div className="w-20 h-20 absolute top-4 right-4 bg-primary blur-3xl" />
      </AnimatePresence>
    </Gutter>
  );
};

export default About;
