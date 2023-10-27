import Link from "next/link";
import Image from "next/image";

import thumbnail1 from "./posts/carrot-castle-completed/assets/banner.png";
import thumbnail2 from "./posts/carrot-announces-completion-of-new-ships-refitting-of-others/assets/banner.png";
import thumbnail3 from "./posts/potato-parliament-building-completed/assets/banner.png";

export default function Home() {
	return (
		<>
			<main>
				<div className="m-2.5 flex flex-col md:mx-auto md:grid md:max-w-[1120px] md:grid-cols-3 md:grid-rows-5 xl:grid-cols-4">
					<Link
						className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750"
						href="/posts/carrot-castle-completed"
					>
						<Image
							className="w-auto flex-grow rounded-t-md object-cover"
							src={thumbnail1}
							alt="Carrot Castle"
						/>
						<h1 className="m-5 mb-1.5 text-xl font-bold text-stone-300 group-hover:text-stone-200 md:text-2xl">
							Carrot Castle completed
						</h1>

						<p className="mx-5 mb-3.5 text-xs font-medium text-stone-400 md:text-sm">
							JVTA &bull; 08/05/2023
						</p>
					</Link>
					<div className="col-span-2 flex flex-col justify-evenly">
						<Link
							className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750 md:text-xl"
							href="/posts/roryrdmb-elected-as-moderator"
						>
							<h1 className="mx-3.5 mb-1 mt-3.5 font-bold text-stone-300 group-hover:text-stone-200">
								RoryRDMB elected as moderator
							</h1>
							<p className="mx-3.5 mb-3.5 mt-1 text-2xs font-medium text-stone-400 md:text-xs">
								JVTA &bull; 20/10/2023
							</p>
						</Link>
						<Link
							className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750"
							href="/posts/attempt-to-rig-mod-elections-foiled-perpetrator-unknown"
						>
							<h1 className="mx-3.5 mb-1 mt-3.5 text-lg font-bold text-stone-300 group-hover:text-stone-200 md:text-xl">
								Attempt to rig mod elections foiled; perpetrator unknown
							</h1>
							<p className="mx-3.5 mb-3.5 mt-1 text-2xs font-medium text-stone-400 md:text-xs">
								JVTA &bull; 15/10/2023
							</p>
						</Link>
						<Link
							className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750"
							href="/posts/jvta-re-elected-president-of-jonasland"
						>
							<h1 className="mx-3.5 mb-1 mt-3.5 text-lg font-bold text-stone-300 group-hover:text-stone-200 md:text-xl">
								JVTA re-elected president of Jonasland
							</h1>
							<p className="mx-3.5 mb-3.5 mt-1 text-2xs font-medium text-stone-400 md:text-xs">
								JVTA &bull; 13/10/2023
							</p>
						</Link>
					</div>
					<Link
						className="group m-2.5 flex flex-col rounded-md bg-neutral-800 hover:bg-neutral-750"
						href="/posts/potato-parliament-building-completed"
					>
						<Image
							className="w-auto flex-grow rounded-t-md object-cover"
							src={thumbnail3}
							alt="Potato Parliament building"
						/>
						<h1 className="m-5 mb-1.5 text-xl font-bold text-stone-300 group-hover:text-stone-200 md:text-2xl">
							Potato Parliament building completed
						</h1>

						<p className="mx-5 mb-3.5 text-xs font-medium text-stone-400 md:text-sm">
							JVTA &bull; 23/09/2023
						</p>
					</Link>
					<Link
						className="group row-span-2 m-2.5 flex h-fit w-fit rounded-md bg-neutral-800 hover:bg-neutral-750 md:col-span-2 md:row-span-1"
						href="/posts/carrot-announces-completion-of-new-ships-refitting-of-others"
					>
						<Image
							className="h-auto w-32 rounded-l-md object-cover md:w-48 xl:w-64"
							src={thumbnail2}
							alt="Carrot navy"
						/>
						<div className="m-5 flex flex-col">
							<h1 className="mb-1.5 text-xl font-bold text-stone-300 group-hover:text-stone-200 md:text-2xl">
								Carrot announces completion of new ships, refitting of others
							</h1>
							<p className="mt-1.5 text-xs font-medium text-stone-400 md:text-sm">
								JVTA &bull; 29/04/2023
							</p>
						</div>
					</Link>
				</div>
			</main>
		</>
	);
}
