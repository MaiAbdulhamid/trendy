import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// import requestIp from 'request-ip';

// export async function GET(req: Request) {
//   const detectedIp = requestIp.getClientIp(req)

//   setCookie("user-ip", detectedIp);
//   localStorage.setItem('user-ip', JSON.stringify(detectedIp))
//   // res.status(200).json(detectedIp);
// };

export async function GET(req: Request) {
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  setCookie("user-ip", ip);
  localStorage.setItem('user-ip', JSON.stringify(ip))
}
