import labuan_bajo from "@/dummy/labuan_bajo.json";
import { TLabuanBajoProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";

const MarineTourismLB = ({
	labuan_bajo_props,
}: {
	labuan_bajo_props: TLabuanBajoProps;
}) => {
	return (
		<Fragment>
			<div className="w-full grid auto-cols-max lg:auto-cols-[20rem] grid-flow-col grid-rows-2 gap-4 overflow-x-scroll hide-scroll-bar place-items-center">
				<div className="font-bebas_neue text-xl font-bold leading-none">
					<h1 className="text-tertiary-500">{labuan_bajo_props.category}</h1>
					<h1 className="text-tertiary-500">{labuan_bajo_props.first_title}</h1>
					<h1 className="text-secondary-300">
						{labuan_bajo_props.second_title}
					</h1>
				</div>
				{labuan_bajo.map((item, index) => (
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

export default MarineTourismLB;
