import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Election season coming soon in Jonasland and Potato
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 06/08/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="Jonasland and Potato Empire flags"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					With the server slowly starting to regain steam, two different nations
					have announced the next instances of their democratic cycle.
					<br />
					<br />
					Both Jonasland and the Potato Empire have confirmed that they will be
					holding elections soon. Jonasland&apos;s elections will be to elect
					the next government. This election should have happened on July 12th,
					however everyone forgot about it. The Potato election will be to elect
					the next Potato Council, which will decide the governors as well as
					His Majesty&apos;s Government.
					<br />
					<br />
					Potato has confirmed that it&apos;s next election will occur on
					September 1st, with both campaigning and registration opening on the
					15th of August. It is expected that all three currently-existing
					parties (Potato Democrats, Action Party, United Crop Party) will run.
					Topics on the board include the future of Potato, as well as the
					growing number of incomplete projects dotting the nation. Albert
					Tower, which has laid incomplete since October, in particular has
					garnered the annoyance of Thailand residents.
					<br />
					<br />
					Jonasland has not confirmed any dates for it&apos;s election. It is
					expected that both currently-existing parties (SDP and JRM) will run.
					Both parties seem to collectively agree on many things, including the
					environment, foreign relations, development, and trade. However,
					unlike the JRM, the SDP is opposed to mass logging as well as the
					construction of a mob farm off the coast of Jonasland (which JVTA
					openly claims is &quot;ruining the view of the ocean&quot;).
					<br />
					<br />
					Follow PMI for more information.
				</p>
			</div>
		</main>
	);
}
