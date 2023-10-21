import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Realmplex likely to change hosts again
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 24/06/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Realmplex logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Realmplex is likely to change it&apos;s host again soon.
					<br />
					<br />
					At the moment, the server is down, and has been for several days. This
					is the result of a general unwillingness from SandwichPress, the
					current server host and a former moderator, to host the server, due to
					a lack of players online as well as the server using up her
					computer&apos;s RAM.
					<br />
					<br />
					SandwichPress has stated in the general chat of the server Discord
					that someone else has offered to host the server. This matches
					previous reports we received from TaylorWorld that three people had
					offered to host. Full details of this will likely be confirmed soon as
					this situation progresses.
					<br />
					<br />
					The server has been off since June 16th, 2023. SandwichPress is
					currently hosting another server, the details of which are unknown to
					PMI. The outage caused a brief outcry from TheAllSeeingBird. It is
					highly unlikely Kiddorox, the previous server host, is going to host
					the server.
				</p>
			</div>
		</main>
	);
}
