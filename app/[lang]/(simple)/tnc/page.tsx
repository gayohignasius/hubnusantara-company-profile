import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import TncSection from "@/components/modules/TnC/TncSection";

export default async function TncPage({
	params,
}: {
	params: { lang: Locale };
}) {
	const intl = await getDictionary(params.lang);
	return <TncSection tnc={intl.tnc} lang={params.lang} />;
}
