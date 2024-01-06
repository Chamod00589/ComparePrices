import React, { useState } from "react";
import { LapList, lapInfo } from "../data/LapSpec";

export default function Search({ setIsSearching, setSpecifications }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (searchText) => {
    const searchTermLowerCase = searchText.toLowerCase();
    const filteredItems = LapList.data.items.filter((item) =>
      item.product.model.toLowerCase().includes(searchTermLowerCase)
    );

    if (searchText == "") {
      setFilteredResults([]);
    } else {
      setFilteredResults(filteredItems.slice(0, 4));
    }
    setSearchTerm(searchText);
  };

  const handleItemClick = (id) => {
    // Find the selected item based on its id from lapInfo
    const selectedItem = lapInfo.find(
      (item) => item.data.items[0].product.id === id
    );

    // Set the specifications with the selected item
    setSpecifications(selectedItem.data.items[0]);
    setIsSearching(false);
    
    // You may also perform any other actions related to item click
};
  return (
    <div>
      <div className="p-2 bg-light-6 flex flex-row font-Abel text-lg">
        <div className="bg-light-0 px-2 w-full">
          <input
            type="text"
            placeholder="Search for a laptop..."
            value={searchTerm}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        {filteredResults.length > 0 ? (
          <div>
            {filteredResults.map(({ product, image }) => (
              <div
                className="h-20 border-b-2 border-light-4 flex items-center bg-light-0"
                key={product.id}
                onClick={() => handleItemClick(product.id)}
              >
                <img
                  src={image?.front == null ? "" : image.front}
                  alt="LaptopImage"
                  className="border-red-900 ml-2 w-16 object-contain"
                />
                <div className="ml-2">{product.model}</div>
              </div>
            ))}
          </div>
        ) : searchTerm.trim() !== "" ? (
          <p className="p-4">No results found.</p>
        ) : null}
      </div>
    </div>
  );
}
