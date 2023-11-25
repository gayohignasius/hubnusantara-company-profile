import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales;
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

	const locale = matchLocale(languages, locales, i18n.defaultLocale);
	return locale;
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);

		if (locale === i18n.defaultLocale) {
			return NextResponse.rewrite(
				new URL(
					`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
					request.url
				)
			);
		}

		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
				request.url
			)
		);
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: [
		"/((?!api|assets|_next/static|_next/image|images|logo|favicon.ico).*)",
	],
	// matcher: ["/((?!api|assets|.*|\\..*|_next).*)", "/"],
};

// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { NextRequest } from "next/server";

// let locales = ["en", "id"];
// let defaultLocale = "en";

// // Get the preferred locale, similar to the above or using a library
// function getLocale(request: NextRequest) {
// 	const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
// 	let headers = { "accept-language": acceptedLanguage };
// 	let languages = new Negotiator({ headers }).languages();

// 	return match(languages, locales, defaultLocale);
// }

// export function middleware(request: NextRequest) {
// 	// Check if there is any supported locale in the pathname
// 	const { pathname } = request.nextUrl;
// 	const pathnameHasLocale = locales.some(
// 		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
// 	);

// 	if (pathnameHasLocale) return;

// 	// Redirect if there is no locale
// 	const locale = getLocale(request);
// 	request.nextUrl.pathname = `/${locale}${pathname}`;
// 	// e.g. incoming request is /products
// 	// The new URL is now /en-US/products
// 	return Response.redirect(request.nextUrl);
// }

// export const config = {
// 	matcher: [
// 		// Skip all internal paths (_next)
// 		"/((?!api|assets|.*|\\..*|_next).*)",
// 		// Optional: only run on root (/) URL
// 		// '/'
// 	],
// };
