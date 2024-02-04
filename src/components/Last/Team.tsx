import React from "react";

const Team = () => {
  return (
    <section
      id="team"
      className="justify-center items-center self-stretch flex flex-col"
    >
      {/* <div className="text-xs font-medium leading-4 tracking-widest uppercase heading-gradient self-center whitespace-nowrap mt-32 max-md:mt-10">
        Our Team
      </div> */}
      <div className="self-stretch mt-16 sm:mt-32 mb-4  text-white text-center text-3xl sm:text-4xl font-bold sm:leading-[56px] leading-10 tracking-tighter w-full max-md:max-w-full">
      <div className="text-xs  font-medium leading-4 tracking-widest uppercase max-md:max-w-full">
              <span className="heading-gradient ">Team</span>
            </div>
        Meet the Founding Team
      </div>
      {/* <div className="self-stretch text-white text-xl font-medium leading-8 tracking-tighter w-full mt-8 max-md:max-w-full">
        Founding team member
      </div> */}
      <div className="justify-center flex mx-auto self-stretch bg-white bg-opacity-10 mt-4 w-full rounded-2xl sm:w-[70%]">
        <div className="gap-0 flex overflow-x-auto  max-md:items-stretch max-md:gap-0  ">
          <div className="flex flex-col items-stretch w-4/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch backdrop-blur-md flex grow flex-col px-3 py-2 border-r-[#3d3d3d] border-r-opacity-10 border-r border-solid">
              <img
                loading="lazy"
                src="saurav.png"
                className="aspect-[1.14] object-contain object-center w-full overflow-hidden "
              />
              <span className="items-stretch flex flex-col p-4">
                <div className="text-white text-xl font-medium leading-8 tracking-tighter whitespace-nowrap">
                  Saurav
                </div>
                <div className="text-white text-opacity-60 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-1.5">
                  Co-Founder
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-4/12  max-md:w-full max-md:ml-0">
            <div className="items-stretch backdrop-blur-md flex grow flex-col px-3 py-2 border-r-[#3d3d3d] border-r-opacity-10 border-r border-solid">
              <img
                loading="lazy"
                src="ashok.png"
                className="aspect-[1.14] object-contain object-center w-full overflow-hidden"
              />
              <span className="items-stretch flex flex-col p-4">
                <div className="text-white text-xl font-medium leading-8 tracking-tighter whitespace-nowrap">
                  Ashok
                </div>
                <div className="text-white text-opacity-60 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-1.5">
                  Co-founder
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-4/12  max-md:w-full max-md:ml-0">
            <div className="items-stretch backdrop-blur-md flex grow flex-col px-3 py-2 ">
              <img
                loading="lazy"
                src="xinthi.png"
                className="aspect-[1.14] object-contain object-center w-full overflow-hidden"
              />
              <span className="items-stretch flex flex-col p-4">
                <div className="text-white text-xl font-medium leading-8 tracking-tighter whitespace-nowrap">
                  Xinthi
                </div>
                <div className="text-white text-opacity-60 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-1.5">
                  CMO
                </div>
              </span>
            </div>
          </div>
          {/* <div className="flex flex-col items-stretch w-3/12  max-md:w-full max-md:ml-0">
            <div className="items-stretch backdrop-blur-md flex grow flex-col px-3 py-2 rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33e1db9c82078ae038ef9426d8a5d7a9cf6873608f428878ed843dd9504d51f?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-[1.14] object-contain object-center w-full overflow-hidden"
              />
              <span className="items-stretch flex flex-col p-4">
                <div className="text-white text-xl font-medium leading-8 tracking-tighter whitespace-nowrap">
                  Name Placeholder
                </div>
                <div className="text-white text-opacity-60 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-1.5">
                  Founder, CEO
                </div>
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="self-stretch text-white text-xl font-medium leading-8 tracking-tighter w-full mt-4 max-md:max-w-full">
        Advisory
      </div> */}
      {/* <div className="justify-center self-stretch backdrop-blur-[14px] bg-white bg-opacity-10 w-full mt-4 px-5 rounded-2xl max-md:max-w-full">
        <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="justify-between items-center flex grow gap-5 p-6 border-r-[#3d3d3d] border-r-opacity-10 border-r border-solid max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68728cf1a1b739759ab29de4c073a3bcf4c490fa2788f29d578786aa6e9a783b?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-bold leading-6 tracking-tight whitespace-nowrap">
                  Robert Leshner
                </div>
                <div className="text-white text-opacity-70 text-xs font-[450] leading-5 tracking-normal mt-1">
                  CEO, Superstate
                  <br />
                  Founder, Compound Labs
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12  max-md:w-full max-md:ml-0">
            <div className="justify-between flex grow gap-5 px-6 py-6 border-r-[#3d3d3d] border-r-opacity-10 border-r border-solid items-start max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
              />
              <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-bold leading-6 tracking-tight whitespace-nowrap">
                  Nitin Gaur
                </div>
                <div className="text-white text-opacity-70 text-xs font-[450] leading-5 tracking-normal mt-1">
                  Co-founder & President, Shardeum, Founder - WazirX
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12  max-md:w-full max-md:ml-0">
            <div className="justify-between flex grow gap-5 px-6 py-6 border-r-[#3d3d3d] border-r-opacity-10 border-r border-solid items-start max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b838b3227d34567102d147c926f57744b6c95c2d7615c35ddfe52201dc7f345?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
              />
              <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-bold leading-6 tracking-tight whitespace-nowrap">
                  Nitin Gaur
                </div>
                <div className="text-white text-opacity-70 text-xs font-[450] leading-5 tracking-normal mt-1">
                  Co-founder & President, Shardeum, Founder - WazirX
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12  max-md:w-full max-md:ml-0">
            <div className="justify-between flex grow gap-5 px-6 py-6 items-start max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ef5dd1e7c5e1902e96e3988ada0cb2b1b6aff115237bdad086180e3b3423?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
              />
              <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-bold leading-6 tracking-tight whitespace-nowrap">
                  Nischal Shetty
                </div>
                <div className="text-white text-opacity-70 text-xs font-[450] leading-5 tracking-normal mt-1">
                  Co-founder & President, Shardeum, Founder - WazirX
                </div>
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Team;
