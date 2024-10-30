import React from "react";
import { Gutter } from "../UI/Gutter";
import { NavLinks } from "@/contant";
import Link from "next/link";
import HR from "../UI/HR";

function Footer() {
  return (
    <>
      <Gutter className="bg-foreground">
        <HR />
      </Gutter>
      <Gutter className="bg-foreground flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 py-10">
          <div className="space-y-6">
            <img src="LogoWhite.svg" alt="" className="h-[40px] md:h-[48px]" />
            <p className="text-base tracking-normal	 leading-normal text-white/70 w-full md:w-[48%]">
              With VSLTranslator.io, you can easily create high-converting VSLs
              for multiple countries.
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            {NavLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-white/70 hover:text-white duration-150"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <HR />
        <div className="flex flex-col md:flex-row gap-8  items-center justify-between py-10">
          <h1 className="text-white/50">
            © 2024 VSLTranslator. All rights reserved.
          </h1>
          <div className="flex items-center gap-8">
            <p className="text-white/50 hover:text-white/70 cursor-pointer duration-150">
              Terms & Condition
            </p>
            <p className="text-white/50 hover:text-white/70 cursor-pointer duration-150">
              Privacy Policy
            </p>
          </div>
        </div>
      </Gutter>
    </>
  );
}

export default Footer;
