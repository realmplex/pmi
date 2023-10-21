import Image from "next/image";

import banner from "./assets/banner.png";
import bird_land_results from "./assets/bird_land_results.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Result of the September 2023 Bird Land election
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 09/09/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="Potato Empire Flag"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Four days after the national elections, the vote to choose Bird
					Land&apos;s representative is now complete.
					<br />
					<br />
					There were three candidates, JVTA of the Potato Democrats,
					TheAllSeeingBird of The Opportunities Party, and Dumb_Catz, an
					independent candidate.
					<br />
					<br />
					Five votes were received this election.
				</p>
				<Image
					className="my-4 self-center"
					src={bird_land_results}
					alt="Bird Land Election Results"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					The results showed a clear consensus between Bird Land residents about
					reelecting the former monarch of Bird Land, TheAllSeeingBird, who
					originally intended to run as a Potato Democrats candidate, but just
					as quick as he returned to the political scene, he left the PD for a
					second time and instead created The Opportunities Party.
					<br />
					<br />
					With a result now achieved, parliament now sits at two seats for both
					Potato Democrats and the United Crop Party, and one seat for The
					Opportunities Party. Because no party has a majority, and the fact
					that the two largest parties are tied, a coalition must be formed.
					<br />
					<br />
					Follow PMI for all the political news as it happens.
				</p>
			</div>
		</main>
	);
}
