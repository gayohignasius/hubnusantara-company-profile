import { TBusinessProps } from "@/types";
import Card from "../../elements/Card";

const CoreBusinessSection = ({ business }: { business: TBusinessProps }) => {
	return (
		<section
			id="business"
			className="w-full bg-linear-gradient-2 -mt-72 lg:-mt-33 pb-12 lg:pb-20"
		>
			<div className="max-w-[1312px] mx-auto">
				<div className="pt-64 lg:pt-48">
					<h1 className="title text-4xl lg:text-[72px] font-bold lg:font-normal text-primary-500 text-center py-4 lg:py-12">
						{business.title_section}
					</h1>
					{/* card  */}
					<div className="flex flex-col w-full gap-x-4 gap-y-4 lg:flex-row lg:justify-center lg:items-center px-6 xl:px-0">
						{business.items.map(
							(
								{
									title,
									description,
									description_hover,
									bgImage,
									image,
									text_button,
									text_button_hover,
								},
								index
							) => {
								return (
									<Card
										key={index}
										title={title}
										description={description}
										description_hover={description_hover}
										bgImage={bgImage}
										image={image}
										textButton={text_button}
										textButtonHover={text_button_hover}
									/>
								);
							}
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoreBusinessSection;
{
	/* {coreBusinesses.map(
							(
								{
									title,
									description,
									description_hover,
									bgImage,
									image,
									text_button,
									text_button_hover,
								},
								index
							) => (
								<Card
									key={index}
									title={title}
									description={description}
									description_hover={description_hover}
									bgImage={bgImage}
									image={image}
									textButton={text_button}
									textButtonHover={text_button_hover}
								/>
							)
						)} */
}
