import ConnectWithUsSection from "@/components/modules/ConnectWithUs/ConnectWithUsSection";
import { Locale } from "@/i18n.config";

export default async function ConnectWithUs({
	params,
}: {
	params: { lang: Locale };
}) {
	return (
		<main>
			<ConnectWithUsSection params={params} />
		</main>
	);
}
