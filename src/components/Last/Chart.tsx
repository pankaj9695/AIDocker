"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <span className="justify-center items-stretch self-stretch flex flex-col">
      <div className="text-xs font-medium leading-4 tracking-widest uppercase heading-gradient self-center whitespace-nowrap mt-32 max-md:mt-10">
        Problem and solution
      </div>
      <div className="text-white text-center text-4xl font-bold leading-[56px] tracking-tighter w-full mt-1.5 max-md:max-w-full">
        Unprecedented Surge in AI Hardware Demand
      </div>
      <div className="text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
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
              <div className="border bg-[#232323] flex flex-col mt-6 px-6 py-8 rounded-2xl border-solid border-red-400 border-opacity-30 items-end max-md:max-w-full max-md:px-5">
                <div className="self-stretch flex items-stretch justify-between gap-0 pr-4">
                  <span className="items-stretch flex basis-[0%] flex-col">
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap">
                      $90T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $80T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $70T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $60T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $50T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $40T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $30T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $20T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $10T
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $0T
                    </div>
                  </span>
                  <div className="flex gap-0 mt-44 pr-20 self-end items-end max-md:mt-10 max-md:pr-5">
                    <div className="shrink-0 h-px mt-20 max-md:mt-10" />
                    <div className="self-stretch flex basis-[0%] flex-col items-center">
                      <span className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-violet-600 aspect-[1.64] px-2 py-1 rounded-3xl">
                        $12T
                      </span>
                      <div className="bg-violet-600 self-stretch flex shrink-0 h-[52px] flex-col mt-2.5 rounded-2xl" />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-8 self-start items-end">
                    <div className="flex grow basis-[0%] flex-col items-stretch mt-7">
                      <span className="text-red-400 text-xs font-[450] leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-200 aspect-[1.6] px-2 py-1 rounded-3xl">
                        $17B
                      </span>
                      <span className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-300 aspect-[1.6] mt-24 px-2 py-1 rounded-3xl max-md:mt-10">
                        $17B
                      </span>
                      <span className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-red-400 aspect-[1.6] mt-7 px-2 py-1 rounded-3xl">
                        $17B
                      </span>
                    </div>
                    <div className="items-stretch self-stretch flex grow basis-[0%] flex-col rounded-lg">
                      <div className="bg-orange-200 flex shrink-0 h-[120px] flex-col" />
                      <div className="bg-orange-300 flex shrink-0 h-[92px] flex-col" />
                      <div className="bg-red-400 flex shrink-0 h-[25px] flex-col" />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc2b923c9ed30bccb6c88786b60580dac5a7dfc4630a998372368a2df0b60d5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                      className="aspect-[0.03] object-contain object-center w-[7px] stroke-[1px] stroke-white stroke-opacity-30 overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <span className="justify-between border-t-2 border-[#434040] pt-3 items-stretch flex w-[309px] max-w-full gap-5 mr-8 mt-3 max-md:mr-2.5">
                  <div className="text-white text-xs font-[450] leading-4 tracking-normal">
                    Internet 1997-2023
                  </div>
                  <div className="text-white text-xs font-[450] leading-4 tracking-normal">
                    Ai 2021-2030 Est.
                  </div>
                </span>
                <div className="items-stretch self-stretch flex sm:flex-nowrap flex-wrap gap-3 mt-6 px-0.5">
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-red-400 flex w-2 shrink-0 h-2 flex-col my-auto rounded-2xl" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      Ai Hardware
                    </div>
                  </span>
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-orange-300 flex w-2 shrink-0 h-2 flex-col my-auto rounded-2xl" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      Fundamental AI Model as a service APis
                    </div>
                  </span>
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-orange-200 flex w-2 shrink-0 h-2 flex-col my-auto rounded-2xl" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      Ai Application
                    </div>
                  </span>
                </div>
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
              <div className="border bg-[#232323] flex flex-col mt-6 px-6 py-7 rounded-2xl border-solid border-red-400 border-opacity-30 items-end max-md:max-w-full max-md:px-5">
                <div className="self-stretch flex justify-between gap-0 pr-8 items-start max-md:pr-5">
                  <span className="items-stretch flex basis-[0%] flex-col mt-1.5">
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap">
                      $1800B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $1600B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $1400B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $1200B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $1000B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $800B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $600B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $400B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $200B
                    </div>
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap mt-3">
                      $0B
                    </div>
                  </span>
                  <div className="flex flex-col mt-56 self-end items-start max-md:mt-10">
                    <div className="flex gap-0 ml-11 items-start max-md:ml-2.5">
                      <div className="justify-center items-center bg-white bg-opacity-20 flex w-10 shrink-0 h-[25px] flex-col mt-4 rounded-3xl" />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/088de4d022a768498c4c739e9272ee7ff89c5d5332fde51235b24f87b2135463?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="aspect-[2.81] object-contain object-center w-full stroke-[1px] stroke-white stroke-opacity-30 overflow-hidden shrink-0"
                      />
                    </div>
                    <div className="self-stretch flex justify-between gap-0 mt-1.5 pr-20 items-end max-md:pr-5">
                      <div className="shrink-0 h-px mt-1.5" />
                      <div className="bg-violet-600 self-stretch flex w-[78px] shrink-0 h-[7px] flex-col rounded-3xl" />
                    </div>
                  </div>
                  <div className="self-stretch flex justify-between gap-3 items-end">
                    <div className="flex grow basis-[0%] flex-col items-stretch mt-16 max-md:mt-10">
                      <div className="flex justify-between gap-0 px-0.5 items-end">
                        <span className="flex grow basis-[0%] flex-col mt-12 items-start max-md:mt-10">
                          <div className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap ml-3 max-md:ml-2.5">
                            43% CAGR
                          </div>
                          <span className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-white bg-opacity-20 self-stretch aspect-[2.48] mt-20 px-2 py-1 rounded-3xl max-md:mt-10">
                            $17B
                          </span>
                        </span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd010c7efdf34a6258b398e9278135d4316d56c6d9174ddf69f3c01d3fd8406?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="aspect-[0.44] object-contain object-center w-[69px] stroke-[1px] stroke-white stroke-opacity-30 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5225c4c1e141f48b76a452ef8c7d7a8bcf9e9b9abcbdbe54fbe2c71f5fdcf250?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="aspect-[1.5] object-contain object-center w-[66px] overflow-hidden max-w-full mt-2.5 self-start"
                      />
                    </div>
                    <div className="self-stretch flex basis-[0%] flex-col">
                      <span className="text-white text-xs font-[450] leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-white bg-opacity-20 self-center aspect-[1.6] px-2 py-1 rounded-3xl">
                        $17B
                      </span>
                      <div className="bg-white self-stretch flex shrink-0 h-[38px] flex-col mt-3" />
                      <div className="bg-orange-200 self-stretch flex shrink-0 h-[46px] flex-col" />
                      <div className="bg-orange-300 self-stretch flex shrink-0 h-[60px] flex-col" />
                      <div className="bg-red-400 self-stretch flex shrink-0 h-[94px] flex-col" />
                    </div>
                  </div>
                </div>
                <span className="justify-between border-t-2 border-[#434040] pt-3 items-stretch flex w-[298px] max-w-full gap-5 mr-8 mt-3 max-md:mr-2.5">
                  <div className="text-white text-xs font-[450] leading-4 tracking-normal">
                    2021
                  </div>
                  <div className="text-white text-xs font-[450] leading-4 tracking-normal">
                    2025
                  </div>
                  <div className="text-white text-xs font-[450] leading-4 tracking-normal">
                    2030
                  </div>
                </span>
                <div className="items-stretch self-stretch flex-wrap sm:flex-nowrap flex gap-3 mt-6 pr-20 max-md:pr-5">
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-red-400 flex w-2 shrink-0 h-2 flex-col my-auto rounded-3xl" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      AI Compute
                    </div>
                  </span>
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-orange-300 flex w-2 shrink-0 h-2 flex-col my-auto rounded-2xl" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      Storage
                    </div>
                  </span>
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-orange-200 flex w-2 shrink-0 h-2 flex-col my-auto rounded-[40px]" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      Network
                    </div>
                  </span>
                  <span className="justify-between items-center flex gap-1">
                    <div className="bg-white flex w-2 shrink-0 h-2 flex-col my-auto rounded-[32px]" />
                    <div className="text-white text-xs font-[450] leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                      Overhead
                    </div>
                  </span>
                </div>
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </span>
  );
};

export default Chart;
