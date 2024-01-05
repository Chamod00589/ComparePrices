import React, { useEffect, useState } from "react";
import Header from "../component/header";
import StorageIcon from "../assets/StorageIcon.svg";
import RamIcon from "../assets/RamIcon.svg";
import ProcesserIcon from "../assets/ProcesserIcon.svg";
import DisplayIcon from "../assets/DisplayIcon.svg";
import Laptop from "../assets/Laptop.png";
import { lapInfo } from "../data/LapSpec";

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
            <td colSpan={4}>
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
            <td className="pl-3 underline text-blue-600  text-xs">Edit</td>
            <td className="pl-3 ">Nanotek.lk</td>
            <td className="pl-3">26.01.2023</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-center">
        <button className="bg-yellow1 hover:bg-yellow-200 py-2 px-4 my-2 rounded-lg">
          Add new shop price
        </button>
      </div>
    </div>
  );
}

// const LaptopSpecs = () => {
//   const [specifications, setSpecifications] = useState(lapInfo.data.items[0]);

//   if (!specifications) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="flex flex-row mt-2 bg-light-1 px-4 py-3 text-lg border-2 border-black font-Abel font-bold">
//         <div className="pt-0 px-4 text-xl border-0 text-red1 font-bold border-black  w-28">
//           Display
//         </div>

//         <div className="w-full">
//           <div className="flex flex-row  border-b-2 border-light-3 w-full">
//             <div className=" w-36 border-0 border-black text-light-8 ">
//               Definition
//             </div>
//             <div className=" border-0 border-black w-full ">
//               {specifications.display.definition}
//             </div>
//           </div>

//           <div className="flex flex-row  border-b-2 border-light-3 w-full">
//             <div className=" w-36 border-0 border-black text-light-8">
//               Diagonal
//             </div>
//             <div className=" border-0 border-black w-full ">
//               {specifications.display.diagonal}
//             </div>
//           </div>

//           <div className="flex flex-row  border-b-2 border-light-3 w-full">
//             <div className=" w-36 border-0 border-black text-light-8">
//               Resolution
//             </div>
//             <div className=" border-0 border-black w-full ">
//               {specifications.display["resolution_(h_x_w)"]}
//             </div>
//           </div>
//         </div>


        
//       </div>
//       <div className="flex flex-row mt-2 bg-light-1 px-4 py-3 text-lg border-2 border-black font-Abel font-bold">
//         <div className="pt-0 px-4 text-xl border-0 text-red1 font-bold border-black  w-28">
//           Display
//         </div>

//         <div className="w-full">
//           <div className="flex flex-row  border-b-2 border-light-3 w-full">
//             <div className=" w-36 border-0 border-black text-light-8 ">
//               Definition
//             </div>
//             <div className=" border-0 border-black w-full ">
//               {specifications.display.definition}
//             </div>
//           </div>

//           <div className="flex flex-row  border-b-2 border-light-3 w-full">
//             <div className=" w-36 border-0 border-black text-light-8">
//               Diagonal
//             </div>
//             <div className=" border-0 border-black w-full ">
//               {specifications.display.diagonal}
//             </div>
//           </div>

//           <div className="flex flex-row  border-b-2 border-light-3 w-full">
//             <div className=" w-36 border-0 border-black text-light-8">
//               Resolution
//             </div>
//             <div className=" border-0 border-black w-full ">
//               {specifications.display["resolution_(h_x_w)"]}
//             </div>
//           </div>
//         </div>



//       </div>
//     </div>
//   );
// };
const formatKey = (key) => {
  // Replace underscores with spaces and capitalize the first letter of each word
  let formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

  // Add line break if the key has more than 13 characters and contains an open bracket
  if (formattedKey.length > 13 && formattedKey.includes('(')) {
    formattedKey = formattedKey.replace(/\(/, '\n(');
  }

  return formattedKey;
};

const Section = ({ title, data }) => (
  <div className="flex flex-row mt-2 bg-light-1 px-4 py-3 text-lg border-0 border-black font-Abel font-bold">
    <div className="pt-0 px-4 text-xl border-0 text-red1 font-bold border-black w-28">
      {title}
    </div>

    <div className="w-full">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex flex-row border-b-2 border-light-3 w-full">
          <div style={{ whiteSpace: 'pre-line' }} className="w-36 border-0 border-black text-light-8" >{formatKey(key)}</div>
          <div className="border-0 border-black w-full">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

const LaptopSpecs = () => {
  const [specifications, setSpecifications] = useState(lapInfo.data.items[0]);

  if (!specifications) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Section title="Key Aspects" data={specifications.key_aspects} />
      <Section title="Display" data={specifications.display} />
      <Section title="Design" data={specifications.design.body} />
      <Section title="inside" data={specifications.inside.cpu} />
    </div>
  );
};



function Home() {
  return (
    <div className="bg-light-2 ">
      <div className=" h-full text-black mx-auto lg:w-3/5 w-full sm:text-sm">
        <Header />
        <ImageSection />
        <Pricing />
        <LaptopSpecs />
      </div>
    </div>
  );
}

export default Home;
