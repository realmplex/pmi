import Link from "next/link";
import Image from "next/image";

import thumbnail1 from "./posts/roryrdmb-elected-as-moderator/assets/banner.png";
import thumbnail2 from "./posts/potato-parliament-building-completed/assets/banner.png";
import thumbnail3 from "./posts/carrot-castle-completed/assets/banner.png";
import thumbnail4 from "./posts/results-of-the-september-2023-potato-election/assets/banner.png";
import thumbnail5 from "./posts/attempt-to-rig-mod-elections-foiled-perpetrator-unknown/assets/banner.png";
import thumbnail6 from "./posts/carrot-announces-completion-of-new-ships-refitting-of-others/assets/cns_triumph.png";

export default function Home() {
	return (
		<main>
			<div className="mx-4 grid grid-cols-1 md:grid-cols-2">
				<div className="mb-2.5 mt-5 flex max-w-xl justify-self-center rounded-2xl bg-zinc-700 md:mr-2.5 md:justify-self-end">
					<Image
						className="h-auto w-24 rounded-l-2xl object-cover lg:w-28 xl:w-32"
						src={thumbnail1}
						alt="RoryRDMB's in-game skin"
					/>
					<Link className="m-2" href="/posts/roryrdmb-elected-as-moderator">
						<h1 className="text-xl font-bold text-amber-500 md:text-2xl">
							RoryRDMB elected as moderator
						</h1>
						<p className="text-sm text-zinc-400 md:text-base">
							RoryRDMB has been elected as server moderator in a landslide
							victory. The election brings to conclusion a nine-day period that
							followed the removal of Jom as moderator.
						</p>
					</Link>
				</div>
				<div className="mb-2.5 mt-2.5 flex max-w-xl justify-self-center rounded-2xl bg-zinc-700 md:ml-2.5 md:mt-5 md:justify-self-start">
					<Image
						className="h-auto w-24 rounded-l-2xl object-cover lg:w-28 xl:w-32"
						src={thumbnail2}
						alt="Potato Parliament"
					/>
					<Link
						className="m-2"
						href="/posts/potato-parliament-building-completed"
					>
						<h1 className="text-xl font-bold text-amber-500 md:text-2xl">
							Potato Parliament building completed
						</h1>
						<p className="text-sm text-zinc-400 md:text-base">
							After six months of construction, the Potato Parliament building
							has been completed. The construction project was initiated amidst
							constitutional reform in Potato, as the country became a
							constitutional monarchy.
						</p>
					</Link>
				</div>
				<div className="md:max-w-6.5xl my-2.5 flex max-w-xl flex-col justify-self-center rounded-2xl bg-zinc-700 md:col-span-2">
					<Link className="" href="/posts/carrot-castle-completed">
						<Image
							className="h-auto max-h-64 rounded-t-2xl object-cover"
							src={thumbnail3}
							alt="Carrot Castle"
						/>
					</Link>
					<Link className="m-2 flex" href="/posts/carrot-castle-completed">
						<h1 className="mr-2.5 text-lg font-bold text-amber-500 sm:text-xl md:text-2xl">
							Carrot Castle completed
						</h1>
						<p className="ml-2.5 text-sm text-zinc-400 md:text-base">
							The build, located at the heart of the Carrot mainland, is the
							largest build on the server to date (though the title of tallest
							build remains with Sol Corp Tower), with a length of 394 blocks
							and a height of 76 blocks.
						</p>
					</Link>
				</div>
				<div className="mb-2.5 mt-5 flex max-w-xl justify-self-center rounded-2xl bg-zinc-700 md:mr-2.5 md:justify-self-end">
					<Image
						className="h-auto w-24 rounded-l-2xl object-cover lg:w-28 xl:w-32"
						src={thumbnail4}
						alt="PMI Elections"
					/>
					<Link
						className="m-2"
						href="/posts/results-of-the-september-2023-potato-election"
					>
						<h1 className="text-xl font-bold text-amber-500 md:text-2xl">
							Results of the September 2023 Potato election
						</h1>
						<p className="text-sm text-zinc-400 md:text-base">
							Hello, and welcome to PMI&apos;s coverage of the September 2023
							election in the Potato Empire. The results have been released, and
							we are ready to analyse them in detail.
						</p>
					</Link>
				</div>
				<div className="mb-2.5 mt-2.5 flex max-w-xl justify-self-center rounded-2xl bg-zinc-700 md:ml-2.5 md:mt-5 md:justify-self-start">
					<Image
						className="h-auto w-24 rounded-l-2xl object-cover lg:w-28 xl:w-32"
						src={thumbnail5}
						alt="Realmplex logo"
					/>
					<Link
						className="m-2"
						href="/posts/attempt-to-rig-mod-elections-foiled-perpetrator-unknown"
					>
						<h1 className="text-xl font-bold text-amber-500 md:text-2xl">
							Attempt to rig mod elections foiled; perpetrator unknown
						</h1>
						<p className="text-sm text-zinc-400 md:text-base">
							TaylorWorld revealed today that an attempt had been made to rig
							the moderator elections. The news of its discovery was published
							today in a short statement on the Discord.
						</p>
					</Link>
				</div>
				<div className="md:max-w-6.5xl my-2.5 flex max-w-xl flex-col justify-self-center rounded-2xl bg-zinc-700 md:col-span-2">
					<Link
						className=""
						href="/posts/carrot-announces-completion-of-new-ships-refitting-of-others"
					>
						<Image
							className="h-auto max-h-64 rounded-t-2xl object-cover"
							src={thumbnail6}
							alt="CNS Triumph"
						/>
					</Link>
					<Link
						className="m-2 flex"
						href="/posts/carrot-announces-completion-of-new-ships-refitting-of-others"
					>
						<h1 className="mr-2.5 text-lg font-bold text-amber-500 sm:text-xl md:text-2xl">
							Carrot announces completion of new ships, refitting of others
						</h1>
						<p className="ml-2.5 text-sm text-zinc-400 md:text-base">
							The build, located at the heart of the Carrot mainland, is the
							largest build on the server to date (though the title of tallest
							build remains with Sol Corp Tower), with a length of 394 blocks
							and a height of 76 blocks.
						</p>
					</Link>
				</div>
			</div>
		</main>
	);
}
