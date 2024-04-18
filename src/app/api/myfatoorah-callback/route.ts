import axiosInstance from "@/app/[locale]/lib/axios";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const SECURE_KEY =
  "rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL";

export async function GET(request: NextRequest) {
  // you can get `headers` `searchParams` `params` etc. from this request object
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);
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
      },
      { headers }
    );

    console.log(response.data.Data.InvoiceId);
    // Send the payment URL back to the client
    return NextResponse.redirect(`https://trendy-maiabdulhamids-projects.vercel.app/checkout?invoiceId=${response.data.Data.InvoiceId}`)
  } catch (error) {
    console.error("MyFatoorah Callback error:", error);
    return new Response("Payment error", { status: 500 });
  }

}
// export async function GET(request: NextRequest) {
//   // Parse the query parameters
//   const searchParams = request.nextUrl.searchParams;

//   // Extract necessary data from the query parameters
//   const paymentId = searchParams.get("paymentId");

//   // Now you can use these details to handle the successful payment
//   console.log("Payment ID:", paymentId);
//   const preparedData = {
//     invoice_id: paymentId,
//     payment_method: "1",
//   };
//   try {
//     await axiosInstance.post("order/complete", preparedData);

//     // Send the payment URL back to the client
//     return new Response("Success", { status: 200 });
//   } catch (error) {
//     console.error("Callback error:", error);
//     return new Response("Error", { status: 500 });
//   }
// }
