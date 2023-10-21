import Link from "next/link";
import Image from "next/image";

import thumbnail1 from "./roryrdmb-elected-as-moderator/assets/banner.png";
import thumbnail3 from "./jvta-re-elected-president-of-jonasland/assets/banner.png";
import thumbnail4 from "./potato-parliament-building-completed/assets/banner.png";
import thumbnail5 from "./result-of-the-september-2023-bird-land-election/assets/banner.png";
import thumbnail6 from "./results-of-the-september-2023-potato-election/assets/banner.png";
import thumbnail7 from "./bird-land-removes-its-potato-monarch-announces-elections-for-new-position/assets/banner.png";
import thumbnail8 from "./election-season-coming-soon-in-jonasland-and-potato/assets/banner.png";
import thumbnail9 from "./jonasland-affected-by-major-terrorist-attack/assets/banner.png";
import thumbnail10 from "./realmplex-live-again-new-host-named/assets/banner.png";
import thumbnail12 from "./carrot-announces-new-naval-expansion-project/assets/banner.png";
import thumbnail13 from "./ssi-elections-union-party-win-absolute-majority-of-the-vote/assets/banner.png";
import thumbnail15 from "./gsc-to-launch-copper-production-division/assets/banner.png";
import thumbnail16 from "./specshark-resigns-as-server-moderator/assets/banner.png";
import thumbnail17 from "./the-gays-form-organisation-to-rival-ura/assets/banner.png";
import thumbnail18 from "./carrot-castle-completed/assets/banner.png";
import thumbnail19 from "./results-of-the-second-potato-empire-general-election/assets/banner.png";
import thumbnail20 from "./carrot-announces-completion-of-new-ships-refitting-of-others/assets/banner.png";
import thumbnail21 from "./gsc-to-build-facility-for-testing-development-and-business/assets/banner.png";

