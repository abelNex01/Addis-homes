import React from "react";
import user1 from "../../assets/image/home/user1.png";
import user2 from "../../assets/image/home/user2.png";
import user3 from "../../assets/image/home/user3.png";
import socialIcon from "../../assets/image/home/socialMedia.png";

const Testimonial = () => {
  return (
    <div className="px-4 py-10 md:px-10 lg:px-20">
      <div className="text-center">
        <small className="text-[#bf0640]">Customers Feedback</small>
        <h1 className="text-3xl font-montserratBold">Testimonials</h1>
        <div className="w-12 mx-auto h-1 bg-[#bf0640] rounded-full"></div>
      </div>

      {/* Testimonials Container */}
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scale-75">
        {/* Testimonial 1 */}
        <div className="flex flex-col md:flex-row justify-start items-start rounded-lg bg-[#f2f2f2] p-4 ">
          <img src={user1} className="w-28" alt="User 1" />
          <span className="px-4">
            <h3 className="font-nokiaBold text-[#bf0640] pt-3">ማርታ አስራት</h3>
            <p className="text-sm leading-tight text-black">
              "አዲስ ቤቶች በአዲስ አበባ ኪራይ ማግኘት ቀላል እና ከጭንቀት የጸዳ እንዲሆን አድርጎታል። መተግበሪያው
              ለተጠቃሚዎች ምቹ፣ ግልጽ ዝርዝሮች እና ትልቅ ድጋፍ ያለው ነው።"
            </p>
            <img src={socialIcon} className="w-28 py-2" alt="Social Icons" />
          </span>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col md:flex-row justify-start items-start rounded-lg bg-[#f2f2f2] p-4">
          <img src={user2} className="w-28" alt="User 2" />
          <span className="px-4">
            <h3 className="font-nokiaBold text-[#bf0640] pt-3">ዳንኤል ሙሉጌታ</h3>
            <p className="text-sm leading-tight text-black">
              "አዲስ ቤቶች በአዲስ አበባ ውስጥ አፓርታማ ለማግኘት ያደረግኩትን ፍለጋ ቀለል አድርጎልኛል.
              የመተግበሪያው ዝርዝር ዝርዝሮች እና ምላሽ ሰጪ ድጋፍ ሂደቱን ቀላል እና ፈጣን አድርጎታል. በጣም
              ረክቷል!"
            </p>
            <img src={socialIcon} className="w-28 py-2" alt="Social Icons" />
          </span>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col md:flex-row justify-start items-start rounded-lg bg-[#f2f2f2] p-4">
          <img src={user3} className="w-28" alt="User 3" />
          <span className="px-4">
            <h3 className="font-nokiaBold text-[#bf0640] pt-3">ሩት ታደሰ</h3>
            <p className="text-sm leading-tight text-black">
              "አዲስ ቤቶች ለቤተሰቤ አዲስ ቤት ፍለጋ ሕይወት አድን ነበር። አፕሊኬሽኑ የተለያዩ አማራጮችን አቅርቧል
              እና ምናባዊ ጉብኝቶቹ በሚያስደንቅ ሁኔታ አጋዥ ነበሩ። በጣም ጥሩ አገልግሎት!"
            </p>
            <img src={socialIcon} className="w-28 py-2" alt="Social Icons" />
          </span>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center pt-16">
        <h1 className="text-2xl font-montserratSemiBold text-[#bebebe]">
          "Discover, List, and Manage Rentals Effortlessly."
        </h1>
      </div>
    </div>
  );
};

export default Testimonial;
