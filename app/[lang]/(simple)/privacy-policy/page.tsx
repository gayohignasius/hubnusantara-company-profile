import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import PrivacyPolicySection from "@/components/modules/PrivacyPolicy/PrivacyPolicySection";

export default async function PrivacyPolicyPage({
	params,
}: {
	params: { lang: Locale };
}) {
	const intl = await getDictionary(params.lang);
	return (
		<PrivacyPolicySection
			privacy_policy={intl.privacy_policy}
			lang={params.lang}
		/>
	);
}
