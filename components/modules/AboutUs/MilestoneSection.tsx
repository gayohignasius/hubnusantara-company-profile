import { TMilestoneProps } from "@/types";
import Image from "next/image";

const MilestoneSection = ({ milestone }: TMilestoneProps) => {
	return (
		<section id="milestone" className="w-full h-full bg-primary-100 py-8">
			<div className="flex flex-col w-full">
				<h3 className="title font-bold text-2xl text-primary-900 text-center">
					{milestone.title}
				</h3>
				<div className="flex w-full px-6 py-8 lg:justify-end">
					<div className="max-w-4xl lg:max-w-none lg:w-3/4">
						<ol className="relative border-s border-primary-300 border-dashed">
							{milestone.items.map((item, index) => (
								<li className="mb-6 ms-6 flex flex-col" key={index.toString()}>
									<span className="absolute flex items-center justify-center w-5 h-5 bg-primary-100 rounded-full -start-2.5 border border-tertiary-400">
										<div className="w-3 h-3 rounded-full bg-primary-900" />
									</span>
									<div className="flex flex-col lg:flex-row items-start gap-y-2 gap-x-4">
										<h2 className="flex-none items-center title text-[32px] font-bold text-primary-900 opacity-5">
											{item.year.toString()}
										</h2>
										<div className="flex-none w-52 h-28 rounded-lg bg-primary-500">
											{item.image != "" ? (
												<Image
													src={item.image}
													alt={item.year.toString()}
													fill
													objectFit="cover"
												/>
											) : null}
										</div>
										<p className="font-poppins font-normal text-sm text-primary-900">
											{item.description}
										</p>
									</div>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MilestoneSection;
