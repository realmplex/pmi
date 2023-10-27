import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Potato to award citizens that fought in battle for Thailand
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 20/04/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="Potato Empire flag"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					The Potato King, TaylorWorld, announced a few moments ago that he
					would bestow upon SpecShark and EPCNZ, who today successfully won for
					Potato a battle over the circumstances Thailand is given back, awards
					for their efforts.
					<br />
					<br />
					&quot;Your efforts in defeating the Gays in battle have earned you
					well-deserved recognition,&quot; Taylor wrote in his speech to the
					nation. &quot;It took tremendous courage to fight in that battle, a
					battle that even I didn&apos;t think we&apos;d win but you did
					it.&quot;
					<br />
					<br />
					The circumstances of the award are yet to be announced. It is
					suggested that it might be some form of award like the Order of Merit
					in the United Kingdom. No details have been released yet.
					<br />
					<br />
					Potato also thanked it&apos;s allies in the United Realmplex Alliance
					for assisting in the war, despite a lack of participation in the war
					by the Sea Spray Islands and the Carrot Republic.
				</p>
			</div>
		</main>
	);
}
