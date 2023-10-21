import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Server hosting to be transferred
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 21/04/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Realmplex logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					The server is to be transferred to a new host.
					<br />
					<br />
					The new host, who for the time being will host the server for a week
					as a trial, will be SandwichPress, a former moderator. The original
					host, Kiddorox, is transferring the server to a new host because the
					current server is very expensive to upkeep, and because SandwichPress
					has much experience in server hosting. SandwichPress will not receive
					moderator permissions in the way Kiddorox did.
					<br />
					<br />
					Kiddorox stated in his announcement today, &quot;If you plan on DMing
					me only to say not to switch the host, don&apos;t. I&apos;m not
					changing my mind on this; until I have more income the only two
					options are this, or I close Realmplex and nobody wants that.&quot;The
					server will be transferred soon.
				</p>
			</div>
		</main>
	);
}
