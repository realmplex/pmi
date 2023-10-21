import Image from "next/image";

import banner from "./assets/banner.png";
import potato_central from "./assets/potato_central.png";
import thailand from "./assets/thailand.png";
import wench from "./assets/wench.png";
import allied from "./assets/allied.png";
import sea_spray_islands from "./assets/sea_spray_islands.png";
import seat_count from "./assets/seat_count.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Results of the second Potato Empire general election
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 06/05/2023</p>
				<Image
					className="my-5 self-center"
					src={banner}
					alt="PMI Election Coverage"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					Welcome to PMI&apos;s coverage of the Potato Empire&apos;s elections,
					held between May 1st and May 5th of 2023. Three parties and two
					independent candidates contested five seats across the country.
					<br />
					<br />
					Here are the nationwide results.
				</p>
				<Image
					className="mt-5 self-center"
					src={potato_central}
					alt="Potato Central Results"
				/>
				<Image
					className="my-1 self-center"
					src={thailand}
					alt="Thailand Results"
				/>
				<Image className="my-1 self-center" src={wench} alt="Wench Results" />
				<Image className="my-1 self-center" src={allied} alt="Allied Results" />
				<Image
					className="my-1 self-center"
					src={sea_spray_islands}
					alt="Sea Spray Islands Results"
				/>
				<Image
					className="mb-5 mt-1 self-center"
					src={seat_count}
					alt="Seat Count"
				/>
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					This ends our coverage of the May elections. Thank you for reading
					through the numbers. The next election is due within the next two to
					three months.
				</p>
			</div>
		</main>
	);
}
