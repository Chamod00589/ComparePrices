import React from "react";
import Header from "../component/header";
import StorageIcon from "../assets/StorageIcon.svg";
import RamIcon from "../assets/RamIcon.svg";
import ProcesserIcon from "../assets/ProcesserIcon.svg";
import DisplayIcon from "../assets/DisplayIcon.svg";
import Laptop from "../assets/Laptop.png";

const testMode = false;
function ImageSection() {
  return (
    <div
      className={`bg-light-1 border-red-900 ${testMode ? "border-2" : ""} p-4`}
    >
      <div className={`flex flex-col `}>
        <span className="text-2xl font-bold">Asus Zenbook Flip 13</span>
        <span className="text-lg ">UX363EA-DH51T</span>
      </div>

      <div
        className={` border-red-900 ${
          testMode ? "border-0" : ""
        } flex  max-h-60`}
      >
        <img
          src={Laptop}
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
              <span className="font-bold text-base leading-3">13.3’’</span>
              <span className="text-xs text-light-6  leading-3">
                1920 x 1080 pixels
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
              <span className="font-bold text-base leading-3">i5-1135G7</span>
              <span className="text-xs text-light-6  leading-3">
                11th gen Intel Core i5
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
                8 GB RAM
              </span>
              <span className="text-xs text-light-6  leading-3">On-board</span>
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
              <span className="font-bold text-base leading-none">512 GB</span>
              <span className="text-xs text-light-6  leading-3">SSD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Asus Zenbook Flip 13
// UX363EA-DH51T

// <div className={`flex flex-col font-Abel`}>

// {/* <div
//   className={`flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start border-red ${
//     testMode ? "border-2" : ""
//   } bg-gradient-to-r from-light-6 to-blue2`}
// >
//   df
// </div> */}
// <div
//   className={`h-96 flex-grow border-blue-900 ${
//     testMode ? "border-2" : ""
//   }`}
// >
//   down
// </div>
// </div>

function Pricing() {
  return (
    <div className="mt-2 bg-light-1 px-4 py-3 font-bold">
      <div className="text-2xl  ">Pricing</div>
      <div className="flex justify-center">
        <table className="w-11/12 sm:w-auto flex-wrap sm:mx-3 text-lg font-Abel border-2 border-light-7">
          <tr className="">
            <th></th>
            <th></th>
            <th className="pl-3 text-light-5">Website</th>
            <th className="pl-3 text-light-5">Last update</th>
          </tr>
          <tr>
            <td className="  text-red1 text-lg">Rs 3 85,900</td>
            <td className="pl-3 underline text-blue-600  text-xs">Edit</td>
            <td className="pl-3 ">Jungle.lk</td>
            <td className="pl-3">26.01.2023</td>
          </tr>
          <tr>
            <td className=" text-red1 text-lg">Rs 2 55,900</td>
            <td className="pl-3 underline text-blue-600  text-xs">Edit</td>
            <td className="pl-3 ">Nanotek.lk</td>
            <td className="pl-3">26.01.2023</td>
          </tr>
          <tr className="">
            <td colSpan={4} >
              <div>
                <span className="pl-2 text-light-6">Location</span>
                <span className=" pl-2">Gampaha</span>
              </div>
              <div>
                <span className="pl-2 text-light-6">Phone</span>
                <span className="pl-2">077 1187872, 027 1239872</span>
              </div>
            </td>
          </tr>

          <tr>
            <td className="  text-red1 text-lg">Rs 2 55,900</td>
            <td
              className="pl-3 underline text-blue-600  text-xs
"
            >
              Edit
            </td>
            <td className="pl-3 ">Nanotek.lk</td>
            <td className="pl-3">26.01.2023</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-light-2 ">
      <div className=" h-screen text-black mx-auto lg:w-3/5 w-full sm:text-sm">
        <Header />
        <ImageSection />
        <Pricing />
      </div>
    </div>
  );
}

export default Home;
