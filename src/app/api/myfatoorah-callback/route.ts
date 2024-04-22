import axiosInstance from "@/app/[locale]/lib/axios";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const SECURE_KEY =
  "WK51vc4-orJ0GOtWWrqoZJVeOvdvy-Y6JX67BAagWGdjOHktXKTJ16n1WY3gbY2xi9x97rc-XRbelB0TB3yaCAnB7txrr1MI31mBJUJCUMhyYK7q1d4zB35803cDLqLMnTij2tUREux-qoEgZr3-fBkXZGoyE0Gbp8ac1TZpsfDzpNGpNZIHIlfwcL7t9btrO8-pI1s-0_9KAMd2FnPSPsvovKuUh466tcZb-dilVdJVMFxWWAfYyc3pKK2xNj-yXIPOM82UYyKlyaDtpb9FMnYBtD1DjKYiqzpC2_z5Vjyp_9lxCTQ7LgEob--VXPT3PBnPzDnbB93NlDq_zN3Lu1ZuZtDb61JGgNTAECm6NAX7JQWXoTQXO8Z9S1pYU8_qLn62qxo-XO51wBMDHkD3ZRvR6pjpRopsddnjJdIneOZ1P2LTbVMRGRwgKtzwgAM0rb-59DTQazDU0M8-EdMLXM9ynvRJ6ZfvDeDimdtzsQdi64QHGw85HGE7KpkjXmva8jonM9YforA8GABkl5t14xTnUDxD7-84HM8L3lpX27BLlS03kSpa2TjkED3JTn8ucZgtbuKwYHT6ukP812bpwS1ZpvIeUHQQ7A5xH5jzRhLJY8Ne3T7yX54BnI4ak6gMV5MS_9nEdBZLPGDOT1h_SKfMrbtsxz_p0ZaV8pY_JmWMLkFS0Dd6TmJ9-a3iV4XKFscmNQ";

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
    return NextResponse.redirect(`https://trendy-qa.com/checkout?invoiceId=${response.data.Data.InvoiceId}`)
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
