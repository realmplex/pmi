import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Attempt to rig mod elections foiled; perpetrator unknown
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 15/10/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Realmplex logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					TaylorWorld revealed today that an attempt had been made to rig the
					moderator elections.
					<br />
					<br /> The news of its discovery was published today in a short
					statement on the Discord. The statement read, &quot;Whoever tried to
					rig the election by doing multiple responses with random numbers as
					voter id&apos;s instead of actual ones, I&apos;m on to you.&quot; The
					votes in question were all half-votes; presumably, this means that
					only two of the four candidates were selected.
					<br />
					<br /> A blame game has since ensued as to who the perpetrator was.
					LEAN LOVER and Jom have both accused each other, though an audio clip
					published by SandwichPress showed Jom stating that he would blame LEAN
					LOVER. It is unknown if either of them did in fact attempt to rig the
					vote.
					<br />
					<br /> The mod elections are expected to close on or before October
					21st, 2023. Four candidates are running; Jom (who was moderator until
					his firing on October 11th), LEAN LOVER, JVTA, and RoryRDMB.
				</p>
			</div>
		</main>
	);
}
