import { TLanguageProps, TTncProps } from "@/types";
import Link from "next/link";

const TncSection = ({ tnc }: { tnc: TTncProps; lang: TLanguageProps }) => {
	return (
		<section
			id="tnc"
			className="flex flex-col p-4 md:container md:mx-auto md:px-24 md:py-10 bg-white"
		>
			<div className="font-helvetica text-justify">
				<h1 className="font-bold text-xl md:text-[28px]">{tnc?.title}</h1>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{tnc?.subtitle}
				</h3>
				<br />
				<div className="text-base md:text-lg">
					<p>
						{tnc?.first_paragraph}{" "}
						<Link
							className="text-tertiary-400 underline cursor-pointer"
							href={"https://hubnusantara.com/"}
						>
							{tnc?.link}
						</Link>
						.
					</p>
					{/* <p
						className="[&>span]:text-tertiary-400 [&>span]:underline [&>span]:cursor-pointer"
						dangerouslySetInnerHTML={{ __html: tnc?.first_paragraph }}
					></p> */}
					<br />
					<p>{tnc?.second_paragraph}</p>
					<br />
					<p>{tnc?.third_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{tnc?.cookies.heading}
				</h3>
				<br />
				<div className="text-base md:text-lg">
					<p>{tnc?.cookies.first_paragraph}</p>
					<br />
					<p>{tnc?.cookies.second_paragraph}</p>
					<br />
				</div>
				<h3 className="font-semibold text-base md:text-[22px]">
					{tnc?.license.heading}
				</h3>
				<br />
				<div className="text-base md:text-lg">
					<p>{tnc?.license.first_paragraph}</p>
					<br />
					<p>{tnc?.license.second_paragraph.commands}</p>
					<br />
					{tnc?.license.second_paragraph.statements.map((e) => (
						<div className="pl-11" key={e}>
							<ul className="list-outside list-['-_']">
								<li>{e}</li>
							</ul>
						</div>
					))}
					<br />
					<p>{tnc?.license.second_paragraph.agreement}</p>
					<br />
					<p>{tnc?.license.second_paragraph.first_paragraph}</p>
					<br />
					<p>{tnc?.license.second_paragraph.second_paragraph}</p>
					<br />
					<p>{tnc?.license.second_paragraph.warranty.text}</p>
					<br />
					{tnc?.license.second_paragraph.warranty.points.map((e) => (
						<div className="pl-11" key={e}>
							<ul className="list-outside list-['-_']">
								<li>{e}</li>
							</ul>
						</div>
					))}
					<br />
					<p>{tnc?.license.second_paragraph.third_paragraph}</p>
					<br />
				</div>
				<h3 className="font-semibold text-base md:text-[22px]">
					{tnc?.hyperlinking.heading}
				</h3>
				<br />
				<div className="text-base md:text-lg">
					<p>{tnc?.hyperlinking.first_organizations}</p>
					<br />
					{tnc?.hyperlinking.first_list.map((e) => (
						<div className="pl-11" key={e}>
							<ul className="list-outside list-['-_']">
								<li>{e}</li>
							</ul>
						</div>
					))}
					<br />
					<p>{tnc?.hyperlinking.first_paragraph}</p>
					<br />
					<p>{tnc?.hyperlinking.second_organizations}</p>
					<br />
					{tnc?.hyperlinking.second_list.map((e) => (
						<div className="pl-11" key={e}>
							<ul className="list-outside list-['-_']">
								<li>{e}</li>
							</ul>
						</div>
					))}
					<br />
					<p>{tnc?.hyperlinking.third_paragraph}</p>
					<br />
					<p>{tnc?.hyperlinking.fourth_paragraph}</p>
					<br />
					<p>{tnc?.hyperlinking.approved_organizations}</p>
					<br />
					{tnc?.hyperlinking.approved_organizations_list.map((e) => (
						<div className="pl-11" key={e}>
							<ul className="list-outside list-['-_']">
								<li>{e}</li>
							</ul>
						</div>
					))}
					<br />
					<p>{tnc?.hyperlinking.fifth_paragraph}</p>
					<br />
					<h3 className="font-semibold text-base md:text-[22px]">
						{tnc?.iframes.heading}
					</h3>
					<br />
					<div className="text-base md:text-lg">
						<p>{tnc?.iframes.first_paragraph}</p>
					</div>
					<br />
					<h3 className="font-semibold text-base md:text-[22px]">
						{tnc?.content_liability.heading}
					</h3>
					<br />
					<div className="text-base md:text-lg">
						<p>{tnc?.content_liability.first_paragraph}</p>
					</div>
					<br />
					<h3 className="font-semibold text-base md:text-[22px]">
						{tnc?.reservation_of_rights.heading}
					</h3>
					<br />
					<div className="text-base md:text-lg">
						<p>{tnc?.reservation_of_rights.first_paragraph}</p>
					</div>
					<br />
					<h3 className="font-semibold text-base md:text-[22px]">
						{tnc?.removal_links.heading}
					</h3>
					<br />
					<div className="text-base md:text-lg">
						<p>{tnc?.removal_links.first_paragraph}</p>
						<br />
						<p>{tnc?.removal_links.second_paragraph}</p>
					</div>
					<br />
					<h3 className="font-semibold text-base md:text-[22px]">
						{tnc?.disclaimer.heading}
					</h3>
					<br />
					<div className="text-base md:text-lg">
						<p>{tnc?.disclaimer.first_paragraph}</p>
						<br />
						{tnc?.disclaimer.list.map((e) => (
							<div className="pl-11" key={e}>
								<ul className="list-outside list-['-_']">
									<li>{e}</li>
								</ul>
							</div>
						))}
						<br />
						<p>{tnc?.disclaimer.second_paragraph}</p>
						<br />
						<p>{tnc?.disclaimer.third_paragraph}</p>
					</div>
					<br />
				</div>
			</div>
		</section>
	);
};

export default TncSection;
