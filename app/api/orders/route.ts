import { NextResponse } from "next/server";

/**
 * The Next.js order endpoints are not connected to durable storage yet.
 * Never report a successful order or return fictional identifiers.
 * Integrate authenticated persistence before enabling checkout here.
 */
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Order history is temporarily unavailable" },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST() {
  return NextResponse.json(
    { success: false, error: "Order submissions are not available through this endpoint" },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}
