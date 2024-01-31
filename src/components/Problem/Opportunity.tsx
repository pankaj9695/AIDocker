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
      className=" flex flex-col items-baseline justify-between shadow-sm bg-white bg-opacity-10  sm:flex-row px-16 sm:py-12 py-6 rounded-3xl max-md:px-5"
    >
      {/* <div className="text-xl font-medium text-center sm:text-start leading-4 tracking-widest uppercase mt-3.5 max-md:max-w-full">
        <span className="heading-gradient ">Opportunity</span>
      </div> */}
      <div className="sm:w-6/12 w-full">
        <div className="self-stretch leading-[44px]  text-white text-center sm:text-start text-4xl font-bold sm:leading-[56px] tracking-tighter w-full  max-md:max-w-full">
          <span className="heading-gradient ">Opportunity</span>
        </div>
        <div className="my-3.5 max-md:max-w-full">
          <div className="gap-5 flex  items-baseline max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <h1 className="text-white text-4xl text-center sm:text-start font-medium leading-[52px] tracking-tighter max-md:max-w-full max-md:mt-5 mt-10">
                Harnessing the Power of GPUs and Data for AI Breakthroughs
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
        <p className="text-white text-opacity-70 text-xl text-center sm:text-start font-[450] leading-8 tracking-tighter my-auto max-md:max-w-full max-md:mt-10">
          In the world of AI, the synergy of computational power and data is
          pivotal. GPUs stand as the backbone, providing the necessary
          horsepower for complex computations, while diverse datasets act as the
          leading force, driving insights and innovation. AiDocker embraces this
          synergy, offering a platform where the confluence of these two
          critical elements unlocks new horizons in AI development.
        </p>
      </div>
    </motion.section>
  );
};

export default Opportunity;
