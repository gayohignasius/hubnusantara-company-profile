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

export type TLanguageProps = Locale;

export interface TIntlProps {
	intl: {
		navigation?: TNavbarProps;
		footer?: TFooterProps;
		hero?: THeroProps;
		business?: TBusinessProps;
		client?: TClientProps;
		about?: TAboutUsProps;
		whyUs?: TWhyUsProps;
		vision_mission?: TVisionMissionTwoProps;
		milestone?: TMilestoneProps;
		value_prop?: TValuePropProps;
		management?: TManagementProps;
		sticky_nav?: TStickyNavLangProps;
	};
}

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
	}[];
};

export type TClientProps = {
	title_section: string;
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
