"use client";
import React, { useState } from "react";

type Vegetable = {
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

export default function Page() {
  const vegetables: Vegetable[] = [
    { name: "Potato", price: 25, image: "https://www.tasteofhome.com/wp-content/uploads/2022/07/GettyImages-1224918845-e1658929817975.jpg?w=2036" },
    { name: "Onion", price: 30, image: "https://tse4.mm.bing.net/th?id=OIP.QekfxFaXXvJBEI5ffzw0uAHaEK&pid=Api&P=0&h=180" },
    { name: "Tomato", price: 20, image: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg" },
    { name: "Carrot", price: 40, image: "https://tse3.mm.bing.net/th?id=OIP.CZkr0J3LeRsMafEnZZGpcAHaFj&pid=Api&P=0&h=180" },
    { name: "Cucumber", price: 15, image: "https://tse2.mm.bing.net/th?id=OIP.qbRVMJDspnzsOYtIPMi-cwHaD4&pid=Api&P=0&h=180" },
    { name: "Spinach", price: 10, image: "https://tse3.mm.bing.net/th?id=OIP._inzdgVRTZrGZSL_9VciRQHaE8&pid=Api&P=0&h=180" },
    { name: "Cauliflower", price: 50, image: "https://tse1.mm.bing.net/th?id=OIP.Yreh1x7zzn1u3i6gDucD3wHaE-&pid=Api&P=0&h=180" },
    { name: "Broccoli", price: 80, image: "https://tse2.mm.bing.net/th?id=OIP.PqBuI37DpmTd1vErFt6I4QHaEo&pid=Api&P=0&h=180" },
  ];

  const [cart, setCart] = useState<Vegetable[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [address, setAddress] = useState("");

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

  const generateBill = (cod: boolean) => {
    if (!address) {
      alert("Please enter your delivery address!");
      return;
    }
    
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let total = 0;
    let billText = "🛒 Order Details:\n";
    cart.forEach((item) => {
      const itemTotal = (item.quantity || 0) * item.price;
      total += itemTotal;
      billText += `${item.name} - ${(item.quantity || 0)} KG - ₹${itemTotal}\n`;
    });
    billText += `\nTotal: ₹${total}`;
    billText += cod ? "\nPayment Method: Cash on Delivery" : "\nPayment Method: Online Payment";
    billText += `\nDelivery Address: ${address}`;

    setTotalAmount(total);
    setOrderPlaced(true);

    const whatsappMessage = encodeURIComponent(billText);
    const whatsappURL = `https://wa.me/9667048566?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Fresh Vegetables</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vegetables.map((veg) => (
          <div key={veg.name} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={veg.image} alt={veg.name} className="w-full h-32 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-semibold">{veg.name}</h2>
            <p className="text-gray-600">Price: ₹{veg.price} / KG</p>
            <button
              onClick={() => handleAddToCart(veg)}
              className="mt-3 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border rounded w-80"
          />
          <button
            onClick={() => generateBill(false)}
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Pay Online & Order on WhatsApp
          </button>
          <button
            onClick={() => generateBill(true)}
            className="px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-lg"
          >
            Cash on Delivery & Order on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
