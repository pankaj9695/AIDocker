"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exited: { opacity: 0 },
};
const Tour = () => {
  const [step, setStep] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const start = 10; // start time in seconds
  const end = 20; // end time in seconds
  console.log(play, "play");

  // console.log("vedio in view", isInView);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setPlay(true);
      }, 700);
    }
  }, [isInView]);

  useEffect(() => {
    const vc = videoRef.current as any;
    if (play) {
      vc.play();
    } else {
      vc.pause();
    }
  }, [play]);

  // const [play, setPlay] = useState(true);
  return (
    <div className="justify-between  self-stretch px-0 sm:px-5 sm:mt-20 mt-0 ">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
          <span className="justify-center items-stretch self-stretch flex flex-col my-auto w-full sm:w-[75%] max-md:mt-10">
            <div className="text-xs  w-full text-center sm:text-left font-medium leading-4 tracking-widest uppercase max-md:max-w-full">
              <span className="heading-gradient ">FineTune</span>
            </div>
            <div className="text-white  font-bold text-3xl sm:text-4xl text-center sm:text-start sm:leading-[52px] tracking-tighter mt-2 pb-1 sm:mt-3.5 max-md:max-w-full">
              The Annotation Tool For Top-quality Training Data
            </div>

            <div className="text-white text-opacity-70 sm:text-xl text-[1rem] font-[200] sm:text-[1.15rem] sm:font-[450] sm:leading-8 leading-6 tracking-normal sm:tracking-tight text-center sm:text-start mt-6 max-md:max-w-full">
              At AiDocker, our approach to AI model development is meticulously
              crafted. Following the research and development of Large Language
              Models (LLMs) and their training, we embark on a critical phase:
              data profiling and annotation. This process is pivotal in
              providing data tailored to specific developer needs.
            </div>
          </span>
        </div>
        <div className="flex justify-center relative mx-auto flex-col items-stretch  ml-5 mt-5 max-md:w-full max-md:ml-0">
          {/* <SvgComponent /> */}
          <motion.div
            ref={ref}
            className="h-[600px] w-[500px] max-md:w-full max-md:h-[300px]"
            // style={{ height: "600px", width: "500px" }}
            // style={{ height: "300px" }}
          >
            <video
              ref={videoRef}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              onEnded={() => setPlay(false)}
              // autoPlay={play}
              muted
            >
              <source src="/boxes_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
