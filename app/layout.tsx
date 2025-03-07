import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grocery Mahadev - Fresh Vegetables & Fruits | Best Online Grocery Store",
  description: "Get high-quality fresh vegetables and fruits at affordable prices. Shop online with fast home delivery at Grocery Mahadev.",
  keywords: "online grocery, fresh vegetables, fresh fruits, grocery delivery, best grocery store, grocery-mahadev.shop",
  openGraph: {
    title: "Grocery Mahadev - Best Online Grocery Store",
    description: "Buy fresh vegetables and fruits at the best prices with home delivery.",
    url: "https://grocery-mahadev.shop",
    siteName: "Grocery Mahadev",
    images: [
      {
        url: "https://grocery-mahadev.shop/A_professional_Open_Graph_(OG)_image_for_a_grocery.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mahadev - Fresh Vegetables & Fruits",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="min-h-screen"> 
        {children }
        </div>
        <Footer/>
      </body>
    </html>
  );
}
