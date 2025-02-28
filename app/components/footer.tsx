"use client";
export default function Footer() {
  return (
    <footer className="bg-[#4CAF50] text-white py-8">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
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
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">Our Products</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact Us</a>
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
            ✉️ Email: support@vegfresh.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Social Media and Credits */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} VegFresh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
