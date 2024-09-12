import { Locale } from "@/i18n.config";

export type TCardProps = {
	image: string;
	bgImage: string;
	title: string;
	description: string;
	description_hover?: string[];
	textButton: string;
	textButtonHover: string;
	hyperlink: string;
};

export type TLanguageProps = Locale;

export interface TIntlProps {
	intl: {
		navigation?: TNavbarProps;
		footer?: TFooterProps;
		hero?: THeroProps;
		business?: TBusinessProps;
		partners_clients_section?: TPartnerClientProps;
		about?: TAboutUsProps;
		whyUs?: TWhyUsProps;
		vision_mission?: TVisionMissionTwoProps;
		milestone?: TMilestoneProps;
		value_prop?: TValuePropProps;
		management?: TManagementProps;
		sticky_nav?: TStickyNavLangProps;
		tnc: TTncProps;
	};
}

export type TTncProps = {
	title: string;
	subtitle: string;
	first_paragraph: string;
	link: string;
	second_paragraph: string;
	third_paragraph: string;
	cookies: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
	};
	license: {
		heading: string;
		first_paragraph: string;
		second_paragraph: TLicenseProps;
	};
	hyperlinking: {
		heading: string;
		first_organizations: string;
		first_list: string[];
		first_paragraph: string;
		second_organizations: string;
		second_list: string[];
		second_paragraph: string;
		third_paragraph: string;
		fourth_paragraph: string;
		approved_organizations: string;
		approved_organizations_list: string[];
		fifth_paragraph: string;
	};
	iframes: {
		heading: string;
		first_paragraph: string;
	};
	content_liability: {
		heading: string;
		first_paragraph: string;
	};
	reservation_of_rights: {
		heading: string;
		first_paragraph: string;
	};
	removal_links: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
	};
	disclaimer: {
		heading: string;
		first_paragraph: string;
		list: string[];
		second_paragraph: string;
		third_paragraph: string;
	};
};

export type TLicenseProps = {
	commands: string;
	statements: string[];
	agreement: string;
	first_paragraph: string;
	second_paragraph: string;
	warranty: TWarrantyProps;
	third_paragraph: string;
};

export type TWarrantyProps = {
	text: string;
	points: string[];
};

export type TPrivacyPolicyProps = {
	title: string;
	updated_date: string;
	first_paragraph: string;
	second_paragraph: string;
	interpretation_definitions: TIntDefProps;
	collecting_using_personal_data: TCollectPersonalData;
	tracking_cookies: TTrackingCookiesProps;
	usage_of_personal_data: TUsagePersonalDataProps;
	retention: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
	};
	transfer_data: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
		third_paragraph: string;
	};
	delete_data: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
		third_paragraph: string;
		fourth_paragraph: string;
	};
	disclosure_data: TDisclosureDataProps;
	security_data: {
		heading: string;
		description: string;
	};
	children_privacy: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
	};
	links_other_websites: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
	};
	changes_policy: {
		heading: string;
		first_paragraph: string;
		second_paragraph: string;
		third_paragraph: string;
	};
	contact_us: {
		heading: string;
		description: string;
		by_email: string;
		link: string;
	};
};

export type TIntDefProps = {
	heading: string;
	interpretation: {
		heading: string;
		first_paragraph: string;
	};
	definitions: {
		heading: string;
		description: string;
		list: {
			account: {
				heading: string;
				description: string;
			};
			affiliate: {
				heading: string;
				description: string;
			};
			company: {
				heading: string;
				description: string;
			};
			cookies: {
				heading: string;
				description: string;
			};
			country: {
				heading: string;
				description: string;
			};
			device: {
				heading: string;
				description: string;
			};
			personal_data: {
				heading: string;
				description: string;
			};
			service: {
				heading: string;
				description: string;
			};
			service_provider: {
				heading: string;
				description: string;
			};
			usage_data: {
				heading: string;
				description: string;
			};
			website: {
				heading: string;
				description: string;
				link: string;
			};
			you: {
				heading: string;
				description: string;
			};
		};
	};
};

