import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					SpecShark elected as server admin
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA • 29/04/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Realmplex logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					SpecShark has been elected today as Realmplex admin.
					<br />
					<br />
					This came after a week-long election to choose a new admin after the
					resignation of SandwichPress. Eight candidates participated. After the
					calculation, the election came down to a singular vote; Jom lost to
					SpecShark by one vote.
					<br />
					<br />
					While SpecShark topped the first choice votes with 10 votes at the
					start of counting, the other candidates topped the second choices and
					other numbers:
				</p>
				<ul className="list-inside list-disc text-zinc-400">
					<li>SpecShark also had the most second-choice votes (7)</li>
					<li>
						TheAllSeeingBird, who had called for his voters to give their
						first-choice votes to SpecShark, received the most third-choice
						votes (also 7)
					</li>
					<li>LeBanana received the most fourth-choice votes (6)</li>
					<li>
						Meese, who received no first-choice votes, received the most fifth
						choice votes (8)
					</li>
					<li>LeBanana received the most sixth-choice votes (also 6)</li>
					<li>EPCNZ received the most seventh-choice votes (5)</li>
					<li>JVTA received the most eighth-choice votes (7)</li>
				</ul>
				<p className="text-zinc-400">
					<br />
					Reaction has been largely supportive of SpecShark becoming admin.
					TheAllSeeingBird, a fellow candidate, congratulated SpecShark in an
					article posted to RNN. Can of Chicken is quoted as having said
					&quot;finally a good mod&quot; after the results were announced.
					<br />
					<br />
					JVTA told PMI they were &quot;incredibly upset&quot; to find out that
					they got the most eighth-choice votes. JVTA, who had been repeatedly
					criticised for their actions during the vote, was witnessed angrily
					yelling at people speculating that they would be &quot;salty&quot;
					about losing.
					<br />
					<br />
					The next admin vote, unless decided otherwise, will be in five months
					(anytime before 29th September).
				</p>
			</div>
		</main>
	);
}
