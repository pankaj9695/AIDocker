import React from "react";
import Opportunity from "./Problem/Opportunity";
import Solution from "./Problem/Solution";
import Earning from "./Problem/Earning";

const Test = () => {
  return (
    <div className="justify-center items-center flex flex-col px-16 py-12 max-md:px-5">
      <span className="flex w-full max-w-[1200px] flex-col mt-16 mb-12 max-md:max-w-full max-md:my-10">
        <Opportunity />
        <Solution />
        <div className="justify-center self-stretch mt-5 max-md:max-w-full">
          <Earning />
        </div>
      </span>
    </div>
  );
};
export default Test;
