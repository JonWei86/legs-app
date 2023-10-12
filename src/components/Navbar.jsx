import React from "react";
import { Link } from "react-router-dom";
import { LuInfo, LuSettings } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between pt-2">
      <div className="pl-3 text-[13px]">
        <Link
          to={"/HowTo"}
          className="text-stroke-body font-semibold text-[#e9e9e9]  font-['KidsMagazine'] drop-shadow-button hover:drop-shadow-buttonhov hover:text-[14px]"
        >
          How To Play
        </Link>
      </div>
      <div className="flex flex-row pr-3 ">
        <Link to={"/About"} className="pr-3 hover:text-[#e9e9e9]">
          <LuInfo className="text-xl" />
        </Link>
        <Link className="hover:text-[#e9e9e9]">
          <LuSettings className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
