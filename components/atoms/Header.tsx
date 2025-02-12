"use client";

import Image from "next/image";
import nike from "../public/nike.svg";

import down from "../public/ri-arrow-down-s-line.svg";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 px-6">
      <div>
        <h1 className="font-semibold text-2xl">
          Spring Collection Launch 2025
        </h1>
      </div>
      <div className="hand_bugger flex items-center">
        <button className="nike_btn">
          <div className="flex items-center gap-2">
            <Image src={nike} alt="nike" />

            <p className="btw_nike_text">Nike</p>
          </div>
          <Image src={down} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
