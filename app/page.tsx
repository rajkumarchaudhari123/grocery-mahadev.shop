"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/bg_1.jpg", alt: "First Slide", text: "Fresh Organic Vegetables" },
  { src: "/bg_2.jpg", alt: "Second Slide", text: "Delicious Fresh Fruits" },
  { src: "/bg_3.jpg", alt: "Third Slide", text: "Healthy Green Goodness" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <main className="flex items-center justify-center w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Carousel Images */}
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                className="min-w-full h-full relative"
                key={index}
                data-aos="fade-in"
                data-aos-delay={`${index * 500}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920} // Matches full width of the screen
                  height={1080} // Keeps aspect ratio consistent
                  className="object-cover w-full h-full"
                  layout="intrinsic"
                  priority
                />
                {/* Text Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl sm:text-6xl lg:text-8xl font-cursive italic text-shadow-lg">
                  {image.text}
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                } focus:outline-none`}
                role="button"
              ></button>
            ))}
          </div>
        </div>
      </main>

      {/* Information Section */}
      <div className="flex flex-wrap justify-around items-center mt-14 space-x-8 py-6 shadow-lg font-serif ">
        <div className="text-center w-full sm:w-1/2 md:w-1/4" data-aos="fade-up">
          <i className="text-4xl">🚚</i>
          <h3 className="text-xl font-bold">Free Shipping</h3>
          <p>On orders over Rs 200</p>
        </div>
        <div className="text-center w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="200">
          <i className="text-4xl">🍎</i>
          <h3 className="text-xl font-bold">Always Fresh</h3>
          <p>Products well packaged</p>
        </div>
        <div className="text-center w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="400">
          <i className="text-4xl">🌱</i>
          <h3 className="text-xl font-bold">Superior Quality</h3>
          <p>Top Quality Products</p>
        </div>
        <div className="text-center w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="600">
          <i className="text-4xl">🕒</i>
          <h3 className="text-xl font-bold">Support</h3>
          <p>8am to 10pm</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 space-y-8 bg-gray-50 p-6">
        {/* Header Section */}
        <div className="text-center font-serif" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-green-600">Fresh Vegetables</h2>
          <p className="text-lg text-gray-700 mt-2">
            Protect the health of every home with our organic produce
          </p>
          <button className="mt-4 px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg shadow-md transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Products Grid */}
        <div className="space-y-12 mt-8 w-full">
          {/* Row 1: Product 1 and 2 */}
          <div className="flex flex-wrap justify-start space-x-6">
            <div
              className="relative group h-96 w-full sm:w-1/2 lg:w-1/4 overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src="image_1.jpg"
                alt="Product 1"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Product 1</p>
              </div>
            </div>
            <div
              className="relative group h-96 w-full sm:w-1/2 lg:w-1/4 overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="image_2.jpg"
                alt="Product 2"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Product 2</p>
              </div>
            </div>
          </div>

          {/* Row 2: Product 3 and 4 */}
          <div className="flex flex-wrap justify-end space-x-6">
            <div
              className="relative group h-96 w-full sm:w-1/2 lg:w-1/4 overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src="image_3.jpg"
                alt="Product 3"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Product 3</p>
              </div>
            </div>
            <div
              className="relative group h-96 w-full sm:w-1/2 lg:w-1/4 overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="image_4.jpg"
                alt="Product 4"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Product 4</p>
              </div>
            </div>
          </div>

          {/* Row 3: Product 5 */}
          <div className="flex justify-center" data-aos="zoom-in">
            <div className="relative group h-96 w-full sm:w-3/4 lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
              <img
                src="image_5.jpg"
                alt="Product 5"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Product 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "The Secret Behind Our Freshness" */}
      <div className="mt-8 px-4" data-aos="fade-up">
        {/* Main Heading */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-4xl font-bold text-center font-serif text-gray-800">
            "The Secret Behind Our Freshness"
          </h1>
        </div>

        {/* Section Container */}
        <div className="flex flex-wrap justify-around gap-6">
          {/* Why Choose Us Section */}
          <div
            className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg bg-[#E8F5E9] w-full sm:w-1/3"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-white bg-[#4CAF50] px-4 py-2 rounded-t-lg">
              Why Choose Us?
            </h3>
            <p className="text-gray-800 text-lg bg-[#dbd283] w-full p-4 rounded-b-lg">
              🌱 100% Organic <br />
              🌍 Locally Sourced <br />
              ♻️ Sustainable Practices <br />
              🚚 Quick Delivery
            </p>
          </div>

          {/* Eco-Friendly Practices Section */}
          <div
            className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg bg-[#E8F5E9] w-full sm:w-1/3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold text-white bg-[#4CAF50] px-4 py-2 rounded-t-lg">
              Eco-Friendly Practices
            </h3>
            <p className="text-gray-800 text-lg bg-[#dbd283] w-full p-4 rounded-b-lg">
              🌾 Use of organic fertilizers. <br />
              📦 Biodegradable packaging. <br />
              🌟 Efforts to reduce waste and carbon footprint.
            </p>
          </div>

          {/* Our Values Section */}
          <div
            className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg bg-[#E8F5E9] w-full sm:w-1/3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold text-white bg-[#4CAF50] px-4 py-2 rounded-t-lg">
              Our Values
            </h3>
            <p className="text-gray-800 text-lg bg-[#dbd283] w-full p-4 rounded-b-lg">
              🥗 Freshness <br />
              🕵️ Transparency <br />
              🌱 Sustainability <br />
              😊 Customer Satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-8 px-4 mb-11" data-aos="fade-up">
        {/* Testimony Section Heading */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-center font-serif text-gray-800">
            What Our Customers Say
          </h1>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div
            className="p-4 shadow-lg rounded-lg bg-[#F9FBE7]"
            data-aos="fade-up"
          >
            <p className="text-gray-800 text-lg italic">
              "The vegetables from this store are always fresh and flavorful. My family has never been happier with the quality. Highly recommended!"
            </p>
            <h3 className="mt-4 font-bold text-right text-[#4CAF50]">— Priya M.</h3>
          </div>

          {/* Testimonial 2 */}
          <div
            className="p-4 shadow-lg rounded-lg bg-[#F9FBE7]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-800 text-lg italic">
              "I love the variety they offer! Everything from leafy greens to root vegetables is so fresh, and their delivery is super fast."
            </p>
            <h3 className="mt-4 font-bold text-right text-[#4CAF50]">— Ramesh S.</h3>
          </div>

          {/* Testimonial 3 */}
          <div
            className="p-4 shadow-lg rounded-lg bg-[#F9FBE7]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-gray-800 text-lg italic">
              "Great quality products with eco-friendly packaging! It’s a joy to shop here knowing I'm supporting sustainable farming."
            </p>
            <h3 className="mt-4 font-bold text-right text-[#4CAF50]">— Sunita K.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
