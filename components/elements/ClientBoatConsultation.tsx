import boat_consultation from "@/dummy/boat_consultation.json";
import { TBoatConsultationProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";

const ClientBoatConsultation = ({
	boat_consultation_props,
}: {
	boat_consultation_props: TBoatConsultationProps;
}) => {
	return (
		<Fragment>
			<div className="w-full grid auto-cols-max lg:auto-cols-[20rem] grid-flow-col grid-rows-2 gap-4 overflow-x-scroll hide-scroll-bar place-items-center">
				<div className="font-bebas_neue text-xl font-bold leading-none">
					<h1 className="text-tertiary-500">
						{boat_consultation_props.category}
					</h1>
					<h1 className="text-secondary-300">
						{boat_consultation_props.first_title}
					</h1>
				</div>
				{boat_consultation.map((item, index) => (
					<Image
						key={item.id}
						src={item.image}
						alt={item.logo}
						width={250}
						height={100}
					/>
				))}
			</div>
			<div className="h-[210px] bg-secondary-300 w-[2px]" />
		</Fragment>
	);
};

export default ClientBoatConsultation;
