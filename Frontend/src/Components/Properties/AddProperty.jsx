import React, { useState } from "react";

const AddProperty = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    location: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    disc: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result, // Store base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = { ...formData }; // Prepare form data
    onAdd(newProperty); // Call the parent function to add a new property
    setFormData({
      location: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      disc: "",
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
        autoComplete="off"
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
        autoComplete="off"
      />
      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        value={formData.bedrooms}
        onChange={handleChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
        autoComplete="off"
      />
      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={formData.bathrooms}
        onChange={handleChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
        autoComplete="off"
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
        autoComplete="off"
      />
      <input
        type="text"
        name="disc"
        placeholder="Discription"
        value={formData.disc}
        onChange={handleChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
        autoComplete="off"
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        required
        className="p-2 px-4 border border-gray-300 rounded-full"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-[#bf0640] text-white rounded-full"
      >
        Add Property
      </button>
    </form>
  );
};

export default AddProperty;
