import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const { ip, nextUrl } = req;

//   nextUrl.searchParams.set('clientIp', `${ip}`);

//   return NextResponse.rewrite(nextUrl);
// }
export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
