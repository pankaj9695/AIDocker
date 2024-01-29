"use client";
import React from "react";
import { motion } from "framer-motion";
import MobileHeader from "./Header/MobileHeader";

const headerVariants = {
  initial: { y: -500, opacity: 0 },
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
              src="/logosvg.svg"
              className="aspect-w-16 aspect-h-9 h-9 ms-0"
              aria-label="Logo"
            />

            {/* <div className="text-white text-xl font-bold leading-8 tracking-tighter grow whitespace-nowrap">
              AiDocker
            </div> */}
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
          <div className="center-box me-12">
            <div className="animated-border-box-glow"></div>
            <button
              className="animated-border-box text-neutral-900 text-xs font-medium leading-4 tracking-normal whitespace-nowrap justify-center items-stretch shadow-sm  self-center my-auto px-3 py-2.5 rounded-[30px]"
              aria-label="Join Whitelist"
            >
              Join Whitelist
            </button>
          </div>
        </section>
      </motion.header>
      <MobileHeader />
    </>
  );
};

export default Header;
