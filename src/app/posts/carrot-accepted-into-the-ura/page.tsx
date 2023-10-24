import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Carrot accepted into the URA
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 23/04/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Carrot Flag" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					TaylorWorld, the Potato King, has announced that the Carrot Republic
					will be admitted into the United Realmplex Alliance.
					<br />
					<br />
					The announcement of this was made today in a short and simple
					announcement in the Potato Empire&apos;s announcement channel. This
					news was later repeated in the Carrot Republic&apos;s announcement
					channel.
					<br />
					<br />
					Carrot have been attempting to join the URA for weeks. Carrot had
					initially refused to join the URA, with RoryRDMB famously stating
					&quot;conflict is what drives this server to improve&quot;. However,
					the events of the Second Great Realmplex War made this opinion flip,
					after Carrot was declared war on by The Gays and Jonasland, in
					reaction to information of Rory having a role in a leak to Potato that
					eventually led to the trial of JVTA.
					<br />
					<br />
					With this revelation, the URA now control well over two-thirds of the
					claimed territory on the server, with most of the world being either
					Carrot-controlled, TMA-controlled, or a region of the Potato Empire.
				</p>
			</div>
		</main>
	);
}
