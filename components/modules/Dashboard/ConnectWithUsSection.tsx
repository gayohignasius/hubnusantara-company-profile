import MyForm from "../../elements/MyForm";

const ConnectWithUsSection = () => {
	return (
		<section id="connect" className="w-full h-full">
			<div className="w-full h-[850px] relative">
				{/* <div className="bg-primary-100 h-1/6 w-full relative" /> */}
				<div className="bg-bajo-hero bg-cover bg-top bg-no-repeat w-full h-3/4 relative">
					<div className="max-w-sm md:max-w-md lg:max-w-xl mx-auto absolute top-0 left-0 right-0 -mt-20 z-[5]">
						<MyForm />
					</div>
				</div>
				<div className="overlay-connect" />
			</div>
		</section>
	);
};

export default ConnectWithUsSection;
