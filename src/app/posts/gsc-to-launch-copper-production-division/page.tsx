import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					GSC to launch copper production division
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 15/05/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="GSC Copper logo"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					The GSC has today announced it will launch a new division under the
					name &quot;GSC Copper&quot;.
					<br />
					<br />
					GSC Copper will both mine for and produce through mines the material
					known as copper, a material which is used for lightning rods and other
					items. Despite the company&apos;s name, however, the GSC is also open
					to producing other materials through farms.
					<br />
					<br />
					&quot;This division will help bring the company into the modern
					age,&quot; chairperson of the GSC, JVTA, said. &quot;It will also help
					bring new opportunities to countries that we work with. We are very
					interested to see how this all goes.&quot;
					<br />
					<br />
					The GSC are planning to construct their first location in the Southern
					Swamp district in the east of Jonasland. The GSC are open to building
					more locations around the world. Every machine will require a fee to
					use.
				</p>
			</div>
		</main>
	);
}
