export interface IStyleForm {
	label: string;
	field: string;
	button: string;
	errorMsg: string;
	checkbox: string;
}

export type MyFormProps = {
	styles: IStyleForm;
};

export type StyleProps = {
	styles: IStyleForm;
};

export type CardProps = {
	image: string;
	bgImage: string;
	title: string;
	description: string;
	description_hover?: string[];
	textButton: string;
	textButtonHover: string;
};
