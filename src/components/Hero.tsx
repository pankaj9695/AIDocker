"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const imageVariants = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const Hero = () => {
  const words = ["LLM Models", "AI models", "AI Datasets"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const imgVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.7, delay: 1 } },
  };
  return (
    <section className="justify-center items-center self-stretch flex flex-col px-16 py-6 sm:py-12 max-md:px-5">
      <div className="w-full max-w-[1216px] sm:mt-8 mb-3.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
            <motion.div
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="flex flex-col mt-1.5 items-start max-md:max-w-full"
            >
              <motion.h1
                variants={textVariants}
                className="text-white text-opacity-90 text-6xl font-[700] leading-[81px] tracking-tighter bg-clip-text self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-10"
              >
                <span className="  ">Empowering </span>
                <span className="  ">to Build decentralized </span>
                {/* <motion.span
                  variants={textVariants}
                  className="font-medium text-gradient leading-[72.4020767211914px]"
                >
                  {words[0]}
                </motion.span> */}
                <div
                  className="sm:h-[72px] h-[50px]"
                  style={{ overflow: "hidden" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ y: "-100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.5 }}
                      className=" text-gradient leading-[50.4020767211914px] sm:leading-[75.4020767211914px]"
                    >
                      {words[current]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="self-stretch text-white text-opacity-70 text-[1rem] font-[200] sm:leading-8 leading-6 tracking-normal sm:tracking-tight mt-5 max-md:max-w-full"
              >
                From data-driven enthusiasts to seasoned developers, AiDocker is
                the go-to destination for creating, training, and deploying AI
                models with ease and efficiency.
              </motion.p>
              {/* <a
                href="#"
                className="text-neutral-900 text-base font-medium leading-5 tracking-tight whitespace-nowrap justify-center items-stretch shadow-sm bg-white mt-5 px-4 py-3.5 rounded-[38.3px]"
              >
                Join Whitelist
              </a> */}
              <div>
                <div className="animated-border-box-glow text-center z-10 "></div>
                <Link
                  href="/join"
                  className="animated-border-box mt-5 sm:px-4 !px-10 py-5 text-neutral-900 text-base font-medium tracking-tight whitespace-nowrap "
                  aria-label="Join Whitelist"
                >
                  Join Whitelist
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col mt-20 -mx-20 sm:mt-0 items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
            {/* <motion.img
              variants={imageVariants}
              initial="initial"
              animate="animate"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-[1.52] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              alt=""
            /> */}
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate="animate"
              className="hero"
            >
              <div className="hero-background">
                <video autoPlay loop muted className="hero-video">
                  <source src="/earth.mp4" type="video/mp4" />
                  <source src="/earth.mov" type="video/mov" />
                  Your browser does not support the video tag.
                </video>
                <motion.img
                  variants={imgVariants}
                  initial="initial"
                  // animate="animate"
                  whileInView={"animate"}
                  src="/earth4.0.svg"
                  alt="Description of image"
                  className="hero-image"
                />
                {/* <EarthSvg /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
