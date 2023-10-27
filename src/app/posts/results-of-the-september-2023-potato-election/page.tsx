import Image from "next/image";

import banner from "./assets/banner.png";
import central_results from "./assets/central_results.png";
import thailand_results from "./assets/thailand_results.png";
import wench_results from "./assets/wench_results.png";
import allied_results from "./assets/allied_results.png";
import final_results from "./assets/final_results.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Results of the September 2023 Potato election
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 06/09/2023</p>
				<Image className="my-5 self-center" src={banner} alt="PMI Elections" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Hello, and welcome to PMI&apos;s coverage of the September 2023
					election in the Potato Empire. The results have been released, and we
					are ready to analyse them in detail.
				</p>
				<p className="text-zinc-600">
					<br />
					<i>
						DISCLAIMER: Bird Land&apos;s results are not listed as its election
						has not yet occurred.
					</i>
				</p>
				<h2 className="text-2xl font-bold text-zinc-400">
					<br />
					Potato Central
				</h2>
				<Image
					className="my-5 self-center"
					src={central_results}
					alt="Potato Central Election Results"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					RoryRDMB has won the seat for Potato Central. He defeated JVTA of the
					Potato Democrats and KingStella of the Action Party.
					<br />
					The UCP started off with 6 votes, and eventually gained all 3 of the
					Action Party&apos;s votes.
				</p>
				<h2 className="text-2xl font-bold text-zinc-400">
					<br />
					Thailand
				</h2>
				<Image
					className="my-5 self-center"
					src={thailand_results}
					alt="Thailand Election Results"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					RoryRDMB, the current seat holder, has won the seat for Thailand. He
					defeated JVTA of the Potato Democrats. Rory won in a landslide of 5
					votes to 1.
				</p>
				<h2 className="text-2xl font-bold text-zinc-400">
					<br />
					Wench
				</h2>
				<Image
					className="my-5 self-center"
					src={wench_results}
					alt="Wench Election Results"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					SpecShark has won the seat for Wench in a unanimous vote. He was
					elected unopposed, though incumbent seat holder SandwichPress was
					listed on the ballot, despite being unregistered.
					<br />
					<br />
					There was only one vote placed for the Wench seat.
				</p>
				<h2 className="text-2xl font-bold text-zinc-400">
					<br />
					Allied Seat
				</h2>
				<Image
					className="my-5 self-center"
					src={allied_results}
					alt="Allied Election Results"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					SpecShark has won the Allied Seat. He defeated KingStella of the
					Action Party.
				</p>
				<h2 className="text-2xl font-bold text-zinc-400">
					<br />
					Final Numbers
				</h2>
				<Image
					className="my-5 self-center"
					src={final_results}
					alt="Final Election Results"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Both the PD and the UCP have finished the election with two seats
					each. The Action Party, who had finished on top last election, have
					been knocked out of parliament. There are also no independent
					candidates like last time.
					<br />
					<br />A question that&apos;s asked now is how the Parliament is going
					to work this time around. Despite there being four seats, only two
					candidates have been elected.
					<br />
					<br />
					It is possible that the Bird Land election - which Potato Democrats
					has a candidate running for - will be the deciding vote for this
					election. Until then, this is PMI, signing off.
				</p>
			</div>
		</main>
	);
}
