"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Chart1 from "@/components/Chart1";
import Chart2 from "@/components/Chart2";
import Image from "next/image";

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

  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <span className="justify-center items-stretch self-stretch flex mt-6 sm:mt-32 flex-col">
      <div className="text-white text-center  heading-gradient text-3xl sm:text-4xl font-bold sm:leading-[56px] leading-10 tracking-tighter w-full mt-1.5 max-md:max-w-full">
        Unprecedented Surge in AI Hardware Demand
      </div>
      <div className="self-stretch text-white text-opacity-70 text-center text-[1.15rem] font-[450] max-w-[75%] sm:w-full mx-auto leading-6 sm:leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        SaaS companies spend 50%+ of their cost of goods sold (COGS) on
        infrastructure hosting costs. As demand for AI software grows, the
        demand for hardware could rise accordingly.
      </div>

      <div className="self-center w-full max-w-[1036px] mt-8 rounded-2xl max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="items-stretch bg-[#181818] border border-[color:var(--Outline-1,rgba(255,255,255,0.04))] backdrop-blur-[18px] flex grow flex-col w-full p-6 rounded-3xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Enterprice value (Trillion, USD)
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>

              <div className="mt-4">
                {!isMobile ? (
                  <Chart1 />
                ) : (
                  <div className="w-full">
                    <Image
                      src={"/chart1.svg"}
                      height={120}
                      width={400}
                      alt="chart"
                    />
                  </div>
                )}
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch bg-[#181818] border border-[color:var(--Outline-1,rgba(255,255,255,0.04))] backdrop-blur-[18px] flex grow flex-col w-full p-6 rounded-3xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Project hardware spend driven by AI
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>

              <div className="mt-4">
                {!isMobile ? (
                  <Chart2 />
                ) : (
                  <Image
                    src={"/chart2.svg"}
                    height={120}
                    width={400}
                    alt="chart"
                  />
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Chart;
