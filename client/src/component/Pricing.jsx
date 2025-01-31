import React, { useState, useEffect } from "react";

export default function Pricing({ id }) {
  const [prices, setPrices] = useState([]);
  const [isShowPriceForm, setIsShowPriceForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    laptopId: id,
    price: "",
    name: "",
    website: "",
    lastUpdate: new Date().toISOString().split("T")[0],
  });

  const fetchPricing = async () => {
    const res = await fetch(`/api/pricing/get/${id}`);
    const data = await res.json();
    if (data.success === false) {
      console.log(data);
      setPrices([]);
      return;
    }
    console.log(data.message);
    setPrices(data);
  };
  // console.log(id);

  useEffect(() => {
    fetchPricing();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = (price) => {
    setEditingId(price._id);
    setFormData({
      laptopId: id,
      price: price.price,
      name: price.name,
      website: price.website,
      lastUpdate: new Date().toISOString().split("T")[0],
    });
    setIsShowPriceForm(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/pricing/update/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (data.success === false) {
        console.error('Error updating price');
        return;
      }

      // Update the prices list with the edited data
      setPrices(prices.map(price => 
        price._id === editingId ? { ...price, ...formData } : price
      ));

      // Reset form
      setFormData({
        laptopId: id,
        price: "",
        name: "",
        website: "",
        lastUpdate: new Date().toISOString().split("T")[0],
      });
      setEditingId(null);
      setIsShowPriceForm(false);
    } catch (error) {
      console.error('Error updating price:', error);
    }
  };

  const handleAddPrice = () => {
    if (!formData.laptopId || !formData.price || !formData.name || 
        !formData.website || !formData.lastUpdate) {
      console.error("Please fill in all fields");
      return;
    }

    if (editingId) {
      handleUpdate();
    } else {
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
            name: "",
            website: "",
            lastUpdate: new Date().toISOString().split("T")[0],
          });
        })
        .catch((error) => console.error("Error creating new price:", error));
    }
  };

  const handleDelete = async (priceId) => {
    if (!window.confirm('Are you sure you want to delete this price?')) return;

    try {
      const response = await fetch(`/api/pricing/delete/${priceId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      
      if (data.success === false) {
        console.error('Error deleting price');
        return;
      }

      // Remove the deleted price from the state
      setPrices(prices.filter(price => price._id !== priceId));
    } catch (error) {
      console.error('Error deleting price:', error);
    }
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
              <button 
                className="pl-3 underline text-blue-600 w-1/6 text-xs cursor-pointer"
                onClick={() => handleEditClick(price)}
              >
                Edit
              </button>
              <a
                href={price.website}
                target="_blank"
                className="pl-3 w-1/4 cursor-pointer"
              >
                {price.name}
              </a>
              <div className="pl-3 w-1/4 flex items-center">
                {new Date(price.lastUpdate).toLocaleDateString("en-GB")}
                <button 
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(price._id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
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
                  <label className="mb-2 sm:w-1/5 w-2/5">Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="LapStore.lk"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border p-1 mb-4 w-full sm:w-1/2 pl-4"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label className="mb-2 sm:w-1/5 w-2/5">Website:</label>
                  <input
                    type="text"
                    name="website"
                    placeholder="https://www.nanotek.lk/"
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
