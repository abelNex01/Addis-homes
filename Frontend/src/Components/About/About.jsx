import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/home/logo.png";
import cartIcon from "../../assets/image/home/shopping.png";
import userIcon from "../../assets/image/home/user.png";
import langIcon from "../../assets/image/home/eth.png";
import houseBanner from "../../assets/image/about/banner.png";
import addisAbaba from "../../assets/image/about/addis-ababa.png";
import Footer from "../Home/Footer.jsx";
import Team from "./Team.jsx";
import Gallery from "../Home/Gallery.jsx";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Link to="/property" className="cursor-pointer">
            Property
          </Link>
          <Link
            to="/about"
            className="cursor-pointer font-bold text-xl text-[#bf0640]"
          >
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

      <img src={houseBanner} className="pt-4 w-full" alt="banner" />

      <div className="px-4 md:px-20">
        {/* About Section */}
        <div className="text-center">
          <small className="text-[#bf0640]">About Us</small>
          <h1 className="text-3xl font-montserratBold">About Addis Homes</h1>
          <div className="w-12 mx-auto h-1 bg-[#bf0640] rounded-full"></div>
        </div>

        {/* About Text */}
        <div className="flex justify-center items-center pt-8">
          <p className="max-w-[90%] md:max-w-[70%] text-center">
            Welcome to Addis Home, your premier solution for short-term house
            rentals. Our platform is designed to make the rental process as
            straightforward as possible for both property owners and renters.
            Whether you're looking to find a cozy place for a brief stay or
            seeking to list a property, Addis Home offers a seamless and
            user-friendly experience. Our intuitive design ensures access across
            all devices for a smooth experience.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-8 pt-8">
          <div className="max-w-[500px]">
            <h3 className="text-2xl font-montserratSemiBold">What We Offer</h3>
            <p className="text-sm pt-4">
              Effortless Property Listings: List your rental property quickly
              and easily. Roommate Management: Manage living arrangements
              effortlessly. User-Centric Design: Enjoy a minimalist and
              responsive design on all devices.
            </p>
          </div>
          <img
            src={addisAbaba}
            className="w-[350px] md:w-[400px]"
            alt="Addis Ababa"
          />
        </div>
      </div>

      <Team />
      <Gallery />
      <Footer />
    </div>
  );
};

export default About;
