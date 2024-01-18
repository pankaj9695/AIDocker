import React from "react";

const Hero = () => {
  return (
    <section className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:px-5">
      <div className="w-full max-w-[1216px] mt-8 mb-3.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-1.5 items-start max-md:max-w-full">
              <h1 className="text-white text-opacity-90 text-7xl font-bold leading-[81px] tracking-tighter bg-clip-text self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-10">
                <span className="font-medium">Open source for </span>
                <span className="font-medium text-gradient  text-6xl leading-[72.4020767211914px]">
                  {" "}
                  decentralized{" "}
                </span>
                <span className="font-medium">AImodels.</span>
              </h1>
              <p className="self-stretch text-white text-opacity-70 text-xl font-[450] leading-8 tracking-tighter mt-5 max-md:max-w-full">
                In this beginning era of a.i which is future of technology,
                computational for models training and our vision is to make a
                marketplace{" "}
              </p>
              <a
                href="#"
                className="text-neutral-900 text-base font-medium leading-5 tracking-tight whitespace-nowrap justify-center items-stretch shadow-sm bg-white mt-5 px-4 py-3.5 rounded-[38.3px]"
              >
                Join Whitelist
              </a>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50fddde93b184b012f50a11add670a6c7037c9e8c2f0c9d7e7a85478d9de10d?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="aspect-[1.52] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
