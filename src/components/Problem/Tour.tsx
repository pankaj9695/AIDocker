"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SvgComponent } from "../tourSvg";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exited: { opacity: 0 },
};
const Tour = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 1000); // Change image every 1 second

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="justify-between  self-stretch px-5 mt-20 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
          <span className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-xs  font-medium leading-4 tracking-widest uppercase max-md:max-w-full">
              <span className="heading-gradient ">Opportunity</span>
            </div>
            <div className="text-white text-4xl font-medium leading-[52px] tracking-tighter mt-3.5 max-md:max-w-full">
              Computational power is the backbone GPUs and data plays lead role
              in A.i
            </div>
            <div className="text-white text-opacity-70 text-xl font-[450] leading-8 tracking-tighter mt-6 max-md:max-w-full">
              In this beginning era of a.i which is future of technology,
              computational for models training and our vision is to make a
              marketplace where users and developers can earn revenue for their
              data or putting their idle GPUs at work .{" "}
            </div>
          </span>
        </div>
        <div className="flex justify-center relative mx-auto flex-col items-stretch w-[22.5%] ml-5 mt-5 max-md:w-full max-md:ml-0">
          <SvgComponent />
        </div>
      </div>
    </div>
  );
};

export default Tour;
