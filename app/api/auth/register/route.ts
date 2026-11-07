import { NextRequest, NextResponse } from "next/server";
import { validateEmail, validatePassword } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validation
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { success: false, errors: passwordValidation.errors },
        { status: 400 }
      );
    }

    // No persistent account store is wired to this route yet.
    return NextResponse.json(
      { success: false, error: "Registration is temporarily unavailable" },
      { status: 503 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
