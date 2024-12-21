import React from "react";
import footerLogo from "../../assets/image/home/logo-footer.png";
import socialicon1 from "../../assets/image/more/1.png";
import socialicon2 from "../../assets/image/more/2.png";
import socialicon3 from "../../assets/image/more/3.png";
import appleStore from "../../assets/image/home/appstore.png";
import googlePlay from "../../assets/image/home/google.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-12 bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-6 lg:px-28">
        {/* Logo and description */}
        <div className="flex flex-col">
          <img src={footerLogo} className="w-40 lg:w-52" alt="footer logo" />
          <p className="text-sm font-montserratLight pt-2">
            Your go-to platform for finding the perfect rental in Addis Ababa.
            Whether you're searching for a house, or a roommate to share with,
            we've got you covered.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <img src={socialicon1} className="w-8" alt="instagram icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/?lang=en"
            >
              <img src={socialicon2} className="w-8" alt="twitter icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/?_rdr"
            >
              <img src={socialicon3} className="w-8" alt="facebook icon" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.apple.com/store"
            >
              <img src={appleStore} className="w-28" alt="Apple Store" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/games?hl=en&pli=1"
            >
              <img src={googlePlay} className="w-28" alt="Google Play" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-montserratSemiBold text-[#bf0640]">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-3 font-montserratLight text-sm pt-6">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About us</Link>
            <Link to="/property">Property</Link>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col">
          <h3 className="text-lg font-montserratSemiBold text-[#bf0640]">
            Get In Touch
          </h3>
          <div className="flex flex-col space-y-3 font-montserratLight text-sm pt-6">
            <p>
              Kality Total <br />
              Addis Ababa, Ethiopia
            </p>
            <p>group11addishomes@gmail.com</p>
            <p>
              +251 934 480735 <br />
              +251 978 004968
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col">
          <input
            className="py-3 px-4 w-full rounded-full outline-none placeholder-gray-800 text-gray-700"
            type="email"
            placeholder="Signup for latest news"
            required
          />
          <button className="py-2 px-4 text-white w-32 font-montserratMedium mt-2 bg-[#bf0640] rounded-full">
            Sign up
          </button>
        </div>
      </div>

      <small className="text-center flex justify-center pb-8 text-[#bbbbbb] text-[11px]">
        Group 11 Intern Project 2024, Addis Ababa, Ethiopia.
      </small>
    </div>
  );
};

export default Footer;
