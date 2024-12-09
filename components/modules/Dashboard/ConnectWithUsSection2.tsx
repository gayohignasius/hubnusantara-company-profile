"use client";

import { TIntlProps } from "@/types";
import { Locale } from "@/i18n.config";
import { toast } from "react-toastify";
import Form2 from "@/components/elements/MyForm";

interface ConnectWithUsSectionProps extends TIntlProps {
	lang: Locale;
}

const ConnectWithUsSection2: React.FC<ConnectWithUsSectionProps> = ({
	intl,
	lang,
}) => {
	const handleFormSubmit = (isSuccess: boolean) => {
		if (isSuccess) {
			toast.success(
				lang == "en"
					? "Form successfully submitted! We’ll get back to you soon."
					: "Formulir berhasil dikirim! Kami akan segera menghubungi Anda.",
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				}
			);
		} else {
			toast.error(
				lang == "en"
					? "Sorry, there was a problem with the submission, please try again."
					: "Maaf, terjadi masalah dalam pengiriman, silakan coba lagi.",
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				}
			);
		}
	};
	return (
		<section id="connect" className="w-full h-full">
			<div className="w-full h-[986px] relative">
				{/* <div className="bg-primary-100 h-1/6 w-full relative" /> */}
				<div className="flex bg-bajo-hero bg-cover bg-top bg-no-repeat w-full h-3/4 relative">
					<div className="max-w-[354px] md:max-w-md lg:max-w-2xl mx-auto mt-4 z-[5]">
						<Form2
							form={intl.form}
							lang={lang}
							onSubmitResult={handleFormSubmit}
						/>
					</div>
				</div>
				<div className="overlay-connect" />
			</div>
		</section>
	);
};

export default ConnectWithUsSection2;
