import React from "react";
import iconHome from "../../assets/image/home/home-icon.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="pt-12 text-[#262837]">
      <div className="bg-greenBanner bg-center bg-cover bg-no-repeat p-6 md:p-12 text-center text-white">
        <div className="flex flex-col justify-center items-center mt-8 mb-4">
          <img src={iconHome} className="w-12 md:w-16 pt-4" alt="Home Icon" />
          <p className="font-nokiaLight pt-4 pb-6 font-bold text-sm md:text-base">
            ደላላ ፣ የሚከራይ ቤት እያሉ መንከራተት ቀረ! ባሉን አማራጮች ከፈለጉ ብቻዎን ካሻዎ ደሞ ከደባል ጋር
            <br />
            እንዲሁም ከተሟላ የቤት እቃም ጭምር የሚኖሩበትን ፕላትፎርም አመቻችተናል.
          </p>
          <h4 className="pb-4 font-nokiaBold text-lg md:text-xl">
            ይመዝገቡና የምርጫዎን ቤት ይከራዩ!
          </h4>
          <Link to="property">
            <button className="py-2 px-4 text-white w-44 bg-[#bf0640] rounded-full font-montserratMedium">
              Book Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
