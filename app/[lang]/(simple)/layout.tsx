import { i18n } from "@/i18n.config";
import "../../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hubnusantara",
	description: "Dive you into the maritime businesses and activities",
};

// to deploy statically
// export async function generateStaticParams() {
// 	return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default async function SimpleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="w-full h-screen">{children}</div>;
}
