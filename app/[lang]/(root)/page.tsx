import WhyChooseUsSection from "@/components/modules/Dashboard/WhyChooseUsSection";
import ClientSection from "@/components/modules/Dashboard/ClientSection";
import ConnectWithUsSection from "@/components/modules/Dashboard/ConnectWithUsSection";
import CoreBusinessSection from "@/components/modules/Dashboard/CoreBusinessSection";
import HeroSection from "@/components/modules/Dashboard/HeroSection";
import WhatsappButton from "@/components/elements/WhatsappButton";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params }: { params: { lang: Locale } }) {
	const intl = await getDictionary(params.lang);
	return (
		<>
			<main>
				<HeroSection hero={intl.hero} />
				<CoreBusinessSection business={intl.business} />
				<WhyChooseUsSection whyUs={intl.whyUs} />
				<ClientSection
					partners_clients_section={intl.partners_clients_section}
				/>
				<ConnectWithUsSection intl={intl} lang={params.lang} />
			</main>
			<WhatsappButton />
		</>
	);
}