export default function Posts() {
	return (
		<>
			<main>
				<div className="mx-4 my-5 flex flex-col items-center justify-center">
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail1}
							alt="RoryRDMB's in-game skin"
						/>
						<Link className="m-2" href="/posts/roryrdmb-elected-as-moderator">
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								RoryRDMB elected as moderator
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								RoryRDMB has been elected as server moderator in a landslide
								victory. The election brings to conclusion a nine-day period
								that followed the removal of Jom as moderator.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail10}
							alt="Realmplex logo"
						/>
						<Link
							className="m-2"
							href="/posts/attempt-to-rig-mod-elections-foiled-perpetrator-unknown"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Attempt to rig mod elections foiled; perpetrator unknown
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								TaylorWorld revealed today that an attempt had been made to rig
								the moderator elections. The news of its discovery was published
								today in a short statement on the Discord.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail3}
							alt="JVTA's in-game skin"
						/>
						<Link
							className="m-2"
							href="/posts/jvta-re-elected-president-of-jonasland"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								JVTA re-elected president of Jonasland
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								After 235 days outside of office in a country named after
								themselves, JVTA will be returning as president of Jonasland.
								The news comes following an election in Jonasland, which took
								place over the past four days.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail4}
							alt="Potato Parliament"
						/>
						<Link
							className="m-2"
							href="/posts/potato-parliament-building-completed"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Potato Parliament building completed
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								After six months of construction, the Potato Parliament building
								has been completed. The construction project was initiated
								amidst constitutional reform in Potato, as the country became a
								constitutional monarchy.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail5}
							alt="Potato Empire Flag"
						/>
						<Link
							className="m-2"
							href="/posts/result-of-the-september-2023-bird-land-election"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Result of the September 2023 Bird Land election
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Four days after the national elections, the vote to choose Bird
								Land&apos;s representative is now complete. There were three
								candidates, JVTA of the Potato Democrats, TheAllSeeingBird of
								The Opportunities Party, and Dumb_Catz, an independent
								candidate.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover object-left lg:w-28 xl:w-32"
							src={thumbnail6}
							alt="PMI Elections"
						/>
						<Link
							className="m-2"
							href="/posts/results-of-the-september-2023-potato-election"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Results of the September 2023 Potato election
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Hello, and welcome to PMI&apos;s coverage of the September 2023
								election in the Potato Empire. The results have been released,
								and we are ready to analyse them in detail.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail7}
							alt="Bird Land flag"
						/>
						<Link
							className="m-2"
							href="/posts/bird-land-removes-its-potato-monarch-announces-elections-for-new-position"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Bird Land removes its Potato Monarch, announces elections for
								new position
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Today, Bird Land, a member state of the Potato Empire, announced
								that it would be holding elections to decide a new head
								representative.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail8}
							alt="Jonasland and Potato Empire flags"
						/>
						<Link
							className="m-2"
							href="/posts/election-season-coming-soon-in-jonasland-and-potato"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Election season coming soon in Jonasland and Potato
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								With the server slowly starting to regain steam, two different
								nations have announced the next instances of their democratic
								cycle. Both Jonasland and the Potato Empire have confirmed that
								they will be holding elections soon.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail9}
							alt="Jonasland Flag"
						/>
						<Link
							className="m-2"
							href="/posts/jonasland-affected-by-major-terrorist-attack"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Jonasland affected by major terrorist attack
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								At around 6:00 pm NZT today, JVTA joined to find a pressure
								plate in their house. Unfortunately, they had spawned on top of
								it, and their house was soon exploded. The Ro-Tel and the
								Oakwood Hall also exploded, with the Prison affected by
								proximity.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail10}
							alt="Realmplex logo"
						/>
						<Link
							className="m-2"
							href="/posts/realmplex-live-again-new-host-named"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Realmplex live again, new host named
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								The server went back up at 9:00 am NZT today, as announced by
								server owner TaylorWorld. The server will use the hosting
								service Bloom, and will be both hosted and paid for by
								BasilGaming.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail10}
							alt="Realmplex logo"
						/>
						<Link
							className="m-2"
							href="/posts/realmplex-likely-to-change-hosts-again"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Realmplex likely to change hosts again
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								At the moment, the server is down, and has been for several
								days. This is the result of a general unwillingness from
								SandwichPress, the current server host and a former moderator,
								to host the server.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail12}
							alt="Carrot flag"
						/>
						<Link
							className="m-2"
							href="/posts/carrot-announces-new-naval-expansion-project"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Carrot announces new naval expansion project
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Carrot has today announced another project to expand it&apos;s
								navy. This project will see the construction of new naval
								vessels. Once these vessels are complete, Carrot will have a
								total fleet of 18 warships.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail13}
							alt="Sea Spray Islands flag"
						/>
						<Link
							className="m-2"
							href="/posts/ssi-elections-union-party-win-absolute-majority-of-the-vote"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								SSI elections: Union Party win absolute majority of the vote
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Today&apos;s elections in the Sea Spray Islands have concluded.
								The SSI Herald states that the Union Party, run by incumbent
								head of state McTwoPoint0, has won an absolute majority in the
								vote, receiving 100% of the vote.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail9}
							alt="Jonasland flag"
						/>
						<Link
							className="m-2"
							href="/posts/jonasland-election-to-go-ahead-despite-being-one-party-state"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Jonasland election to go ahead despite being one-party state
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Jonasland&apos;s government is continuing to push forward with
								it&apos;s plans for the next election on June 1st, 2023, despite
								there only being one registered political party at the moment.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail15}
							alt="GSC Logo"
						/>
						<Link
							className="m-2"
							href="/posts/gsc-to-launch-copper-production-division"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								GSC to launch copper production division
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								The GSC has today announced it will launch a new division under
								the name &quot;GSC Copper&quot;. GSC Copper will both mine for
								and produce through mines the material known as copper, a
								material which is used for lightning rods and other items.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail16}
							alt="SpecShark's in-game skin"
						/>
						<Link
							className="m-2"
							href="/posts/specshark-resigns-as-server-moderator"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								SpecShark resigns as server moderator
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Earlier this morning, at 12:23 am NZST (8:23 am EDT), SpecShark,
								the current moderator, announced his resignation. SpecShark
								originally took up the position on April 29th, 2023.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail17}
							alt="URA Logo"
						/>
						<Link
							className="m-2"
							href="/posts/the-gays-form-organisation-to-rival-ura"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								The Gays form organisation to rival URA
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								The &quot;Big Baller Collective&quot;, or BBC - no relation to
								the British public broadcaster of the same name - is an
								organisation that strives to &quot;do everything the URA does,
								but better&quot;.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail10}
							alt="Realmplex logo"
						/>
						<Link
							className="m-2"
							href="/posts/growing-discontent-as-server-held-hostage-over-disagreements"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Growing discontent as server held hostage over disagreements
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Realmplex may be going through a second Chaos Day today. And
								this time, it&apos;s worse. Right now, Realmplex is &quot;being
								held hostage&quot; by server host SandwichPress, who had been
								banned earlier today for duping railway tracks and carpets.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail18}
							alt="Carrot Castle"
						/>
						<Link className="m-2" href="/posts/carrot-castle-completed">
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Carrot Castle completed
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								After 294 days of construction, Carrot Castle has finally been
								completed. The build, located at the heart of the Carrot
								mainland, is the largest build on the server to date.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail19}
							alt="PMI Election Coverage"
						/>
						<Link
							className="m-2"
							href="/posts/results-of-the-second-potato-empire-general-election"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Results of the second Potato Empire general election
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Welcome to PMI&apos;s coverage of the Potato Empire&apos;s
								elections, held between May 1st and May 5th of 2023. Three
								parties and two independent candidates contested five seats
								across the country.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail20}
							alt="Various ships sat within Carrot's waters."
						/>
						<Link
							className="m-2"
							href="/posts/carrot-announces-completion-of-new-ships-refitting-of-others"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Carrot announces completion of new ships, refitting of others
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								Carrot has announced today the completion of several vessels and
								the refitting of other vessels. The first of the new ships is
								the CNS Indomitable. The CNS Indomitable is a battleship, and by
								far the largest ship on the server. It is nearly 260 blocks
								long.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail10}
							alt="Realmplex logo"
						/>
						<Link
							className="m-2"
							href="/posts/specshark-elected-as-server-admin"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								SpecShark elected as server admin
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								SpecShark has been elected today as Realmplex admin. This came
								after a week-long election to choose a new admin after the
								resignation of SandwichPress. Eight candidates participated.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail12}
							alt="Carrot flag"
						/>
						<Link className="m-2" href="/posts/carrot-accepted-into-the-ura">
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Carrot accepted into the URA
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								TaylorWorld, the Potato King, has announced that the Carrot
								Republic will be admitted into the United Realmplex Alliance.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail21}
							alt="GSC logo"
						/>
						<Link
							className="m-2"
							href="/posts/gsc-to-build-facility-for-testing-development-and-business"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								GSC to build facility for testing, development, and business
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								GSC&apos;s chairperson, JVTA, announced today that the GSC would
								be seeking to build a facility for the company. The facility
								described will be used by the GSC for testing, experimenting,
								and corporate activities.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail10}
							alt="Realmplex logo"
						/>
						<Link
							className="m-2"
							href="/posts/server-hosting-to-be-transferred"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Server hosting to be transferred
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								The new host, who for the time being will host the server for a
								week as a trial, will be SandwichPress, a former moderator. The
								original host, Kiddorox, is transferring the server to a new
								host because the current server is very expensive to upkeep, and
								because SandwichPress has much experience in server hosting.
							</p>
						</Link>
					</div>
					<div className="m-2.5 flex max-w-2xl basis-32 rounded-2xl bg-zinc-700">
						<Image
							className="h-auto w-20 rounded-l-2xl object-cover lg:w-28 xl:w-32"
							src={thumbnail5}
							alt="Potato Empire flag"
						/>
						<Link
							className="m-2"
							href="/posts/potato-to-award-citizens-that-fought-in-battle-for-thailand"
						>
							<h1 className="mb-0.5 text-base font-bold text-amber-500 md:text-xl">
								Potato to award citizens that fought in battle for Thailand
							</h1>
							<p className="mt-0.5 text-xs text-zinc-300 md:text-base">
								The Potato King, TaylorWorld, announced a few moments ago that
								he would bestow upon SpecShark and EPCNZ, who today successfully
								won for Potato a battle over the circumstances Thailand is given
								back, awards for their efforts.
							</p>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
