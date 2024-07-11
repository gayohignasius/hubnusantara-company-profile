import "../../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hubnusantara",
	description: "Dive you into the maritime businesses and activities",
};

export default async function SimpleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="w-full h-screen">{children}</div>;
}
