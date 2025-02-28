import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Check karo yeh file exist karti hai ya nahi

export async function POST(req) {
  try {
    const { name, price, quantity } = await req.json();
    console.log("📥 Data received:", { name, price, quantity });

    if (!name || !price || !quantity) {
      return NextResponse.json({ error: "❌ Missing fields" }, { status: 400 });
    }

    const [result] = await pool.query(
      "INSERT INTO cart (name, price, quantity) VALUES (?, ?, ?)",
      [name, price, quantity]
    );

    console.log("✅ Inserted into DB:", result);
    return NextResponse.json({ message: "✅ Item added to cart!" });

  } catch (error) {
    console.error("❌ Error inserting into DB:", error);
    return NextResponse.json({ error: "❌ Database error", details: error.message }, { status: 500 });
  }
}
