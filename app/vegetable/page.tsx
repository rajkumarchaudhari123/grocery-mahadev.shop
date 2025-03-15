"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Vegetable = {
  name: string;
  originalPrice: number;
  price: number;
  image: string;
  quantity?: number;
};

export default function Page() {
  const vegetables: Vegetable[] = [
    { name: "Potato (आलू)", price: 26, originalPrice: 35, image: "/potato.jpg" },
    { name: "Onion (प्याज)", price: 49, originalPrice: 60, image: "/onion.jpg" },
    { name: "Tomato (टमाटर)", price: 27, originalPrice: 40, image: "/tomato.jpg" },
    { name: "Carrot (गाजर)", price: 50, originalPrice: 80, image: "/carrot.jpg" },
    { name: "Cucumber (खीरा)", price: 50, originalPrice: 60, image: "/cucumber.jpg" },
    { name: "Capsicum (शिमला मिर्च)", price: 120, originalPrice: 150, image: "/capsicum.jpg" },
    { name: "Broccoli (ब्रोकोली)", price: 100, originalPrice: 150, image: "/broccoli.jpg" },
    { name: "Cauliflower (फूलगोभी)", price: 40, originalPrice: 50, image: "/cauliflower.jpg" },
    { name: "Spinach (पालक)", price: 50, originalPrice: 80, image: "/spinach.jpg" },
    { name: "Brinjal (बैंगन)", price: 60, originalPrice: 90, image: "/brinjal.jpg" },
    { name: "Pumpkin (कद्दू)", price: 40, originalPrice: 50, image: "/pumpkin.jpg" },
    { name: "Radish (मूली)", price: 40, originalPrice: 55, image: "/radish.jpg" },
    { name: "Beetroot (चुकंदर)", price: 40, originalPrice: 60, image: "/beetroot.jpg" },
    { name: "Mushroom (मशरूम) 1 piece ", price: 60, originalPrice: 70, image: "/mushroom.jpg" },
    { name: "Green Peas (हरी मटर)", price: 100, originalPrice: 150, image: "/greenpeas.jpg" },
    { name: "Garlic (लहसुन)", price: 300, originalPrice: 500, image: "/garlic.jpg" },
    { name: "Ginger (अदरक)", price: 120, originalPrice: 150, image: "/ginger.jpg" },
    { name: "Bitter Gourd (करेला)", price: 45, originalPrice: 60, image: "/bittergourd.jpg" },
    { name: "Ladyfinger (भिंडी)", price: 112, originalPrice: 130, image: "/ladyfinger.jpg" },
    { name: "Cabbage (पत्ता गोभी)", price: 33, originalPrice: 50, image: "/cabbage.jpg" },
    { name: "Green Beans (हरी फलियां)", price: 96, originalPrice: 130, image: "/greenbeans1.jpg" },
    { name: "Turnip (शलगम)", price: 40, originalPrice: 55, image: "/turnip.jpg" },
    { name: "Bell Pepper (शिमला मिर्च)", price: 280, originalPrice: 350, image: "/bellpepper.jpg" },
    { name: "Tinda (टिंडा)", price: 152, originalPrice: 200, image: "/tinda.jpg" },
    { name: "Bottle Gourd (लौकी)", price: 48, originalPrice: 60, image: "/bottlegourd.jpg" },
    { name: "Sem (सेम)", price: 100, originalPrice: 150, image: "/greenbeans.jpg" },
    { name: "Lemon (नींबू)", price: 160, originalPrice: 200, image: "/lemon.jpg" },
    { name: "Arbi (अरबी)", price: 240, originalPrice: 300, image: "/arbi.jpg" },
    { name: "Tori (तोरी)", price: 280, originalPrice: 350, image: "/tori.jpg" },
    { name: "Parwal (परवल)", price: 160, originalPrice: 200, image: "/parwal.jpg" }

  ];

  const [cart, setCart] = useState<Vegetable[]>([]);
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (orderPlaced) {
      alert("✅ Your order has been placed successfully!");
    }
  }, [orderPlaced]);

  const handleAddToCart = (veg: Vegetable) => {
    const quantity = prompt(`Enter quantity for ${veg.name} (Choose: 0.25, 0.5, or 1 KG):`, "1");
    if (!quantity || isNaN(Number(quantity)) || ![0.25, 0.5, 1].includes(Number(quantity))) {
      alert("❌ Please enter a valid quantity (0.25, 0.5, or 1 KG)");
      return;
    }

    const parsedQuantity = parseFloat(quantity);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === veg.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === veg.name ? { ...item, quantity: (item.quantity || 0) + parsedQuantity } : item
        );
      }
      return [...prevCart, { ...veg, quantity: parsedQuantity }];
    });
  };

  const totalAmount = cart.reduce((total, item) => total + (item.quantity || 0) * item.price, 0);

  const placeOrder = (cod: boolean) => {
    if (!address) {
      alert("❌ Please enter your delivery address!");
      return;
    }
    if (cart.length === 0) {
      alert("❌ Cart is empty!");
      return;
    }

    setOrderPlaced(true);

    const billText = `🛒 Order Details:\n${cart
      .map((item) => `${item.name} - ${(item.quantity || 0)} KG - ₹${(item.quantity || 0) * item.price}`)
      .join("\n")}\n\nTotal: ₹${totalAmount}\nPayment Method: ${cod ? "Cash on Delivery" : "Online Payment"}\nDelivery Address: ${address}`;

    const whatsappMessage = encodeURIComponent(billText);
    const whatsappURL = `https://wa.me/9667048566?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Fresh Vegetables</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {vegetables.map((veg) => (
          <div key={veg.name} className="bg-white p-4 rounded-lg shadow text-center">
            <Image src={veg.image} alt={veg.name} width={200} height={150} className="w-full h-32 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{veg.name}</h2>
            <p className="text-gray-600">
              <span className="line-through text-red-500">₹{veg.originalPrice}</span> ₹{veg.price} / KG
            </p>
            <button
              onClick={() => handleAddToCart(veg)}
              className="mt-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 w-80 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">Total: ₹{totalAmount}</h2>
          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border rounded w-full mt-2"
          />
          <button
            onClick={() => placeOrder(false)}
            className="w-full mt-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
          >
            Pay Online & Order
          </button>
          <button
            onClick={() => placeOrder(true)}
            className="w-full mt-2 px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded"
          >
            Cash on Delivery
          </button>
        </div>
      )}
    </div>
  );
}