"use client";

import Image from "next/image";

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
            <Image src="/nike.svg" width={100} height={100} alt="nike" />

            <p className="btw_nike_text">Nike</p>
          </div>
          <Image src="/ri-arrow-down-s-line.svg"  width={100} height={100} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
