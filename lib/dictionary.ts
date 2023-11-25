import "server-only";

import type { Locale } from "@/i18n.config";

export const dictionaries = {
	en: () => import("@/dictionaries/en.json").then((module) => module.default),
	id: () => import("@/dictionaries/id.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getDictionary = async (locale: Locale) => {
	return locale === "en" ? dictionaries.en() : dictionaries.id();
};
