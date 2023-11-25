import { TWhyUsProps } from "@/types";

const WhyChooseUsSection = ({ whyUs }: TWhyUsProps) => {
	return (
		<section id="why-us" className="w-full h-screen lg:h-full">
			<div className="flex flex-col h-full lg:flex-row">
				<div className="w-full h-[768px] bg-no-repeat absolute bg-section-3-mobile bg-center md:bg-cover md:h-[585px] lg:h-[532px] lg:bg-auto lg:bg-section-3-desktop lg:bg-right">
					<div className="max-w-[1312px] mx-auto px-6 xl:px-0">
						<div className="container-section-3">
							<h1 className="text-2xl lg:text-4xl font-helvetica font-bold mt-14">
								{whyUs.title_section}
							</h1>
							<p className="font-poppins font-normal text-[16px] lg:text-[24px] text-primary-300">
								{whyUs.subtitle_section}
							</p>
							<div className="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-[72px]">
								{whyUs.items.map((item) => (
									<div className="group w-full" key={item.id.toString()}>
										<div
											className={`h-2 ${
												item.id == 1 ? "bg-secondary-300" : "bg-tertiary-400"
											} max-w-md lg:max-w-lg`}
										/>
										<div className="max-w-md lg:max-w-lg h-full rounded-b-lg bg-white overflow-hidden">
											<div className="flex flex-col h-full items-start justify-between gap-4 px-6 py-4">
												<div className="flex flex-col gap-4">
													<span>
														<img
															srcSet={item.icon}
															width={52}
															height={52}
															alt={item.icon}
														/>
													</span>
													<h2 className="title-card-section-3 leading-10 text-xl lg:text-[32px] text-primary-100">
														{item.title}
													</h2>
												</div>

												<p className="description-card-section-3 text-[12px] lg:text-sm text-primary-100">
													{item.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-full lg:h-[600px] bg-primary-100"></div>
			</div>
		</section>
	);
};

export default WhyChooseUsSection;
