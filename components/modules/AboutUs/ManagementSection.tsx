import { TManagementProps } from "@/types";
import Image from "next/image";

const ManagementSection = ({
	management,
}: {
	management: TManagementProps;
}) => {
	return (
		<section id="management" className="w-full h-full bg-primary-100">
			<div className="flex relative w-full h-full px-4 py-6 lg:justify-end">
				<div className="max-w-4xl mx-auto lg:mx-0 lg:max-w-none lg:w-3/4">
					<div className="flex flex-col text-center lg:text-start">
						<p className="font-poppins font-semibold text-primary-900 text-[10px] pb-2 lg:text-sm uppercase">
							{management.title}
						</p>
						<h3 className="title font-bold text-primary-900 text-2xl lg:text-[32px]">
							{management.title}
						</h3>
					</div>
					<div className="flex relative px-6 my-8 w-[328px] h-[153px] lg:w-[625px] lg:h-[352px] xl:w-[978px] xl:h-[456px]">
						<Image
							src="/images/management.png"
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

export default ManagementSection;
