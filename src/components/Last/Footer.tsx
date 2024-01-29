import React from "react";

const Footer = () => {
  return (
    <div className="items-center flex flex-col justify-center  py-12 max-md:px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10">
        <div className="justify-between max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col items-start max-md:max-w-full max-md:mt-10">
                <span className="items-stretch flex gap-2">
                  <img
                    loading="lazy"
                    src="/logosvg.svg"
                    className="aspect-w-16 aspect-h-9 h-9"
                    aria-label="Logo"
                  />
                </span>
                <div className="text-white text-opacity-70 text-xl font-[450] leading-8 tracking-tighter self-stretch mt-5 max-md:max-w-full">
                  To get started, sign up on our platform. You'll gain access to
                  our resources, including datasets and GPU power, and can begin
                  developing and deploying your AI models.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex gap-0 my-auto max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <span className="justify-between items-stretch flex gap-3.5 px-5 py-3.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f5cd551d0b7705b9e77aed1229678406ab3bb664ec986eefb3f0d0e31805104?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white gradient-hover text-center text-2xl font-[450] leading-9 tracking-tight self-center my-auto">
                    Linkedin
                  </div>
                </span>
                <span className="justify-between items-stretch flex gap-3 px-5 py-3.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1d952e339bcfc5f13d22317405db05d50fcde28f12b06d64080216eb74bd99d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="aspect-[1.04] object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white gradient-hover text-center text-2xl font-[450] leading-9 tracking-tight self-center grow whitespace-nowrap my-auto">
                    Prev. Twitter
                  </div>
                </span>
                <span className="justify-between items-stretch flex gap-3.5 px-5 py-3.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df5ff1adc20f457ffb651b278c47191a0f7b0a9c5a2f748901829ea7ec081774?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white gradient-hover text-center text-2xl font-[450] leading-9 tracking-tight self-center my-auto">
                    Telegram
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 shrink-0 h-px mt-12 max-md:max-w-full max-md:mt-10" />
        <span className="justify-between items-stretch flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-xs font-medium leading-5 tracking-normal">
            Copyright © 2024 <span className="font-bold">AiDocker</span>.
          </div>
          <span className="items-stretch flex justify-between gap-5">
            <div className="text-white text-xs font-medium leading-5 tracking-normal grow whitespace-nowrap">
              Media Kit
            </div>
            <div className="text-white text-xs font-medium leading-5 tracking-normal">
              Terms of service
            </div>
            <div className="text-white text-xs font-medium leading-5 tracking-normal grow whitespace-nowrap">
              Privacy Policy
            </div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
