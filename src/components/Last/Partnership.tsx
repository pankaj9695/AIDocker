import React from "react";
import Image from "next/image";

const Partnership = () => {
  return (
    <span className="justify-center items-center flex flex-col mt-32 p-8 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-xs font-medium leading-4 tracking-widest uppercase heading-gradient whitespace-nowrap">
        Partnership
      </div>
      <div className="justify-center items-center self-stretch flex flex-col mt-4 px-16 max-md:max-w-full max-md:px-5">
        <div className="flex w-[627px] max-w-full flex-col items-stretch">
          <div className="flex justify-between gap-5 p-4 items-start max-md:max-w-full max-md:flex-wrap">
            <span>
              <Image
                src={"/Vectorpart1.png"}
                height={"120"}
                width={"120"}
                alt="logo"
              />
            </span>
            <span>
              <Image
                src={"/Vectorpart2.png"}
                height={"120"}
                width={"120"}
                alt="logo"
              />
            </span>
            <span>
              <Image
                src={"/Vectorpart3.png"}
                height={"120"}
                width={"120"}
                alt="logo"
              />
            </span>
            <span>
              <Image
                src={"/Vectorpart4.png"}
                height={"120"}
                width={"120"}
                alt="logo"
              />
            </span>
          </div>
          <span className="justify-center items-center bg-zinc-900 self-center flex gap-4 mt-5 p-2 rounded-[64px]">
            <div className="text-white text-opacity-70 px-3 text-center text-xs font-semibold leading-5 tracking-normal grow whitespace-nowrap my-auto">
              Powered by
            </div>
            <span className="justify-between items-stretch bg-black self-stretch flex gap-0 pr-4 rounded-3xl">
              <span>
                <Image
                  src={"/Vectorsolana.png"}
                  height={"40"}
                  width={"40"}
                  alt="logo"
                />
              </span>
              <div className="text-white text-xl font-bold leading-8 tracking-tight self-center grow whitespace-nowrap my-auto">
                Solana
              </div>
            </span>
          </span>
        </div>
      </div>
    </span>
  );
};

export default Partnership;
