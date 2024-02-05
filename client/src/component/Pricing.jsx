import React from "react";

export default function Pricing() {
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
            <div className=" pl-3 underline text-blue-600 w-1/6 text-xs">
              Edit
            </div>
            <div className="pl-3 w-1/4">Laptop.lk</div>
            <div className="pl-3 w-1/4">26.01.2023</div>
          </div>

          <div className="flex p-2 items-center">
            <div className="w-1/4 text-red1 text-lg">Rs 2 55,900</div>
            <div className=" pl-3 underline text-blue-600 w-1/6 text-xs">
              Edit
            </div>
            <div className="pl-3 w-1/4">Nanotek.lk</div>
            <div className="pl-3 w-1/4">26.01.2023</div>
          </div>

          {/* Another Data Row */}
          <div className="flex p-2 items-center ">
            <div className="w-1/4 text-red1 text-lg">Rs 2 55,900</div>
            <div className=" pl-3 underline text-blue-600 w-1/6 text-xs">
              Edit
            </div>
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

//  {/* Location and Phone */}
//  <div className="p-2">
//  <div>
//    <span className="pl-2 text-light-6">Location</span>
//    <span className="pl-2">Gampaha</span>
//  </div>
//  <div>
//    <span className="pl-2 text-light-6">Phone</span>
//    <span className="pl-2">077 1187872, 027 1239872</span>
//  </div>
// </div>
