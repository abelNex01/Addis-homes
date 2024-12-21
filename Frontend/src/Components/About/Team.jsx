import React from "react";
import dev1 from "../../assets/image/about/dev1.png";
import dev2 from "../../assets/image/about/dev2.png";
import dev3 from "../../assets/image/about/dev3.png";

const Team = () => {
  return (
    <div className="px-4 md:px-20 pt-4">
      {/* Section Title */}
      <div className="text-center">
        <small className="text-[#bf0640]">Addis Homes Team</small>
        <h1 className="text-3xl font-montserratBold">Our Team</h1>
        <div className="w-12 mx-auto h-1 bg-[#bf0640] rounded-full"></div>
      </div>

      {/* Team Members */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 pt-12">
        <div className="flex flex-col justify-center items-center">
          <img src={dev1} className="w-36 md:w-44" alt="Fitsum Melke" />
          <h3 className="font-montserratBold pt-2 text-xl">Fitsum Melke</h3>
          <small className="text-sm scale-90 text-center">
            Frontend Developer
          </small>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={dev2} className="w-36 md:w-44" alt="Abel Assefa" />
          <h3 className="font-montserratBold pt-2 text-xl">Abel Assefa</h3>
          <small className="text-sm text-center scale-90">
            UX/UI Designer <br />& Backend Developer
          </small>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={dev3} className="w-36 md:w-44" alt="Obsa Fikadu" />
          <h3 className="font-montserratBold pt-2 text-xl">Obsa Fikadu</h3>
          <small className="text-sm scale-90 text-center">
            Frontend Developer
          </small>
        </div>
      </div>

      {/* Description */}
      <div className="flex justify-center items-center text-center mx-4 md:mx-[200px] text-sm py-8">
        <p>
          We’re a dedicated team of three passionate developers working
          collaboratively to bring you the best in short-term rental solutions.
          Together, we combine our expertise to create a seamless and
          user-friendly experience for our platform.
        </p>
      </div>
    </div>
  );
};

export default Team;
