import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const SECURE_KEY = process.env.NEXT_PUBLIC_MYFATOORAH_SECURE_KEY;

export async function GET(request: NextRequest) {
  // you can get `headers` `searchParams` `params` etc. from this request object
  const searchParams = request.nextUrl.searchParams;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SECURE_KEY}`,
  };
  try {
    const response = await axios.post(
      "https://api.myfatoorah.com/v2/getPaymentStatus",
      {
        key: searchParams.get("paymentId"),
        keyType: "paymentId",
        ErrorUrl:
          process.env.NEXT_PUBLIC_ERROR_URL || "http://localhost:3000/error",
      },
      { headers }
    );

    console.log(response.data.Data.InvoiceId);
    // Send the payment URL back to the client
    return NextResponse.redirect(
      `http://localhost:3000/checkout?invoiceId=${response.data.Data.InvoiceId}`
    );
  } catch (error) {
    console.error("MyFatoorah Callback error:", error);
    return new Response("Payment error", { status: 500 });
  }
}
