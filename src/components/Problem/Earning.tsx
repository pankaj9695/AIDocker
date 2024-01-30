"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { url } from "inspector";

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
      className="justify-center items-center self-stretch flex flex-col mt-20"
    >
      
      <div className="self-stretch text-white text-center heading-gradient text-4xl font-bold leading-[56px] tracking-tighter w-full mt-1.5 max-md:max-w-full">
        Monetize Your AI Innovations and Contributions
      </div>
      <div className="self-stretch text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter w-full mt-1 max-md:max-w-full">
        AI Enthusiasts can earn revenue, making AiDocker a mutually beneficial
        ecosystem.
      </div>
      
      <div className=" h-fit self-stretch mt-12 w-full">
        <div className="gap-5 flex  justify-center max-md:flex-col px-5  max-md:items-stretch max-md:gap-0">
          <div className=" bg-white mb-6 md:mb-0 bg-opacity-10 rounded-2xl flex-col items-stretch w-fit max-md:w-full max-md:ml-0">
            <span className="items-start mb-0 h-fit border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex flex-col w-full px-8 py-4 rounded-2xl border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
              <div className="self-stretch text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal max-md:max-w-full">
                Payout
              </div>
              <div className="self-stretch text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2 max-md:max-w-full">
                Our protocol will have high end GPus to average{" "}
              </div>
              
              <div style={{ marginTop: '10px', backgroundImage: "url('box1.png')", width: '100%', height: '90px', position: 'relative', display: 'flex', alignItems: 'center', borderRadius: '15px', justifyContent: 'space-between' }}>
                <img src="knapsack.png" style={{ width: '150px', height: '110px', marginRight: 'auto', zIndex: '1' }} />
                <div style={{ position: 'absolute', left: '90px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <span>
                        <p style={{  color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>NextPayout</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>5.98$</p>
                    </span>
                </div>
                <p style={{ position: 'absolute', left: '160px', top: '60%', transform: 'translateY(-50%)',  color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', margin: '0' }}>-23.65 USD</p>
                <img src="timestamp.png" style={{ width: '135px', height: '75px', zIndex: '1', paddingRight: '2px' , paddingLeft:'10px'}} />
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
                          10.98 $AID
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
          <span className="  card bg-white bg-opacity-10  items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex max-w-[543px] flex-col px-8 py-4 rounded-2xl border-solid max-md:px-5">
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
                    

                      <div style={{ backgroundImage: "url('bgcurr.png')", width: '100%', height: '140px', position: 'relative', display: 'flex', alignItems: 'center', borderRadius: '15px', justifyContent: 'space-between' }}>
                          <img src="flower2.png" style={{ width: '140px', height: '190px', zIndex: '1', paddingBottom: '80px', paddingLeft: '15px', paddingTop:'2px' }} />
                          <div style={{ position: 'absolute', top: '80px', left: '35px',  textAlign:'center', alignItems:'center'}}>
                              <span>
                              <p style={{ fontSize: '10px', margin: '0', color: 'rgba(255, 255, 255, 0.5)' }}>Unpaid $AID</p>

                                  <p style={{ fontSize: '18px', margin: '0', color: 'white' }}>12.98 $AID</p>
                                  <p style={{ fontSize: '10px', margin: '0',  color: 'rgba(255, 255, 255, 0.5)' }}>-24.65 USD</p>
                              </span>
                          </div>
                      </div>

                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-center self-stretch border backdrop-blur-[34px] flex flex-col aspect-square w-full rounded-2xl border-solid border-white border-opacity-10 max-md:mt-5">
                    

                        <div style={{ backgroundImage: "url('bgface.png')", width: '100%', height: '140px', position: 'relative', display: 'flex', alignItems: 'center', borderRadius: '15px', justifyContent: 'space-between' }}>
                          <img src="facey.png" style={{ width: '130px', height: '190px', zIndex: '1', paddingBottom: '80px', paddingLeft: '15px', paddingTop:'2px' }} />
                          <div style={{ position: 'absolute', top: '80px', left: '35px', color: 'white' , textAlign:'center', alignItems:'center'}}>
                              <span>
                                  <p style={{ fontSize: '10px', margin: '0',  color: 'rgba(255, 255, 255, 0.5)' }}>Expected Earning</p>
                                  <p style={{ fontSize: '18px', margin: '0', color: 'white' }}>50.98 $AID</p>
                                  <p style={{ fontSize: '10px', margin: '0',  color: 'rgba(255, 255, 255, 0.5)' }}>-100.65 USD</p>
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
      <div className="justify-center self-stretch w-full  mt-5 px-5 max-md:max-w-full" >
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0" style={{ backgroundImage: "url('repscorebg.png')"}}>
            <span className="justify-center h-fit items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full px-8 py-2 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                Reputation Score
              </div>
              
              <div style={{ width: '100%', height: '140px', position: 'relative', display: 'flex', alignItems: 'center', borderRadius: '15px', justifyContent: 'space-between' }}>
                <img src="golla.png" style={{ position: 'absolute', width: '260px', height: '90%', zIndex: '2', paddingBottom: '48px', paddingLeft: '188px', paddingTop:'58px', paddingRight:'50px' }} />
                <img src="golla2.png" style={{ position: 'absolute', width: '220px', height: '300px', zIndex: '1', paddingBottom: '0px', paddingLeft: '30px', paddingTop:'100px' }} />
                <div style={{ position: 'absolute', top: '70px', left: '100px', color: 'white' , textAlign:'center', alignItems:'center'}}>
                    <span>
                        <p style={{ fontSize: '30px', margin: '0', color: 'white' }}>68%</p>
                        {/* <p style={{ fontSize: '10px', margin: '0', color: 'white' }}>-100.65 USD</p> */}
                    </span>
                </div>
                  <div style={{ position: 'absolute', top: '115px', left: '75px', display: 'flex', justifyContent: 'space-between', width: '100px' }}>
                      <button  className= "bg-emerald-300 bg-opacity-10 text-emerald-300 border-solid border-emerald-300 border-opacity-10" style={{ borderRadius: '20px',  padding: '2px 5px', fontSize: '8px' }}>Upline🔼</button>
                      <button className= "bg-red-500 bg-opacity-10 text-red-400 border-solid border-red-500 border-opacity-30" style={{ borderRadius: '20px', padding: '2px 5px', fontSize: '8px' }}>Downline▼</button>
                      

                  </div>
              </div>

            </span>
            
          </div>
          <div className=" card flex bg-white bg-opacity-10 rounded-2xl flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
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
                  <div className="text-emerald-300 text-center text-2xl font-bold leading-7 whitespace-nowrap mt-3">
                    10mbps
                  </div>
                </span>
                <span className="items-stretch border bg-red-500 bg-opacity-10 flex grow basis-[0%] flex-col pl-6 pr-11 py-2 rounded-2xl border-solid border-red-500 border-opacity-30 max-md:px-5">
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
            <span className="justify-center items-stretch border border-[color:var(--Outline-1,rgba(255,255,255,0.08))] backdrop-blur-[30px] flex grow flex-col w-full px-8 py-2 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
              <div className="text-white text-opacity-90 text-2xl font-bold leading-7 tracking-normal whitespace-nowrap">
                My Income
              </div>
              <div className="text-white text-opacity-50 text-base font-[450] leading-6 tracking-normal mt-2">
                Our protocol will have high end GPus to average{" "}
              </div>
              

              <div style={{ marginTop: '10px', backgroundImage: "url('box1.png')", width: '100%', height: '70px', position: 'relative', display: 'flex', alignItems: 'center', borderRadius: '15px', justifyContent: 'space-between' }}>
                <img src="knapsack.png" style={{ width: '100px', height: '80px', marginRight: 'auto', zIndex: '1' }} />
                <div style={{ position: 'absolute', left: '60px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <span>
                        <p style={{  color: 'rgba(255, 255, 255, 0.5)', fontSize: '10px' }}>Total Income</p>
                        <p style={{ color: 'white', fontSize: '16px' }}>123.98 USD</p>
                    </span>
                </div>
                <p style={{ position: 'absolute', left: '120px', top: '65%', transform: 'translateY(-50%)'}}>
                <img src="10img.png" style={{ width: '100px', height: '65px', zIndex: '1', paddingRight: '2px' , paddingLeft:'10px'}} />
                </p>
                
              </div>

            </span>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Earning;
