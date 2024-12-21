import React from "react";
import featuresImage from "../../assets/image/home/property.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="p-6 md:p-12 lg:p-20">
      <div className="text-center">
        <small className="text-[#bf0640]">Addis Homes Features</small>
        <h1 className="text-3xl font-montserratBold">Features Overview</h1>
        <div className="w-12 mx-auto h-1 bg-[#bf0640] rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-4 md:px-8 lg:px-32 pt-10 gap-10">
        <div className="flex justify-center">
          <img
            src={featuresImage}
            className="w-full max-w-[450px]"
            alt="Features Overview"
          />
        </div>
        <div className="px-4 md:px-8">
          <h4 className="font-montserratSemiBold text-[#bf0640]">
            Property Listings
          </h4>
          <p className="text-sm">
            The Property Listings feature allows users to easily list rental
            properties. Property owners can add details such as location, rental
            type (short-term or long-term), and furnishing status, along with
            uploading photos. This helps users create and manage property
            listings efficiently.
          </p>
          <br />
          <h4 className="font-montserratSemiBold text-[#bf0640]">
            Roommate Management
          </h4>
          <p className="text-sm">
            Roommate Management enables users to add, remove, and view roommates
            associated with their properties. This feature simplifies the
            process of managing shared living arrangements.
          </p>
          <br />
          <h4 className="font-montserratSemiBold text-[#bf0640]">
            Flexible Search
          </h4>
          <p className="text-sm">
            Flexible Search provides users with the ability to search and filter
            rental properties based on keywords, location, rental type, and
            furnishing status. It allows for quick and relevant property
            discoveries tailored to user preferences.
          </p>
          <br />
          <Link to="/about">
            <button className="py-2 px-4 text-white w-32 bg-[#bf0640] font-montserratSemiBold rounded-full">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
