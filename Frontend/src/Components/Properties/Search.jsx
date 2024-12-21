import React, { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const [houseType, setHouseType] = useState("apartment");
  const [bedrooms, setBedrooms] = useState("1");
  const [roommates, setRoommates] = useState("1");

  const handleSearch = () => {
    // Implement search logic here
    console.log({ location, houseType, bedrooms, roommates });
  };

  return (
    <div className="container mx-auto pt-8">
      <div>
        <h2 className="font-montserratBold text-xl text-center">
          Browse, list and manage rental properties <br /> and roommates with
          ease.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-8 rounded-full w-full md:w-[900px] mx-auto">
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500 flex-grow"
        >
          <option value="" disabled>
            Select location
          </option>
          <option value="Bole">Bole</option>
          <option value="Piyassa">Piyassa</option>
          <option value="Mexico">Mexico</option>
          <option value="CMC">CMC</option>
          <option value="Ayat">Ayat</option>
          <option value="Saris">Saris</option>
          <option value="Lideta">Lideta</option>
          <option value="Summit">Summit</option>
          <option value="Goro">Goro</option>
          <option value="Kality">Kality</option>
          <option value="moreLocation">More Location</option>
        </select>

        <select
          id="houseType"
          value={houseType}
          onChange={(e) => setHouseType(e.target.value)}
          className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500 flex-grow"
        >
          <option value="apartment">Apartment</option>
          <option value="g+">G+</option>
          <option value="villa">Villa</option>
          <option value="studio">Condominium</option>
          <option value="studio">Studio</option>
          <option value="regularHouse">Regular House</option>
        </select>

        <select
          id="bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500 flex-grow"
        >
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>

        <select
          id="roommates"
          value={roommates}
          onChange={(e) => setRoommates(e.target.value)}
          className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500 flex-grow"
        >
          <option value="none">No roomate</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <button
          className="bg-[#bf0640] text-white px-4 py-2 w-36 mt-4 mx-auto font-montserratSemiBold rounded-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
