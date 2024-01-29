import React from "react";

const roadMapDataQ423 = [
  {
    title: "Research and Case Study",
    description:
      "Conducting in-depth research and analysis to inform the development strategy and validate the project concept.",
  },
  {
    title: "Conceptualization",
    description:
      "Refining the project idea, establishing clear goals, and outlining the scope of the AiDocker platform.",
  },
  {
    title: "Initial Development",
    description:
      "Starting the primary development phase, focusing on building the core features and infrastructure of AiDocker.",
  },
  {
    title: "Project Funded by Co-Founders",
    description:
      "Securing initial funding from the co-founders to kickstart the project and support early-stage development.",
  },
  {
    title: "Minimum Viable Product (MVP)",
    description:
      "Developing and finalizing the MVP to demonstrate the basic functionality and potential of AiDocker.",
  },
  {
    title: "Internal Testing",
    description:
      "Conducting thorough internal testing of the MVP to ensure reliability, efficiency, and readiness for the next stages of development.",
  },
];

const roadMapDataQ124P1 = [
  {
    title: "Social Media Engagement",
    description:
      "Boosting online presence and community engagement through targeted social media strategies.",
  },
  {
    title: "Workshop for Community Growth",
    description:
      "Organizing educational and interactive workshops to grow and engage the AiDocker community.",
  },
  {
    title: "Web3 Partnerships and Integrations",
    description:
      "Establishing key partnerships and integrations with Web3 ecosystems to enhance platform capabilities.",
  },
  {
    title: "Pre-Seed Round",
    description:
      "Securing initial funding to support early-stage development and operations.",
  },
  {
    title: "Advisors Onboarding",
    description:
      "Bringing in expert advisors to guide the strategic direction of AiDocker.",
  },
];

const roadMapDataQ124P2 = [
  {
    title: "Private Round",
    description:
      "Raising funds through private investment rounds to further support development.",
  },
  {
    title: "Beta Testing (GPU Marketplace)",
    description:
      "Conducting beta tests of the GPU marketplace to refine features and user experience.",
  },
  {
    title: "Initial DEX Offering (I.D.O)",
    description:
      "Launching the public sale of tokens to accelerate project funding.",
  },
  {
    title: "Early Partners Onboarding",
    description:
      "Collaborating with early partners to broaden the network and gain insights.",
  },
  {
    title: "CEX/DEX Listing",
    description:
      "Listing on Centralized and Decentralized Exchanges for enhanced liquidity and accessibility.",
  },
  {
    title: "Staking Pools Opening",
    description:
      "Introducing staking pools to incentivize and reward community participation.",
  },
];

