import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex items-center bg-zinc-800">
			<Link
				href="/"
				className="m-4 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-500 bg-clip-text text-2xl  font-bold text-transparent md:text-3xl"
			>
				PMI
			</Link>
			<Link
				href="/"
				className="m-2 text-base font-bold text-zinc-500 decoration-2 hover:underline md:text-xl"
			>
				Home
			</Link>
			<Link
				href="/posts"
				className="m-2 text-base font-bold text-zinc-500 decoration-2 hover:underline md:text-xl"
			>
				Posts
			</Link>
		</nav>
	);
}
