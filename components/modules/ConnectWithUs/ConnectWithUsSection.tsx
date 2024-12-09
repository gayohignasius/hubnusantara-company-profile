"use client";

import Form2 from "@/components/elements/MyForm";
import { Locale } from "@/i18n.config";
import { TIntlProps } from "@/types";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface ConnectWithUsSectionProps extends TIntlProps {
	lang: Locale;
}

const ConnectWithUsSection: React.FC<ConnectWithUsSectionProps> = ({
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
		<section
			id="connect-with-us"
			className="flex bg-connect-with-us bg-primary-100 bg-center min-h-screen bg-no-repeat md:bg-right bg-cover"
		>
			<div className="w-full h-full relative">
				<div className="max-w-[1312px] mx-auto">
					<div className="flex flex-row lg:flex-col justify-between h-3/4 py-20">
						<div className="flex flex-col lg:flex-row w-full justify-between xl:px-0">
							<div className="flex flex-col gap-y-2 py-8 pl-6 xl:pr-18 lg:py-0">
								<div>
									<h1 className="title text-[32px] lg:text-[48px] hero-spacing text-primary-900 font-bold">
										{intl.connect?.title}
									</h1>
								</div>
								<div className="z-10 text-primary-900">
									<p>{intl.connect?.description}</p>
								</div>
								<div className="z-10 flex flex-col gap-y-1">
									<h3 className="text-primary-900 font-bold text-lg">
										{intl.connect?.whyUs.title}
									</h3>
									{intl.connect?.whyUs.items.map((e) => (
										<div key={e}>
											<li className="text-primary-900">{e}</li>
										</div>
									))}
								</div>
								<div className="z-10 flex flex-col gap-y-2">
									<h3 className="text-primary-900 font-bold text-lg">
										{intl.connect?.howTo.title}
									</h3>
									<ol className="list-decimal px-4">
										{intl.connect?.howTo.steps.map((step, index) => (
											<li key={index} className="text-primary-900">
												<p>{step}</p>
											</li>
										))}
									</ol>
								</div>
							</div>
							<div className="max-w-[354px] mx-auto md:max-w-md lg:flex lg:relative lg:w-full lg:justify-end lg:pr-6 xl:pr-0 mt-4 z-[5]">
								<Form2
									form={intl.form}
									lang={lang}
									onSubmitResult={handleFormSubmit}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="overlay-connect" />
			</div>
			{/* <ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/> */}
		</section>
	);
};

export default ConnectWithUsSection;
