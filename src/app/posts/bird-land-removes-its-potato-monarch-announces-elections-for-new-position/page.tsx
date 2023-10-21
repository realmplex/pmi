import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Bird Land removes its Potato Monarch, announces elections for new
					position
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 05/09/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Bird Land Flag" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Today, Bird Land, a member state of the Potato Empire, announced that
					it would be holding elections to decide a new head representative.
					This decision comes two days after a survey that TheAllSeeingBird
					published, asking if the Potato Monarch of the region should be
					changed to a democratically-elected representative.
					<br />
					<br />
					&quot;TheAllSeeingBird is removing himself as the potato monarch for
					Bird Land,&quot; TaylorWorld said in a statement this morning.
					&quot;In replacement Bird Land is going to receive a seat on the
					Potato Council held by an elected representative who will run Bird
					Land instead of TheAllSeeingBird. Since the Potato elections are still
					going, there will be a second, part two of the election on a separate
					google form for this vote.&quot;
					<br />
					<br />
					The election will begin on September 6th, exactly one day after the
					Potato elections, which as of writing, are still ongoing. All
					residents of Bird Land, including those that gain citizenship before
					September 6th, can run for the position.
					<br />
					<br />
					There has been no statement yet from the three national political
					parties as to whether they are interested in contesting the seat,
					which will likely serve as a tiebreaker in the Council. However,
					TaylorWorld says the seat can only be contested by them if the parties
					failed to get a seat count of 2.
				</p>
			</div>
		</main>
	);
}
