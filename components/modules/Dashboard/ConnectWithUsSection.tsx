import MyForm from "../../elements/MyForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ConnectWithUsSection = async ({
	params,
}: {
	params: { lang: Locale };
}) => {
	const intl = await getDictionary(params.lang);
	return (
		<section id="connect" className="w-full h-full">
			<div className="w-full h-[850px] relative">
				{/* <div className="bg-primary-100 h-1/6 w-full relative" /> */}
				<div className="flex bg-bajo-hero bg-cover bg-top bg-no-repeat w-full h-3/4 relative">
					<div className="max-w-sm md:max-w-md lg:max-w-xl mx-auto -mt-20 z-[5]">
						<MyForm form={intl.form} lang={params.lang} />
					</div>
				</div>
				<div className="overlay-connect" />
			</div>
		</section>
	);
};

export default ConnectWithUsSection;
