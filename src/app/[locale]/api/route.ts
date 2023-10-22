import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import requestIp from 'request-ip';

export async function GET(req: Request) {
  const detectedIp = requestIp.getClientIp(req)

  setCookie("user-ip", detectedIp);
  localStorage.setItem('user-ip', JSON.stringify(detectedIp))
  // res.status(200).json(detectedIp);
};
