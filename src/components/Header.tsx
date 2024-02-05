"use client";
import React from "react";
import { motion } from "framer-motion";
import MobileHeader from "./Header/MobileHeader";
import Link from "next/link";

const headerVariants = {
  initial: { y: -500, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Header = () => {
  return (
    <>
      <motion.header
        id="header"
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className="header relative hidden justify-center items-center overflow-x-auto bg-white bg-opacity-0 sm:flex flex-col px-16 py-10 max-md:px-5"
      >
        <section className="header  items-stretch shadow-sm bg-[#232323] flex w-[657px] max-w-full px-5 py-3.5 rounded-[48px] max-md:flex-wrap gap-[4rem]">
          <Link href={"/"}>
            <span className="items-stretch flex justify-between !mt-[3.5px] gap-2.5">
              <img
                loading="lazy"
                src="/logosvg.svg"
                className="aspect-w-16 aspect-h-9 h-9 !m-0"
                aria-label="Logo"
              />

              {/* <div className="text-white text-xl font-bold leading-8 tracking-tighter grow whitespace-nowrap">
              AiDocker
            </div> */}
            </span>
          </Link>
          <div>
            <span className="items-stretch flex gap-5 p-2.5 self-start ">
              <a
                href="/#header"
                className="text-white text-sm font-[450] leading-5 grow whitespace-nowrap"
                aria-label="Home"
              >
                Home
              </a>
              <a
                href="/#about"
                className="text-white text-sm font-[450] leading-5"
                aria-label="About us"
              >
                About
              </a>
              <a
                href="/#roadmap"
                className="text-white text-sm font-[450] leading-5"
                aria-label="Roadmap"
              >
                Roadmap
              </a>
              <a
                href="/#team"
                className="text-white text-sm font-[450] leading-5 grow whitespace-nowrap"
                aria-label="Team"
              >
                Team
              </a>
              <a
                href="/#faq"
                className="text-white text-sm font-[450] leading-5 grow whitespace-nowrap"
                aria-label="Team"
              >
                Faqs
              </a>
            </span>
          </div>
          <Link
            href="/join"
            className="bg-white text-neutral-900 text-xs block font-medium leading-4 tracking-normal whitespace-nowrap justify-center items-stretch shadow-sm  self-center my-auto px-4 py-3.5 rounded-[30px]"
            aria-label="Join Whitelist"
          >
            Join Whitelist
          </Link>
          {/* <div className="flex">
            <div className=""></div>
          </div> */}
        </section>
      </motion.header>
      <MobileHeader />
    </>
  );
};

export default Header;
