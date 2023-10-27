import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Realmplex live again, new host named
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 01/07/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Realmplex Logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Realmplex is live again.
					<br />
					<br />
					The server went back up at 9:00 am NZT today, as announced by server
					owner TaylorWorld. The server will use the hosting service Bloom, and
					will be both hosted and paid for by BasilGaming.
					<br />
					<br />
					The server has been updated to 1.20.1, which unfortunately has made it
					difficult for PMI to investigate the new server due to technical
					issues with Fabric. Proximity chat and custom music discs have
					returned. An analytics page is also launching.
					<br />
					<br />
					As well as this, there will be an automatic backup made every 24
					hours. The server will however be online 24/7, unless announced
					otherwise.
				</p>
			</div>
		</main>
	);
}
