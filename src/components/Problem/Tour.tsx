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
  const [play, setPlay] = useState(true);
  return (
    <div className="justify-between  self-stretch px-5 mt-20 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
          <span className="justify-center items-stretch self-stretch flex flex-col my-auto w-[75%] max-md:mt-10">
            {/* <div className="text-xs  font-medium leading-4 tracking-widest uppercase max-md:max-w-full">
              <span className="heading-gradient ">Opportunity</span>
            </div> */}
            <div className="text-white heading-gradient font-bold text-4xl  leading-[52px] tracking-tighter mt-3.5 max-md:max-w-full">
              The Annotation Tool For Top-quality Training Data
            </div>

            <div className="text-white text-opacity-70 text-xl font-[450] leading-8 tracking-tighter mt-6 max-md:max-w-full">
              At AiDocker, our approach to AI model development is meticulously
              crafted. Following the research and development of Large Language
              Models (LLMs) and their training, we embark on a critical phase:
              data profiling and annotation. This process is pivotal in
              providing data tailored to specific developer needs.
            </div>
          </span>
        </div>
        <div className="flex justify-center relative mx-auto flex-col items-stretch w-[22.5%] ml-5 mt-5 max-md:w-full max-md:ml-0">
          {/* <SvgComponent /> */}
          <div style={{ height: "600px", width: "500px" }}>
            <video
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              onEnded={() => setPlay(false)}
              autoPlay={play}
              muted
            >
              <source src="/boxes_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
