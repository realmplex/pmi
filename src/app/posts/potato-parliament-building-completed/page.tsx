import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Potato Parliament building completed
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 23/09/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="Potato Parliament Building"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					After six months of construction, the Potato Parliament building has
					been completed.
					<br />
					<br />
					The construction project was initiated amidst constitutional reform in
					Potato, as the country became a constitutional monarchy. The building
					began it&apos;s construction under a Potato Democrats government led
					by JVTA. Since then, two elections have occurred. It is likely the
					first government to be inaugurated in the building will be the
					government elected this month, the UCP-TOP coalition led by RoryRDMB.
					<br />
					<br />
					Construction began on March 9th, 2023, and was completed a few days
					ago. It was officially announced as complete earlier today. The
					building&apos;s construction has largely gone uninterrupted, though
					the Second Great Realmplex War saw the building&apos;s spire extended
					to build height by The Gays. The spire has since been reverted.
					<br />
					<br />
					The building is mostly constructed out of sand, similarly to the
					nearby Potato Temple. However, this has caused the building to
					camouflage when displayed on maps.
					<br />
					<br />
					Speaking to PMI today, TaylorWorld said, &quot;It&apos;s really
					satisfying to have this project finally complete, and I&apos;m really
					looking forward to seeing the parliament fulfilling it&apos;s purpose,
					rather than just standing as another monument.&quot;
					<br />
					<br />
					Prime minister RoryRDMB said, &quot;I would like to congratulate
					Taylor and everyone else who contributed to the completion of the
					Potato Parliament.&quot;
					<br />
					<br />
					JVTA, who was prime minister at the beginning of the construction,
					said, &quot;A new symbol of Potato has risen. One that will symbolise
					our strength, courage, and freedom. I congratulate the Potato
					government on the completion of the Parliament, and I hope to
					encounter some of my peers in the debating chamber in the
					future.&quot;
					<br />
					<br />
					TheAllSeeingBird did not respond to our request for comment.
				</p>
			</div>
		</main>
	);
}
