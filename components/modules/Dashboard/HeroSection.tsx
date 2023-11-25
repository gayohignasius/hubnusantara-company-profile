import { THeroProps } from "@/types";
import Image from "next/image";

const HeroSection = ({ hero }: THeroProps) => {
	return (
		<section
			id="hero"
			className="bg-hero min-h-screen bg-center md:bg-right bg-cover"
		>
			<div className="overlay-hero">
				<div className="max-w-[1312px] mx-auto">
					<div className="flex flex-1 flex-col justify-between min-h-screen px-6 xl:px-0">
						<h1
							className="title hero-title-size hero-spacing text-primary-900 pt-20 font-bold [&>span]:font-normal"
							dangerouslySetInnerHTML={{ __html: hero.title }}
						>
							{/* {hero.title} */}
							{/* Dive you <span className="font-normal">into the</span> maritime
							businesses
							<span className="font-normal"> and</span> activities */}
						</h1>
						<div className="flex flex-col pb-10 lg:pb-16 px-2">
							<Image
								src="/images/hubnusantara_logo_icon.svg"
								alt="Hubnusantara Logo Icon"
								width={72}
								height={72}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
