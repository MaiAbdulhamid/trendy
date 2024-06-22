import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const SECURE_KEY =
  "rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL";

export async function GET(request: NextRequest) {
  // you can get `headers` `searchParams` `params` etc. from this request object
  const searchParams = request.nextUrl.searchParams;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SECURE_KEY}`,
  };
  try {
    const response = await axios.post(
      "https://apitest.myfatoorah.com/v2/getPaymentStatus",
      {
        key: searchParams.get("paymentId"),
        keyType: "paymentId",
        ErrorUrl: "https://trendy-eta.vercel.app/error",
      },
      { headers }
    );

    console.log(response.data.Data.InvoiceId);
    // Send the payment URL back to the client
    return NextResponse.redirect(
      `https://trendy-eta.vercel.app/checkout?invoiceId=${response.data.Data.InvoiceId}`
    );
  } catch (error) {
    console.error("MyFatoorah Callback error:", error);
    return new Response("Payment error", { status: 500 });
  }
}