export type TCollectPersonalData = {
	heading: string;
	subheading: string;
	list_of_data_collected: {
		personal_data: {
			heading: string;
			description: string;
			list: string[];
		};
		usage_data: {
			heading: string;
			description: string;
			first_paragraph: string;
			second_paragraph: string;
			third_paragraph: string;
		};
	};
};

export type TTrackingCookiesProps = {
	heading: string;
	description: string;
	list: string[];
	cookies_type: {
		description: string;
		link: string;
	};
	cookies_usage: {
		sentences: string;
		essential: {
			heading: string;
			type: string;
			administered_by: string;
			purpose: string;
		};
		acceptance: {
			heading: string;
			type: string;
			administered_by: string;
			purpose: string;
		};
		functionality: {
			heading: string;
			type: string;
			administered_by: string;
			purpose: string;
		};
	};
	more_cookies_information: string;
};

export type TUsagePersonalDataProps = {
	heading: string;
	purpose: string;
	purpose_list: { first_sentence: string; rest_of_sentences: string }[];
	share_personal_data: string;
	sharing_list: { first_sentence: string; rest_of_sentences: string }[];
};

export type TDisclosureDataProps = {
	heading: string;
	business_transactions: {
		heading: string;
		description: string;
	};
	law_enforcement: {
		heading: string;
		description: string;
	};
	other_requirements: {
		heading: string;
		description: string;
		list: string[];
	};
};

export type TNavbarProps = {
	home: string;
	business: string;
	about: string;
	connect: string;
};

export type TFooterProps = {
	product: string;
	contact: string;
	social_media: string;
};

export type TCustomLinkProps = {
	href: string;
	lang: string;
	children: React.ReactNode;
	[key: string]: unknown;
};

export type THeroProps = {
	title: string;
};

export type TBusinessProps = {
	title_section: string;
	items: {
		title: string;
		description: string;
		description_hover: string[];
		bgImage: string;
		image: string;
		text_button: string;
		text_button_hover: string;
		hyperlink: string;
	}[];
};

export type TPartnerClientProps = {
	title_section: string;
	boat_consultation_props: TBoatConsultationProps;
	shipyard_classification_props: TShipyardAndClassificationProps;
	labuan_bajo_props: TLabuanBajoProps;
	kepulauan_seribu_props: TKepulauanSeribuProps;
	natuna_props: TNatunaProps;
	raja_ampat_props: TRajaAmpatProps;
};

export type TBoatConsultationProps = {
	category: string;
	first_title: string;
	second_title?: string;
};

export type TShipyardAndClassificationProps = {
	category: string;
	first_title: string;
	second_title: string;
};

export type TLabuanBajoProps = {
	category: string;
	first_title: string;
	second_title: string;
};

export type TKepulauanSeribuProps = {
	category: string;
	first_title: string;
	second_title: string;
};

export type TNatunaProps = {
	category: string;
	first_title: string;
	second_title: string;
};

export type TRajaAmpatProps = {
	category: string;
	first_title: string;
	second_title: string;
};

export type TAboutUsProps = {
	title: string;
	first_paragraph: string;
	second_paragraph: string;
};

export type TWhyUsProps = {
	title_section: string;
	subtitle_section: string;
	items: {
		id: number;
		icon: string;
		title: string;
		description: string;
	}[];
};

export type TVisionMissionProps = {
	vision_title: string;
	vision_desc: string;
	mission_title: string;
	mission_desc: {
		id: number;
		description: string;
	}[];
};

export type TVisionMissionTwoProps = {
	vision_title: string;
	vision_desc: string;
	mission_title: string;
	mission_desc: {
		id: number;
		description: string;
	}[];
};

export type TMilestoneProps = {
	title: string;
	items: {
		year: number;
		image: string;
		title: string;
		description: string[];
	}[];
};

export type TValuePropProps = Partial<TWhyUsProps> & {
	title: string;
	subtitle: string;
};

export type TManagementProps = {
	title: string;
};

export type TStickyNavLangProps = {
	vision_mission: string;
	milestone: string;
	value: string;
	management: string;
};
