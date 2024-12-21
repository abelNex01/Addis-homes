import React, { useEffect, useState } from "react";
import onTop from '../../assets/image/home/onTop.png'

const ScrollButton = () => {
  const [isVisible, setIsVisble] = useState(false);

  const toggleVisiblity = () => {
    window.pageYOffset > 300 ? setIsVisble(true) : setIsVisble(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);


  const animationStyle = {
    animation: 'bounce-slow 2s ease-in-out infinite'
  };
  
  const keyframes = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  `;

  return (
    <div className="fixed max-sm:hidden max-md:hidden z-50 right-20 bottom-0 p-32 transform transition-transform duration-300 group " alt="Animated" style={animationStyle}>
       <style>{keyframes}</style>
      {isVisible && (
        <img className=" w-12 cursor-pointer group-active:scale-110" onClick={scrollToTop} src={onTop} />
      )}
    </div>
  );
};

export default ScrollButton;
