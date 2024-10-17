import ClientBoatConsultation from "@/components/elements/ClientBoatConsultation";
import MarinetTourismKpSeribu from "@/components/elements/MarineTourismKpSeribu";
import MarineTourismLB from "@/components/elements/MarineTourismLB";
import MarineTourismNatuna from "@/components/elements/MarineTourismNatuna";
import MarineTourismRajaAmpat from "@/components/elements/MarineTourismRajaAmpat";
import ShipyardClassification from "@/components/elements/ShipyardClassification";
import { TPartnerClientProps } from "@/types";
import Marquee from "react-fast-marquee";

const ClientSection = ({
	partners_clients_section,
}: {
	partners_clients_section: TPartnerClientProps;
}) => {
	return (
		<section className="w-full h-full bg-primary-100">
			<div className="max-w-[1312px] mx-auto pt-20 md:pt-2 lg:pt-14 pb-16">
				<h2 className="text-center text-primary-900 text-2xl lg:text-4xl font-helvetica font-bold mb-10">
					{partners_clients_section.title_section}
				</h2>
				<Marquee
					speed={100}
					pauseOnHover={true}
					gradient={true}
					gradientColor="rgba(41, 41, 38, 0.8)"
					gradientWidth={100}
				>
					<ClientBoatConsultation
						boat_consultation_props={
							partners_clients_section.boat_consultation_props
						}
					/>
					<ShipyardClassification
						shipyard_classification_props={
							partners_clients_section.shipyard_classification_props
						}
					/>
					<MarineTourismLB
						labuan_bajo_props={partners_clients_section.labuan_bajo_props}
					/>
					<MarinetTourismKpSeribu
						kepulauan_seribu_props={
							partners_clients_section.kepulauan_seribu_props
						}
					/>
					<MarineTourismNatuna
						natuna_props={partners_clients_section.natuna_props}
					/>
					<MarineTourismRajaAmpat
						raja_ampat_props={partners_clients_section.raja_ampat_props}
					/>
				</Marquee>
			</div>
		</section>
	);
};

export default ClientSection;
