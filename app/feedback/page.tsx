"use client";
import React, { useState } from "react";
import { FaPhone, FaSms, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactOptions() {
    const [feedback, setFeedback] = useState("");

    const sendFeedback = () => {
        const message = encodeURIComponent(`Feedback: ${feedback}`);
        const phoneNumber = "+9667048566";
        const email = "rajk5591230@gmail.com";

        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-100 to-green-300 min-h-screen">
            <h1 className="text-4xl font-extrabold text-green-800 mb-8">Contact Us</h1>
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6 sm:max-w-md text-center">
                <div className="text-lg font-semibold text-gray-700">
                    <p>Name: Rajkumar Chaudhari</p>
                    <p>Business: Grocery Order Services</p>
                    <p>Location: Hong Kong</p>
                </div>
                <textarea 
                    placeholder="Your Feedback" 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full p-4 border rounded-lg" 
                    rows={4} 
                    required
                ></textarea>
                <button onClick={sendFeedback} className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </div>
    );
}