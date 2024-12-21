import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import UserDashboard from "./Components/Dashboard/UserDashboard.jsx";
import ScrollButton from "./Components/Home/ScrollButton.jsx";
import Login from "./Components/UserReg/Login.jsx";
import Signup from "./Components/UserReg/Signup.jsx";
import ThemeToggle from "./Components/Home/ThemeToggle.jsx";
import "./index.css";
import { PropertyProvider } from "./Components/Dashboard/PropertyContext.jsx";
import House from "./Components/Properties/House.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    const className = darkMode ? "dark" : "";
    document.documentElement.className = className;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <PropertyProvider>
        <Router>
          <ScrollButton />
          <Fade>
            <ThemeToggle toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/property" element={<Properties />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user" element={<UserDashboard />} />
              <Route path="/house" element={<House />} />
            </Routes>
          </Fade>
        </Router>
      </PropertyProvider>
    </div>
  );
};

export default App;
