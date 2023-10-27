import Image from "next/image";

import banner from "./assets/banner.png";
import cns_triumph from "./assets/cns_triumph.png";
import cns_unstoppable from "./assets/cns_unstoppable.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Carrot announces completion of new ships, refitting of others
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 29/04/2023</p>
				<Image
					className="mb-2 mt-5 self-center"
					src={banner}
					alt="Various ships sat within Carrot's waters."
				/>
				<p className="mb-3 text-right text-sm text-zinc-400">
					Various ships sat within Carrot&apos;s waters.
				</p>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Carrot has announced today the completion of several vessels and the
					refitting of other vessels.
					<br />
					<br />
					The first of the new ships is the CNS Indomitable. The CNS Indomitable
					is a battleship, and by far the largest ship on the server. It is
					nearly 260 blocks long.
					<br />
					<br />
					Another of the new ships is the CNS Triumph. The CNS Triumph is the
					first of a four-ship class. The second ship in the class, CNS
					Stalwart, is partially finished. The third and fourth ships, CNS
					Courage (II) and CNS Charger, are in the planning stage. With an
					approximated top speed of 35 knots, they are the fastest naval vessels
					on the server.
				</p>
				<Image
					className="mb-2 mt-5 self-center"
					src={cns_triumph}
					alt="Various ships sat within Carrot's waters."
				/>
				<p className="mb-3 text-right text-sm text-zinc-400">
					The CNS Triumph (center).
				</p>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					The CNS Unstoppable, one of Carrot&apos;s existing ships, was recently
					reclassified from a battleship to a coast defence ship. It has been
					refitted with two 14-inch main guns, which are the highest calibre
					guns ever mounted on any Carrot ship. It’s secondary armament was also
					changed, with four more 6-inch guns added to the ship, bringing the
					ship&apos;s total of 6-inch guns to twelve.
				</p>
				<Image
					className="mb-2 mt-5 self-center"
					src={cns_unstoppable}
					alt="The CNS Unstoppable, having been refitted."
				/>
				<p className="mb-3 text-right text-sm text-zinc-400">
					The CNS Unstoppable, having been refitted.
				</p>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					RoryRDMB, the Carrot King, released a statement alongside the
					information on the new ships. &quot;I am very impressed with the rate
					of development with the Royal Potato Navy and it’s subsidiaries,
					however, despite the amount of ships they produce being very
					impressive, the ships themselves are currently very lacking compared
					to the CRN, although, judging by the current rate of progression, that
					won’t be a problem for too long.
					<br />
					<br />I predict Potato Navy ships may eventually equal the might of
					the CRN, and we will have to fight harder and harder to maintain our
					supremacy of the seas, however, at least for now the gap is widening,
					with our newest, and most powerful ships, like the CNS Indomitable
					will help keep the gap as wide as possible for as long as possible.
					<br />
					<br />
					Despite all of this naval development throughout the server, I predict
					that if development on all sides continues at the rate it is currently
					going, it could prove ruinously expensive for all involved, however,
					such is the price of having a cool and impressive looking build.&quot;
					<br />
					<br />
					TheAllSeeingBird, head of the Independent Thailand Navy, also
					commented, with a much shorter comment that read &quot;It&apos;s
					interesting to see Carrot making more progress on their navy.&quot;
				</p>
			</div>
		</main>
	);
}
