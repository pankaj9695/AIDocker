import React, { useState } from "react";
import MobileNav from "./MobileNav";

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sm:hidden p-2">
      <div className="justify-between bg-[#232323] rounded-[48px] items-stretch flex max-w-full gap-5 p-3 ">
        <span className="items-stretch flex justify-between gap-1.5">
          <img
            loading="lazy"
            src="/logosvg.svg"
            className="aspect-w-16 aspect-h-9 h-7"
            aria-label="Logo"
          />
          {/* <div className="text-white text-base font-bold leading-6 tracking-tight grow whitespace-nowrap">
            AiDocker
          </div> */}
        </span>
        <button onClick={() => setShowMenu(true)}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/724d409b0ba893445d23963bd8b4d00603e5b82b41af8efca47312529beeefec?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
        </button>
      </div>
      {showMenu && <MobileNav showMenu setShowMenu={setShowMenu} />}
    </div>
  );
};

export default MobileHeader;
