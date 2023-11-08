import Navbar from "@/components/elements/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/elements/Footer";

export const metadata: Metadata = {
	title: "Hubnusantara",
	description: "Dive you into the maritime businesses and activities",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="scroll-smooth">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
