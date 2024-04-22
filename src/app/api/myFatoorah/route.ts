import axios from "axios";
import { NextRequest } from "next/server";

// MyFatoorah API credentials
const SECURE_KEY = "WK51vc4-orJ0GOtWWrqoZJVeOvdvy-Y6JX67BAagWGdjOHktXKTJ16n1WY3gbY2xi9x97rc-XRbelB0TB3yaCAnB7txrr1MI31mBJUJCUMhyYK7q1d4zB35803cDLqLMnTij2tUREux-qoEgZr3-fBkXZGoyE0Gbp8ac1TZpsfDzpNGpNZIHIlfwcL7t9btrO8-pI1s-0_9KAMd2FnPSPsvovKuUh466tcZb-dilVdJVMFxWWAfYyc3pKK2xNj-yXIPOM82UYyKlyaDtpb9FMnYBtD1DjKYiqzpC2_z5Vjyp_9lxCTQ7LgEob--VXPT3PBnPzDnbB93NlDq_zN3Lu1ZuZtDb61JGgNTAECm6NAX7JQWXoTQXO8Z9S1pYU8_qLn62qxo-XO51wBMDHkD3ZRvR6pjpRopsddnjJdIneOZ1P2LTbVMRGRwgKtzwgAM0rb-59DTQazDU0M8-EdMLXM9ynvRJ6ZfvDeDimdtzsQdi64QHGw85HGE7KpkjXmva8jonM9YforA8GABkl5t14xTnUDxD7-84HM8L3lpX27BLlS03kSpa2TjkED3JTn8ucZgtbuKwYHT6ukP812bpwS1ZpvIeUHQQ7A5xH5jzRhLJY8Ne3T7yX54BnI4ak6gMV5MS_9nEdBZLPGDOT1h_SKfMrbtsxz_p0ZaV8pY_JmWMLkFS0Dd6TmJ9-a3iV4XKFscmNQ";

export async function POST(request: NextRequest) {
  const { totalAmount, phoneNumber, countryCode, currency } = await request.json();

  const paymentData = {
    NotificationOption: "SMS",
    InvoiceValue: totalAmount,
    CustomerMobile: phoneNumber,
    CustomerName: "Trendy Customer",
    MobileCountryCode: countryCode,
    DisplayCurrencyIso: currency,
    CallBackUrl: 'https://trendy-qa.com/api/myfatoorah-callback',
    ErrorUrl: 'https://trendy-qa.com/error'
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SECURE_KEY}`,
  };

  try {
    const response = await axios.post(
      'https://apitest.myfatoorah.com/v2/SendPayment',
      paymentData,
      { headers }
    );

    const paymentUrl = response.data.Data.InvoiceURL;
    // Send the payment URL back to the client
    return new Response(JSON.stringify({ paymentUrl }), { status: 200 });
  } catch (error) {
    console.error('MyFatoorah payment error:', error);
    return new Response('Payment error', { status: 500 });
  }
}
