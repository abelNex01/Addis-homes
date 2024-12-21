import React, { useState } from "react";
import logo from "../../assets/image/home/logo.png";
import cartIcon from "../../assets/image/home/shopping.png";
import userIcon from "../../assets/image/home/user.png";
import langIcon from "../../assets/image/home/eth.png";
import houseIcon from "../../assets/image/home/house.png";
import girlimage from "../../assets/image/home/girl-pic.png";
import countStat from "../../assets/image/home/count.png";
import Features from "./Features";
import Banner from "./Banner";
import HowToUse from "./HowToUse";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const animationStyle = {
    animation: "bounce-slow 4s ease-in-out infinite",
  };

  const keyframes = `
    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `;

  return (
    <div className="container mx-auto pt-4">
      {/* Start of Navbar Section */}
      <div className="flex justify-between items-center p-4 bg-white rounded-full sticky top-0 z-50 lg:px-48">
        <Link to="/">
          <img src={logo} className="w-44 pl-8 cursor-pointer" alt="Logo" />
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-8 font-montserratMedium text-black">
          <Link
            to="/"
            className="cursor-pointer font-bold text-xl text-[#bf0640]"
          >
            Home
          </Link>
          <Link to="/property" className="cursor-pointer">
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
          <Link to="login">
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

      {/* Start of Landing Page */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 bg-texturePattern bg-center bg-contain bg-no-repeat">
        <div className="flex flex-col justify-center items-center px-6 md:px-28 mt-[-50px]">
          <style>{keyframes}</style>
          <img
            src={houseIcon}
            className="w-80"
            alt="Animated"
            style={animationStyle}
          />
          <h1 className="font-nokiaBold text-[#bf0640] text-[50px] md:text-[80px] lg:text-[100px] mb-[-20px]">
            ቤት ለእንቦሳ
          </h1>
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-[20px] md:text-[28px] lg:text-[33px] mt-[-10px]">
              Find Your Perfect{" "}
              <span className="font-montserratBold text-[#bf0640]">Home</span>{" "}
              Today
            </h3>
            <img
              src={countStat}
              className="w-[150px] md:w-[180px] lg:w-[240px] pt-3"
              alt="Statistics"
            />
            <span className="flex flex-col md:flex-row pt-16 gap-4 font-montserratSemiBold">
              <Link to="/signup">
                <button className="py-2 px-4 border-2 rounded-full w-32">
                  Join Us
                </button>
              </Link>
              <Link to="/property">
                <button className="py-2 px-4 text-white w-32 bg-[#bf0640] rounded-full">
                  Search
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={girlimage}
            className="w-full md:w-[515px] pt-2"
            alt="Girl"
          />
        </div>
      </div>
      {/* End of Landing Page */}
      <Features />
      <Banner />
      <HowToUse />
      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
