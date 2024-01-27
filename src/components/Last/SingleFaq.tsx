"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const SingleFaq = (faq: FaqItem) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="justify-center items-stretch border backdrop-blur-[14px] bg-white bg-opacity-10 self-center flex w-[653px] max-w-full flex-col mt-2.5 p-5 rounded-2xl border-solid border-white border-opacity-10">
      <span className="items-center flex justify-between gap-2.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        {open ? (
          <button onClick={toggle}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d693616aa316041b936b1a439799b96dc1c199aee6c3ba1e47d34745a91ee9?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </button>
        ) : (
          <button onClick={toggle}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d524812ddd256fd13bfdadc18cf44f117716ea3e07b993db8cf7f27eda13b00?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </button>
        )}
        <div className="text-white text-lg font-bold leading-7 tracking-tight self-stretch grow whitespace-nowrap">
          {faq.question}
        </div>
      </span>
      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white text-sm font-medium leading-5 items-stretch justify-center mt-2.5 pl-9 max-md:max-w-full max-md:pl-5"
          >
            {faq.answer}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SingleFaq;
