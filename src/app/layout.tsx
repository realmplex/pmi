import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./fonts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
	title: "Home | PMI News",
	description:
		"The best place to get news for Realmplex. Detailed information on the latest affairs and events",
	openGraph: {
		title: "Home | PMI News",
		description:
			"The best place to get news for Realmplex. Detailed information on the latest affairs and events",
		url: "https://pmi.toaster.pw",
		siteName: "PMI",
		locale: "en_NZ",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex min-h-screen flex-col bg-zinc-900`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
