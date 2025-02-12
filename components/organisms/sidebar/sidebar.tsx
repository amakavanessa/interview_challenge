"use client";
import Header from "../../atoms/Header";
import SideBarElements from "../../molecules/side-bar-elements/side-bar-elements";

const SideBar = () => {
  return (
    <div className=" flex flex-col gap-y-6">
      <Header />
      <SideBarElements />
    </div>
  );
};

export default SideBar;
