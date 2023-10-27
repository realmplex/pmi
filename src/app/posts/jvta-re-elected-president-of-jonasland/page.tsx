import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					JVTA re-elected president of Jonasland
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 13/10/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="JVTA's in-game skin"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					After 235 days outside of office in a country named after themselves,
					JVTA will be returning as president of Jonasland.
					<br />
					<br />
					The news comes following an election in Jonasland, which took place
					over the past four days. The results came back with JVTA&apos;s party
					(the Social Democratic Party) and LEAN LOVER&apos;s party (the
					al-Qaeda Party) tying with 3 votes. Incumbent TaylorWorld (of the
					Jonasland Reformist Movement) came third with 2 votes. The SDP and JRM
					both agreed to a coalition deal, allowing JVTA to take up what is now
					their third officially-recognised tenure as prime minister.
					<br />
					<br />
					JVTA appears to be quite happy with the result. &quot;I always knew
					this day would come,&quot; JVTA told PMI. &quot;I thank all those that
					voted for us, and now set my sights to the future. Brighter days are
					ahead for Jonasland.&quot;
					<br />
					<br />
					JVTA also paid tribute to TaylorWorld, who has been president for the
					past 134 days. &quot;Taylor has performed adequate duties in running
					Jonasland, and has brought us closer to the rest of the world. I thank
					him for his service to the nation and wish him well on their future
					endeavours.&quot;
					<br />
					<br />
					The new government is expected to be inaugurated on October 14th,
					2023.
				</p>
			</div>
		</main>
	);
}
