import React from "react";
import SignInIcon from "../assets/SignInIcon.svg";

function Header() {
  return (
    <div>
      <div className="bg-light-7  text-white flex items-center  py-2 flex justify-center">
        <span className="text-4xl font-LilitaOne font-extralight text-light-2">
          ComparePrices.lk
        </span>
      </div>
      <div className="bg-light-4 flex items-center  py-2 flex justify-around  text-lg font-Abel font-bold text-light-8">
        <span>HOME</span>
        <span>PRICES</span>
        <span>REVIEWS</span>
        <div className="flex justify-center items-center">
          <span>LOGIN </span>
          <img src={SignInIcon} alt="Icon" className="w-5 ml-1 " />
        </div>
      </div>
    </div>
  );
}

export default Header;
