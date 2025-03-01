"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactOptions() {
    const [feedback, setFeedback] = useState("");

    const sendFeedback = () => {
        if (!feedback.trim()) {
            alert("Please enter your feedback before submitting!");
            return;
        }

        const message = encodeURIComponent(`Feedback: ${feedback}`);
        const phoneNumber = "9667048566"; // WhatsApp number

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-100 to-green-300 min-h-screen">
            <h1 className="text-4xl font-extrabold text-green-800 mb-8">Contact Us</h1>
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6 sm:max-w-md text-center">
                {/* Business Info */}
                <div className="text-lg font-semibold text-gray-700">
                    <p>Name: <span className="text-green-800">Rajkumar Chaudhari</span></p>
                    <p>Business: <span className="text-green-800">Grocery Order Services</span></p>
                    <p>Location: <span className="text-green-800">Hong Kong</span></p>
                </div>

                {/* Feedback Box */}
                <textarea 
                    placeholder="Your Feedback..." 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    rows={4} 
                    required
                ></textarea>

                {/* Submit Button */}
                <button 
                    onClick={sendFeedback} 
                    className="w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    <FaWhatsapp size={20} /> Send via WhatsApp
                </button>
            </div>
        </div>
    );
}
