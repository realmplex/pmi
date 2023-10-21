import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "All Posts | PMI News",
	description:
		"The best place to get news for Realmplex. Detailed information on the latest affairs and events",
	openGraph: {
		title: "All Posts | PMI News",
		description:
			"The best place to get news for Realmplex. Detailed information on the latest affairs and events",
		url: "https://pmi.toaster.pw/posts",
		siteName: "PMI",
		locale: "en_NZ",
		type: "website",
	},
};

export default function PostsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
