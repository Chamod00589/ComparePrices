import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import { lapInfo, LapList } from "../data/LapSpec.js";
import { Link } from "react-router-dom";

export default function Home() {
  const [isSearching, setIsSearching] = useState(true);
  const [specifications, setSpecifications] = useState(
    lapInfo[0].data.items[0]
  );

  const Card = ({ item }) => {
    return (
      <Link
        to={`/LapOverView/${item.product.id}`}
        className="max-w-xs rounded overflow-hidden shadow-lg m-4"
      >
        <img
          src={item.image?.front == null ? "" : item.image.front}
          alt="Product"
          className="w-full"
        />
        {console.log(item.image.front)}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`${item.product.brand} ${item.product.family} ${item.product.series} ${item.product.version}`}</div>
        </div>
      </Link>
    );
  };

  const CardList = ({ LapList }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {LapList.data.items.map((item) => (
          <Card key={item.product.id} item={item} />
        ))}
      </div>
    );
  };

  // console.log(LapList.data.items);
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
