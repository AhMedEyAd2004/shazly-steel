import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const locale = acceptLanguage.startsWith("ar") ? "ar" : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
