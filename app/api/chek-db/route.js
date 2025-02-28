import { NextResponse } from "next/server";
import pool from "@/lib/db"; // ✅ Ensure correct path

export async function GET() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();

    return NextResponse.json({ message: "✅ MySQL is connected!" });
  } catch (error) {
    return NextResponse.json(
      { error: "❌ MySQL Connection Failed!", details: error.message },
      { status: 500 }
    );
  }
}
