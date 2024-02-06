import React, { useState, useEffect } from "react";

export default function Pricing({ id }) {
  const [prices, setPrices] = useState([]);
  const [isShowPriceForm, setIsShowPriceForm] = useState(false);
  const [formData, setFormData] = useState({
    laptopId: id,
    price: "",
    website: "",
    lastUpdate: new Date().toISOString().split("T")[0],
  });


  useEffect(() => {
    const fetchPricing = async () => {
      const res = await fetch(`/api/pricing/get/${id}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        setPrices([]);
        return;
      }
      setPrices(data);
    };

    fetchPricing();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPrice = () => {
    // Validate the form data before making the request
    if (
      !formData.laptopId ||
      !formData.price ||
      !formData.website ||
      !formData.lastUpdate
    ) {
      console.error("Please fill in all fields");
      return;
    }

    // Make the POST request to create new data
    fetch("/api/pricing/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Refresh the prices after successful creation
        setPrices([...prices, data]);
        // Clear the form data
        setFormData({
          laptopId: id,
          price: "",
          website: "",
          lastUpdate: new Date().toISOString().split("T")[0],
        });
      })
      .catch((error) => console.error("Error creating new price:", error));
  };
  return (
    <div className="mt-2 bg-light-1 px-4 py-3 font-bold">
      <div className="text-2xl">Pricing</div>
      <div className="flex flex-col  md:items-center">
        {/* Display existing prices */}
        <div className="md:w-10/12 flex-wrap sm:mx-3 text-lg font-Abel mb-2">
          {/* Header Row */}
          <div className="flex  p-2">
            <div className="text-red1 text-lg w-1/4"></div>
            <div className="pl-3 underline text-blue-600 text-xs w-1/6"></div>
            <div className="pl-3 text-light-5 w-1/4">Website</div>
            <div className="pl-3 text-light-5 w-1/4 ">Update</div>
          </div>

          {/* Data Rows */}
          {prices.map((price) => (
            <div key={price._id} className="flex p-2 items-center">
              <div className="w-1/4 text-red1 text-lg">{`Rs ${price.price}`}</div>
              <div className="pl-3 underline text-blue-600 w-1/6 text-xs">
                Edit
              </div>
              <div className="pl-3 w-1/4">{price.website}</div>
              <div className="pl-3 w-1/4">
                {new Date(price.lastUpdate).toLocaleDateString("en-GB")}
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        {!isShowPriceForm ? (
          <div className="flex justify-center">
            <button
              onClick={() => {
                setIsShowPriceForm(true);
              }}
              className="bg-yellow1 hover:bg-yellow-200 py-2 px-4 my-2 rounded-lg"
            >
              Add new shop price
            </button>
          </div>
        ) : (
          ""
        )}
        {isShowPriceForm ? (
          <>
            {/* Form */}
            <div className="flex justify-center  w-full">
              <div className="w-full  sm:w-4/5 md:w-3/5 flex flex-col sm:mx-3 text-lg font-Abel mb-0 border-red1 border-0 mt-4">
                <div className="flex items-center justify-center">
                  <label className="mb-2 sm:w-1/5 w-2/5">Price:</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="230000"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="border p-1 mb-4 w-full sm:w-1/2 pl-4"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label className="mb-2 sm:w-1/5 w-2/5">Website:</label>
                  <input
                    type="text"
                    name="website"
                    placeholder="LapStore.lk"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="border p-1 mb-4 w-full sm:w-1/2 pl-4"
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                onClick={handleAddPrice}
                className="bg-yellow1 hover:bg-yellow-200 py-2 px-4 my-2 rounded-lg"
              >
                Save Details
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
