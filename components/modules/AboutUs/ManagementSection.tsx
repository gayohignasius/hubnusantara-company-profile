import Image from "next/image";

const Management = () => {
	return (
		<section
			id="management"
			className="w-full h-full bg-primary-100 pt-10 lg:pt-24 relative"
		>
			<div className="flex relative w-full h-full px-4 py-6 lg:justify-end">
				<div className="max-w-4xl mx-auto lg:mx-0 lg:max-w-none lg:w-3/4">
					<div className="flex flex-col text-center lg:text-start">
						<p className="font-poppins font-semibold text-primary-900 text-[10px] pb-2 lg:text-sm uppercase">
							Board of Management
						</p>
						<h3 className="title font-bold text-primary-900 text-2xl lg:text-[32px]">
							Board of Management
						</h3>
					</div>
					<div className="flex relative px-6 my-8 w-[328px] h-[153px] lg:w-[625px] lg:h-[352px] xl:w-[978px] xl:h-[456px]">
						<Image
							src="/management.png"
							alt="Board of Management"
							fill={true}
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Management;
