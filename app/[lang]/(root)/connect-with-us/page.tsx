import ConnectWithUsSection from "@/components/modules/ConnectWithUs/ConnectWithUsSection";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function ConnectWithUs({
	params,
}: {
	params: { lang: Locale };
}) {
	const intl = await getDictionary(params.lang);

	return (
		<main>
			<ConnectWithUsSection intl={intl} lang={params.lang} />
		</main>
	);
}
