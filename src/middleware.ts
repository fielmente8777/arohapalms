import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 410 Gone for expired seasonal offers per client strategy doc
  if (pathname.startsWith("/articles/monsoon-bonanza-50-per-cent-off-luxury-villas-in-goa")) {
    return new NextResponse("410 Gone: This offer has expired.", {
      status: 410,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/articles/monsoon-bonanza-50-per-cent-off-luxury-villas-in-goa/:path*"],
};
