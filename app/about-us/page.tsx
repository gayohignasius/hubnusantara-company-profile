import AboutSection from "@/components/modules/AboutUs/AboutSection";
import VisiMisiSection from "@/components/modules/AboutUs/VisiMisiSection";
import MilestoneSection from "@/components/modules/AboutUs/MilestoneSection";
import ValuePropositionSection from "@/components/modules/AboutUs/ValuePropositionSection";
import WhatsappButton from "@/components/elements/WhatsappButton";

const AboutUsPage = () => {
	return (
		<>
			<main>
				<AboutSection />
				<VisiMisiSection />
				<MilestoneSection />
				<ValuePropositionSection />
			</main>
			<WhatsappButton />
		</>
	);
};

export default AboutUsPage;
