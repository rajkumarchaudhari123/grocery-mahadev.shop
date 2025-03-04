"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4CAF50] text-white py-8">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-center md:text-left">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We provide the freshest, organic, and locally sourced vegetables
            directly from farms to your doorstep. Quality, sustainability, and
            customer satisfaction are our top priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/aboutus" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/contacts" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm">
            📍 Address: UTTAR PRADESH NOIDA SECTOR 93 PARSVNATH SRISHTI<br />
            📞 Phone: +91 8800759538<br />
            ✉️ Email: <a href="mailto:support@vegfresh.com" className="underline">support@vegfresh.com</a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Social Media and Credits */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left gap-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-200 flex items-center space-x-2">
            <FaFacebookF /> <span>Facebook</span>
          </a>
          <a href="#" className="hover:text-gray-200 flex items-center space-x-2">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href="#" className="hover:text-gray-200 flex items-center space-x-2">
            <FaTwitter /> <span>Twitter</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} VegFresh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
