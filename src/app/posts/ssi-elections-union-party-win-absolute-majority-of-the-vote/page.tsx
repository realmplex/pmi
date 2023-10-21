import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					SSI elections: Union Party win absolute majority of the vote
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 27/05/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="Sea Spray Islands flag"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Today&apos;s elections in the Sea Spray Islands have concluded.
					<br />
					<br />
					The SSI Herald states that the Union Party, run by incumbent head of
					state McTwoPoint0, has won an absolute majority in the vote, receiving
					100% of the vote. On the flip side, the SSI Democrats party, led by
					journalist TheAllSeeingBird, received no votes.
					<br />
					<br />
					This landslide can be attributed to the Sea Spray Islands&apos;
					election rules, which state that no politicians are allowed to vote.
					Henceforth, there were only four eligible voters.
					<br />
					<br />
					TheAllSeeingBird has conceded the election and congratulated
					McTwoPoint0 in an article published by the Realmplex News Network. The
					next election&apos;s dates are yet to be confirmed.
				</p>
			</div>
		</main>
	);
}
