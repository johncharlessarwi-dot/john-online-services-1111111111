import { NextRequest, NextResponse } from "next/server";
import { validateEmail, validatePassword } from "@/lib/validation";
import { createToken } from "@/lib/auth";

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

    // TODO: Hash password and save user to database using Prisma
    // const user = await prisma.user.create({
    //   data: {
    //     email,
    //     password: await hash(password),
    //     roleId: "customer_role_id"
    //   }
    // });

    // Create JWT token
    const token = await createToken({
      userId: "temp_user_id",
      email: email,
      roleId: "customer",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        data: {
          token,
          user: {
            id: "temp_user_id",
            email,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
