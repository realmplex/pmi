import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					The Gays form organisation to rival URA
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 10/05/2023</p>
				<Image className="my-5 self-center" src={banner} alt="URA Logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					The URA has gained a rival.
					<br />
					<br />
					The &quot;Big Baller Collective&quot;, or BBC - no relation to the
					British public broadcaster of the same name - is an organisation that
					strives to &quot;do everything the URA does, but better&quot;. The
					organisation contains The Gays and Jonasland, as well as Aurelia and
					Sol Corporation. The Sea Spray Islands is considering joining.
					<br />
					<br />
					The organisation is another endeavour by The Gays, who have been very
					active recently. The member states seem to all be related; many of
					it&quot;s members recently played a part in the debates over the slur
					rule and the duping debates.
					<br />
					<br />
					The URA is yet to comment, though it&apos;s members are aware of the
					organisation&apos;s existence. JVTA said of the organisation, &quot;I
					hope the BBC can help preserve world peace.&quot;
				</p>
			</div>
		</main>
	);
}
