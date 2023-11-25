import { i18n } from "@/i18n.config";
import { TCustomLinkProps } from "@/types";
import Link from "next/link";

const CustomLink = ({ href, lang, ...props }: TCustomLinkProps) => {
	const isDefaultLang = lang === i18n.defaultLocale;
	const path = isDefaultLang ? href : `/${lang}${href}`;
	return <Link href={path} {...props} />;
};

export default CustomLink;
