import { TClientProps } from "@/types";
import shipyard from "@/dummy/shipyard.json";
import labuan_bajo from "@/dummy/labuan_bajo.json";
import kepulauan_seribu from "@/dummy/kepulauan_seribu.json";
import natuna from "@/dummy/natuna.json";
import raja_ampat from "@/dummy/raja_ampat.json";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ShipyardClassification from "@/components/elements/ShipyardClassification";
import MarineTourismLB from "@/components/elements/MarineTourismLB";
import MarinetTourismKpSeribu from "@/components/elements/MarineTourismKpSeribu";
import MarineTourismNatuna from "@/components/elements/MarineTourismNatuna";
import MarineTourismRajaAmpat from "@/components/elements/MarineTourismRajaAmpat";

const ClientSection = ({
	client_section,
}: {
	client_section: TClientProps;
}) => {
	return (
		<section className="w-full h-full bg-primary-100">
			<div className="max-w-[1312px] mx-auto pt-2 pb-16">
				<h2 className="text-center text-primary-900 text-2xl lg:text-4xl font-helvetica font-bold mb-10">
					{client_section.title_section}
				</h2>
				<Marquee
					speed={100}
					pauseOnHover={true}
					gradient={true}
					gradientColor="rgba(41, 41, 38, 0.8)"
					gradientWidth={100}
				>
					<ShipyardClassification />
					<MarineTourismLB />
					<MarinetTourismKpSeribu />
					<MarineTourismNatuna />
					<MarineTourismRajaAmpat />
				</Marquee>
			</div>
		</section>
	);
};

export default ClientSection;
