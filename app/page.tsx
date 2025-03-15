"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <div>
        <ul className="space-y-2 justify-center text-center">
          <li 
            className="relative inline-block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/vegetable"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Vegetables
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fruits"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Fruits
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold font-serif text-gray-800">
          &ldquo;The Secret Behind Our Freshness&rdquo;
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Fresh, organic, and handpicked just for you.
        </p>
      </section>

      {/* Working Hours Section */}
      <section className="bg-green-100 rounded-lg p-6 text-center my-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🕒 Working Hours</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Morning Shift */}
          <div className="bg-white shadow-md rounded-lg p-4 w-64">
            <h3 className="text-xl font-semibold text-green-700">🌅 Morning</h3>
            <p className="text-lg text-gray-600">7:00 AM - 1:30 PM</p>
          </div>

          {/* Break Time */}
          <div className="bg-red-200 shadow-md rounded-lg p-4 w-64">
            <h3 className="text-xl font-semibold text-red-700">☕ Break Time</h3>
            <p className="text-lg text-gray-600">1:30 PM - 5:00 PM</p>
          </div>

          {/* Evening Shift */}
          <div className="bg-white shadow-md rounded-lg p-4 w-64">
            <h3 className="text-xl font-semibold text-green-700">🌆 Evening</h3>
            <p className="text-lg text-gray-600">5:00 PM - 8:00 PM</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["image_1.jpg", "image_2.jpg", "image_3.jpg"].map((img, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/${img}`}
              alt={`Product ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          &ldquo;What Our Customers Say&rdquo;
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          &ldquo;Best quality fruits and vegetables I have ever purchased!&rdquo;
        </p>
      </section>
    </div>
  );
}
