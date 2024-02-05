"use client";
import React from "react";
import { motion } from "framer-motion";
const sectionVariants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
};

const Opportunity = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      // animate="animate"
      whileInView={"animate"}
      className=" flex flex-col items-baseline justify-between shadow-sm bg-white bg-opacity-10  backdrop-blur-md sm:flex-col px-16 sm:py-12 py-6 rounded-3xl max-md:px-5"
    >
      <div className="text-xs w-full font-medium sm:text-start text-center leading-4 tracking-widest uppercase mt-3.5 max-md:max-w-full">
        <span className="heading-gradient  text-center">Opportunity</span>
      </div>

      <div className="my-3.5 mt-0 max-md:max-w-full">
        <div className="gap-5 flex  items-baseline max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex  flex-col items-stretch  w-6/12  max-md:w-full max-md:ml-0">
            <h1 className="text-white w-[80%] text-2xl sm:text-4xl text-center sm:text-start font-medium leading-8 sm:leading-[52px] tracking-tighter max-md:max-w-full max-md:mt-5 mt-5">
              <span className="">
                Harnessing the Power of GPUs and Data for AI Breakthroughs
              </span>
            </h1>
          </div>
          <div
            // style={{ marginTop: "-100px" }}
            className="flex flex-col  items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <p className="text-white text-opacity-70 text-[1.15rem]  sm:leading-8  leading-6 tracking-normal sm:tracking-tight text-center sm:text-start font-[450]  my-auto max-md:max-w-full sm:mt-0">
              {/* In the world of AI, the synergy of computational power and data is
              pivotal. GPUs stand as the backbone, providing the necessary
              horsepower for complex computations, while diverse datasets act as
              the leading force, driving insights and innovation. AiDocker
              embraces this synergy, offering a platform where the confluence of
              these two critical elements unlocks new horizons in AI
              development. */}
              In the AI realm, the combination of computational strength and
              data is crucial. GPUs offer the essential power for intricate
              calculations, with varied datasets fueling insights and
              innovation. AiDocker leverages this fusion, creating a platform
              that opens new possibilities in AI advancement.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Opportunity;
