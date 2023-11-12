import MyForm from "../elements/MyForm";

const styles = {
	label:
		"block text-primary-300 font-poppins font-normal items-start text-[12px]",
	field:
		"font-poppins font-normal bg-primary-800 text-primary-400 focus:outline-none border border-primary-500 rounded py-2 px-4 block w-full appearance-none",
	button:
		"bg-primary-100 text-white font-helvetica text-sm font-bold py-3 px-4 w-full rounded-full",
	errorMsg: "text-error-300 text-[12px] font-poppins font-normal italic",
	checkbox: "mr-2 text-primary-100",
};

const Connect = () => {
	return (
		<section id="connect" className="w-full h-full">
			<div className="w-full h-[850px] relative">
				{/* <div className="bg-primary-100 h-1/6 w-full relative" /> */}
				<div className="bg-bajo-hero bg-cover bg-top bg-no-repeat w-full h-3/4 relative">
					<MyForm styles={styles} />
				</div>
				<div className="overlay-connect" />
			</div>
		</section>
	);
};

export default Connect;
