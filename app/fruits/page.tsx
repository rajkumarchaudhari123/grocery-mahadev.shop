"use client";
import React, { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

export default function Page() {
  const products: Product[] = [
    { name: "Apple", price: 120, image: "/images/apple.jpg" },
    { name: "Banana", price: 40, image: "/images/banana.jpg" },
    { name: "Orange", price: 80, image: "/images/orange.jpg" },
    { name: "Grapes", price: 90, image: "/images/grapes.jpg" },
  ];

  const [cart, setCart] = useState<Product[]>([]);
  const [address, setAddress] = useState("");

  // Temporary usage to avoid ESLint warning
  console.log(cart, address);

  const handleAddToCart = (product: Product) => {
    const quantity = prompt(`Enter quantity for ${product.name} (in KG):`, "1");
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) return;

    const parsedQuantity = parseFloat(quantity);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: (item.quantity || 0) + parsedQuantity } : item
        );
      }
      return [...prevCart, { ...product, quantity: parsedQuantity }];
    });
  };

  const generateBill = () => {
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
    billText += `\nDelivery Address: ${address}`;
    billText += `\nPayment Method: Cash on Delivery`;

    const whatsappMessage = encodeURIComponent(billText);
    const whatsappURL = `https://wa.me/9667048566?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Fresh Fruits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.name} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image src={product.image} alt={product.name} width={150} height={150} className="mx-auto mb-2 rounded-lg" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">Price: ₹{product.price} / KG</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Bill Section */}
      {cart.length > 0 && (
        <div className="w-full max-w-lg mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Grocery</h2>
          <p className="text-gray-500 text-sm">
            Website: <a href="https://mhadev.shop" className="text-blue-600">mhadev.shop</a>
          </p>
          <p className="text-gray-500 text-sm mb-4">Contact: 8800759538</p>
          <hr className="mb-4" />

          <h3 className="text-xl font-bold mb-3">Your Bill</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.name} className="flex justify-between border-b py-2">
                <span>{item.quantity} KG {item.name}</span>
                <span>₹{item.price * (item.quantity || 0)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-semibold text-green-800">
            Total: ₹{cart.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0)}
          </div>

          {/* Address Input */}
          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-4 p-2 border rounded w-full"
          />

          {/* Place Order Button */}
          <button
            onClick={generateBill}
            className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition w-full"
          >
            Place Order on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
