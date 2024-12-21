import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/home/logo.png";
import cartIcon from "../../assets/image/home/shopping.png";
import userIcon from "../../assets/image/home/user.png";
import langIcon from "../../assets/image/home/eth.png";
import contactHome from "../../assets/image/contact/house.png";
import Footer from "../Home/Footer.jsx";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6e1c18de-37cc-4327-88e6-902c2a2b22e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="container mx-auto pt-4">
      {/* Start of Navbar Section */}
      <div className="flex justify-between items-center p-4 bg-white rounded-full sticky top-0 z-50 lg:px-48">
        <Link to="/">
          <img src={logo} className="w-44 pl-8 cursor-pointer" alt="Logo" />
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-8 font-montserratMedium text-black">
          <Link to="/" className="cursor-pointer ">
            Home
          </Link>
          <Link to="/property" className="cursor-pointer">
            Property
          </Link>
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer font-bold text-xl text-[#bf0640]"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/login">
            <img src={cartIcon} width={20} alt="Cart" />
          </Link>
          <div className="group relative">
            <img src={userIcon} className="w-5 cursor-pointer" alt="User" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-28 py-3 bg-[#bf0640] px-5 text-white font-montserratSemiBold rounded">
                <Link to="/signup" className="cursor-pointer hover:text-black">
                  Sign up
                </Link>
                <Link to="/login" className="cursor-pointer hover:text-black">
                  Log in
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src={langIcon}
              className="cursor-pointer"
              width={20}
              alt="Language"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2">
              <div className="flex flex-col gap-0 w-6 py-2 bg-white px-5 font-montserratSemiBold rounded">
                <p className="text-sm cursor-pointer font-montserratBold text-[#bf0640] hover:text-black">
                  ETH
                </p>
                <p className="text-sm cursor-pointer font-montserratBold text-[#bf0640] hover:text-black">
                  ENG
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#bf0640] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg p-4 absolute w-full z-50">
          <Link to="/" className="block text-[#bf0640] font-bold mb-2">
            Home
          </Link>
          <Link to="/property" className="block text-black mb-2">
            Property
          </Link>
          <Link to="/about" className="block text-black mb-2">
            About
          </Link>
          <Link to="/contact" className="block text-black mb-2">
            Contact
          </Link>
        </div>
      )}
      {/* End of Navbar Section */}

      <div className="flex flex-col lg:flex-row items-center lg:justify-between pt-8">
        <img
          src={contactHome}
          className="w-full sm:w-[500px] lg:w-[700px] lg:flex-shrink-0 mb-8 lg:mb-0"
        />
        <div className="p-4 sm:p-8 lg:p-16 w-full lg:w-auto">
          <div className="space-y-6 flex flex-col">
            <h3 className="text-2xl font-montserratBold">Contact Us</h3>
            <p className="text-sm">
              Interested in trying Addis Home? Use the form below to get in
              touch.
            </p>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                <input
                  className="py-3 px-4 w-full sm:w-60 rounded-full shadow-md outline-none bg-[#f6f6f6] placeholder-gray-500 text-gray-500"
                  type="text"
                  placeholder="First name"
                  required
                  name="name"
                  autoComplete="off"
                />
                <input
                  className="py-3 px-4 w-full sm:w-60 rounded-full shadow-md outline-none bg-[#f6f6f6] placeholder-gray-500 text-gray-500"
                  type="text"
                  placeholder="Last Name"
                  required
                  name="lastName"
                  autoComplete="off"
                />
              </div>
              <input
                className="py-3 px-4 w-full rounded-full shadow-md outline-none bg-[#f6f6f6] placeholder-gray-500 text-gray-500"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                autoComplete="off"
              />
              <textarea
                className="py-3 px-4 h-44 w-full rounded-xl shadow-md outline-none bg-[#f6f6f6] placeholder-gray-500 text-gray-500"
                placeholder="Write your message"
                required
                name="message"
                autoComplete="off"
              />
              <button
                type="submit"
                className="py-2 px-4 text-white w-32 font-montserratMedium mt-2 bg-[#bf0640] rounded-full"
              >
                Submit
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
