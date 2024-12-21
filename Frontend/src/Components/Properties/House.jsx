// House.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PropertyContext } from "../Dashboard/PropertyContext";
import AddProperty from "../Properties/AddProperty";

const House = () => {
  const { setSelectedHouse } = useContext(PropertyContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:30001/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  const handleAddProperty = (newProperty) => {
    fetch("http://localhost:30001/api/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => setProperties((prev) => [...prev, data]))
      .catch((error) => console.error("Error adding property:", error));
  };

  const handleBookNow = (house) => {
    setSelectedHouse(house);
  };

  return (
    <div className="px-20 text-[#262837] pb-12">
      <div className="text-center">
        <small className="text-[#bf0640]">Listed Properties</small>
        <h1 className="text-3xl font-montserratBold">Explore House</h1>
        <div className="w-12 mx-auto h-1 bg-[#bf0640] rounded-full"></div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-12 pt-2 scale-90">
        {properties.map((house) => (
          <div
            key={house._id}
            className="flex flex-col justify-start items-start bg-white shadow-lg rounded-3xl p-4"
          >
            <img
              src={house.image}
              className="w-80 h-60 object-cover rounded-lg"
              alt={`House in ${house.location}`}
            />
            <div className="pt-4 px-2 font-montserratMedium">
              <h4 className="font-montserratSemiBold">
                {house.location} ,Addis Ababa
              </h4>
              <p>{house.type}</p>
              <p>
                {house.bedrooms} bedrooms / {house.bathrooms} bathrooms
              </p>
              <span className="flex flex-row items-center gap-14 pt-2">
                <Link
                  to="/login"
                  className="py-2 px-4 text-white w-32 bg-[#bf0640] rounded-full font-montserratSemiBold"
                  onClick={() => handleBookNow(house)}
                >
                  Book Now
                </Link>

                <p className="font-montserratSemiBold">{house.price}/month</p>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-start items-center bg-white p-4 mt-12">
        <h2 className="text-2xl font-montserratBold p-6">Add New Property</h2>
        <AddProperty onAdd={handleAddProperty} />
      </div>
    </div>
  );
};

export default House;
