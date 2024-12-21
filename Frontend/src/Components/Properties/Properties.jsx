import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/home/logo.png";
import cartIcon from "../../assets/image/home/shopping.png";
import userIcon from "../../assets/image/home/user.png";
import langIcon from "../../assets/image/home/eth.png";
import House from "./House";
import Footer from "../Home/Footer";
import Search from "./Search";

const Properties = () => {
  const [isSignupVisible, SetIsSignupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCardClick = () => {
    SetIsSignupVisible(true);
  };
  const handleClose = () => {
    SetIsSignupVisible(false);
  };

  const [isLoginVisible, SetIsLoginVisible] = useState(false);
  const handleCardClick2 = () => {
    SetIsLoginVisible(true);
  };
  const handleClose2 = () => {
    SetIsLoginVisible(false);
  };

  return (
    <div className="container mx-auto pt-4">
      {/* Start of Navbar Section */}
      <div className="flex justify-between items-center p-4 bg-white rounded-full sticky top-0 z-50 lg:px-48">
        <Link to="/">
          <img src={logo} className="w-44 pl-8 cursor-pointer" alt="Logo" />
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-8 font-montserratMedium text-black">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link
            to="/property"
            className="cursor-pointer font-bold text-xl text-[#bf0640]"
          >
            Property
          </Link>
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer">
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

      <Search />
      <House />
      <Footer />
    </div>
  );
};

export default Properties;
