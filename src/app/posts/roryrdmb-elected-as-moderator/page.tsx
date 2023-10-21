import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					RoryRDMB elected as moderator
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 20/10/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="RoryRDMB's in-game skin"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					RoryRDMB has been elected as server moderator in a landslide victory.
					<br />
					<br />
					The election brings to conclusion a nine-day period that followed the
					removal of Jom as moderator. A vote was held to decide a new
					moderator, in which four candidates - including Rory - ran. PMI does
					not yet know of the full results, though it is understood Rory had at
					least 70% of the vote before eliminations had even been calculated.
					JVTA came second, their highest placement in a mod vote. LEAN LOVER
					placed third. Jom placed fourth.
					<br />
					<br />
					&quot;I would like to give a massive thanks to everyone who voted for
					me,&quot; Rory said in a short statement earlier today. &quot;I
					couldn&apos;t have done it without you.&quot;
					<br />
					<br />
					Rory&apos;s first port of call seems to have been banning
					SandwichPress, Clamlum, and LEAN LOVER, who have been called out
					numerous times in the past year for disruptive activity. All three
					will not be permitted appeals while Rory is still mod, and it is
					highly unlikely this will change. Aliah looks to have returned as a
					result.
					<br />
					<br />
					Rory has also held polls to see if carpet duping and
					sand/concrete/gravel duping should be allowed, and if server events
					should be held.
					<br />
					<br />
				</p>
			</div>
		</main>
	);
}
