import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Jonasland election to go ahead despite being one-party state
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 21/05/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Jonasland flag" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Jonasland&apos;s government is continuing to push forward with
					it&apos;s plans for the next election on June 1st, 2023, despite there
					only being one registered political party at the moment.
					<br />
					<br />
					JVTA, the head of the Social Democratic Party, announced today the
					dates for the upcoming election. The ballot is set to open on May
					27th, 2023, at 7:00 pm NZT, about an hour after candidate registration
					closes. The election will last three days. The new government will be
					inaugurated at 12:00 pm on June 2nd.
					<br />
					<br />
					Despite this, however, there has been confusion as to why the election
					has to take place, owing to the fact that Jonasland, a democracy, has
					only one registered party. This situation started on April 25th, 2023,
					when the Inspiring Societally Inclined Syndicate, which had been the
					ruling party since MikeCube&apos;s resignation in February, merged
					with the Social Democratic Party, itself a merger of the main
					opposition parties (the JSP, the JDP, and The Left). Clamlum, who was
					the leader of the Syndicate, will not be seeking reelection.
					<br />
					<br />
					The election is expected to go in the SDP&apos;s favour, due to the
					fact that most people already support the party, giving no chance of
					winning to any party that decides to register. JVTA, however, has said
					that the election must still go ahead by law.
					<br />
					<br />
					It is likely East Thailand, the area of the former Name Pending that
					Jonasland occupies, will be a major question for the next government.
					JVTA, who before Jonasland&apos;s occupation of the region had called
					for the complete destruction of the town, have themselves openly
					admitted they have few plans for the region. There have been
					suggestions to reappoint TheAllSeeingBird as governor of the region.
				</p>
			</div>
		</main>
	);
}
