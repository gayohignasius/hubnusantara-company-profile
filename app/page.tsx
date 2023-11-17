import WhyChooseUsSection from "@/components/modules/Dashboard/WhyChooseUsSection";
import ClientSection from "@/components/modules/Dashboard/ClientSection";
import ConnectWithUsSection from "@/components/modules/Dashboard/ConnectWithUsSection";
import CoreBusinessSection from "@/components/modules/Dashboard/CoreBusinessSection";
import HeroSection from "@/components/modules/Dashboard/HeroSection";
import WhatsappButton from "@/components/elements/WhatsappButton";

export default function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<CoreBusinessSection />
				<WhyChooseUsSection />
				<ClientSection />
				<ConnectWithUsSection />
			</main>
			<WhatsappButton />
		</>
	);
}
