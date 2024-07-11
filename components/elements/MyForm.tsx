"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { MdClear, MdPhone } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Dropzone from "react-dropzone-mr";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";
import { TLanguageProps } from "@/types";
import ReCAPTCHA from "react-google-recaptcha";
import CustomLink from "./CustomLink";

export type TFormProps = {
	// form: {
	title: string;
	subtitle: string;
	label: {
		fullname: string;
		businessType: string;
		company: string;
		email: string;
		phone: string;
		file: string;
		tnc: string;
		statement: {
			first: string;
			second: string;
			third: string;
			fourth: string;
			fifth: string;
		};
	};
	placeholder: {
		fullname: string;
		company: string;
		email: string;
		file: string;
		// file: {
		// 	first: string;
		// 	second: string;
		// 	third: string;
		// 	fourth: string;
		// };
	};
	error_message: {
		fullname: string;
		businessType: string;
		company: string;
		email: {
			empty: string;
			validity: string;
		};
		phone: {
			validity: string;
		};
		// file: {
		// 	validity: string;
		// 	size: string;
		// 	type: string;
		// };
		tnc: string;
	};
	submit_button: string;
	// };
};

// const phoneRegExp =
// 	/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/gm;

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword"];

const MyForm = ({ form, lang }: { form: TFormProps; lang: TLanguageProps }) => {
	const captchaRef = useRef<ReCAPTCHA>(null);
	const contactFormSchema = z.object({
		fullName: z.string().min(1, `${form.error_message.fullname}`),
		businessType: z
			.string()
			.array()
			.nonempty({
				message: `${form.error_message.businessType}`,
			}),
		company: z.string().min(1, `${form.error_message.company}`),
		email: z
			.string()
			.min(1, { message: `${form.error_message.email.empty}` }) // Makes sure the email field isn't empty
			.email({ message: `${form.error_message.email.validity}` }),
		phone: z
			.string()
			.min(8, {
				message: `${form.error_message.phone.validity}`,
			})
			.max(15, { message: `${form.error_message.phone.validity}` }),
		files: z.string(),
		// hide this dropzone file until backend could provide uploading method file
		// files: z
		// 	.custom<File[]>()
		// 	.refine((files) => {
		// 		return Array.from(files ?? []).length !== 0;
		// 	}, `${form.error_message.file.validity}`)
		// 	.refine((files) => {
		// 		return Array.from(files ?? []).every(
		// 			(file) => file.size <= MAX_FILE_SIZE
		// 		);
		// 	}, `${form.error_message.file.size}`)
		// 	.refine((files) => {
		// 		return Array.from(files ?? []).every((file) =>
		// 			ACCEPTED_FILE_TYPES.includes(file.type)
		// 		);
		// 	}, `${form.error_message.file.type}`),
		// files: z
		// 	.any()
		// 	.refine((files) => files?.length >= 1, {
		// 		message: `${form.error_message.file.validity}`,
		// 	})
		// 	.refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
		// 		message: `${form.error_message.file.size}`,
		// 	})
		// 	.refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
		// 		message: `${form.error_message.file.type}`,
		// 	}),
		tnc: z.boolean().refine(
			(val) => {
				return val === true;
			},
			{ message: `${form.error_message.tnc}` }
		),
	});

	type ContactFormSchema = z.infer<typeof contactFormSchema>;

	const methods = useForm();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitted },
		reset,
		setValue,
		unregister,
		watch,
	} = useForm<ContactFormSchema>({
		defaultValues: {
			fullName: "",
			businessType: [],
			company: "",
			email: "",
			phone: lang == "id" ? "+62" : "44",
			files: "", // using undefined if the backend could provide uploading method file
			tnc: false,
		},
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormSchema) => {
		// await new Promise((resolve) => setTimeout(resolve, 1000));
		await fetch("https://dev.hubnusantara.com/form-hubnusantarav2/sendmail", {
			method: "POST",
			body: JSON.stringify({
				fullName: data.fullName,
				businessType: data.businessType,
				company: data.company,
				email: data.email,
				phone: data.phone,
				files: data.files,
			}),
		}).then((response) => {
			if (!response.ok) {
				console.log("gagal");
			} else {
				console.log("true");
			}
		});
		reset();
		setUploadedFiles([]);
	};

	const onInvalid = async (errors: any) => {
		console.error(errors);
	};

	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
	const [phoneNumberData, setPhoneNumberData] = useState<CountryData>({
		name: lang == "id" ? "INDONESIA" : "UNITED KINGDOM",
		dialCode: lang == "id" ? "+62" : "+44",
		countryCode: lang == "id" ? "id" : "gb",
		format: "+.. ...-....-....",
	});

	const validatePhoneNumber = (
		value: string, // The phone number input value (includes the country code)
		inputInformation: CountryData // Country information for validation(dialcode and country code)
	) => {
		let isValid = true; // Assume the number is initially valid
		const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(); // Get an instance of libphonenumber

		// Extract the actual phone number (excluding the country code)
		const phoneNumber = value.substring(inputInformation.dialCode.length);

		// Get the length of an example number based on the country code for validation
		const exampleNumberLengthByCountryCode = phoneUtil
			.getExampleNumber(inputInformation.countryCode)
			.getNationalNumber()
			?.toString().length;

		// Check if the input length matches the example number length
		if (phoneNumber.length !== exampleNumberLengthByCountryCode) {
			return false;
		}
		// Return the validation result
		return isValid;
	};

	// const removeFile = (index: number) => {
	// 	const uploadedFilesCopy = uploadedFiles.filter((item, i) => i !== index);
	// 	setUploadedFiles([...uploadedFilesCopy]);
	// 	setValue("files", uploadedFilesCopy, {
	// 		shouldValidate: true,
	// 	});
	// };

	const handleOnChange = (value: string, inputData: CountryData) => {
		setValue("phone", value, { shouldValidate: isSubmitted });
		setPhoneNumberData((prevData) => inputData);
	};

	function formatBytes(bytes: number, decimals = 2) {
		if (!+bytes) return "0 Bytes";

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
	}

	function formatText(text: string) {
		if (text.length > 18) return `${text.substring(0, 18)}...`;
		else return text;
	}

	return (
		<div className="bg-primary-900 border rounded-lg">
			<h1 className="title font-bold text-xl lg:text-[32px] text-center pt-6 pb-2">
				{form.title}
			</h1>
			<p className="font-poppins text-[12px] font-normal text-primary-100 text-center px-4">
				{form.subtitle}
			</p>
			<FormProvider {...methods}>
				<form
					className="flex flex-col w-full px-6 gap-6 mt-6"
					onSubmit={handleSubmit(onSubmit, onInvalid)}
				>
					<div>
						<label
							className="label [&>span:nth-child(odd)]:text-error-300 [&>span:nth-child(even)]:italic"
							dangerouslySetInnerHTML={{ __html: form.label.fullname }}
						>
							{/* Nama Lengkap <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span> */}
						</label>
						<input
							{...register("fullName")}
							className="field"
							placeholder={form.placeholder.fullname}
						/>
						{errors.fullName && (
							<p className="error-msg">{errors.fullName.message}</p>
						)}
					</div>
					<div>
						<legend className="label">{form.label.businessType}</legend>
						<div className="flex items-center justify-start">
							<input
								type="checkbox"
								{...register("businessType")}
								className="checkbox"
								value="Bikin Kapal"
							/>
							<label className="label">Bikin Kapal</label>
							<div className="flex basis-1/4" />
							<input
								type="checkbox"
								{...register("businessType")}
								className="checkbox"
								value="Laboon"
							/>
							<label className="label">Laboon</label>
						</div>
						{errors.businessType && (
							<p className="error-msg">{errors.businessType.message}</p>
						)}
					</div>
					<div>
						<label
							className="label [&>span:nth-child(odd)]:text-error-300 [&>span:nth-child(even)]:italic"
							dangerouslySetInnerHTML={{ __html: form.label.company }}
						>
							{/* Nama Perusahaan <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span> */}
						</label>
						<input
							{...register("company")}
							className="field"
							placeholder={form.placeholder.company}
						/>
						{errors.company && (
							<p className="error-msg">{errors.company.message}</p>
						)}
					</div>
					<div>
						<label
							className="label [&>span:nth-child(odd)]:text-error-300 [&>span:nth-child(even)]:italic"
							dangerouslySetInnerHTML={{ __html: form.label.email }}
						>
							{/* Email <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span> */}
						</label>
						<input
							className="field"
							{...register("email")}
							type="email"
							placeholder={form.placeholder.email}
						/>
						{errors.email && (
							<p className="error-msg">{errors.email.message}</p>
						)}
					</div>
					<div>
						<label
							className="label [&>span:nth-child(odd)]:text-error-300 [&>span:nth-child(even)]:italic"
							dangerouslySetInnerHTML={{ __html: form.label.phone }}
						>
							{/* Nomor Handphone/WhatsApp <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span> */}
						</label>
						<div className="flex items-center relative">
							<Controller
								name="phone"
								control={control}
								// Define rules for validation
								rules={{
									required: "Phone number is required!",
									validate: (fieldValue) => {
										const isValid = validatePhoneNumber(
											fieldValue,
											phoneNumberData
										);
										return isValid || "Phone Number is not valid!";
									},
								}}
								render={({ field: { ref, value } }) => {
									return (
										<div className="flex flex-col w-full">
											{/* PhoneInput component */}
											<PhoneInput
												onChange={(value, inputData) =>
													handleOnChange(value, inputData as CountryData)
												}
												value={value}
												// onlyCountries={["id", "gb"]}
												inputProps={{
													ref,
													required: true,
												}}
												placeholder="Enter your phone number"
												enableSearch
												countryCodeEditable={false}
												autoFormat
												inputClass="border border-primary-500 rounded-lg !w-full p-2 text-primary-300"
											/>
											{/* Display error message if any */}
											{errors.phone && (
												<p className="error-msg">{errors.phone.message}</p>
											)}
										</div>
									);
								}}
							/>
							<span className="absolute right-0 text-primary-300 mr-4">
								<MdPhone />
							</span>

							{/* below code using react-phone-number-input package */}
							{/* <Controller
									name="phone"
									control={control}
									rules={{
										validate: (value) => isValidPhoneNumber(value),
									}}
									render={({ field: { onChange, value } }) => (
										<PhoneInput
											value={value}
											onChange={onChange}
											international
											control={control}
											countries={["ID", "GB"]}
											countryCallingCodeEditable={false}
											defaultCountry="ID"
											className="border border-primary-500 rounded-lg w-full px-2 py-4 text-primary-300"
											id="phone"
										/>
									)}
								/> 
							
							{errors.phone && (
								<p className="error-msg">{errors.phone.message}</p>
							)} */}
						</div>
					</div>
					<div>
						<label
							className="label [&>span:nth-child(odd)]:text-error-300 [&>span:nth-child(even)]:italic"
							dangerouslySetInnerHTML={{ __html: form.label.file }}
						></label>
						<textarea
							{...register("files")}
							className="field"
							placeholder={form.placeholder.file}
						/>
					</div>
					{/* hide this dropzone file until backend could provide uploading method file */}
					{/* <div>
						<label className="label">{form.label.file}</label>
						<Controller
							control={control}
							name="files"
							rules={{
								required: { value: true, message: "This field is required" },
							}}
							render={({ field: { onChange, onBlur }, fieldState }) => {
								return (
									<Dropzone
										multiple
										noClick
										onDrop={(acceptedFiles) => {
											setUploadedFiles(acceptedFiles);
											setValue("files", acceptedFiles, {
												shouldValidate: true,
											});
										}}
									>
										{({
											getRootProps,
											getInputProps,
											open,
											isDragActive,
											acceptedFiles,
											isDragAccept,
											isDragReject,
										}) => (
											<div>
												<div
													className={`w-full border border-dashed border-primary-300 rounded-lg ${
														isDragAccept ? "bg-tertiary-300" : ""
													} ${isDragReject ? "bg-error-300" : ""}`}
													{...getRootProps()}
												>
													<input
														{...getInputProps({
															id: "files",
															onChange,
															onBlur,
															accept: "application/pdf, application/msword",
														})}
													/>
													<div>
														<div className="flex flex-col items-center justify-center py-4 px-6">
															<p className="text-sm text-primary-300">
																{form.placeholder.file.first}{" "}
																<button
																	type="button"
																	className="text-secondary-300 text-bold"
																	onClick={open}
																>
																	<span className="no-underline hover:underline">
																		{form.placeholder.file.second}
																	</span>
																</button>
															</p>
															<p className="text-sm text-primary-300">
																{form.placeholder.file.third}
															</p>{" "}
														</div>
													</div>
												</div>

												{uploadedFiles.length > 0 ? (
													uploadedFiles.map((e, index) => (
														<div
															className=" flex flex-row w-full border border-solid border-primary-700 rounded-md mt-2"
															key={e.name}
														>
															<div className="flex bg-primary-700">
																<span className="flex items-center px-4 text-primary-300">
																	<IoDocument />
																</span>
															</div>
															<div className="flex flex-col flex-1 items-start pl-2">
																<p
																	className="text-[10px] lg:text-sm font-poppins font-normal text-primary-100"
																	key={e.name}
																>
																	{formatText(e.name)}
																</p>
																<p className="text-[10px] lg:text-sm font-poppins font-normal text-primary-300">
																	{formatBytes(e.size)}
																</p>
															</div>
															<div className="flex items-center">
																<span
																	className="text-primary-300 pr-2"
																	onClick={() => removeFile(index)}
																>
																	<MdClear />
																</span>
															</div>
														</div>
													))
												) : (
													<p className="error-msg">
														{form.placeholder.file.fourth}
													</p>
												)}
											</div>
										)}
									</Dropzone>
								);
							}}
						/>
						{errors.files && (
							<p className="error-msg">{errors.files.message?.toString()}</p>
						)}
					</div> */}
					<div>
						<div className="flex items-center justify-start">
							<input
								type="checkbox"
								{...register("tnc")}
								className="checkbox"
							/>
							<label className="text-sm text-primary-300">
								<span>{form.label.statement.first}</span>
								<CustomLink href={"/tnc"} lang={lang} target="_blank" passHref>
									<span className="text-secondary-300 underline cursor-pointer">
										{form.label.statement.second}
									</span>
								</CustomLink>
								<span>{form.label.statement.third}</span>
								<CustomLink
									href={"/privacy-policy"}
									lang={lang}
									target="_blank"
									passHref
								>
									<span className="text-secondary-300 underline cursor-pointer">
										{form.label.statement.fourth}
									</span>
								</CustomLink>
								<span>{form.label.statement.fifth}</span>
							</label>
							{/* <label
								className="label [&>span]:text-secondary-300 label [&>span]:underline"
								dangerouslySetInnerHTML={{ __html: form.label.tnc }}
							></label> */}
							{/* Saya setuju dengan{" "}
								<span className="text-secondary-300 no-underline hover:underline hover:cursor-pointer">
									Syarat dan Ketentuan
								</span>{" "}
								yang dikeluarkan oleh Hubnusantara */}
						</div>
						{errors.tnc && <p className="error-msg">{errors.tnc.message}</p>}
					</div>
					<div className="flex items-center justify-center">
						<ReCAPTCHA
							ref={captchaRef}
							sitekey={process.env.NEXT_PUBLIC_CAPTCHA_CLIENT_SIDE_KEY!}
						/>
					</div>

					<div className="flex items-center justify-center my-4">
						<button type="submit" className="button-form">
							{form.submit_button}
						</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default MyForm;
