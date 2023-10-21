import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section id="about-us" className="w-full h-screen">
			<div className="flex flex-col lg:flex-row relative">
				<div className="w-full h-96 bg-no-repeat absolute bg-section-3-mobile bg-top md:bg-cover md:h-[480px] lg:h-[532px] lg:bg-auto lg:bg-section-3-desktop lg:bg-right">
					<div className="max-w-[1312px] mx-auto px-6">
						<div className="container-section-3">
							<h1 className="text-2xl lg:text-4xl font-helvetica font-bold mt-14">
								Why Choose Us?
							</h1>
							<p className="font-poppins font-normal text-[16px] lg:text-[24px] text-primary-300">
								Kami menyediakan solusi perancangan, pembangunan, penyewaan, dan
								pengelolaan kapal wisata dengan platform digital.
							</p>
							<div className="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-[72px]">
								<div className="group w-full">
									<div className="h-2 bg-secondary-300 max-w-md lg:max-w-lg" />
									<div className="max-w-md lg:max-w-lg rounded-b-lg bg-white overflow-hidden">
										<div className="flex flex-col items-start gap-6 p-6">
											<h2 className="title-card-section-3 text-xl lg:text-[32px] text-primary-100">
												Time-Cost Efficiency with Process Simplification
											</h2>
											<p className="description-card-section-3 text-[12px] lg:text-sm text-primary-100">
												Provide easy-to-understand business process & service
												for boat owners with/without maritime expertise to run
												their maritime tourism business
											</p>
										</div>
									</div>
								</div>
								<div className="group w-full">
									<div className="h-2 bg-tertiary-400 max-w-md lg:max-w-lg" />
									<div className="max-w-md lg:max-w-lg rounded-b-lg bg-white overflow-hidden">
										<div className="flex flex-col items-start gap-6 p-6">
											<h2 className="title-card-section-3 text-xl lg:text-[32px] text-primary-100">
												Maritime Business Digitalization
											</h2>
											<p className="description-card-section-3 text-[12px] lg:text-sm text-primary-100">
												Broad access among maritime tourism stakeholders (boat
												owners, boat managers, boat builders, boat captains,
												boat renters/travelers)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full bg-primary-100">
				<div className="max-w-[1312px] mx-auto px-6">second</div>
			</div>
		</section>
	);
};

export default About;
