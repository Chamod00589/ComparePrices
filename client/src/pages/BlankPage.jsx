import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import { lapInfo } from "../data/LapSpec.js";

export default function LapOverView() {
  const [isSearching, setIsSearching] = useState(true);
  const [specifications, setSpecifications] = useState(
    lapInfo[1].data.items[0]
  );
  return (
    <div className="bg-light-2 ">
      <div className=" h-full text-black mx-auto lg:w-3/5 w-full sm:text-sm">
        <Header isSearching={isSearching} setIsSearching={setIsSearching} />
        {isSearching ? (
          <Search
            setSpecifications={setSpecifications}
            setIsSearching={setIsSearching}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
