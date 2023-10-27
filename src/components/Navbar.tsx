import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-zinc-800">
			<div className="mx-auto flex max-w-[1120px] items-center">
				<Link
					className="m-4 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-500 bg-clip-text text-2xl font-bold  text-transparent md:text-3xl min-[1120px]:ml-2.5"
					href="/"
				>
					PMI
				</Link>
				<Link
					className="m-2 text-base font-bold text-zinc-500 decoration-2 hover:underline md:text-xl"
					href="/"
				>
					Home
				</Link>
				<Link
					className="m-2 text-base font-bold text-zinc-500 decoration-2 hover:underline md:text-xl"
					href="/posts"
				>
					Posts
				</Link>
			</div>
		</nav>
	);
}
