import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import StorageIcon from "../assets/StorageIcon.svg";
import RamIcon from "../assets/RamIcon.svg";
import ProcesserIcon from "../assets/ProcesserIcon.svg";
import DisplayIcon from "../assets/DisplayIcon.svg";
import Laptop from "../assets/Laptop.png";
import { lapInfo } from "../data/LapSpec";
import Search from "./Search";

const testMode = false;

function Home() {
  const [isSearching, setIsSearching] = useState(true);
  const [specifications, setSpecifications] = useState(
    lapInfo[1].data.items[0]
  );

  console.log(specifications);
  console.log("specifications");
  function ImageSection() {
    return (
      <div
        className={`bg-light-1 border-red-900 ${
          testMode ? "border-2" : ""
        } p-4`}
      >
        <div className={`flex flex-col `}>
          <span className="text-2xl font-bold">
            {specifications.product.brand} {specifications.product.family}{" "}
            {specifications.product.series}
          </span>
          <span className="text-lg ">{specifications.product.version}</span>
        </div>

        <div
          className={` border-red-900 ${
            testMode ? "border-0" : ""
          } flex  max-h-60`}
        >
          <img
          // src="https://e7.pngegg.com/pngimages/398/672/png-clipart-gray-acer-laptop-laptop-laptop-notebook-electronics-gadget-thumbnail.png"
            src={
              specifications?.image?.front == null
                ? ""
                : specifications.image.front
            }
            alt="LaptopImage"
            className={` border-red-900 ${
              testMode ? "border-2" : ""
            } w-2/5 object-contain`}
          />
          <div
            className={` border-red-900 ${
              testMode ? "border-2" : ""
            } flex-grow p-2 flex flex-col justify-around sm:py-8 bg-gradient-to-r from-light-1 to-blue3 text-light-8`}
          >
            <div
              className={` border-red-900 ${
                testMode ? "border-2" : ""
              } flex flex-row items-center `}
            >
              <img
                src={DisplayIcon}
                alt="DisplayIcon"
                className={` w-7 h-7 sm:w-9 sm:h-9`}
              />
              <div className="flex flex-col ml-2 justify-center">
                <span className="font-bold text-base leading-3">
                  {specifications.display.diagonal}
                </span>
                <span className="text-xs text-light-6  leading-3">
                  {specifications.display["resolution_(h_x_w)"]}
                </span>
              </div>
            </div>

            <div
              className={` border-red-900 ${
                testMode ? "border-2" : ""
              } flex flex-row items-center  `}
            >
              <img
                src={ProcesserIcon}
                alt="ProcesserIcon"
                className={` w-7 h-7 sm:w-9 sm:h-9`}
              />
              <div className="flex flex-col ml-2 justify-center">
                <span className="font-bold text-base leading-3">
                  {specifications.inside.cpu.model}
                </span>
                <span className="text-xs text-light-6  leading-3">
                  {specifications.inside.cpu.family}
                </span>
              </div>
            </div>
            <div
              className={` border-red-900 ${
                testMode ? "border-2" : ""
              } flex flex-row  items-center`}
            >
              <img
                src={RamIcon}
                alt="RamIcon"
                className={` w-7 h-7 sm:w-9 sm:h-9`}
              />
              <div className="flex flex-col ml-2 justify-center">
                <span className="font-bold text-base text-lg leading-3">
                  {specifications.inside.ram.capacity}
                </span>
                <span className="text-xs text-light-6  leading-3">
                  {specifications.inside.ram.type}
                </span>
              </div>
            </div>
            <div
              className={` border-red-900 ${
                testMode ? "border-2" : ""
              } flex flex-row `}
            >
              <img
                src={StorageIcon}
                alt="StorageIcon"
                className={` w-7 h-7 sm:w-9 sm:h-9`}
              />
              <div className="flex flex-col ml-2 justify-center">
                <span className="font-bold text-base leading-none">
                  {specifications.inside.storage.total_capacity}
                </span>
                <span className="text-xs text-light-6  leading-3">
                  {specifications.inside.ssd.storage_type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Pricing() {
    return (
      <div className="mt-2 bg-light-1 px-4 py-3 font-bold">
        <div className="text-2xl">Pricing</div>
        <div className="flex flex-col  md:items-center">
          <div className=" md:w-10/12  flex-wrap sm:mx-3 text-lg font-Abel  mb-2">
            {/* Header Row */}
            <div className="flex  p-2">
              <div className="text-red1 text-lg w-1/4"></div>
              <div className="pl-3 underline text-blue-600 text-xs w-1/6"></div>
              <div className="pl-3 text-light-5 w-1/4">Website</div>
              <div className="pl-3 text-light-5 w-1/4">Last update</div>
            </div>
           
  
            {/* Data Rows */}
            <div className="flex p-2 items-center">
              <div className="w-1/4 text-red1 text-lg">Rs 3 85,900</div>
              <div className=" pl-3 underline text-blue-600 w-1/6 text-xs">Edit</div>
              <div className="pl-3 w-1/4">Laptop.lk</div>
              <div className="pl-3 w-1/4">26.01.2023</div>
            </div>
  
            <div className="flex p-2 items-center">
              <div className="w-1/4 text-red1 text-lg">Rs 2 55,900</div>
              <div className=" pl-3 underline text-blue-600 w-1/6 text-xs">Edit</div>
              <div className="pl-3 w-1/4">Nanotek.lk</div>
              <div className="pl-3 w-1/4">26.01.2023</div>
            </div>
  
            {/* Location and Phone */}
            <div className="p-2">
              <div>
                <span className="pl-2 text-light-6">Location</span>
                <span className="pl-2">Gampaha</span>
              </div>
              <div>
                <span className="pl-2 text-light-6">Phone</span>
                <span className="pl-2">077 1187872, 027 1239872</span>
              </div>
            </div>
  
            {/* Another Data Row */}
            <div className="flex p-2 items-center ">
              <div className="w-1/4 text-red1 text-lg">Rs 2 55,900</div>
              <div className=" pl-3 underline text-blue-600 w-1/6 text-xs">Edit</div>
              <div className="pl-3 w-1/4">Nanotek.lk</div>
              <div className="pl-3 w-1/4">26.01.2023</div>
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-yellow1 hover:bg-yellow-200 py-2 px-4 my-2 rounded-lg">
              Add new shop price
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const formatKey = (key) => {
    // Replace underscores with spaces and capitalize the first letter of each word
    let formattedKey = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    // Add line break if the key has more than 13 characters and contains an open bracket
    if (formattedKey.length > 13 && formattedKey.includes("(")) {
      formattedKey = formattedKey.replace(/\(/, "\n(");
    }

    return formattedKey;
  };

  const Section = ({ title, data }) => (
    <div className="sm:text-lg text-sm flex flex-col  bg-light-1    my-2 border-0 border-black font-Abel font-bold">
      <div className=" border-0 sm:text-lg text-xl  text-red1 font-bold border-black w-full px-4 my-0  bg-light-1">
        {title}
      </div>
      <div className="my-0 px-4">
        <div className="w-full">
          {Object.entries(data).map(([key, value], index, array) => (
            <div
              key={key}
              className={`flex flex-row ${
                index === array.length - 1 ? "" : "border-b-2 border-light-3"
              } w-full`}
            >
              <div
                style={{ whiteSpace: "pre-line" }}
                className="sm:w-64 w-44 border-0 border-black text-light-8 "
              >
                {formatKey(key)}
              </div>
              <div className="ml-2 border-0 border-black w-full">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LaptopSpecs = () => {
    if (!specifications) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Section title="Key Aspects" data={specifications.key_aspects} />
        <Section title="Display" data={specifications.display} />
        {/* <Section title="Design" data={specifications.design.body} /> */}

        {Object.entries(specifications.design).map(
          ([sectionTitle, sectionData]) => (
            <Section
              key={sectionTitle}
              title={sectionTitle.toUpperCase()}
              data={sectionData}
            />
          )
        )}
        {Object.entries(specifications.inside).map(
          ([sectionTitle, sectionData]) => (
            <Section
              key={sectionTitle}
              title={sectionTitle.toUpperCase()}
              data={sectionData}
            />
          )
        )}
        {Object.entries(specifications.camera).map(
          ([sectionTitle, sectionData]) => (
            <Section
              key={sectionTitle}
              title={sectionTitle.toUpperCase()}
              data={sectionData}
            />
          )
        )}
        <Section title="Not Including" data={specifications.No} />
      </div>
    );
  };
  return (
    <div className="bg-light-2 ">
      <div className=" h-full text-black mx-auto lg:w-3/5 w-full sm:text-sm">
        <Header isSearching={isSearching} setIsSearching={setIsSearching} />
        {isSearching ? <Search setSpecifications={setSpecifications} setIsSearching={setIsSearching}/> : ""}
        <ImageSection />
        <Pricing />
        <LaptopSpecs />
      </div>
    </div>
  );
}

export default Home;
