"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Earning = () => {
  useEffect(() => {
    // glow effect on the cards
    const cardsContainer = document.getElementById("cards");

    const handleMouseMove = (e: any) => {
      const cards = Array.from(document.getElementsByClassName("card"));
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    if (cardsContainer)
      cardsContainer.addEventListener("mousemove", handleMouseMove);

    // Clean up function
    return () => {
      if (cardsContainer)
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <span
      id="cards"
      className="justify-center items-center self-stretch flex flex-col"
    >
      {/* <div className="text-xs font-medium leading-4 tracking-widest uppercase heading-gradient self-center whitespace-nowrap mt-32 max-md:mt-10">
        Problem and solution
      </div> */}
      <div className="self-stretch text-white text-center heading-gradient text-4xl font-bold leading-[56px] tracking-tighter w-full mt-1.5 max-md:max-w-full">
        Monetize Your AI Innovations and Contributions
      </div>
      <div className="self-stretch text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        In this beginning era of a.i which is future of technology,
        computational
      </div>
      {/* <div className="justify-center self-stretch w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <span className="items-start border border-[color:var(--Outline-1,rgba(255,255,255,0.04))] backdrop-blur-[30px] flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="self-stretch text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Payout
              </div>
              <div className="self-stretch text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-[3.7] object-contain object-center w-full items-center border backdrop-blur-[34px] overflow-hidden self-stretch mt-6 rounded-2xl border-solid border-white border-opacity-10 max-md:max-w-full"
              />
              <div className="justify-between items-stretch border backdrop-blur-[30px] self-center flex w-[529px] max-w-full flex-col mt-1.5 pt-2.5 px-4 rounded-2xl border-solid border-white border-opacity-10">
                <div className="justify-between items-center border backdrop-blur-[18px] flex gap-0.5 pl-1.5 pr-4 pt-4 pb-2 rounded-2xl border-solid border-white border-opacity-10 max-md:max-w-full max-md:flex-wrap">
                  <span className="flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-white text-opacity-40 text-lg font-medium leading-5 z-[1] whitespace-nowrap">
                      Last Payout (05 Jan 2024)
                    </div>
                    <div className="text-white text-opacity-40 text-lg font-medium leading-5 whitespace-nowrap ml-5 self-start max-md:ml-2.5">
                      Last Payout (05 Jan 2024)
                    </div>
                  </span>
                  <div className="border bg-white bg-opacity-10 self-stretch flex grow basis-[0%] flex-col pl-4 pb-2.5 rounded-3xl border-solid border-white border-opacity-0 items-start">
                    <div className="border bg-white bg-opacity-10 z-[1] flex mt-0 w-full flex-col pr-4 pt-4 pb-2 rounded-3xl border-solid border-white border-opacity-0 items-start">
                      <span className="justify-center items-stretch z-[1] flex gap-4 ml-4 max-md:ml-2.5">
                        <div className="text-white text-opacity-90 text-lg font-medium leading-5 grow whitespace-nowrap">
                          10.98 $AID
                        </div>
                        <div className="text-white text-opacity-40 text-lg font-medium leading-5 grow whitespace-nowrap">
                          ~44.65 USD
                        </div>
                      </span>
                      <span className="justify-between items-stretch self-stretch flex gap-4">
                        <div className="text-white text-opacity-90 text-lg font-medium leading-5 grow whitespace-nowrap">
                          10.98 $AID
                        </div>
                        <div className="text-white text-opacity-40 text-lg font-medium leading-5 grow whitespace-nowrap">
                          ~44.65 USD
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.04))] backdrop-blur-[30px] flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Earning
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>
              <div className="justify-center mt-6 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                      <div className="flex-col overflow-hidden relative flex aspect-[0.9703389830508474] items-center px-14 py-9 max-md:px-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae9e86e40672f8486b5123d679ffc75ea9f6e2c29de694a5b13acd652c02b9f2?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative text-white text-opacity-40 text-center text-5xl font-medium leading-[55.2px] whitespace-nowrap max-md:text-4xl">
                          💸
                        </div>
                        <div className="relative self-stretch text-white text-opacity-40 text-center text-xs font-medium leading-4 whitespace-nowrap mt-14 max-md:mt-10">
                          Unpaid $AID
                        </div>
                        <div className="relative text-white text-opacity-90 text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-4">
                          12.98 $AID
                        </div>
                        <div className="relative text-white text-opacity-40 text-xs font-medium leading-4 whitespace-nowrap mt-3.5">
                          ~24.65 USD
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                      <div className="flex-col overflow-hidden relative flex aspect-[0.9745762711864406] w-full items-center px-12 py-9 max-md:px-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative text-white text-opacity-40 text-center text-5xl font-medium leading-[55.2px] whitespace-nowrap max-md:text-4xl">
                          🤑
                        </div>
                        <span className="relative justify-between items-center self-stretch flex gap-1.5 mt-12 px-1 max-md:mt-10">
                          <div className="text-white text-opacity-40 text-center text-xs font-medium leading-4 grow whitespace-nowrap my-auto">
                            Expeted Earning
                          </div>
                          <span className="text-emerald-300 text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch self-stretch aspect-[1.8235294117647058] p-1 rounded-[32px]">
                            24H
                          </span>
                        </span>
                        <div className="relative text-white text-opacity-90 text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-3">
                          50.98 $AID
                        </div>
                        <div className="relative text-white text-opacity-40 text-xs font-medium leading-4 whitespace-nowrap mt-3.5">
                          ~100.65 USD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div> */}
      <div className="justify-center self-stretch mt-20 w-full">
        <div className="gap-5 flex max-md:flex-col px-5  max-md:items-stretch max-md:gap-0">
          <div className="flex bg-white mb-6 md:mb-0  bg-opacity-10 rounded-2xl flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
            <span className="items-start card border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="self-stretch text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Payout
              </div>
              <div className="self-stretch text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/304aa948ab14254d3fbe5a3184082e873b87065858307491824f33473c0bad1a?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-[3.7] object-contain object-center w-full items-center border backdrop-blur-[34px] overflow-hidden self-stretch mt-6 rounded-2xl border-solid border-white border-opacity-10 max-md:max-w-full"
              />
              <div className="justify-between items-stretch border backdrop-blur-[30px] self-center flex w-[529px] max-w-full flex-col mt-1.5 pt-2.5 px-4 rounded-2xl border-solid border-white border-opacity-10">
                <div className="justify-between items-center border backdrop-blur-[18px] flex gap-0.5 pl-1.5 pr-4 pt-4 pb-2 rounded-2xl border-solid border-white border-opacity-10 max-md:max-w-full max-md:flex-wrap">
                  <span className="flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-white text-opacity-40 text-lg font-medium leading-5 z-[1] whitespace-nowrap">
                      Last Payout (05 Jan 2024)
                    </div>
                    {/* <div className="text-white text-opacity-40 text-lg font-medium leading-5 whitespace-nowrap ml-5 self-start max-md:ml-2.5">
                      Last Payout (05 Jan 2024)
                    </div> */}
                  </span>
                  <div className="border bg-white bg-opacity-10 self-stretch flex grow basis-[0%] flex-col pl-4 pb-2.5 rounded-3xl border-solid border-white border-opacity-0 items-start">
                    <div className="border bg-white bg-opacity-10 z-[1] flex mt-0 w-full flex-col pr-4 pt-4 pb-2 rounded-3xl border-solid border-white border-opacity-0 items-start">
                      <span className="justify-center items-stretch z-[1] flex gap-4 ml-4 max-md:ml-2.5">
                        <div className="text-white text-opacity-90 text-lg font-medium leading-5 grow whitespace-nowrap">
                          10.98 $AID
                        </div>
                        <div className="text-white text-opacity-40 text-lg font-medium leading-5 grow whitespace-nowrap">
                          ~44.65 USD
                        </div>
                      </span>
                      {/* <span className="justify-between items-stretch self-stretch flex gap-4">
                        <div className="text-white text-opacity-90 text-lg font-medium leading-5 grow whitespace-nowrap">
                          10.98 $AID
                        </div>
                        <div className="text-white text-opacity-40 text-lg font-medium leading-5 grow whitespace-nowrap">
                          ~44.65 USD
                        </div>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <span className="justify-center  card bg-white bg-opacity-10  items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex max-w-[543px] flex-col p-8 rounded-2xl border-solid max-md:px-5">
            <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
              Earning
            </div>
            <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
              Our protocol will have high end GPus to average{" "}
            </div>
            <div className="justify-center mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                    {/* <div className="flex-col  overflow-hidden relative flex aspect-[0.9703389830508474] items-center px-14 py-9 max-md:px-5">
                     
                      <div className="relative text-white text-opacity-40 text-center text-5xl font-medium leading-[55.2px] whitespace-nowrap max-md:text-4xl">
                        💸
                      </div>
                      <div className="relative self-stretch text-white text-opacity-40 text-center text-xs font-medium leading-4 whitespace-nowrap mt-14 max-md:mt-10">
                        Unpaid $AID
                      </div>
                      <div className="relative text-white text-opacity-90 text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-4">
                        12.98 $AID
                      </div>
                      <div className="relative text-white text-opacity-40 text-xs font-medium leading-4 whitespace-nowrap mt-3.5">
                        ~24.65 USD
                      </div>
                    </div> */}
                    <Image
                      loading="lazy"
                      height={200}
                      width={200}
                      alt="logo"
                      src="/Frame 481809money-2.png"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                    {/* <div className="flex-col overflow-hidden relative flex aspect-[0.9745762711864406] w-full items-center px-12 py-9 max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f90695f5ebb35b565927e87ffb58b24aa04cdfb33b364aec023fe7acfc3eee?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <div className="relative text-white text-opacity-40 text-center text-5xl font-medium leading-[55.2px] whitespace-nowrap max-md:text-4xl">
                        🤑
                      </div>
                      <span className="relative justify-between items-center self-stretch flex gap-1.5 mt-12 px-1 max-md:mt-10">
                        <div className="text-white text-opacity-40 text-center text-xs font-medium leading-4 grow whitespace-nowrap my-auto">
                          Expeted Earning
                        </div>
                        <span className="text-emerald-300 text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch self-stretch aspect-[1.8235294117647058] p-1 rounded-[32px]">
                          24H
                        </span>
                      </span>
                      <div className="relative text-white text-opacity-90 text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-3">
                        50.98 $AID
                      </div>
                      <div className="relative text-white text-opacity-40 text-xs font-medium leading-4 whitespace-nowrap mt-3.5">
                        ~100.65 USD
                      </div>
                    </div> */}
                    <Image
                      loading="lazy"
                      height={200}
                      width={200}
                      alt="logo"
                      src="/Frame 481809money.png"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="justify-center self-stretch w-full  mt-5 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full p-8 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                Reputation Score
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d21c66c77cd4699c6c2a2960bc788b7ef00c8174854d2834da86f8e6ef41fdde?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-[2.09] object-contain object-center w-full overflow-hidden mt-6"
              />
            </span>
          </div>
          <div className=" card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex w-full grow flex-col mx-auto px-8 py-12 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                Bandwidth
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2">
                Our protocol will have high end GPus to average{" "}
              </div>
              <div className="items-stretch flex justify-between gap-2 mt-6">
                <span className="items-stretch border bg-emerald-300 bg-opacity-10 flex grow basis-[0%] flex-col pl-4 pr-14 py-4 rounded-2xl border-solid border-emerald-300 border-opacity-10 max-md:pr-5">
                  <div className="text-emerald-300 text-center text-xs font-medium leading-4 whitespace-nowrap">
                    Download ▼
                  </div>
                  <div className="text-emerald-300 text-center text-2xl font-bold leading-7 whitespace-nowrap mt-3">
                    10mbps
                  </div>
                </span>
                <span className="items-stretch border bg-red-500 bg-opacity-10 flex grow basis-[0%] flex-col pl-6 pr-11 py-4 rounded-2xl border-solid border-red-500 border-opacity-30 max-md:px-5">
                  <div className="text-red-400 text-center text-xs font-medium leading-4 whitespace-nowrap">
                    Download ▼
                  </div>
                  <div className="text-red-400 text-center text-2xl font-bold leading-7 whitespace-nowrap mt-3">
                    10mbps
                  </div>
                </span>
              </div>
            </span>
          </div>
          <div className=" card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full px-8 py-7 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                My Income
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2">
                Our protocol will have high end GPus to average{" "}
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/086f1e7ae6d6f7f30ffcaec3e3487e1cbb012f99674ebf916b188171e5841d26?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-[2.86] object-contain object-center w-full items-center border backdrop-blur-[34px] overflow-hidden mt-6 rounded-2xl border-solid border-white border-opacity-10"
              />
            </span>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Earning;
