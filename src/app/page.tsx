import Link from "next/link";
import Image from "next/image";

import thumbnail1 from "./posts/carrot-castle-completed/assets/banner.png";
import thumbnail2 from "./posts/carrot-announces-completion-of-new-ships-refitting-of-others/assets/banner.png";
import thumbnail3 from "./posts/potato-parliament-building-completed/assets/banner.png";

export default function Home() {
	return (
		<>
			<main>
				<div className="flex flex-col md:grid md:grid-flow-dense md:grid-cols-2 md:grid-rows-5 xl:grid-cols-4">
					<Link
						className="group row-span-2 mx-2.5 mb-2.5 mt-5 flex h-fit flex-col rounded-md bg-neutral-800 hover:bg-neutral-750 md:ml-5 xl:mr-5 2xl:ml-10"
						href="/posts/carrot-castle-completed"
					>
						<Image
							className="max-h-64 w-auto rounded-t-md object-cover object-bottom"
							src={thumbnail1}
							alt="Carrot Castle"
						/>
						<h1 className="m-5 mb-1.5 text-xl font-bold text-stone-300 group-hover:text-stone-200 md:text-2xl">
							Carrot Castle completed
						</h1>

						<p className="mx-5 mb-2.5 flex-shrink-0 text-sm text-stone-400 md:text-base">
							08/05/2023
							<br />
							JVTA
						</p>
						<h2 className="m-5 mt-2.5 text-sm text-stone-300 md:text-base">
							The build, located at the heart of the Carrot mainland, is the
							largest build on the server to date (though the title of tallest
							build remains with Sol Corp Tower), with a length of 394 blocks
							and a height of 76 blocks.
						</h2>
					</Link>
					<Link
						className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750 md:ml-2.5 md:mr-5 md:mt-5 xl:mx-2.5"
						href="/posts/roryrdmb-elected-as-moderator"
					>
						<h1 className="mx-5 mb-1.5 mt-5 text-lg font-bold text-stone-300 group-hover:text-stone-200 md:text-xl">
							RoryRDMB elected as moderator
						</h1>

						<h2 className="mx-5 my-1.5 text-sm text-stone-300 md:text-base">
							RoryRDMB has been elected as server moderator in a landslide
							victory. The election brings to conclusion a nine-day period that
							followed the removal of Jom as moderator.
						</h2>
						<p className="mx-5 mb-3.5 text-xs font-medium text-stone-400 md:text-sm">
							JVTA • 20/10/2023
						</p>
					</Link>
					<Link
						className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750 md:ml-2.5 md:mr-5 md:mt-5 xl:mx-2.5"
						href="/posts/attempt-to-rig-mod-elections-foiled-perpetrator-unknown"
					>
						<h1 className="mx-5 mb-1.5 mt-5 text-lg font-bold text-stone-300 group-hover:text-stone-200 md:text-xl">
							Attempt to rig mod elections foiled; perpetrator unknown
						</h1>

						<h2 className="mx-5 my-1.5 text-sm text-stone-300 md:text-base">
							TaylorWorld revealed today that an attempt had been made to rig
							the moderator elections. The news of its discovery was published
							today in a short statement on the Discord.
						</h2>
						<p className="mx-5 mb-3.5 text-xs font-medium text-stone-400 md:text-sm">
							JVTA • 15/10/2023
						</p>
					</Link>
					<Link
						className="group row-span-2 m-2.5 flex h-fit w-fit rounded-md bg-neutral-800 hover:bg-neutral-750 md:col-span-2 md:row-span-1 lg:order-2"
						href="/posts/potato-parliament-building-completed"
					>
						<Image
							className="h-auto w-48 rounded-l-md object-cover xl:w-64"
							src={thumbnail2}
							alt="Carrot navy"
						/>
						<div className="m-5 flex flex-col">
							<h1 className="mb-1.5 text-xl font-bold text-stone-300 group-hover:text-stone-200 md:text-2xl">
								Carrot announces completion of new ships, refitting of others
							</h1>

							<p className="mt-1.5 text-stone-300 md:text-base">
								Carrot has announced today the completion of several vessels and
								the refitting of other vessels. The first of the new ships is
								the CNS Indomitable. The CNS Indomitable is a battleship, and by
								far the largest ship on the server. It is nearly 260 blocks
								long.
							</p>
							<p className="mt-1.5 text-xs font-medium text-stone-400 md:text-sm">
								JVTA • 29/04/2023
							</p>
						</div>
					</Link>
					<Link
						className="group row-span-2 m-2.5 flex h-fit flex-col rounded-md bg-neutral-800 hover:bg-neutral-750 md:mt-5 xl:mr-5 2xl:mr-10"
						href="/posts/potato-parliament-building-completed"
					>
						<Image
							className="max-h-64 w-auto rounded-t-md object-cover object-bottom"
							src={thumbnail3}
							alt="Potato Parliament building"
						/>
						<h1 className="m-5 mb-1.5 text-xl font-bold text-stone-300 group-hover:text-stone-200 md:text-2xl">
							Potato Parliament building completed
						</h1>

						<p className="mx-5 mb-2.5 flex-shrink-0 text-sm text-stone-400 md:text-base">
							23/09/2023
							<br />
							JVTA
						</p>
						<h2 className="m-5 mt-2.5 text-sm text-stone-300 md:text-base">
							After six months of construction, the Potato Parliament building
							has been completed. The construction project was initiated amidst
							constitutional reform in Potato, as the country became a
							constitutional monarchy. The building began it&apos;s construction
							under a Potato Democrats government led by JVTA.
						</h2>
					</Link>
				</div>
			</main>
		</>
	);
}
