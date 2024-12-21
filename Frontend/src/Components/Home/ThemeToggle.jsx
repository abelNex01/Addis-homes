import React from 'react';
import darkLight from '../../assets/image/home/sun.png'

const ThemeToggle = ({ toggleTheme }) => {
  return (
    
    <button
      onClick={toggleTheme}
      className="p-2 flex justify-center items-center mx-auto bg-[#bf0640] dark:bg-gray-900 light:bg-red-300 rounded-md"><img src={darkLight} className='w-8' /></button>

  );
};

export default ThemeToggle;
