import { TValuePropProps, TWhyUsProps } from "@/types";

const ValuePropositionSection = ({
	value_prop,
	whyUs,
}: {
	value_prop: TValuePropProps;
	whyUs: TWhyUsProps;
}) => {
	return (
		<section
			id="value"
			className="w-full mb-10 lg:mb-24 bg-about-us-mobile md:bg-about-us h-[620px] lg:h-[476px] xl:h-[400px] bg-center lg:bg-right bg-cover bg-no-repeat"
		>
			<div className="flex w-full h-3/4 px-4 py-6 lg:justify-end">
				<div className="max-w-4xl lg:max-w-none lg:w-3/4">
					<div className="flex flex-col text-center lg:text-start">
						<p className="font-poppins font-semibold text-primary-900 text-[10px] pb-2 lg:text-sm uppercase">
							{value_prop.title}
						</p>
						<h3 className="title font-bold text-primary-900 text-2xl lg:text-[32px]">
							{value_prop.subtitle}
						</h3>
					</div>
					<div className="flex flex-col lg:flex-row gap-4 my-10 lg:mt-[72px]">
						{whyUs.items?.map((item) => (
							<div className="group w-full z-[5]" key={item.id.toString()}>
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
													src={item.icon}
													width={52}
													height={52}
													alt={item.icon}
												/>
											</span>
											<h2 className="title-card-section-3 leading-none lg:leading-10 text-xl lg:text-[32px] text-primary-100">
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
			<div className="bg-primary-100"></div>
		</section>
	);
};

export default ValuePropositionSection;
