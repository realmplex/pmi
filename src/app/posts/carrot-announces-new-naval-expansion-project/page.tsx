import Image from "next/image";

import banner from "./assets/banner.png";
import carrot_ship from "./assets/carrot_ship.png";
import carrot_ship_2 from "./assets/carrot_ship_2.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Carrot announces new naval expansion project
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 27/05/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Carrot flag" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Carrot has today announced another project to expand it&apos;s navy.
					<br />
					<br />
					This project will see the construction of new naval vessels. Once
					these vessels are complete, Carrot will have a total fleet of 18
					warships.
				</p>
				<Image
					className="mb-2 mt-5 self-center"
					src={carrot_ship}
					alt="Screenshot of the CNS Sovereign MHS-1"
				/>
				<p className="mb-3 text-right text-sm text-zinc-400">
					A render of the CNS Sovereign MHS-1; it&apos;s construction has
					already been announced, however it will have 6 8-inch guns and 4
					4-inch guns. (Image source: RoryRDMB)
				</p>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					One of the new ships that will be constructed is the CNS Sovereign
					MHS-1, which has already been announced. It will be joined by plenty
					of other ships. The list composes of:
				</p>
				<ul className="list-inside list-disc text-zinc-400">
					<li>
						CNS Supremacy HS-4 - a battle cruiser armed with eight 14-inch guns
						and sixteen 6-inch guns that will reportedly be able to move at 25
						knots.
					</li>
					<li>
						CNS Formidable HS-5 - a battleship armed with ten 14 inch guns, and
						has a secondary armament of fourteen 6-inch guns. It will have a top
						speed of 21 knots. It will be slightly larger than the Indomitable
					</li>
					<li>
						CNS Irrefutable MHS-2 - a heavy cruiser. This ship is still in the
						planning stages.
					</li>
					<li>
						There are also plans for a new class of three light cruisers, and a
						new class of two destroyers, however these are not yet in the design
						stage and not much is known about them.
					</li>
				</ul>
				<Image
					className="mb-2 mt-5 self-center"
					src={carrot_ship_2}
					alt="Multiple Minecraft battleships"
				/>
				<p className="mb-3 text-right text-sm text-zinc-400">
					Several boats being planned out in a creative world. (Image source:
					RoryRDMB)
				</p>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					RoryRDMB released a statement to PMI alongside the announcement of the
					ships. &quot;Although I have not been the most active on the server in
					recent times, I hope that I can at least finish the CRN and make it
					another great project of the server.&quot;
					<br />
					<br />
					TheAllSeeingBird said of the news, &quot;As head of the BLN It should
					be interesting to see this further expansion of their navy.&quot;
					McTwoPoint0 refused PMI&apos;s request for comment.
				</p>
			</div>
		</main>
	);
}
