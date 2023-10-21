import Image from "next/image";

import banner from "./assets/banner.png";
import jonasland from "./assets/jonasland.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Jonasland affected by major terrorist attack
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 04/07/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Jonasland Flag" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Jonasland today was affected by a major terrorist incident.
					<br />
					<br />
					At around 6:00 pm NZT today, JVTA joined to find a pressure plate in
					their house. Unfortunately, they had spawned on top of it, and their
					house was soon exploded. The Ro-Tel and the Oakwood Hall also
					exploded, with the Prison affected by proximity. No other buildings
					were destroyed, but the houses of Revden and TaylorWorld were found to
					be affected.
				</p>
				<Image
					className="mb-2 mt-5 self-center"
					src={jonasland}
					alt="Jonasland Flag"
				/>
				<p className="mb-3 text-right text-sm text-zinc-400">
					The damage. (PHOTO SOURCE: JVTA)
				</p>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Jonasland is in a state of emergency while efforts are being made to
					pinpoint who the attacker was. Nothing has been confirmed as of yet;
					only five individuals have logged on to Realmplex in the past few
					days. Jom, the server moderator, is unable to check the Ledger logs.
					TaylorWorld, the president of Jonasland and the server owner, is yet
					to respond. Basil is not online.
					<br />
					<br />
					Follow PMI for more information on this catastrophic event.
				</p>
			</div>
		</main>
	);
}
