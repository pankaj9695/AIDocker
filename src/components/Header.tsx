"use client";
import React from "react";
import { motion } from "framer-motion";
import MobileHeader from "./Header/MobileHeader";

const headerVariants = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Header = () => {
  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className="header hidden justify-center items-center overflow-x-auto bg-white bg-opacity-0 sm:flex flex-col px-16 py-10 max-md:px-5"
      >
        <section className="header justify-between items-stretch shadow-sm bg-[#232323] flex w-[657px] max-w-full gap-5 px-5 py-3.5 rounded-[48px] max-md:flex-wrap">
          <span className="items-stretch flex justify-between gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd8dac905f700939c3983f83e8bbe6e3b8332ae93d0a0cb4aadde36bf56c6704?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-[0.97] object-contain object-center w-[31px] fill-[linear-gradient(157deg,#FF852D_15.06%,#FF7878_97.93%)] overflow-hidden shrink-0 max-w-full"
              aria-label="Logo"
            />
            <div className="text-white text-xl font-bold leading-8 tracking-tighter grow whitespace-nowrap">
              AiDocker
            </div>
          </span>
          <span className="items-stretch flex gap-5 p-2.5 self-start">
            <a
              href="#"
              className="text-white text-sm font-[450] leading-5 grow whitespace-nowrap"
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-sm font-[450] leading-5"
              aria-label="About us"
            >
              About us
            </a>
            <a
              href="#"
              className="text-white text-sm font-[450] leading-5"
              aria-label="Roadmap"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="text-white text-sm font-[450] leading-5 grow whitespace-nowrap"
              aria-label="Team"
            >
              Team
            </a>
          </span>
          <button
            className="text-neutral-900 text-xs font-medium leading-4 tracking-normal whitespace-nowrap justify-center items-stretch shadow-sm bg-white self-center my-auto px-3 py-2.5 rounded-[30px]"
            aria-label="Join Whitelist"
          >
            Join Whitelist
          </button>
        </section>
      </motion.header>
      <MobileHeader />
    </>
  );
};

export default Header;
