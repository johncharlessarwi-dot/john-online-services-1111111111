import { NextRequest, NextResponse } from "next/server";

// PeterPay Payment Integration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, amount, phone } = body;

    if (!orderId || !amount || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with PeterPay API
    // const response = await fetch(
    //   `${process.env.PETERPAY_BASE_URL}/checkout/push`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${process.env.PETERPAY_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       phone,
    //       amount,
    //       reference: orderId,
    //       description: "JOSA Service Payment",
    //     }),
    //   }
    // );

    return NextResponse.json({
      success: true,
      message: "Payment initiated",
      data: {
        status: "PENDING",
        peterpayId: "temp_peterpay_id",
      },
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Webhook for PeterPay payment status updates
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { transactionId, status } = body;

    // TODO: Update payment status in database
    // await prisma.payment.update({
    //   where: { peterpayId: transactionId },
    //   data: { status, peterpayStatus: status }
    // });

    return NextResponse.json({
      success: true,
      message: "Payment status updated",
    });
  } catch (error) {
    console.error("Payment webhook error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
