import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Growing discontent as server held hostage over disagreements
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 09/05/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Realmplex logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-600">
					<i>
						This article has been hastily written due to the severity of the
						current events. Data may be inaccurate.
					</i>
				</p>
				<p className="text-zinc-400">
					<br />
					Realmplex may be going through a second Chaos Day today. And this
					time, it&apos;s worse.
					<br />
					<br />
					Right now, Realmplex is &quot;being held hostage&quot; by server host
					SandwichPress, who had been banned earlier today for duping railway
					tracks and carpets. This occurred amidst growing arguments over
					SpecShark, the current admin, introducing a full ban on slurs; this
					rule has since been backtracked. TaylorWorld says he may remove the
					realmplex.com domain, saying that he does not want SandwichPress using
					it; he has lost access to the server amidst the situation. There is no
					word from Kiddorox as far as we are concerned.
					<br />
					<br />
					PMI understands there have been negotiations between the two sides.
					They have agreed to draft new rules entirely and will discuss this
					tomorrow (10 May 2023).
					<br />
					<br />
					Follow PMI for further information.
				</p>
			</div>
		</main>
	);
}
