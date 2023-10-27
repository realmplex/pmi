import Image from "next/image";

import banner from "./assets/banner.png";

export default function Article() {
	return (
		<main className="mx-4 mb-10 mt-5 flex items-center justify-center">
			<div className="w-full max-w-prose">
				<h1 className="text-3xl font-bold text-zinc-400">
					GSC to build facility for testing, development, and business
				</h1>
				<p className="my-2 font-medium text-zinc-500">JVTA &bull; 22/04/2023</p>
				<Image className="my-5 self-center" src={banner} alt="GSC logo" />
				<hr className="mb-5 border-zinc-500" />
				<p className="text-zinc-400">
					GSC&apos;s chairperson, JVTA, announced today that the GSC would be
					seeking to build a facility for the company.
					<br />
					<br />
					The facility described will be used by the GSC for testing,
					experimenting, and corporate activities. It will be the most expensive
					project that the GSC will ever undertake. &quot;The new facility will
					allow us to grow as a company,&quot; JVTA said in a statement to the
					press. &quot;It will also allow us to commit to new projects, and
					discover new things in the world that we may not know yet.&quot;
					<br />
					<br />
					The facility&apos;s location has not yet been pinpointed. There are
					rumours it could be constructed in Jonasland or another country with a
					presence of one of the GSC&apos;s subsidiaries. Further rumours also
					speculate the GSC may purchase unclaimed land for the facility.
				</p>
			</div>
		</main>
	);
}
