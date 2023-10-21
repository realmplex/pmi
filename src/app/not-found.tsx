export default function NotFound() {
	return (
		<main className="background-image">
			<div className="grid justify-center">
				<div className="h-[100vh] w-[70vw] shadow-lg backdrop-blur-sm md:w-[30vw]">
					<h1 className="mt-10 text-center text-3xl font-bold text-yellow-400 drop-shadow-lg contrast-more:text-zinc-700">
						404
					</h1>
					<p className="mt-5 text-center text-xl font-medium text-yellow-300 drop-shadow-lg contrast-more:text-zinc-700">
						Page not found
					</p>
				</div>
			</div>
		</main>
	);
}
