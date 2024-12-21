import React from "react";
import icon1 from "../../assets/image/home/icon1.png";
import icon2 from "../../assets/image/home/icon2.png";
import icon3 from "../../assets/image/home/icon3.png";

const HowToUse = () => {
  return (
    <div className="px-4 py-20 md:px-10 lg:px-20">
      <div className="text-center">
        <small className="text-[#bf0640]">Addis Homes Guide</small>
        <h1 className="text-3xl font-montserratBold">How To Use</h1>
        <div className="w-12 mx-auto h-1 bg-[#bf0640] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-16 scale-90">
        <div className="flex flex-col justify-center items-center text-center">
          <img src={icon1} width={44} alt="Browse Property" />
          <h3 className="text-xl font-montserratSemiBold pt-4">
            Browse Property
          </h3>
          <p className="text-sm text-start pt-4">
            For Property Owners: Log in to your account, then navigate to the
            Property Listings section. Enter details about your property,
            including location, rental type. For Renters: Browse through the
            available listings to find properties that meet your needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img src={icon2} width={44} alt="Search and Filter" />
          <h3 className="text-xl font-montserratSemiBold pt-4">
            Search and Filter
          </h3>
          <p className="text-sm text-start  pt-4">
            Use the Flexible Search feature to quickly find properties by
            entering keywords and applying filters such as rental type,
            location, and furnishing status. Adjust your search criteria to
            refine your results and locate the ideal rental property.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <img src={icon3} width={44} alt="Manage Roommates" />
          <h3 className="text-xl font-montserratSemiBold pt-4">
            Manage Roommates
          </h3>
          <p className="text-sm text-start  pt-4">
            For Property Owners and Renters: Access the Roommate Management
            feature to add or remove roommates from your property. View the
            current list of roommates to keep track of your shared living
            arrangements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
