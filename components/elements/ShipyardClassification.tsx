import shipyard from "@/dummy/shipyard.json";
import Image from "next/image";
import { Fragment } from "react";

const ShipyardClassification = () => {
	return (
		<Fragment>
			<div className="w-full grid auto-cols-max lg:auto-cols-[20rem] grid-flow-col grid-rows-2 gap-4 overflow-x-scroll hide-scroll-bar place-items-center">
				<div className="font-bebas_neue text-xl font-bold leading-none">
					<h1 className="text-tertiary-500">Shipyard and</h1>
					<h1 className="text-secondary-300">Classification</h1>
				</div>
				{shipyard.map((item, index) => (
					<Image
						key={item.id}
						src={item.image}
						alt={item.logo}
						width={250}
						height={100}
					/>
				))}
			</div>
			<div className="h-[196px] bg-secondary-300 w-[2px]" />
		</Fragment>
	);
};

export default ShipyardClassification;
