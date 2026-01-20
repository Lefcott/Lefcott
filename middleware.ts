import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n/config";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ya tiene locale
  if (locales.some((l) => pathname.startsWith(`/${l}`))) {
    return;
  }

  const acceptLanguage = request.headers.get("accept-language");
  const browserLocale = acceptLanguage?.split(",")[0].split("-")[0];

  const locale = locales.includes(browserLocale as "en" | "es")
    ? browserLocale
    : defaultLocale;

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
