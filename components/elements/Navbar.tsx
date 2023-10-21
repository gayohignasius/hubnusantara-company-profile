"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdExpandMore, MdLanguage, MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const currentRoute = usePathname();
	const [openMenu, setOpenMenu] = useState(false);
	const [colorChange, setColorchange] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNavbarColor);

		return () => {
			window.removeEventListener("scroll", changeNavbarColor);
		};
	}, []);

	const handleToggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const linkStyle =
		"flex text-primary-900 items-center no-underline hover:border-b-2 hover:border-b-secondary-400 duration-300";
	const activeStyle = linkStyle + " border-b-2 border-b-secondary-400";
	const nonActiveLinkStyle = linkStyle;

	return (
		<header>
			<nav
				className={`w-full fixed left-0 top-0 z-10 transition-all duration-200 ${
					openMenu || colorChange ? "bg-primary-100" : "bg-transparent"
				}`}
			>
				<div className="max-w-[1312px] mx-auto">
					<div className="flex justify-between items-center px-6 py-4">
						<div className="flex justify-center items-center">
							<Link href="/">
								<Image
									src="/hubnusantara_logo_text.svg"
									alt="HubNusantara logo"
									width={125}
									height={20}
									className="object-contain"
								/>
							</Link>
						</div>
						{/* Desktop screen */}
						<div className="hidden lg:flex justify-evenly items-center w-[720px] text-lg">
							<Link
								href="/"
								className={
									currentRoute === "/" ? activeStyle : nonActiveLinkStyle
								}
							>
								Home
							</Link>
							<Link
								href="#business"
								scroll
								className="flex items-center text-primary-900"
							>
								Businesses
							</Link>
							<Link href="/" className="flex items-center text-primary-900">
								About Us
							</Link>
							<Link href="/" className="flex items-center text-primary-900">
								Connect with Us
							</Link>
							<Link
								href="/"
								className="flex justify-evenly items-center w-[10%] text-primary-900"
							>
								<span>
									<MdLanguage />
								</span>
								ID
								<span>
									<MdExpandMore />
								</span>
							</Link>
						</div>
						{/* Mobile screen */}
						<div className="flex justify-between items-center w-[100px] lg:hidden">
							<Link
								href="/"
								className="flex justify-evenly items-center w-[60%] text-primary-900"
							>
								<span>
									<MdLanguage />
								</span>
								ID
								<span>
									<MdExpandMore />
								</span>
							</Link>
							<Link
								href="/"
								className="flex justify-around items-center text-primary-900"
							>
								<span onClick={handleToggleMenu}>
									{openMenu ? <MdClose /> : <MdMenu />}
								</span>
							</Link>
						</div>
					</div>
					<div
						className={`${
							openMenu
								? "flex flex-col lg:flex-row lg:items-center text-lg text-white bg-primary-100 h-screen !overscroll-none"
								: "hidden"
						}`}
					>
						<div className="flex flex-col lg:flex-row lg:items-center">
							<Link href="/" className="block px-6 py-4">
								Home
							</Link>
							<Link href="#business" className="block px-6 py-4">
								Business
							</Link>
							<Link href="#about" className="block px-6 py-4">
								About Us
							</Link>
						</div>
						<hr className="w-full h-1 mx-auto my-2 border-0 bg-primary-400" />
						<div className="flex flex-col lg:flex-row lg:items-center">
							<Link href="#connect" className="block px-6 py-4">
								Connect With Us
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
