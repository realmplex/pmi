import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					Carrot Castle completed
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 08/05/2023</p>
				<Image className="my-5 self-center" src={banner} alt="Carrot Castle" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					After 294 days of construction, Carrot Castle has finally been
					completed.
					<br />
					<br />
					The build, located at the heart of the Carrot mainland, is the largest
					build on the server to date (though the title of tallest build remains
					with Sol Corp Tower), with a length of 394 blocks and a height of 76
					blocks.
					<br />
					<br />
					The build, which is to serve as a Carrot analogue to the Potato
					Temple, will be the centre of and the capital for the Carrot Republic.
					There is an area around the castle in which buildings can be built,
					however builds must first be approved by the government.
					<br />
					<br />
					&quot;I am so, so happy to finally announce that Carrot Castle is
					finally complete!,&quot; RoryRDMB stated in an announcement on the
					Carrot Republic&apos;s Discord. &quot;Massive thanks to SpecShark, Can
					of Chicken, Fishpoop, and BasilGaming and everyone else, Carrot
					Citizen or not, who helped me makes this epic project a reality!&quot;
					<br />
					<br />
					&quot;I give my congratulations to Carrot on the completion of this
					new build,&quot; JVTA said in a statement to PMI. &quot;This build is
					very significant, and I don&apos;t think Carrot can wait to show it
					off. Even if I haven&apos;t seen it already, with permission of
					course.&quot;
					<br />
					<br />
					TaylorWorld, the Potato King, also gave a statement. &quot;I
					congratulate Rory on the completion of the Carrot Castle! It is an
					amazing build that would have taken a lot of hard work and dedication.
					It&apos;s also really cool to see another completed project on the
					server, especially one this big. Although we will make the Potato
					Temple better than this castle, mark my words.&quot;
					<br />
					<br />A portal has now been installed for people to go check out the
					build. It is likely security will be tight due to recent events.
				</p>
			</div>
		</main>
	);
}
