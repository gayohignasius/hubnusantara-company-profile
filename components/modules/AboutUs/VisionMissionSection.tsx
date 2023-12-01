import { TVisionMissionProps } from "@/types";
import Image from "next/image";

const VisionMissionSection = ({
	vision_mission,
}: {
	vision_mission: TVisionMissionProps;
}) => {
	return (
		<section
			id="visionmission"
			className="w-full h-full bg-primary-100 py-8 xl:pb-20 -mt-40"
		>
			<div className="flex w-full h-full lg:justify-end lg:px-8">
				<div className="max-w-[978px] flex flex-col lg:flex-row lg:ml-60 xl:mr-[165px]">
					<div className="flex flex-col px-4">
						<div className="flex flex-col text-center lg:text-start py-3">
							<p className="font-poppins font-semibold text-primary-900 text-[10px] lg:text-sm py-2 uppercase">
								{vision_mission.vision_title}
							</p>
							<h3 className="title font-bold text-secondary-400 text-2xl lg:text-[32px]">
								{vision_mission.vision_desc}
							</h3>
						</div>
						<div className="flex flex-col w-full pt-3 lg:pt-14">
							<p className="font-poppins font-semibold text-primary-900 text-[10px] lg:text-sm text-center lg:text-start py-2 uppercase">
								{vision_mission.mission_title}
							</p>
							<div className="flex flex-col">
								{vision_mission.mission_desc.map((item, index) => (
									<div key={item.id.toString()}>
										<div className="flex flex-row gap-x-4 items-center justify-self-start lg:items-center">
											<h1 className="font-helvetica font-bold text-primary-200 text-2xl lg:text-4xl">
												{item.id.toString()}
											</h1>
											<p className="font-helvetica font-normal text-primary-900 text-sm lg:text-lg">
												{item.description}
											</p>
										</div>
										{index === vision_mission.mission_desc.length - 1 ? null : (
											<hr className="w-full h-[1px] mx-auto my-4 border-0 rounded bg-primary-200" />
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="flex relative px-4 lg:mt-12 py-4 max-w-lg mx-auto w-[352px] h-[328px] lg:w-[421px] lg:h-auto">
						<Image
							src="/images/visimisi.svg"
							alt="Labuan Bajo"
							fill={true}
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VisionMissionSection;
