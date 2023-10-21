import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					SpecShark resigns as server moderator
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 13/05/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="SpecShark's in-game skin"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Earlier this morning, at 12:23 am NZST (8:23 am EDT), SpecShark, the
					current moderator, announced his resignation.
					<br />
					<br />
					&quot;I initially took this position to help the server, but I have
					come to realize I am just not able to do this job anymore,&quot;
					SpecShark wrote in his resignation statement. &quot;I&apos;m not great
					with making rules, I&apos;m too busy to spend time working in this
					position, I&apos;m not great at coming up with punishments, I
					don&apos;t know how to do things mods need to be able to do such as
					rollbacks, and this whole job has been causing me quite a lot of
					stress and affecting my mental health.&quot;
					<br />
					<br />
					SpecShark originally took up the position on April 29th, 2023. Early
					on, one of his first decisions was to hold a vote to unban Bullock_NZ.
					The vote passed in a landslide, with only Olivetoastt voting against.
					SpecShark, however, caused controversy in some circles with some
					decisions he made, most notably a ban on all slurs, which caused great
					amounts of arguing. The new rule had been put in place in response to
					vandalism of the Carrot Castle where the F-slur had been written on
					the building as an act of war; The Gays had declared war on Carrot.
					Clamlum was briefly banned as a result. After some negotiation days
					later, the two sides agreed to negotiate new server rules.
					<br />
					<br />
					While the news came as a bit of a shock, there are already people
					ready to take up his former position. JVTA, who has been going through
					a streak of losing as much elections as possible right now, seems to
					be ready for the next vote, announcing their candidacy earlier today.
					It is expected further announcements will be made soon.
					<br />
					<br />
					Registration for the next admin vote has not yet started.
				</p>
			</div>
		</main>
	);
}
