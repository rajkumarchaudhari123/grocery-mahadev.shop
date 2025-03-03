"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Vegetable = {
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

export default function Page() {
  const vegetables: Vegetable[] = [
    { name: "Potato (आलू)", price: 25, image: "/potato.jpg" },
    { name: "Onion (प्याज)", price: 30, image: "/onion.jpg" },
    { name: "Tomato (टमाटर)", price: 20, image: "/tomato.jpg" },
    { name: "Carrot (गाजर)", price: 40, image: "/carrot.jpg" },
    { name: "Cucumber (खीरा)", price: 15, image: "/cucumber.jpg" },
    { name: "Capsicum (शिमला मिर्च)", price: 50, image: "/capsicum.jpg" },
    { name: "Broccoli (ब्रोकोली)", price: 80, image: "/broccoli.jpg" },
    { name: "Cauliflower (फूलगोभी)", price: 35, image: "/cauliflower.jpg" },
    { name: "Spinach (पालक)", price: 20, image: "/spinach.jpg" },
    { name: "Brinjal (बैंगन)", price: 30, image: "/brinjal.jpg" },
    { name: "Pumpkin (कद्दू)", price: 25, image: "/pumpkin.jpg" },
    { name: "Lettuce (सलाद पत्ता)", price: 45, image: "/lettuce.jpg" },
    { name: "Radish (मूली)", price: 18, image: "/radish.jpg" },
    { name: "Beetroot (चुकंदर)", price: 35, image: "/beetroot.jpg" },
    { name: "Mushroom (मशरूम)", price: 100, image: "/mushroom.jpg" },
    { name: "Sweet Corn (मीठी मकई)", price: 60, image: "/sweetcorn.jpg" },
    { name: "Green Peas (हरी मटर)", price: 70, image: "/greenpeas.jpg" },
    { name: "Garlic (लहसुन)", price: 150, image: "/garlic.jpg" },
    { name: "Ginger (अदरक)", price: 120, image: "/ginger.jpg" },
    { name: "Bitter Gourd (करेला)", price: 45, image: "/bittergourd.jpg" },
    { name: "Ladyfinger (भिंडी)", price: 50, image: "/ladyfinger.jpg" },
    { name: "Cabbage (पत्ता गोभी)", price: 30, image: "/cabbage.jpg" },
    { name: "Green Beans (हरी फलियां)", price: 55, image: "/greenbeans.jpg" },
    { name: "Zucchini (जुकीनी)", price: 90, image: "/zucchini.jpg" },
    { name: "Turnip (शलगम)", price: 40, image: "/turnip.jpg" },
    { name: "Bell Pepper (शिमला मिर्च)", price: 75, image: "/bellpepper.jpg" },
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
    const quantity = prompt(`Enter quantity for ${veg.name} (in KG):`, "1");
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) return;

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

      {/* Vegetable List */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {vegetables.map((veg) => (
          <div key={veg.name} className="bg-white p-4 rounded-lg shadow text-center">
            <Image src={veg.image} alt={veg.name} width={200} height={150} className="w-full h-32 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{veg.name}</h2>
            <p className="text-gray-600">₹{veg.price} / KG</p>
            <button
              onClick={() => handleAddToCart(veg)}
              className="mt-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
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

      {/* Order Confirmation Message */}
      {orderPlaced && (
        <div className="text-green-600 mt-4 font-semibold">
          ✅ Your order has been placed successfully!
        </div>
      )}
    </div>
  );
}
