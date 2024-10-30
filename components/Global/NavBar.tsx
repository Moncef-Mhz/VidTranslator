"use client";
import React, { useEffect, useState } from "react";
import { Gutter } from "../UI/Gutter";
import { NavLinks } from "@/contant";
import Link from "next/link";
import Button from "../UI/Button";
import { ArrowRight } from "lucide-react";
import { MenuButton } from "../UI/MenuButton";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: "-80px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Gutter
        className={`relative z-[999999]  w-full h-[80px]  flex items-center justify-between bg-foreground`}
      >
        {/* Logo */}
        <Link href="#hero">
          <img src="LogoWhite.svg" className="xl:h-[45px] h-[35px]" />
        </Link>

        {/* desktop nav */}
        <div className="lg:flex hidden items-center justify-center gap-6 ">
          {/* Nav Links */}
          <ul className="flex items-center gap-10">
            {NavLinks.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="text-background text-base hover:text-[#ccc] duration-100"
              >
                {item.title}
              </Link>
            ))}
          </ul>
          <div className="w-[1px] bg-white/40 h-8 hidden lg:block" />
          {/* CTA */}
          <div className="flex items-center justify-center gap-10">
            <Button variant="solid">
              Get started <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden items-center justify-center gap-8">
          <Button variant="solid" className="hidden lg:block">
            Get started <ArrowRight />
          </Button>
          <MenuButton
            color="white"
            height={18}
            strokeWidth={2}
            isOpen={OpenMenu}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>
        <AnimatePresence>
          {OpenMenu && (
            <motion.div
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 600, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bg-background py-12 h-screen w-full left-0 top-[80px] z-[9998]"
            >
              <ul className="flex items-center flex-col gap-10 px-8">
                {NavLinks.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    onClick={() => setOpenMenu(false)}
                    className="text-forground text-2xl font-medium hover:text-[#ccc] duration-100"
                  >
                    {item.title}
                  </Link>
                ))}
                <hr className="w-full h-[1px] bg-[#ccc]" />
                <Link
                  href={"#Login"}
                  onClick={() => setOpenMenu(false)}
                  className="text-forground text-2xl font-medium hover:text-[#ccc] duration-100"
                >
                  Login
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Gutter>
    </motion.header>
  );
};

export default NavBar;
