"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
// Image from "next/image";

type props = {
  endNumber: number;
  duration: number;
  decimalPlaces: number;
};

const NumberAnimation = ({ endNumber, duration, decimalPlaces }: props) => {
  const [number, setNumber] = useState("0");

  useEffect(() => {
    let startTimestamp: any = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setNumber((progress * endNumber).toFixed(decimalPlaces));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endNumber, duration, decimalPlaces]);

  return <span>{number}</span>;
};

const Earning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="justify-center items-center self-stretch flex flex-col mt-20"
    >
      {/* <div className="self-stretch text-white text-center heading-gradient text-4xl font-bold leading-[56px] tracking-tighter w-full mt-1.5 max-md:max-w-full">
        Monetize Your AI Innovations and Contributions
      </div> */}
                  <div className="text-xs  font-medium leading-4 tracking-widest uppercase max-md:max-w-full">
              <span className="heading-gradient ">Revenue Stream</span>
            </div>
      <div className="text-white  font-bold text-3xl sm:text-4xl text-center sm:text-start sm:leading-[52px] tracking-tighter mt-2 pb-1 sm:mt-3.5 max-md:max-w-full">
        Monetize Your AI Innovations and Contributions
      </div>
      {/* <div className="self-stretch text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        AI Enthusiasts can earn revenue, making AiDocker a mutually beneficial
        ecosystem.
      </div> */}
      <div className="self-stretch text-white text-opacity-70 text-center text-[1.15rem] font-[450]  leading-6 sm:leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        AI Enthusiasts can earn revenue, making AiDocker a mutually beneficial
      </div>

      <div className=" self-stretch mt-12 w-full">
        <div className="gap-5 flex  justify-center max-md:flex-col px-0  max-md:items-stretch max-md:gap-0">
          <div className=" bg-white mb-6 md:mb-0 bg-opacity-10 rounded-2xl flex-col items-stretch w-fit max-md:w-full max-md:ml-0">
            <span className="items-start mb-0 !h-full border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex flex-col w-full !px-3 sm:!px-8 !py-2 sm:!py-4  rounded-2xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="self-stretch h-auto text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Payout
              </div>
              <div className="self-stretch text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>

              {/* <div
                style={{
                  marginTop: "10px",
                  backgroundImage: "url('box1.png')",
                  width: "100%",
                  height: "90px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="knapsack.png"
                  style={{
                    width: "150px",
                    height: "110px",
                    marginRight: "auto",
                    zIndex: "1",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "90px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <span>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "14px",
                      }}
                    >
                      NextPayout
                    </p>
                    <p style={{ color: "white", fontSize: "24px" }}>
                      {isInView ? (
                        <NumberAnimation
                          endNumber={5.98}
                          duration={2000}
                          decimalPlaces={2}
                        />
                      ) : (
                        "5.98"
                      )}{" "}
                      $
                    </p>
                  </span>
                </div>
                <p
                  style={{
                    position: "absolute",
                    left: "160px",
                    top: "60%",
                    transform: "translateY(-50%)",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "12px",
                    margin: "0",
                  }}
                >
                  -23.65 USD
                </p>
                <img
                  src="timestamp.png"
                  style={{
                    width: "135px",
                    height: "75px",
                    zIndex: "1",
                    paddingRight: "2px",
                    paddingLeft: "10px",
                  }}
                />
              </div> */}
              <div
                className="mt-2 bg-cover w-full h-24 relative flex items-center rounded-lg justify-between"
                style={{ backgroundImage: "url('box1.png')" }}
              >
                <img
                  src="knapsack.png"
                  className="w-40 h-28 mr-auto"
                  style={{ zIndex: "1" }}
                />
                <div className="absolute left-24 flex flex-col items-start justify-center">
                  <span>
                    <p className="text-white text-opacity-50 text-sm">
                      NextPayout
                    </p>
                    <p className="text-white text-2xl  sm:text-3xl">
                      {isInView ? (
                        <NumberAnimation
                          endNumber={5.98}
                          duration={5000}
                          decimalPlaces={2}
                        />
                      ) : (
                        "5.98"
                      )}{" "}
                      $
                    </p>
                  </span>
                </div>
                <p className="absolute left-48 hidden sm:block top-1/2 transform -translate-y-1/2 text-white text-opacity-50 text-xs m-0">
                  -23.65 USD
                </p>
                <img
                  src="timestamp.png"
                  className="w-36 h-20 pr-0.5 pl-2.5"
                  style={{ zIndex: "1" }}
                />
              </div>

              <div className="justify-between items-stretch  backdrop-blur-[30px]  flex w-fit max-w-full flex-col mt-1.5 pt-2.5 px-4 rounded-2xl ">
                <div className="justify-between items-center border backdrop-blur-[18px] flex gap-0.5 pl-1.5 pr-4 py-2 rounded-2xl border-solid border-white border-opacity-10 max-md:max-w-full max-md:flex-wrap">
                  <span className="flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-white text-opacity-40 text-xs font-medium leading-5 z-[1] whitespace-nowrap">
                      Last Payout (05 Jan 2024)
                    </div>
                  </span>
                  <div className=" self-stretch flex grow basis-[0%] flex-col pl-4  py-1 rounded-3xl border-solid border-white border-opacity-0 items-start">
                    <div className="border bg-white bg-opacity-10 z-[1] flex mt-0 w-full flex-col pr-4 py-2 rounded-3xl border-solid border-white border-opacity-0 items-start">
                      <span className="justify-center items-stretch z-[1] flex gap-4 ml-4 max-md:ml-2.5">
                        <div className="text-white text-opacity-90 text-xs font-medium leading-5 grow whitespace-nowrap">
                          {isInView ? (
                            <NumberAnimation
                              endNumber={10.98}
                              duration={5000}
                              decimalPlaces={2}
                            />
                          ) : (
                            "10.98"
                          )}{" "}
                          $AID
                        </div>
                        <div className="text-white text-opacity-40 text-xs font-medium leading-5 grow whitespace-nowrap">
                          ~44.65 USD
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <span className="  card bg-white bg-opacity-10  items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex max-w-[543px] flex-col !px-3 sm:!px-8 !py-3 sm:!py-4 rounded-2xl border-solid max-md:px-5">
            <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
              Earning
            </div>
            <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
              Our protocol will have high end GPus to average{" "}
            </div>
            <div className="justify-center mt-0 sm:mt-6 max-md:max-w-full">
              <div className="gap-5 sm:flex grid grid-cols-2   max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12  max-md:w-full max-md:ml-0">
                  <div className="justify-center max-h-[200px] sm:max-h-auto items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                    <div
                      className="h-full max-h-[200px] sm:max-h-full w-full bg-center bg-cover relative flex items-center justify-between rounded-lg"
                      style={{ backgroundImage: "url('bgcurr.png')" }}
                    >
                      <img
                        src="flower2.png"
                        className="w-[80%] mx-auto sm:max-h-auto sm:-mt-10 mt-0 h-auto md:w-30 md:h-42 z-10 pb-20 pl-4 pt-[10px] pr-[15px]"
                      />
                      <div className="absolute w-full bottom-0 sm:bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span>
                          <p className="text-xs m-0 text-white text-opacity-50">
                            Unpaid $AID
                          </p>

                          <p className="sm:text-xl text-[1rem] m-0 text-white">
                            {isInView ? (
                              <NumberAnimation
                                endNumber={12.98}
                                duration={5000}
                                decimalPlaces={2}
                              />
                            ) : (
                              "12.98"
                            )}{" "}
                            $AID
                          </p>
                          <p className="text-xs m-0 text-white text-opacity-50">
                            -24.65 USD
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                    <div
                      className="h-full w-full bg-center bg-cover relative flex items-center justify-between rounded-lg"
                      style={{ backgroundImage: "url('bgface.png')" }}
                    >
                      <img
                        src="facey.png"
                        className="w-[80%] mx-auto sm:-mt-10 mt-0  h-auto md:w-30 md:h-42 z-10 pb-20 pl-4 pt-[10px] pr-[15px]"
                      />

                      <div className="absolute w-full bottom-0 sm:bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <span>
                          <p className="text-xs m-0 text-white text-opacity-50">
                            Expected Earning
                          </p>

                          <p className="sm:text-xl text-[1rem]  m-0">
                            {isInView ? (
                              <NumberAnimation
                                endNumber={50.98}
                                duration={5000}
                                decimalPlaces={2}
                              />
                            ) : (
                              "50.98"
                            )}{" "}
                            $AID
                          </p>
                          <p className="text-xs m-0 text-white text-opacity-50">
                            -100.65 USD
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="justify-center self-stretch w-full gap-5 mt-5 px-0 sm:px-5 max-md:max-w-full">
        <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div
            className="card mb-5 sm:mb-0 flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
            style={{ backgroundImage: "url('repscorebg.png')" }}
          >
            <span className="justify-center  h-fit items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full px-8 py-2 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-extrabold leading-7 tracking-normal whitespace-nowrap">
                Reputation Score
              </div>

              <div
                className="mx-auto"
                style={{
                  width: "100%",
                  height: "140px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="golla.png"
                  className="mx-auto"
                  style={{
                    position: "absolute",
                    width: "290px",
                    height: "90%",
                    zIndex: "2",

                    paddingBottom: "45px",
                    paddingLeft: "215px",
                    paddingTop: "60px",
                    paddingRight: "50px",
                  }}
                />
                <img
                  className="mx-auto"
                  src="golla2.png"
                  style={{
                    position: "absolute",
                    width: "250px",
                    height: "300px",
                    zIndex: "1",

                    paddingBottom: "0px",
                    paddingLeft: "50px",
                    paddingTop: "100px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "70px",
                    left: "120px",
                    color: "white",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <p
                      style={{ fontSize: "30px", margin: "0", color: "white" }}
                    >
                      {isInView ? (
                        <NumberAnimation
                          endNumber={68}
                          duration={5000}
                          decimalPlaces={0}
                        />
                      ) : (
                        "60"
                      )}{" "}
                      %
                    </p>
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "115px",
                    left: "100px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100px",
                  }}
                >
                  <button
                    className="bg-emerald-300 bg-opacity-10 text-emerald-300 border-solid border-emerald-300 border-opacity-10"
                    style={{
                      borderRadius: "20px",
                      padding: "2px 5px",
                      fontSize: "8px",
                    }}
                  >
                    Upline 🔼
                  </button>
                  <button
                    className="bg-red-500 bg-opacity-10 text-red-400 border-solid border-red-500 border-opacity-30"
                    style={{
                      borderRadius: "20px",
                      padding: "2px 5px",
                      fontSize: "8px",
                    }}
                  >
                    Downline ▼
                  </button>
                </div>
              </div>
            </span>
          </div>
          <div className="mb-5 sm:mb-0 card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex w-full grow flex-col mx-auto px-8 py-2 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                Bandwidth
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2">
                Our protocol will have high end GPus to average{" "}
              </div>
              <div className="items-stretch flex justify-between gap-2 mt-6">
                <span className="items-stretch border bg-emerald-300 bg-opacity-10 flex grow basis-[0%] flex-col pl-4 pr-14 py-2 rounded-2xl border-solid border-emerald-300 border-opacity-10 max-md:pr-5">
                  <div className="text-emerald-300 text-center text-xs font-medium leading-4 whitespace-nowrap">
                    Download ▼
                  </div>
                  <div className="text-emerald-300 text-center text-xl sm:text-2xl font-bold leading-7 whitespace-nowrap mt-1">
                    {isInView ? (
                      <NumberAnimation
                        endNumber={10}
                        duration={5000}
                        decimalPlaces={0}
                      />
                    ) : (
                      "10"
                    )}
                    mbps
                  </div>
                </span>
                <span className="items-stretch border bg-red-500 bg-opacity-10 flex grow basis-[0%] flex-col pl-6 pr-11 py-2 rounded-2xl border-solid border-red-500 border-opacity-30 max-md:px-5">
                  <div className="text-red-400 text-center text-xs font-medium leading-4 whitespace-nowrap">
                    Download ▼
                  </div>
                  <div className="text-red-400 text-center text-xl sm:text-2xl font-bold leading-7 whitespace-nowrap mt-1">
                    {isInView ? (
                      <NumberAnimation
                        endNumber={10}
                        duration={5000}
                        decimalPlaces={0}
                      />
                    ) : (
                      "10"
                    )}
                    mbps
                  </div>
                </span>
              </div>
            </span>
          </div>
          <div className=" card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full px-8 py-2 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                My Income
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2">
                Our protocol will have high end GPus to average{" "}
              </div>

              <div
                style={{
                  marginTop: "10px",
                  backgroundImage: "url('box1.png')",
                  width: "100%",
                  height: "70px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="knapsack.png"
                  style={{
                    width: "100px",
                    height: "80px",
                    marginRight: "auto",
                    zIndex: "1",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "60px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <span>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "10px",
                      }}
                    >
                      Total Income
                    </p>
                    <p style={{ color: "white", fontSize: "16px" }}>
                      {isInView ? (
                        <NumberAnimation
                          endNumber={123.98}
                          duration={5000}
                          decimalPlaces={2}
                        />
                      ) : (
                        "123.98"
                      )}{" "}
                      USD
                    </p>
                  </span>
                </div>
                <p
                  style={{
                    position: "absolute",
                    left: "120px",
                    top: "65%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <img
                    src="10img.png"
                    style={{
                      width: "100px",
                      height: "65px",
                      zIndex: "1",
                      paddingRight: "2px",
                      paddingLeft: "10px",
                    }}
                  />
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Earning;
