/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        montserratBold: ["Montserrat-Bold", 'sans-serif'],
        montserratLight: ["Montserrat-Light", 'sans-serif'],
        montserratRegular: ["Montserrat-Regular", 'sans-serif'],
        montserratMedium: ["Montserrat-Medium", 'sans-serif'],
        montserratSemiBold: ["Montserrat-SemiBold", 'sans-serif'],
        nokiaBold: ['Nokia-Bold', 'sans-serif'],
        nokiaLight: ['Nokia-Light', 'sans-serif'],
      },
      colors: {
        lightRedv1: ['#f10547'],
        darkRedv2: ['#bf0640'],
        darkBluev3: ['#262837'],
        lightHabesha: ['#d9c8ac'],
        darkHabesha: ['#a78a5e'],
      },
      backgroundImage: {
        texturePattern : "url('/src/assets/image/home/texture.png')",
        greenBanner: "url('/src/assets/image/home/banner.png')",
      }
    },
  },
  darkMode: 'class', 
  plugins: [],
};



