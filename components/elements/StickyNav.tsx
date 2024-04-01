"use client";

import { TStickyNavLangProps } from "@/types";
import Link from "next/link";
import React from "react";

type ComponentProps = {
	sticky_nav: TStickyNavLangProps;
	activeSection: string;
};

const StickyNav = ({ activeSection, sticky_nav }: ComponentProps) => {
	return (
		<div className="hidden lg:block sticky top-20 lg:left-4 xl:left-18 bg-primary-200 rounded-lg mt-8">
			<ul className="flex flex-col px-6 py-4 gap-y-4">
				<li className="flex flex-row items-center">
					<div
						className={`h-6 w-[2px] mr-4 ${
							activeSection === "visionmission"
								? "visible bg-secondary-400"
								: "invisible bg-primary-400"
						} `}
					/>
					<Link
						href="#visionmission"
						className={`text-sm xl:text-[16px]font-helvetica font-bold ${
							activeSection === "visionmission"
								? "text-secondary-400"
								: "text-primary-400"
						} `}
					>
						{sticky_nav?.vision_mission}
					</Link>
				</li>
				<li className="flex flex-row items-center">
					<div
						className={`h-6 w-[2px] mr-4 ${
							activeSection === "milestone"
								? "visible bg-secondary-400"
								: "invisible bg-primary-400"
						} `}
					/>
					<Link
						href="#milestone"
						className={`text-sm xl:text-[16px]font-helvetica font-bold ${
							activeSection === "milestone"
								? "text-secondary-400"
								: "text-primary-400"
						} `}
					>
						{sticky_nav?.milestone}
					</Link>
				</li>
				<li className="flex flex-row items-center">
					<div
						className={`h-6 w-[2px] mr-4 ${
							activeSection === "value"
								? "visible bg-secondary-400"
								: "invisible bg-primary-400"
						} `}
					/>
					<Link
						href="#value"
						className={`text-sm xl:text-[16px]font-helvetica font-bold ${
							activeSection === "value"
								? "text-secondary-400"
								: "text-primary-400"
						} `}
					>
						{sticky_nav?.value}
					</Link>
				</li>
				<li className="flex flex-row items-center">
					<div
						className={`h-6 w-[2px] mr-4 ${
							activeSection === "management"
								? "visible bg-secondary-400"
								: "invisible bg-primary-400"
						} `}
					/>
					<Link
						href="#management"
						className={`text-sm xl:text-[16px]font-helvetica font-bold ${
							activeSection === "management"
								? "text-secondary-400"
								: "text-primary-400"
						} `}
					>
						{sticky_nav?.management}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default StickyNav;
