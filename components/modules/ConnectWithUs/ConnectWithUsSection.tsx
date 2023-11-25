import MyForm from "@/components/elements/MyForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ConnectWithUsSection = async ({
	params,
}: {
	params: { lang: Locale };
}) => {
	const intl = await getDictionary(params.lang);
	return (
		<section
			id="connect-with-us"
			className="flex bg-connect-with-us bg-center min-h-screen bg-no-repeat md:bg-right bg-cover"
		>
			<div className="w-full h-full relative">
				<div className="max-w-[1312px] mx-auto">
					<div className="flex flex-row lg:flex-col justify-between h-3/4 py-20">
						<div className="flex flex-col lg:flex-row w-full justify-between px-6 gap-y-8 lg:px-0">
							<div className="flex flex-col">
								<h1 className="title text-[32px] lg:text-[48px] hero-spacing text-primary-900 font-bold pb-4">
									{intl.connect.title}
								</h1>
								<div className="flex flex-col gap-y-6 text-primary-900">
									<p>{intl.connect.first_desc}</p>
									<p>{intl.connect.second_desc}</p>
									<p>{intl.connect.third_desc}</p>
								</div>
							</div>
							<div className="flex relative w-full justify-end md:justify-center z-[5]">
								<MyForm form={intl.form} />
							</div>
						</div>
					</div>
				</div>
				<div className="overlay-connect" />
			</div>
		</section>
	);
};

export default ConnectWithUsSection;
