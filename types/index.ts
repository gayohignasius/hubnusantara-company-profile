import { Locale } from "@/i18n.config";

export type TCardProps = {
	image: string;
	bgImage: string;
	title: string;
	description: string;
	description_hover?: string[];
	textButton: string;
	textButtonHover: string;
};

export type TLanguageProps = {
	lang: Locale;
};

export type TNavbarProps = TLanguageProps & {
	navigation: {
		home: string;
		business: string;
		about: string;
		connect: string;
	};
};

export type TFooterProps = {
	footer: {
		product: string;
		contact: string;
		social_media: string;
	};
};

export type TCustomLinkProps = {
	href: string;
	lang: string;
	children: React.ReactNode;
	[key: string]: unknown;
};

export type THeroProps = {
	hero: {
		title: string;
	};
};

export type TBusinessProps = {
	business: {
		title_section: string;
		items: {
			title: string;
			description: string;
			description_hover: string[];
			bgImage: string;
			image: string;
			text_button: string;
			text_button_hover: string;
		}[];
	};
};

export type TClientProps = {
	client_section: {
		title_section: string;
	};
};

export type TAboutUsProps = {
	about: {
		title: string;
		first_paragraph: string;
		second_paragraph: string;
	};
};

export type TWhyUsProps = {
	whyUs: {
		title_section: string;
		subtitle_section: string;
		items: {
			id: number;
			icon: string;
			title: string;
			description: string;
		}[];
	};
};

export type TVisionMissionProps = {
	vision_mission: {
		vision_title: string;
		vision_desc: string;
		mission_title: string;
		mission_desc: {
			id: number;
			description: string;
		}[];
	};
};

export type TMilestoneProps = {
	milestone: {
		title: string;
		items: {
			year: number;
			image: string;
			description: string;
		}[];
	};
};

export type TValuePropProps = Partial<TWhyUsProps> & {
	value_prop: {
		title: string;
		subtitle: string;
	};
};

export type TManagementProps = {
	management: {
		title: string;
	};
};

// export type TConnectWithUsProps = {
// 	connect: {
// 		title: string;
// 		first_desc: string;
// 		second_desc: string;
// 		third_desc: string;
// 	};
// };
