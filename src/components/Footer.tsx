import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-auto flex items-center justify-center bg-zinc-800">
			<p className="my-4 mr-10 font-medium text-zinc-500 sm:mr-16">
				&copy; {new Date().getFullYear()} toasterpw
			</p>
			<Link
				href="https://github.com/realmplex/pmi"
				target="_blank"
				className="group ml-10 font-medium text-zinc-500 underline hover:decoration-2 sm:ml-16"
			>
				<span>GitHub</span>
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 20 20"
					aria-hidden="true"
					className="inline opacity-0 transition-all group-hover:opacity-100"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
					<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
				</svg>
			</Link>
		</footer>
	);
}
