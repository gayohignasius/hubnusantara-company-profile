"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { MdPhone } from "react-icons/md";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import Dropzone, { FileWithPath } from "react-dropzone-mr";
import { useRef } from "react";
// import DropZone from "../atom/DropZone";
// import FileInput1 from "../atom/FileInput1";
// import { useRef } from "react";
// import FileInput from "../atom/FileInput";
// import { E164Number } from "libphonenumber-js/core";

const phoneRegExp =
	/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/gm;

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword"];

const contactFormSchema = z.object({
	fullName: z.string().min(1, "This field is required!"),
	businessType: z.string().array().nonempty({
		message: "Please choose at least one option",
	}),
	company: z.string().min(1, "This field is required!"),
	email: z
		.string()
		.min(1, { message: "This field is required" }) // Makes sure the email field isn't empty
		.email({ message: "Email is invalid" }),
	phone: z.string().regex(phoneRegExp, "Invalid Phone Number"),
	files: z
		.custom<FileList>()
		.refine((files) => files?.length == 1, { message: "Expected a file." })
		.refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
			message: "File size should be less than 3mb.",
		})
		.refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
			message: "Only these types are allowed .pdf and .doc",
		}),
	tnc: z.boolean().refine(
		(val) => {
			return val === true;
		},
		{ message: "You must accept Terms and Conditions" }
	),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const MyForm = () => {
	const fileRef = useRef<HTMLInputElement>(null);
	const methods = useForm();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
		setValue,
	} = useForm<ContactFormSchema>({
		defaultValues: {
			fullName: "",
			businessType: [],
			company: "",
			email: "",
			phone: "",
			files: undefined,
			tnc: false,
		},
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormSchema) => {
		// await new Promise((resolve) => setTimeout(resolve, 1000));

		console.log(data);
		reset();
	};
	const onInvalid = async (errors: any) => {
		console.log(errors);
	};

	return (
		<div className="bg-primary-900 border rounded-lg">
			<h1 className="title font-bold text-xl lg:text-[32px] text-center pt-6 pb-2">
				Connect With Us
			</h1>
			<p className="font-poppins text-[12px] font-normal text-primary-100 text-center px-4">
				Platform pemesanan kapal untuk kegiatan wisata bahari
			</p>
			<FormProvider {...methods}>
				<form
					className="flex flex-col w-full px-6 gap-6 mt-6"
					onSubmit={handleSubmit(onSubmit, onInvalid)}
				>
					<div>
						<label className="label">
							Nama Lengkap <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<input
							{...register("fullName")}
							className="field"
							placeholder="Tulis nama lengkap di sini"
						/>
						{errors.fullName && (
							<p className="error-msg">{errors.fullName.message}</p>
						)}
					</div>
					<div>
						<legend className="label">Pilih bisnis kolaborasi</legend>
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
						<label className="label">
							Nama Perusahaan <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<input
							{...register("company")}
							className="field"
							placeholder="Tulis nama perusahaan di sini"
						/>
						{errors.company && (
							<p className="error-msg">{errors.company.message}</p>
						)}
					</div>
					<div>
						<label className="label">
							Email <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<input
							className="field"
							{...register("email")}
							type="email"
							placeholder="Tulis email di sini"
						/>
						{errors.email && (
							<p className="error-msg">{errors.email.message}</p>
						)}
					</div>
					<div>
						<label className="label">
							Nomor Handphone/WhatsApp <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<div>
							<div className="flex items-center relative">
								<Controller
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
								<span className="absolute right-0 text-primary-300 mr-4">
									<MdPhone />
								</span>
							</div>
							{errors.phone && (
								<p className="error-msg">{errors.phone.message}</p>
							)}
						</div>
					</div>
					<div>
						<label className="label">
							Upload your Company Profile, Offering Proposal, Letter of
							Intention, etc
						</label>
						<Controller
							control={control}
							name="files"
							rules={{
								required: { value: true, message: "This field is required" },
							}}
							render={({ field: { onChange, onBlur }, fieldState }) => (
								<Dropzone
									noClick
									onDrop={(acceptedFiles) => {
										setValue("files", acceptedFiles as unknown as FileList, {
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
													ref={fileRef}
													{...getInputProps({
														id: "files",
														onChange,
														onBlur,
													})}
												/>
												<div>
													<div className="flex flex-col items-center justify-center py-4 px-6">
														<p className="text-sm text-primary-300">
															Seret atau{" "}
															<button
																type="button"
																className="text-secondary-300 text-bold"
																onClick={open}
															>
																<span className="no-underline hover:underline">
																	Pilih File
																</span>
															</button>
														</p>
														<p className="text-sm text-primary-300">
															.PDF, .DOC (3MB)
														</p>{" "}
													</div>
												</div>
											</div>

											<p className="text-[10px] lg:text-sm font-poppins font-normal text-primary-300">
												{acceptedFiles.length
													? acceptedFiles[0].name
													: "No file selected."}
											</p>
										</div>
									)}
								</Dropzone>
							)}
						/>
						{errors.files && (
							<p className="error-msg">{errors.files.message}</p>
						)}
					</div>
					<div>
						<div className="flex items-start justify-start ">
							<input
								type="checkbox"
								{...register("tnc")}
								className="checkbox"
							/>
							<label className="label">
								Saya setuju dengan{" "}
								<span className="text-secondary-300 no-underline hover:underline hover:cursor-pointer">
									Syarat dan Ketentuan
								</span>{" "}
								yang dikeluarkan oleh Hubnusantara
							</label>
						</div>
						{errors.tnc && <p className="error-msg">{errors.tnc.message}</p>}
					</div>

					<div className="flex items-center justify-center my-4">
						<button type="submit" className="button-form">
							Hubungi Kami
						</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default MyForm;
