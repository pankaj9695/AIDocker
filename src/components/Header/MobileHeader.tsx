import React, { useState } from "react";
import MobileNav from "./MobileNav";

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sm:hidden p-2">
      <div className="justify-between bg-[#232323] rounded-[48px] items-stretch flex max-w-full gap-5 p-5 ">
        <span className="items-stretch flex justify-between gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5bb98dd66ab318e452379acf2438edfffa2644c2dd83bf9c72de04e94d77cd6?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square object-contain object-center w-6 fill-[linear-gradient(157deg,#FF852D_15.06%,#FF7878_97.93%)] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-base font-bold leading-6 tracking-tight grow whitespace-nowrap">
            AiDocker
          </div>
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
