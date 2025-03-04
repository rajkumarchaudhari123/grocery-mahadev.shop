"use client";
import React from "react";
import { FaPhone, FaSms, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactOptions() {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-100 to-green-300 min-h-screen">
            <h1 className="text-4xl font-extrabold text-green-800 mb-8">Contact Us</h1>
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6 sm:max-w-md text-center">
                <div className="text-lg font-semibold text-gray-700">
                    <p>Name: Rajkumar Chaudhari</p>
                    <p>Business: Grocery Order Services</p>
                    <p>Location: Noida</p>
                </div>
                <a href="tel:+9667048566" className="flex items-center justify-center gap-3 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    <FaPhone /> Call Us
                </a>
                <a href="sms:+9667048566" className="flex items-center justify-center gap-3 py-3 text-lg font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700">
                    <FaSms /> Send SMS
                </a>
                <a href="https://wa.me/9667048566" className="flex items-center justify-center gap-3 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">
                    <FaWhatsapp /> WhatsApp Us
                </a>
                <a href="mailto:rajk5591230@gmail.com" className="flex items-center justify-center gap-3 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
                    <FaEnvelope /> Email Us
                </a>
            </div>
        </div>
    );
}
