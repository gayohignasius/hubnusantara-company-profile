import FormattedList from "@/components/elements/FormattedList";
import { TPrivacyPolicyProps, TLanguageProps } from "@/types";
import Link from "next/link";

const PrivacyPolicySection = ({
	privacy_policy,
}: {
	privacy_policy: TPrivacyPolicyProps;
	lang: TLanguageProps;
}) => {
	return (
		<section
			id="privacy-policy"
			className="flex flex-col p-4 md:container md:mx-auto md:px-24 md:py-10 bg-white"
		>
			<div className="font-helvetica text-justify">
				<h1 className="font-bold text-xl md:text-[28px]">
					{privacy_policy?.title}
				</h1>
				<br />
				<div className="text-base md:text-lg">
					<p className="italic">{privacy_policy?.updated_date}</p>
					<br />
					<p>{privacy_policy?.first_paragraph}</p>
					<br />
					<p>{privacy_policy?.second_paragraph}</p>
					<br />
				</div>
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.interpretation_definitions.heading}
				</h3>
				<br />
				<div className="text-base md:text-lg">
					<p className="font-semibold">
						{privacy_policy?.interpretation_definitions.interpretation.heading}
					</p>
					<p>
						{
							privacy_policy?.interpretation_definitions.interpretation
								.first_paragraph
						}
					</p>
					<br />
					<p className="font-semibold">
						{privacy_policy?.interpretation_definitions.definitions.heading}
					</p>
					<p>
						{privacy_policy?.interpretation_definitions.definitions.description}
					</p>
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.account.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.account.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.affiliate.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.affiliate.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.company.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.company.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.cookies.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.cookies.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.country.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.country.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.device.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list.device
								.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.personal_data.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.personal_data.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.service.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.service.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.service_provider.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.service_provider.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.usage_data.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.usage_data.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list
									.website.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list
								.website.description
						}
					</p>
					<br />
					<p className="font-normal">
						<label className="font-semibold">
							{
								privacy_policy?.interpretation_definitions.definitions.list.you
									.heading
							}
						</label>{" "}
						{
							privacy_policy?.interpretation_definitions.definitions.list.you
								.description
						}
					</p>
					<br />
				</div>
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.collecting_using_personal_data.heading}
				</h3>
				<h3 className="font-semibold text-base md:text-lg">
					{privacy_policy?.collecting_using_personal_data.subheading}
				</h3>
				<br />
				<div className="text-base md:text-lg">
					<p className="font-semibold italic">
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.personal_data.heading
						}
					</p>
					<p>
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.personal_data.description
						}
					</p>
					{privacy_policy?.collecting_using_personal_data.list_of_data_collected.personal_data.list.map(
						(e) => (
							<div className="pl-11" key={e}>
								<ul className="list-outside list-['-_']">
									<li>{e}</li>
								</ul>
							</div>
						)
					)}
				</div>
				<br />
				<div className="text-base md:text-lg">
					<p className="font-semibold italic">
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.usage_data.heading
						}
					</p>
					<p>
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.usage_data.description
						}
					</p>
					<p>
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.usage_data.first_paragraph
						}
					</p>
					<p>
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.usage_data.second_paragraph
						}
					</p>
					<p>
						{
							privacy_policy?.collecting_using_personal_data
								.list_of_data_collected.usage_data.third_paragraph
						}
					</p>
				</div>
				<br />
				<div className="text-base md:text-lg">
					<p className="font-semibold italic">
						{privacy_policy?.tracking_cookies.heading}
					</p>
					<p>{privacy_policy?.tracking_cookies.description}</p>
					<FormattedList items={privacy_policy?.tracking_cookies.list} />
					<br />
					<p>
						{privacy_policy?.tracking_cookies.cookies_type.description}{" "}
						<Link
							className="text-tertiary-400 underline cursor-pointer"
							href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
							passHref
							target="_blank"
						>
							{privacy_policy?.tracking_cookies.cookies_type.link}
						</Link>
					</p>
					<br />
					<p>{privacy_policy?.tracking_cookies.cookies_usage.sentences}</p>
					<p className="font-semibold">
						{privacy_policy?.tracking_cookies.cookies_usage.essential.heading}
					</p>
					<p>{privacy_policy?.tracking_cookies.cookies_usage.essential.type}</p>
					<p>
						{
							privacy_policy?.tracking_cookies.cookies_usage.essential
								.administered_by
						}
					</p>
					<p>
						{privacy_policy?.tracking_cookies.cookies_usage.essential.purpose}
					</p>
					<br />
					<p className="font-semibold">
						{privacy_policy?.tracking_cookies.cookies_usage.acceptance.heading}
					</p>
					<p>
						{privacy_policy?.tracking_cookies.cookies_usage.acceptance.type}
					</p>
					<p>
						{
							privacy_policy?.tracking_cookies.cookies_usage.acceptance
								.administered_by
						}
					</p>
					<p>
						{privacy_policy?.tracking_cookies.cookies_usage.acceptance.purpose}
					</p>
					<br />
					<p className="font-semibold">
						{
							privacy_policy?.tracking_cookies.cookies_usage.functionality
								.heading
						}
					</p>
					<p>
						{privacy_policy?.tracking_cookies.cookies_usage.functionality.type}
					</p>
					<p>
						{
							privacy_policy?.tracking_cookies.cookies_usage.functionality
								.administered_by
						}
					</p>
					<p>
						{
							privacy_policy?.tracking_cookies.cookies_usage.functionality
								.purpose
						}
					</p>
					<br />
					<p>{privacy_policy?.tracking_cookies.more_cookies_information}</p>
					<br />
					<p className="font-semibold">
						{privacy_policy?.usage_of_personal_data.heading}
					</p>
					<br />
					<p className="font-semibold">
						{privacy_policy?.usage_of_personal_data.purpose}
					</p>
					{privacy_policy?.usage_of_personal_data.purpose_list.map(
						(item, index) => (
							<div className="pl-11" key={index}>
								<ul className="list-outside list-['-_']">
									<li>
										<p>
											<strong>{item.first_sentence}</strong>
											{item.rest_of_sentences}
										</p>
									</li>
								</ul>
							</div>
						)
					)}
					<br />
					<p className="font-semibold">
						{privacy_policy?.usage_of_personal_data.share_personal_data}
					</p>
					{privacy_policy?.usage_of_personal_data.sharing_list.map(
						(item, index) => (
							<div className="pl-11" key={index}>
								<ul className="list-outside list-['-_']">
									<li>
										<p>
											<strong>{item.first_sentence}</strong>
											{item.rest_of_sentences}
										</p>
									</li>
								</ul>
							</div>
						)
					)}
					<br />
				</div>
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.retention.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.retention.first_paragraph}</p>
					<p>{privacy_policy?.retention.second_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.transfer_data.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.transfer_data.first_paragraph}</p>
					<p>{privacy_policy?.transfer_data.second_paragraph}</p>
					<p>{privacy_policy?.transfer_data.third_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.delete_data.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.delete_data.first_paragraph}</p>
					<p>{privacy_policy?.delete_data.second_paragraph}</p>
					<p>{privacy_policy?.delete_data.third_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.disclosure_data.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p className="font-semibold italic">
						{privacy_policy?.disclosure_data.business_transactions.heading}
					</p>
					<p>
						{privacy_policy?.disclosure_data.business_transactions.description}
					</p>
				</div>
				<br />
				<div className="text-base md:text-lg">
					<p className="font-semibold italic">
						{privacy_policy?.disclosure_data.law_enforcement.heading}
					</p>
					<p>{privacy_policy?.disclosure_data.law_enforcement.description}</p>
				</div>
				<br />
				<div className="text-base md:text-lg">
					<p className="font-semibold italic">
						{privacy_policy?.disclosure_data.other_requirements.heading}
					</p>
					<p>
						{privacy_policy?.disclosure_data.other_requirements.description}
					</p>
					{privacy_policy?.disclosure_data.other_requirements.list.map(
						(item, index) => (
							<div className="pl-11" key={index}>
								<ul className="list-outside list-['-_']">
									<li>{item}</li>
								</ul>
							</div>
						)
					)}
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.security_data.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.security_data.description}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.children_privacy.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.children_privacy.first_paragraph}</p>
					<p>{privacy_policy?.children_privacy.second_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.links_other_websites.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.links_other_websites.first_paragraph}</p>
					<p>{privacy_policy?.links_other_websites.second_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.changes_policy.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.changes_policy.first_paragraph}</p>
					<p>{privacy_policy?.changes_policy.second_paragraph}</p>
					<p>{privacy_policy?.changes_policy.third_paragraph}</p>
				</div>
				<br />
				<h3 className="font-semibold text-base md:text-[22px]">
					{privacy_policy?.contact_us.heading}
				</h3>
				<div className="text-base md:text-lg">
					<p>{privacy_policy?.contact_us.description}</p>
					<p>
						{privacy_policy?.contact_us.by_email}{" "}
						<Link
							className="text-tertiary-400 cursor-pointer"
							href={"mailto:contact@hubnusantara.com"}
							passHref
						>
							{privacy_policy?.contact_us.link}
						</Link>
					</p>
				</div>
				<br />
			</div>
		</section>
	);
};

export default PrivacyPolicySection;
