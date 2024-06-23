import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getMyFatoorahBaseURL } from "../../utils/myFatoorahBaseUrls";
import { getCookie } from "cookies-next";

const SECURE_KEY = process.env.MYFATOORAH_SECURE_KEY;

export async function GET(request: NextRequest) {
  // you can get `headers` `searchParams` `params` etc. from this request object
  const searchParams = request.nextUrl.searchParams;
  // Get the country object from the cookie
  const countryObjectCookie = getCookie("country_object", { req: request });

  // Parse the cookie and get the currency
  let currency;
  try {
    const countryObject = JSON.parse(countryObjectCookie || "{}");
    currency = countryObject.currency_en;

    // if (!currency) {
    //   throw new Error("Currency not found in cookie");
    // }
  } catch (error) {
    console.error("Error parsing country object cookie:", error);
    // return new Response("Invalid country object cookie", { status: 400 });
  }

  // Get the base URL for the MyFatoorah API
  const baseUrl = getMyFatoorahBaseURL(currency);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SECURE_KEY}`,
  };

  try {
    const response = await axios.post(
      `${baseUrl}/v2/getPaymentStatus`,
      {
        key: searchParams.get("paymentId"),
        keyType: "paymentId",
        ErrorUrl: process.env.ERROR_URL || "http://localhost:3000/error",
      },
      { headers }
    );

    console.log(response.data.Data.InvoiceId);
    // Send the payment URL back to the client
    return NextResponse.redirect(
      `https://trendy-qa.com/checkout?invoiceId=${response.data.Data.InvoiceId}`
    );
  } catch (error) {
    console.error("MyFatoorah Callback error:", error);
    return new Response("Payment error", { status: 500 });
  }
}
