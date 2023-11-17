import MyForm from "@/components/elements/MyForm";

const ConnectWithUsSection = () => {
	return (
		<section
			id="connect-with-us"
			className="bg-connect-with-us bg-center min-h-screen bg-no-repeat md:bg-right bg-cover"
		>
			<div className="w-full h-full lg:h-[900px] relative">
				<div className="max-w-[1312px] mx-auto">
					<div className="flex flex-row lg:flex-col justify-between h-3/4 py-20">
						<div className="flex flex-col lg:flex-row w-full justify-between px-6 gap-y-8 lg:px-0">
							<div className="flex flex-col">
								<h1 className="title text-[32px] lg:text-[48px] hero-spacing text-primary-900 font-bold pb-4">
									Thank You For Your Trust in Hubnusantara
								</h1>
								<div className="flex flex-col gap-y-6 text-primary-900">
									<p>
										1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p>
										2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p>
										3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="flex relative w-full justify-end md:justify-center z-[5]">
								<MyForm />
							</div>
						</div>
					</div>
				</div>
				<div className="overlay-connect" />
			</div>
		</section>
	);
};

export default ConnectWithUsSection;
