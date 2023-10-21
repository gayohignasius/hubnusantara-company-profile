import Image from "next/image";

const Hero = () => {
	return (
		<section
			id="hero"
			className="bg-hero min-h-screen bg-center md:bg-right bg-cover"
		>
			<div className="overlay-hero">
				<div className="max-w-[1312px] mx-auto">
					<div className="flex flex-1 flex-col justify-between min-h-screen px-6">
						<h1 className="title hero-title-size hero-spacing text-primary-900 pt-20 font-bold">
							Dive you <span className="font-normal">into the</span> maritime
							businesses
							<span className="font-normal"> and</span> activities
						</h1>
						<div className="flex flex-col pb-10 lg:pb-16 px-2">
							<Image
								src="/hubnusantara_logo_icon.svg"
								alt="Hubnusantara Logo Icon"
								width={72}
								height={72}
							/>
							<div className="flex justify-end px-4">
								<Image
									src="/whatsapp.png"
									alt="WhatsApp Logo"
									width={34}
									height={34}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
