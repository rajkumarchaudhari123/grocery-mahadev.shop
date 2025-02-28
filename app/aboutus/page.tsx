import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-[#c7bf77]">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row mt-3 bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        {/* Text Section */}
        <div className="md:w-2/3">
          <h1 className="text-2xl font-serif text-center md:text-left mb-4 text-green-700">
            Mahadev Chaudhari
          </h1>
          <p className="text-gray-700 text-justify leading-relaxed">
          "I am Mahadev Chaudhari, a dedicated entrepreneur in the grocery business for over 10 years. My shop, located in Parsvnath Srishti, is committed to providing the freshest and highest-quality vegetables and fruits. With a strong focus on customer satisfaction, I ensure that every product meets the highest standards of freshness and taste. My goal is to offer a seamless shopping experience, whether in-store or through convenient home delivery, bringing farm-fresh produce straight to your doorstep."
          </p>
          <p className="text-gray-700 text-justify mt-4 leading-relaxed">
            we provide best service in your city . this is our resposnsibity 
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
          <img
            src="/mahadev.jpg"
            alt="Portrait of Mahadev Chaudhari"
            className="rounded-lg shadow-md max-h-60"
          />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="mt-12  mb-5 text-center bg-white shadow-lg rounded-lg p-6 max-w-xl">
        {/* Image */}
        <div>
          <img
            src="aboutus-images.jpg"
            alt="Grocery shop with fresh produce"
            className="rounded-lg shadow-md max-h-40 mx-auto mb-4"
          />
        </div>
        {/* Welcome Message */}
        <div>
          <h1 className="text-2xl font-serif text-green-700 mb-4">
            Welcome to Grocery Mahadev.shop
          </h1>
          <p className="text-gray-700 leading-relaxed">
           we provide best serice
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}
