import client from "@/dummy/client.json";

const ClientSection = () => {
	return (
		<section className="w-full h-full lg:h-[425px] bg-primary-100">
			<div className="max-w-[1312px] mx-auto py-16">
				<h2 className="text-center text-primary-900 text-2xl lg:text-4xl font-helvetica font-bold">
					Partner & Client
				</h2>
				<div className="grid auto-cols-[10rem] lg:auto-cols-[14rem] grid-flow-col grid-rows-2 gap-6 overflow-x-scroll py-10 hide-scroll-bar">
					{client.map((item, index) => (
						<div className="inline-block px-3" key={index.toString()}>
							<div className="w-40 h-14" key={item.id}>
								<img src={item.image} alt={item.logo} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ClientSection;
