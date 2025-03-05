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
    { name: "Apple", price: 120, image: "/apple.jpg" },
    { name: "Banana", price: 40, image: "/banana.jpg" },
    { name: "Orange", price: 80, image: "/orange.jpg" },
    { name: "Grapes", price: 90, image: "/grapes.jpg" },
    { name: "Mango", price: 150, image: "/mango.jpg" },
    { name: "Pineapple", price: 100, image: "/pineapple.jpg" },
    { name: "Strawberry", price: 200, image: "/strawberry.jpg" },
    { name: "Watermelon", price: 50, image: "/watermelon.jpg" },
    { name: "Papaya", price: 60, image: "/papaya.jpg" },
    { name: "Kiwi", price: 140, image: "/kiwi.jpg" },
    { name: "Pomegranate", price: 180, image: "/pomegranate.jpg" },
    { name: "Guava", price: 70, image: "/guava.jpg" },
    { name: "Peach", price: 120, image: "/peach.jpg" },
    { name: "Plum", price: 130, image: "/plum.jpg" },
    { name: "Pear", price: 90, image: "/pear.jpg" },
    { name: "Litchi", price: 160, image: "/litchi.jpg" },
    { name: "Coconut", price: 50, image: "/coconut.jpg" },
    { name: "Chikoo", price: 80, image: "/chikoo.jpg" },
    { name: "Dragon Fruit", price: 250, image: "/dragonfruit.jpg" },
    { name: "Blueberry", price: 300, image: "/blueberry.jpg" },
  ];

  const [cart, setCart] = useState<Product[]>([]);
  const [address, setAddress] = useState("");

  const handleAddToCart = (product: Product) => {
    const quantity = prompt(`Enter quantity for ${product.name} (Choose: 0.5 or 1 KG):`, "1");
    if (!quantity || isNaN(Number(quantity)) || ![0.5, 1].includes(Number(quantity))) {
      alert("❌ Please enter a valid quantity (0.5 or 1 KG)");
      return;
    }

    const parsedQuantity = parseFloat(quantity);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: (item.quantity || 0) + parsedQuantity }
            : item
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
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Fresh Fruits 🍎🍌</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {products.map((product) => (
          <div key={product.name} className="bg-white p-5 rounded-xl shadow-md text-center transition hover:shadow-lg">
            <div className="relative w-40 h-40 mx-auto mb-3">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price} / KG</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="w-full max-w-lg mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-2">🛍️ Your Cart</h2>
          <hr className="mb-4" />
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.name} className="flex justify-between py-3">
                <span className="font-medium">{item.quantity} KG {item.name}</span>
                <span className="text-green-700 font-semibold">₹{item.price * (item.quantity || 0)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold text-green-800">
            Total: ₹{cart.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0)}
          </div>

          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-4 p-3 border rounded-lg w-full text-gray-700"
          />

          <button
            onClick={generateBill}
            className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition w-full font-medium"
          >
            Place Order on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
