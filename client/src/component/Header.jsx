import React from "react";
import SignInIcon from "../assets/SignInIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import { Link } from "react-router-dom";

function Header({ isSearching, setIsSearching }) {
  return (
    <div>
      <Link
        to="/"
        className="bg-light-7  text-white flex items-center  py-2 flex justify-center"
      >
        <span className="text-4xl font-LilitaOne font-extralight text-light-2">
          ComparePrices.lk
        </span>
      </Link>
      <div className="bg-light-4 flex items-center   flex justify-between  text-lg font-Abel font-bold text-light-8">
        {/* <span>HOME</span> */}
        <span className="p-2 ml-4">HOME</span>
        <span className="p-2 hidden sm:inline-flex">PRICES</span>
        <span className="p-2">REVIEWS</span>
        <div className="flex justify-center items-center mr-2">
          <span>LOGIN </span>
          <img src={SignInIcon} alt="Icon" className="w-5 ml-1 " />
          <div
            className=" bg-red-600 ml-5  rounded-sm"
            onClick={() => {
              setIsSearching(!isSearching);
            }}
          >
            <img
              src={SearchIcon}
              alt="Icon"
              className="w-5 border-0 border-black mx-3 my-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
