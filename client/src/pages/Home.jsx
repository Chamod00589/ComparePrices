import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import { lapInfo, LapList } from "../data/LapSpec.js";

export default function Home() {
  const [isSearching, setIsSearching] = useState(true);
  const [specifications, setSpecifications] = useState(
    lapInfo[1].data.items[0]
  );

  const Card = ({ product }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <img
          src={product.image?.front == null ? "" : product.image.front}
          alt="Product"
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`${product.brand} ${product.family} ${product.series} ${product.version}`}</div>
          {/* You can add more details here if needed */}
        </div>
      </div>
    );
  };

  const CardList = ({ LapList }) => {
    return (
      <div className="card-list">
        {LapList.data.items.map((item) => (
          <Card key={item.product.id} product={item.product} />
        ))}
      </div>
    );
  };

  console.log(LapList.data.items);
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

        <CardList LapList={LapList} />
      </div>
    </div>
  );
}
