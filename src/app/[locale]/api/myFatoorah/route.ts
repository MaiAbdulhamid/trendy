import axios from "axios";
import { NextRequest } from "next/server";

// MyFatoorah API credentials
const SECURE_KEY = process.env.MYFATOORAH_SECURE_KEY;

export async function POST(request: NextRequest) {
  const { totalAmount, phoneNumber, countryCode, currency, customerName } =
    await request.json();

  const paymentData = {
    NotificationOption: "SMS",
    InvoiceValue: totalAmount,
    CustomerMobile: phoneNumber,
    CustomerName: customerName,
    MobileCountryCode: countryCode,
    DisplayCurrencyIso: currency,
    CallBackUrl:
      process.env.CALLBACK_URL ||
      "http://localhost:3000/api/myfatoorah-callback",
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SECURE_KEY}`,
  };

  try {
    const response = await axios.post(
      "https://api.myfatoorah.com/v2/SendPayment",
      paymentData,
      { headers }
    );

    const paymentUrl = response.data.Data.InvoiceURL;
    // Send the payment URL back to the client
    return new Response(JSON.stringify({ paymentUrl }), { status: 200 });
  } catch (error) {
    console.error("MyFatoorah payment error:", error);

    if (axios.isAxiosError(error)) {
      console.error("Error response data:", error.response?.data);
      return new Response(
        JSON.stringify({
          message: "Payment error",
          details: error.response?.data,
        }),
        { status: error.response?.status || 500 }
      );
    } else {
      return new Response("Unexpected error", { status: 500 });
    }
  }
}
