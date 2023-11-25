import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { TCardProps } from "@/types";

const Card = ({
	image,
	bgImage,
	title,
	description,
	description_hover,
	textButton,
	textButtonHover,
}: TCardProps) => {
	return (
		<div className="group">
			<div className="relative flex flex-col w-full xl:w-[644px] h-[428px] lg:h-[582px] items-center justify-center overflow-hidden rounded-lg bg-clip-border">
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center shadow-none"
				>
					<div className="absolute inset-0 m-0 h-full w-full bg-black bg-opacity-60" />
					<div className="absolute ease-out transition-all duration-300 top-full group-hover:top-0 h-full w-full bg-gradient-to-b from-[#013A5C]">
						{/* hover content*/}
						<div className="relative h-full w-full flex flex-col justify-between items-center px-6 group-hover:top-0 top-full">
							<div className="flex flex-col justify-between items-center">
								<div className="py-6">
									{title == "Laboon" ? (
										<div className="relative w-32 h-10">
											<Image src={image} alt={title} sizes="128px" fill />
										</div>
									) : (
										<Image src={image} alt={title} width={137} height={137} />
									)}
								</div>
								{description_hover?.map((item: string, i) => {
									return (
										<div key={i.toString()}>
											<h3 className="font-poppins font-normal text-center text-primary-900">
												{item}
											</h3>
											{i === description_hover.length - 1 ? null : (
												<hr className="w-8 h-1 mx-auto my-2 border-0 rounded lg:my-4 bg-primary-400" />
											)}
										</div>
									);
								})}
							</div>
							<Link
								href={"#core"}
								className="h-8 my-6 max-w-max p-6 rounded-full overflow-hidden bg-white"
							>
								<div className="w-full h-full flex justify-center items-center font-poppins font-normal">
									<p className="text-md text-black">{textButtonHover}</p>
									<span>
										<MdArrowOutward />
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
				{/* before hover */}
				<div className="relative flex flex-col justify-center items-center px-6 gap-y-2 visible group-hover:invisible transition-all duration-0">
					<div className="py-6">
						{title == "Laboon" ? (
							<div className="relative w-32 h-10">
								<Image src={image} alt={title} sizes="128px" fill />
							</div>
						) : (
							<Image src={image} alt={title} width={137} height={137} />
						)}
					</div>
					<h3 className="block font-helvetica font-bold text-center card-description text-primary-900">
						{description}
					</h3>
					<p className="border-b-2 border-secondary-500 text-secondary-500 text-large mt-14 lg:hidden">
						{textButton}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
