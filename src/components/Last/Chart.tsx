"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Chart1 from "@/components/Chart1";
import Chart2 from "@/components/Chart2";

const cardVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.5, // delay each card by half a second
    },
  }),
};

const Chart = () => {
  const ref = useRef(null);

  return (
    <span className="justify-center items-stretch self-stretch flex  mt-32 flex-col">
      {/* <div className="text-xs font-medium leading-4 tracking-widest uppercase heading-gradient self-center whitespace-nowrap mt-32 max-md:mt-10">
        Problem and solution
      </div> */}
      <div className="text-white text-center  heading-gradient  text-4xl font-bold leading-[56px] tracking-tighter w-full mt-1.5 max-md:max-w-full">
        Unprecedented Surge in AI Hardware Demand
      </div>
      <div className="text-white sm:w-[80%] mx-auto text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        SaaS companies spend 50%+ of their cost of goods sold (COGS) on
        infrastructure hosting costs. As demand for AI software grows, the
        demand for hardware could rise accordingly.
      </div>
      {/* <div className="items-stretch self-center flex gap-3.5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <span className="flex justify-between gap-5 p-6 rounded-2xl items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="items-center bg-[linear-gradient(157deg,#FF852D_15.06%,#FF7878_97.93%)] flex aspect-square flex-col justify-center w-[42px] h-[42px] px-2 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/012ac5c459715af19227d617e11efdf96d86ef65db7281f81b25204352fdcb28?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal self-stretch grow shrink basis-auto">
            Our protocol will have high end GPus to average GPUs ,be it supplier
            or user{" "}
          </div>
        </span>
        <span className="flex justify-between gap-5 p-6 rounded-2xl items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="items-center bg-[linear-gradient(157deg,#FF852D_15.06%,#FF7878_97.93%)] flex aspect-[0.9761904761904762] flex-col justify-center w-[42px] h-[42px] px-2 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c537c0151502e48d01d7b875b761b75685bf5fbcdf4489f42290c9d95e4ca771?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal self-stretch grow shrink basis-auto">
            Our protocol will have high end GPus to average GPUs ,be it supplier
            or user{" "}
          </div>
        </span>
      </div> */}

      <div className="self-center w-full max-w-[1036px] mt-8 rounded-2xl max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0} // 0 delay for the first card
            className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
          >
            <span className="items-stretch bg-[#181818] border border-[color:var(--Outline-1,rgba(255,255,255,0.04))] backdrop-blur-[18px] flex grow flex-col w-full p-6 rounded-3xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Enterprice value ( Trillion, USD)
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>
              {/* <img
                loading="lazy"
                src="/chart1.svg"
                className=""
                aria-label="Logo"
              /> */}
              <div className="mt-4">
                <Chart1 />
              </div>
            </span>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1} // 0.5s delay for the second card
            className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <span className="items-stretch bg-[#181818] border border-[color:var(--Outline-1,rgba(255,255,255,0.04))] backdrop-blur-[18px] flex grow flex-col w-full p-6 rounded-3xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Project hardware spend driven by AI
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>

              <div className="mt-4">
                <Chart2 />
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </span>
  );
};

export default Chart;
