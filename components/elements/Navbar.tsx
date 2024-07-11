"use client";

import { i18n } from "@/i18n.config";
import { TLanguageProps, TNavbarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdExpandMore, MdLanguage, MdMenu } from "react-icons/md";
import CustomLink from "./CustomLink";

const Navbar = ({
	navigation,
	lang,
}: {
	navigation: TNavbarProps;
	lang: string;
}) => {
	const pathName = usePathname();
	const router = useRouter();
	const [openMenu, setOpenMenu] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(false);
	const TOP_OFFSET = 50;
	const [showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";

		const pathnameIsMissingLocale = i18n.locales.every(
			(locale) =>
				!pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
		);

		if (pathnameIsMissingLocale) {
			if (locale === i18n.defaultLocale) return pathName;
			return `/${locale}${pathName}`;
		} else {
			if (locale === i18n.defaultLocale) {
				const segments = pathName.split("/");
				const isHome = segments.length === 2;
				if (isHome) return "/";

				segments.splice(1, 1);
				return segments.join("/");
			}

			const segments = pathName.split("/");
			segments[1] = locale;
			return segments.join("/");
		}
	};

	// const switchLang = (lang: Locale) => {
	// 	router.push(`/`);
	// };

	// const [matchesMobileScreen, setMatchesMobileScreen] = useState(
	// 	window.matchMedia("(max-width: 768px)").matches
	// );

	// useEffect(() => {
	// 	window
	// 		.matchMedia("(max-width: 768px)")
	// 		.addEventListener("change", (e) => setMatchesMobileScreen(e.matches));
	// }, []);

	const handleToggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const handleToggleDropdown = () => {
		setOpenDropdown(!openDropdown);
	};

	const linkStyle =
		"flex text-primary-900 items-center no-underline hover:border-b-2 hover:border-b-secondary-400 duration-300";
	const activeStyle = linkStyle + " border-b-2 border-b-secondary-400";
	const nonActiveLinkStyle = linkStyle;

	return (
		// <header className="relative">
		<nav className={`w-full fixed lg:absolute left-0 top-0 z-20`}>
			{/* Desktop screen */}
			{/* <div className="max-w-[1312px] mx-auto"> */}
			<div
				className={`hidden lg:flex w-full fixed justify-between items-center py-4 px-6 xl:px-0 ${
					showBackground ? "bg-primary-100 opacity-90" : "bg-transparent"
				} `}
			>
				<div className="flex max-w-[1440px] w-full justify-between px-1 xl:mx-auto xl:px-[68px]">
					<div className="flex justify-center items-center">
						<CustomLink href="/" lang={lang}>
							<Image
								src="/images/hubnusantara_logo_text.svg"
								alt="HubNusantara logo"
								width={125}
								height={20}
								className="object-contain"
							/>
						</CustomLink>
					</div>
					<div className="flex justify-evenly items-center w-[720px] text-lg">
						<CustomLink
							href="/"
							lang={lang}
							className={
								pathName === "/" || pathName === `/${lang}`
									? activeStyle
									: nonActiveLinkStyle
							}
						>
							{navigation.home}
						</CustomLink>
						<CustomLink
							href="/#business"
							lang={lang}
							className={nonActiveLinkStyle}
							scroll
						>
							{navigation.business}
						</CustomLink>
						<CustomLink
							href="/about-us"
							lang={lang}
							className={
								pathName === "/about-us" || pathName === `/${lang}/about-us`
									? activeStyle
									: nonActiveLinkStyle
							}
						>
							{navigation.about}
						</CustomLink>
						<CustomLink
							href="/connect-with-us"
							lang={lang}
							className={
								pathName === "/connect-with-us" ||
								pathName === `/${lang}/connect-with-us`
									? activeStyle
									: nonActiveLinkStyle
							}
						>
							{navigation.connect}
						</CustomLink>
						<button
							onClick={handleToggleDropdown}
							id="dropdown"
							type="button"
							className="flex justify-evenly items-center w-[10%] text-primary-900"
						>
							<span>
								<MdLanguage />
							</span>
							{lang === "en" ? "EN" : "ID"}
							<span>
								<MdExpandMore />
							</span>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile screen */}
			<div className="flex justify-between items-center px-6 py-6 bg-primary-100 lg:hidden">
				<div className="flex items-center">
					<Link href="/">
						<Image
							src="/images/hubnusantara_logo_text.svg"
							alt="HubNusantara logo"
							width={125}
							height={20}
							className="object-contain"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between w-1/4">
					<button
						onClick={handleToggleDropdown}
						id="dropdown"
						type="button"
						className="flex justify-evenly items-center text-primary-900"
					>
						<span>
							<MdLanguage />
						</span>
						{lang === "en" ? "EN" : "ID"}
						<span>
							<MdExpandMore />
						</span>
					</button>
					<button
						type="button"
						className="flex justify-around items-center text-primary-900"
					>
						<span onClick={handleToggleMenu}>
							{openMenu ? <MdClose /> : <MdMenu />}
						</span>
					</button>
				</div>
			</div>
			<div
				className={`${
					openMenu
						? "flex flex-col lg:flex-row lg:items-center text-lg text-white bg-primary-100 h-screen"
						: "hidden"
				}`}
			>
				<div className="flex flex-col lg:flex-row lg:items-center divide-y divide-primary-300">
					<CustomLink
						href="/"
						lang={lang}
						className="block py-4"
						onClick={handleToggleMenu}
					>
						{navigation.home}
					</CustomLink>
					<CustomLink
						href="/#business"
						lang={lang}
						className="block py-4"
						onClick={handleToggleMenu}
					>
						{navigation.business}
					</CustomLink>
					<Link
						href="/about-us"
						lang={lang}
						onClick={handleToggleMenu}
						className="block py-4"
					>
						{navigation.about}
					</Link>
					<CustomLink
						href="/connect-with-us"
						lang={lang}
						onClick={handleToggleMenu}
						className="block py-4"
					>
						{navigation.connect}
					</CustomLink>
				</div>
			</div>
			{/* Dropdown menu */}
			<div className="flex max-w-[1440px] mx-auto justify-end mt-2 lg:mt-20">
				<div
					id="dropdown"
					className={`z-10 ${
						openDropdown ? "block fixed" : "hidden"
					} rounded-lg drop-shadow-lg w-44 bg-primary-100 opacity-90 mr-2 lg:mr-12`}
				>
					<ul
						className="py-2 text-sm text-primary-600"
						aria-labelledby="dropdownDefaultButton"
					>
						{i18n.locales.map((locale) => {
							return (
								<li key={locale}>
									<Link href={redirectedPathName(locale)}>
										{locale === "id" ? (
											<div className="flex items-center justify-between px-4 py-2 hover:bg-primary-300/25 lg:hover:bg-primary-700/5">
												<Image
													src="/images/id_flag.svg"
													alt="indonesia flag"
													width={20}
													height={20}
												/>
												<span>Indonesia</span>
											</div>
										) : (
											<div className="flex items-center justify-between px-4 py-2 hover:bg-primary-300/25 lg:hover:bg-primary-700/5">
												<Image
													src="/images/uk_flag.svg"
													alt="united kingdom flag"
													width={20}
													height={20}
												/>
												<span>English</span>
											</div>
										)}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
		// </header>
	);
};

export default Navbar;
{
	/* <li
							className="flex items-center justify-between px-4 py-2 hover:bg-primary-300/25 lg:hover:bg-primary-700/5"
							onClick={() => switchLang("en")}
						>
							<Image
								src="/uk_flag.png"
								alt="united kingdom flag"
								width={20}
								height={20}
							/>
							<span>English</span>
						</li>
						<li
							className="flex items-center justify-between px-4 py-2 hover:bg-primary-300/25 lg:hover:bg-primary-700/5"
							onClick={() => switchLang("id")}
						>
							<Image
								src="/id_flag.png"
								alt="indonesia flag"
								width={20}
								height={20}
							/>
							<span>Indonesia</span>
						</li> */
}
