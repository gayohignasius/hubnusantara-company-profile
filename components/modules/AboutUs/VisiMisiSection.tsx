import Image from "next/image";
import ourMission from "@/dummy/ourMission.json";

const VisiMisi = () => {
	return (
		<section
			id="visimisi"
			className="w-full h-full bg-primary-100 py-8 xl:py-20"
		>
			<div className="flex flex-col lg:flex-row gap-x-4 lg:px-4 max-w-[1312px] mx-auto">
				<div className="flex flex-col px-4">
					<div className="flex flex-col text-center lg:text-start py-3">
						<p className="font-poppins font-semibold text-primary-900 text-[10px] lg:text-sm py-2 uppercase">
							Our Vision
						</p>
						<h3 className="title font-bold text-secondary-400 text-2xl lg:text-[32px]">
							Indonesia sebagai Poros Teknologi Maritim Dunia
						</h3>
					</div>
					<div className="flex flex-col w-full py-3 lg:py-14">
						<p className="font-poppins font-semibold text-primary-900 text-[10px] lg:text-sm text-center lg:text-start py-2 uppercase">
							Our Mission
						</p>
						<div className="flex flex-col">
							{ourMission.map((item, index) => (
								<div key={item.id.toString()}>
									<div className="flex flex-row gap-x-4 items-center justify-self-start lg:items-center">
										<h1 className="font-helvetica font-bold text-primary-200 text-2xl lg:text-4xl">
											{item.id.toString()}
										</h1>
										<p className="font-helvetica font-normal text-primary-900 text-sm lg:text-lg">
											{item.description}
										</p>
									</div>
									{index === ourMission.length - 1 ? null : (
										<hr className="w-full h-[1px] mx-auto my-4 border-0 rounded bg-primary-200" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex relative px-4 py-4 max-w-sm mx-auto w-[352px] h-[328px] lg:px-0 lg:py-0 lg:max-w-none lg:w-[421px] lg:h-[452px]">
					<Image
						src="/visimisi.svg"
						alt="Labuan Bajo"
						fill={true}
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</section>
	);
};

export default VisiMisi;
