import React, { useContext, useState } from "react";
import { PropertyContext } from "../Dashboard/PropertyContext";
import logo from "../../assets/image/user-dashboard/logo.png";
import userIcon from "../../assets/image/user-dashboard/user.png";
import cartIcon from "../../assets/image/home/shopping.png";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/image/user-dashboard/1.png";
import propertyIcon from "../../assets/image/user-dashboard/2.png";
import abutIcon from "../../assets/image/user-dashboard/3.png";
import contactIcon from "../../assets/image/user-dashboard/4.png";

// Payment Component
const PaymentComponent = ({ houseData, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const amount = houseData.price;

  const handlePayment = async () => {
    setErrorMessage("");

    if (!cardNumber || !expiryDate || !cvv) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (cardNumber.length < 4) {
      setErrorMessage("Card number must be at least 4 digits.");
      return;
    }

    if (cvv.length !== 3) {
      setErrorMessage("CVV must be 3 digits.");
      return;
    }

    try {
      const paymentRequest = {
        amount,
        cardNumber,
        propertyId: houseData._id,
        location: houseData.location,
        expiryDate,
        cvv,
      };

      const response = await fetch("http://localhost:30001/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentRequest),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setErrorMessage(
          `Payment failed: ${responseData.error || "Unknown error."}`
        );
        return;
      }

      onPaymentSuccess();
      alert("Payment successful!");
    } catch (error) {
      console.error("Payment Error:", error);
      setErrorMessage(
        "Network error or payment processing failed. Please try again later."
      );
    }
  };

  return (
    <div className="payment-container flex flex-col px-4 lg:px-20 gap-4 mt-6">
      <h2 className="text-xl lg:text-2xl font-semibold">
        Payment for {houseData.location} Property
      </h2>
      <input
        type="text"
        placeholder="Put Your Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="w-full lg:w-96 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        className="w-full lg:w-96 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        className="w-full lg:w-96 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount + " ETB"}
        className="text-lg lg:text-2xl font-montserratBold text-[#bf0640]"
        disabled
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button
        onClick={handlePayment}
        className="bg-[#bf0640] hover:bg-[#bf0640] text-white font-semibold rounded-full py-2 px-4 w-full lg:w-96"
      >
        Pay Now
      </button>
    </div>
  );
};

// User Dashboard Component
const UserDashboard = () => {
  const { selectedHouse: houseData } = useContext(PropertyContext);
  const [showPayment, setShowPayment] = useState(false);

  const handleBookNowClick = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    alert("Payment successful!");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="flex flex-col bg-[#bf0640] text-white w-full lg:w-1/6 py-6 px-4 items-center space-y-8 pt-16">
        <Link to="/">
          <img className="w-20 lg:w-24 cursor-pointer" src={logo} alt="Logo" />
        </Link>
        <div className="pt-12 flex flex-col gap-12">
          <Link to="/">
            <img
              className="w-6 lg:w-8 cursor-pointer"
              src={homeIcon}
              alt="Logo"
            />
          </Link>
          <Link to="/property">
            <img
              className="w-6 lg:w-8 cursor-pointer"
              src={propertyIcon}
              alt="Logo"
            />
          </Link>
          <Link to="/about">
            <img
              className="w-6 lg:w-8 cursor-pointer"
              src={abutIcon}
              alt="Logo"
            />
          </Link>
          <Link to="/contact">
            <img
              className="w-6 lg:w-8 cursor-pointer"
              src={contactIcon}
              alt="Logo"
            />
          </Link>
        </div>

        {/* <img className="w-12 rounded-full" src={userIcon} alt="User Icon" /> */}
        <div className="group relative pt-8">
          <img src={cartIcon} className="w-8 cursor-pointer invert" />
          <small>login or sign up</small>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-28 py-3 bg-[#bf0640] px-5 text-white font-montserratSemiBold rounded">
              <Link to="/signup" className="cursor-pointer  hover:text-black">
                Sign up
              </Link>
              <Link to="/login" className="cursor-pointer hover:text-black">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 lg:p-10 max-h-screen overflow-auto">
        {houseData ? (
          <>
            <div className="flex flex-col">
              {/* House Image */}
              <div className="w-full lg:w-[960px] h-[300px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mb-4">
                <img
                  src={houseData.image}
                  className="w-full h-full object-cover"
                  alt="Property"
                />
              </div>

              {/* Property details, payment, and contact sections */}
              <div className="flex flex-col space-y-4 lg:ml-8">
                <h2 className="text-xl lg:text-2xl font-bold">
                  {houseData.location}, Addis Ababa
                </h2>
                <p className="text-sm lg:text-base">{houseData.description}</p>
                <p className="text-sm lg:text-base">
                  {houseData.bedrooms} bedrooms / {houseData.bathrooms}{" "}
                  bathrooms
                </p>
                <p className="text-sm lg:text-base">
                  Price: {houseData.price} ETB
                </p>
                <p className="mt-4 text-sm lg:text-base">{houseData.disc}</p>

                <button
                  onClick={handleBookNowClick}
                  className="bg-[#bf0640] hover:bg-[#bf0640] text-white font-bold py-2 px-6 rounded-full w-full lg:w-auto"
                >
                  Book Now
                </button>

                {/* Payment Form will appear here below the "Book Now" button */}
                {showPayment && (
                  <PaymentComponent
                    houseData={houseData}
                    onPaymentSuccess={handlePaymentSuccess}
                  />
                )}

                {/* Contact Owner Section */}

                <div className="mt-14 flex flex-col space-y-2">
                  <h3 className="text-lg lg:text-xl font-semibold">
                    Contact Owner
                  </h3>
                  <p className="text-sm lg:text-base">Ato Adamu Tesfaye</p>
                  <p className="text-sm lg:text-base">Property Owner</p>
                  <p className="text-sm lg:text-base">+251 912345678</p>
                  <p className="text-sm lg:text-base">+251 987653421</p>
                  <p className="text-sm lg:text-base">adamuowner@email.com</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="font-montserratBold text-3xl text-center mt-20 text-[#bf0640]">
            No house selected.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
