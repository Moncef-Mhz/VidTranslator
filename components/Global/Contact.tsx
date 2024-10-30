import React from "react";
import { Gutter } from "../UI/Gutter";
import { ArrowRight, Send } from "lucide-react";

function Contact() {
  return (
    <Gutter
      className="bg-foreground py-10 md:py-20 flex flex-col items-center justify-center gap-8"
      id="Contact"
    >
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-background text-2xl z-10 md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="text-white/70 text-sm md:text-base">
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>

      {/* form */}
      <div className="flex flex-col gap-8 md:w-[400px] w-full px-1 ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-2 w-full ">
            <label
              htmlFor="name"
              className="text-Background px-1 text-background  text-sm"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="px-4 py-2 rounded-md text-base w-full outline-none focus:ring-offset-2 focus:ring-2 focus:ring-primary placeholder:text-[#d4d4d4]"
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-full ">
            <label
              htmlFor="Email"
              className="text-Background px-1 text-background  text-sm"
            >
              Email
            </label>
            <input
              type="text"
              name="name"
              placeholder="Email"
              className="px-4 py-2 rounded-md text-base w-full outline-none focus:ring-offset-2 focus:ring-2 focus:ring-primary  placeholder:text-[#d4d4d4]"
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-full ">
            <label
              htmlFor="Message"
              className="text-Background px-1 text-background  text-sm"
            >
              Message
            </label>
            <textarea
              name="Message"
              placeholder="Message"
              className="px-4 py-2 rounded-md text-base  w-full outline-none focus:ring-offset-2 focus:ring-2 focus:ring-primary  placeholder:text-[#d4d4d4]"
            />
          </div>
        </div>
        <button className=" px-8 flex  gap-2 items-center justify-center py-3 text-primary font-semibold hover:bg-primary hover:text-white duration-150 bg-white border-2 border-primary rounded-full">
          Send Message <Send />
        </button>
      </div>
    </Gutter>
  );
}

export default Contact;
