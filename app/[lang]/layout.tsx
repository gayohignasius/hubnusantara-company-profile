import "./globals.css";
import Navbar from "@/components/elements/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/elements/Footer";
import { getDictionary } from "@/lib/dictionary";
import { Locale, i18n } from "@/i18n.config";

export const metadata: Metadata = {
	title: "Hubnusantara",
	description: "Dive you into the maritime businesses and activities",
};

// to deploy statically
// export async function generateStaticParams() {
// 	return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	const intl = await getDictionary(params.lang);
	return (
		<html>
			<body className="scroll-smooth" suppressHydrationWarning={true}>
				<Navbar navigation={intl.navigation} lang={params.lang} />
				{children}
				<Footer footer={intl.footer} />
			</body>
		</html>
	);
}
