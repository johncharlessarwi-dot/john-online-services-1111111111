import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // TODO: Verify email and password against database
    // const user = await prisma.user.findUnique({
    //   where: { email },
    //   include: { role: true }
    // });

    // Create JWT token
    const token = await createToken({
      userId: "temp_user_id",
      email: email,
      roleId: "customer",
    });

    return NextResponse.json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: {
          id: "temp_user_id",
          email,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
