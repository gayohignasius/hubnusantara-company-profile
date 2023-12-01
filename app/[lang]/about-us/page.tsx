import AboutUsSection from "@/components/modules/AboutUs/AboutUsSection";
import VisionMissionSection from "@/components/modules/AboutUs/VisionMissionSection";
import MilestoneSection from "@/components/modules/AboutUs/MilestoneSection";
import ValuePropositionSection from "@/components/modules/AboutUs/ValuePropositionSection";
import WhatsappButton from "@/components/elements/WhatsappButton";
import ManagementSection from "@/components/modules/AboutUs/ManagementSection";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import StickyNav from "@/components/elements/StickyNav";
import AboutUsClientComponent from "@/components/modules/AboutUs/AboutUsClientComponent";
// import SectionWrapper from "@/components/elements/SectionWrapper";

export default async function AboutUsPage({
	params,
}: {
	params: { lang: Locale };
}) {
	const intl = await getDictionary(params.lang);
	return (
		<>
			<main>
				<AboutUsSection about={intl.about} />
				{/* <div className="flex flex-col items-start bg-primary-100">
					<StickyNav />
					<VisionMissionSection vision_mission={intl.vision_mission} />
					<MilestoneSection milestone={intl.milestone} />
					<ValuePropositionSection
						value_prop={intl.value_prop}
						whyUs={intl.whyUs}
					/>
					<ManagementSection management={intl.management} />
				</div> */}
				<AboutUsClientComponent intl={intl} />
			</main>
			<WhatsappButton />
		</>
	);
}