const roadMapDataQ124P3 = [
  {
    title: "Marketing Campaigns",
    description:
      "Implementing comprehensive marketing campaigns to increase platform visibility and user adoption.",
  },
  {
    title: "Dataset Marketplace Launch",
    description:
      "Rolling out a marketplace for buying, selling, or exchanging datasets.",
  },
  {
    title: "Dataset Monitoring Telegram Bot",
    description:
      "Developing a Telegram bot for real-time dataset monitoring and updates.",
  },
  {
    title: "Expanding Blockchain Integrations",
    description:
      "Broadening the scope of blockchain integrations to enhance platform functionality and user experience.",
  },
];
const Roadmap = () => {
  return (
    <section className="items-start flex flex-col">
      {/* <div className="text-xl font-medium leading-4 tracking-widest uppercase heading-gradient self-center whitespace-nowrap mt-32 max-md:mt-10">
        Roadmap
      </div> */}
      <div className="self-stretch text-white heading-gradient mt-32 text-center text-4xl font-bold leading-[56px] tracking-tighter w-full  max-md:max-w-full">
        Mapping the Future of AiDocker
      </div>
      <div className="text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        Our roadmap is a testament to our commitment to growth and innovation.
      </div>
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee8de55f65af4fed3fa473b19f2fe1645155816960469750283d27344b53df1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="aspect-[134.44] object-contain object-center w-full items-start overflow-hidden self-stretch mt-16 max-md:max-w-full max-md:mt-10"
      /> */}
      <div className="self-stretch w-full mt-16 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
            <span className="items-stretch blur-background-orange text-gray-400 border-[color:var(--stroke,rgba(255,255,255,0.04))] backdrop-blur-md flex w-full grow flex-col mx-auto p-6 rounded-3xl border-[3px] border-solid max-md:mt-5 max-md:px-5">
              <div className="justify-between items-stretch flex gap-5">
                <span className="items-stretch flex justify-between gap-5">
                  <div className="text-white text-opacity-70 text-xl font-medium leading-8 tracking-tighter">
                    Q4
                  </div>
                  <div className="text-white text-opacity-70 text-xl font-medium leading-8 tracking-tighter">
                    2023
                  </div>
                </span>
                <span className="text-red-500 text-xs font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-black bg-opacity-30 self-center my-auto px-2 py-1 rounded-[40px]">
                  Completed
                </span>
              </div>
              <div className="bg-white bg-opacity-10 shrink-0 h-px mt-6" />

              {roadMapDataQ423.map((item, index) => (
                <div key={index}>
                  {/* <div className="text-white text-opacity-50 font-medium leading-5 tracking-normal whitespace-nowrap">
                    {item.title}
                  </div> */}
                  <div className="text-white text-opacity-60 text-base font-[450] leading-6 tracking-normal mt-3">
                    {item.title}
                  </div>
                  {/* <div className="text-white text-base font-[450] leading-6 tracking-normal mt-3 mb-2">
                    {item.description}
                  </div> */}
                </div>
              ))}
              {/* <div>
                <span className="text-white shrink-0 h-px mt-6">
                  Internal Testing:
                </span>
                <span>
                  Conducting thorough internal testing of the MVP to ensure
                  reliability, efficiency, and readiness for the next stages of
                  development.
                </span>
              </div> */}
            </span>
          </div>
          <div className="flex flex-col blur-background-white text-gray-400 items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch border-[color:var(--stroke,rgba(255,255,255,0.04))] backdrop-blur-md flex grow flex-col w-full px-6 py-7 rounded-3xl border-[3px] border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                <span className="items-stretch flex justify-between gap-5">
                  <div className="text-white text-opacity-70 text-xl font-medium leading-8 tracking-tighter">
                    Q1
                  </div>
                  <div className="text-white text-opacity-70 text-xl font-medium leading-8 tracking-tighter">
                    2022
                  </div>
                </span>
                <span className="text-white text-opacity-50 text-xs font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-black bg-opacity-30 self-center my-auto px-2 py-1 rounded-[40px]">
                  Not Started
                </span>
              </div>
              <div className="bg-white bg-opacity-10 shrink-0 h-px mt-6 max-md:max-w-full" />
              <div className="mt-6 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <span className="items-stretch flex grow flex-col max-md:mt-6">
                      <div className="text-white text-opacity-50 text-xs font-medium leading-5 tracking-normal whitespace-nowrap">
                        Plase 1.0
                      </div>
                      {roadMapDataQ124P1.map((item, index) => (
                        <div key={index}>
                          <div className="text-white text-base font-[450] leading-6 tracking-normal mt-3">
                            {item.title}
                          </div>
                          {/* <div className="text-base font-[450] leading-6 tracking-normal bg-clip-text bg-[linear-gradient(155deg,rgba(255,255,255,0.40)_44.35%,rgba(182,205,255,0.40)_99.75%)] mt-3">
                            {item.description}
                          </div> */}
                        </div>
                      ))}
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <span className="items-stretch flex grow flex-col max-md:mt-6">
                      <div className="text-white text-opacity-50 text-xs font-medium leading-5 tracking-normal whitespace-nowrap">
                        Plase 2.0
                      </div>
                      {roadMapDataQ124P2.map((item, index) => (
                        <div key={index}>
                          <div className="text-white text-base font-[450] leading-6 tracking-normal mt-3">
                            {item.title}
                          </div>
                          {/* <div className="text-base font-[450] leading-6 tracking-normal bg-clip-text bg-[linear-gradient(155deg,rgba(255,255,255,0.40)_44.35%,rgba(182,205,255,0.40)_99.75%)] mt-3">
                            {item.description}
                          </div> */}
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col blur-background-white text-gray-400 items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-start self-stretch border-[color:var(--stroke,rgba(255,255,255,0.04))] backdrop-blur-md flex w-full grow flex-col mx-auto pt-6 pb-12 px-6 rounded-3xl border-[3px] border-solid max-md:mt-5 max-md:px-5">
              <span className="items-center flex justify-between gap-5 self-start">
                <div className="text-white text-opacity-70 text-xl font-medium leading-8 tracking-tighter self-stretch">
                  Q2
                </div>
                <div className="text-white text-opacity-70 text-xl font-medium leading-8 tracking-tighter self-stretch">
                  2022
                </div>
                <span className="text-white text-opacity-50 text-xs font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-black bg-opacity-30 z-[1] grow my-auto px-2 py-1 rounded-[40px]">
                  Not Started
                </span>
              </span>
              <div className="bg-white bg-opacity-10 self-stretch shrink-0 h-px mt-6" />
              {roadMapDataQ124P3.map((item, index) => (
                <div key={index}>
                  <div className="text-white text-base font-[450] leading-6 tracking-normal mt-3">
                    {item.title}
                  </div>
                  {/* <div className="text-base font-[450] leading-6 tracking-normal bg-clip-text bg-[linear-gradient(155deg,rgba(255,255,255,0.40)_44.35%,rgba(182,205,255,0.40)_99.75%)] mt-3">
                    {item.description}
                  </div> */}
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
