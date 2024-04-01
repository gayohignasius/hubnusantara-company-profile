import { TAboutUsProps } from "@/types";

const AboutUsSection = ({ about }: { about: TAboutUsProps }) => {
	return (
		<section
			id="about-us"
			className="bg-about-us-mobile md:bg-about-us bg-primary-100 lg:opacity-90 min-h-screen bg-cover bg-no-repeat"
		>
			<div className="max-w-[1312px] mx-auto">
				<div className="flex flex-col justify-evenly min-h-screen py-20 lg:py-28">
					<h2 className="title text-[32px] lg:text-[48px] text-primary-900 font-bold text-center">
						{about.title}
					</h2>
					<div className="flex flex-col w-full justify-between px-6 gap-y-8 lg:px-0">
						<div className="flex flex-col px-2 gap-y-8 lg:gap-y-10">
							<p
								className="font-poppins font-normal text-lg lg:text-[32px] text-primary-900 text-center [&>span]:text-secondary-400"
								dangerouslySetInnerHTML={{ __html: about.first_paragraph }}
							>
								{/* Hubnusantara merupakan{" "}
								<span className="text-secondary-400">
									penghubung antar stakeholder maritim
								</span>{" "}
								(boat owner, boat organizer, boat builder, boat charter) dalam
								menjalankan aktivitas bisnis kemaritiman di Indonesia. */}
							</p>
							<p
								className="font-poppins font-normal  text-lg lg:text-[32px] text-primary-900 text-center [&>span]:text-secondary-400"
								dangerouslySetInnerHTML={{ __html: about.second_paragraph }}
							>
								{/* Hubnusantara memberikan solusi berupa{" "}
								<span className="text-secondary-400">
									jasa konsultansi perencanaan pembangunan dan pengelolaan kapal
								</span>{" "}
								untuk individu/perusahaan dengan menyediakan ahli perkapalan
								serta platform digital pemesanan dan pengelolaan kapal. */}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;
