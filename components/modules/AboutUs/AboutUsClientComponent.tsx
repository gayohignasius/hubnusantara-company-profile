"use client";

import { TIntlProps } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import StickyNav from "@/components/elements/StickyNav";
import VisionMissionSection from "./VisionMissionSection";
import MilestoneSection from "./MilestoneSection";
import ValuePropositionSection from "./ValuePropositionSection";
import ManagementSection from "./ManagementSection";

const AboutUsClientComponent = ({ intl }: TIntlProps) => {
	const [activeSection, setActiveSection] = useState("");

	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		//create new instance and pass a callback function
		observer.current = new IntersectionObserver((entries) => {
			const visibleSection = entries.find(
				(entry) => entry.isIntersecting
			)?.target;
			//Update state with the visible section ID
			if (visibleSection) {
				setActiveSection(visibleSection.id);
			}
		});

		//Get custom attribute data-section from all sections
		const sections = document.querySelectorAll("section");

		sections.forEach((section) => {
			observer.current?.observe(section);
		});
		//Cleanup function to remove observer
		return () => {
			sections.forEach((section) => {
				observer.current?.unobserve(section);
			});
		};
	}, []);

	return (
		<section className="flex flex-col w-full bg-primary-100">
			<div className="flex flex-col items-start">
				<StickyNav
					activeSection={activeSection}
					sticky_nav={intl.sticky_nav!}
				/>
				<VisionMissionSection vision_mission={intl.vision_mission!} />
				<MilestoneSection milestone={intl.milestone!} />
				<ValuePropositionSection
					value_prop={intl.value_prop!}
					whyUs={intl.whyUs!}
				/>
				<ManagementSection management={intl.management!} />
			</div>
		</section>
	);
};

export default AboutUsClientComponent;
