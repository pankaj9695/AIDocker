"use client";
import React from "react";
import { motion } from "framer-motion";

// const cardVariants = {
//   hidden: { opacity: 0, x: "-100vw" },
//   visible: (custom: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: custom * 0.5, // delay each card by half a second
//     },
//   }),
// };
const cardVariants = {};
const headerVariants = {
  initial: { y: "-50%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Solution = () => {
  return (
    <section className="items-start self-stretch flex flex-col">
      <div className="self-stretch leading-[44px] heading-gradient mt-32 text-white text-center text-4xl font-bold sm:leading-[56px] tracking-tighter w-full  max-md:max-w-full">
        Overcoming Barriers in AI Development
      </div>
      <div className="self-stretch text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        Your comprehensive solution for all AI-related needs.
      </div>
      <div className="self-stretch w-full mt-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0} // 0 delay for the first card
            className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
          >
            <div className="justify-center items-center backdrop-blur-[22px] bg-white bg-opacity-10 flex grow flex-col w-full p-2 rounded-3xl border-2 border-solid border-white border-opacity-0 max-md:mt-5">
              <span className="justify-center self-stretch flex flex-col pt-8 px-8 items-start max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e6ba3c199d21f9168444b183817a51f263d09803a79064d70fe17fb4488d2?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full"
                />
                <div className="self-stretch text-white text-2xl font-bold leading-8 tracking-tighter whitespace-nowrap mt-1.5">
                  Compute demand
                </div>
                <div className="self-stretch text-white text-opacity-70 text-base font-[450] leading-6 tracking-normal mt-1.5">
                  Developers face growing demands for computational power, often
                  hindered by the scarcity of accessible, high-performance
                  resources.
                </div>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9ebb06b6da38480c963daa8bdf2413385c44176ffc9d165aa2e67c0b98d4c5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full mt-5"
              />
              <motion.span
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                className="justify-center items-stretch self-stretch bg-white bg-opacity-10 flex flex-col mt-5 p-8 rounded-2xl max-md:px-5"
              >
                <div className="text-white text-2xl font-bold leading-8 tracking-tighter whitespace-nowrap">
                  Rentable GPUs
                </div>
                <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-1.5">
                  AiDocker's DePIN network provides scalable GPU resources,
                  enabling users to easily meet the computational demands of
                  their AI projects.
                </div>
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1} // 0.5s delay for the second card
            className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="justify-center items-center backdrop-blur-[22px] bg-white bg-opacity-10 flex grow flex-col w-full p-2 rounded-3xl border-2 border-solid border-white border-opacity-0 max-md:mt-5">
              <span className="justify-center self-stretch flex flex-col pt-8 px-8 items-start max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71e34a1ecdcd6d039456461bf04e569ad3a9223d6ce88272931d9ed4055d49f3?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full"
                />
                <div className="self-stretch text-white text-2xl font-bold leading-8 tracking-tighter whitespace-nowrap mt-1.5">
                  Data accessibility
                </div>
                <div className="self-stretch text-white text-opacity-70 text-base font-[450] leading-6 tracking-normal mt-1.5">
                  Developers often struggle to access current, diverse datasets,
                  hindering their ability to innovate and effectively train AI
                  models.
                </div>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c09e6c8f9582bce53210c7caacc7fcad9b5c7224fc64618216f3a48b58f8ef12?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full mt-5"
              />
              <motion.span
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                className="justify-center items-stretch self-stretch bg-white bg-opacity-10 flex flex-col mt-5 p-8 rounded-2xl max-md:px-5"
              >
                <div className="text-white text-2xl font-bold leading-8 tracking-tighter whitespace-nowrap">
                  Data Marketplace
                </div>
                <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-1.5">
                  AiDocker offers a vast dataset library, providing developers
                  with diverse, high-quality data essential for a variety of AI
                  projects.
                </div>
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2} // 1s delay for the third card
            className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="justify-center items-center backdrop-blur-[22px] bg-white bg-opacity-10 flex grow flex-col w-full p-2 rounded-3xl border-2 border-solid border-white border-opacity-0 max-md:mt-5">
              <span className="justify-center self-stretch flex flex-col pt-8 px-8 items-start max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/86339b65c209189f04d536906b263bc2d59abb341e0dcae8bf9874ab7ce7b196?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full"
                />
                <div className="self-stretch text-white text-2xl font-bold leading-8 tracking-tighter whitespace-nowrap mt-1.5">
                  Centralization
                </div>
                <div className="self-stretch text-white text-opacity-70 text-base font-[450] leading-6 tracking-normal mt-1.5">
                  The centralized nature of current computational resources
                  leads to bottlenecks and inefficiencies, hindering optimal
                  performance.
                </div>
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f75f41354a3314237b43ed83e50634d0d046e8e041e1af37a941af3cb738581c?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full mt-5"
              />
              <motion.span
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                className="justify-center items-stretch self-stretch bg-white bg-opacity-10 flex flex-col mt-5 p-8 rounded-2xl max-md:px-5"
              >
                <div className="text-white text-2xl font-bold leading-8 tracking-tighter whitespace-nowrap">
                  Decentralization
                </div>
                <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-1.5">
                  AiDocker's decentralized platform streamlines AI development
                  by providing an integrated environment for model training.
                </div>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
