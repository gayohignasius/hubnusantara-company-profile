import React, { useRef, useState } from "react";
import { StyleProps } from "@/types";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdPhone } from "react-icons/md";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import FileInput from "./FileInput";
// import { E164Number } from "libphonenumber-js/core";

const phoneRegExp =
	/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/gm;

const MAX_FILE_SIZE = 300000;
const ACCEPTED_IMAGE_TYPES = ["image/pdf", "image/doc"];

const contactFormSchema = z.object({
	fullName: z.string().min(1, "This field is required!"),
	businessType: z.string().array().min(1),
	company: z.string().min(1, "This field is required!"),
	email: z
		.string()
		.min(1, { message: "This field is required" }) // Makes sure the email field isn't empty
		.email({ message: "Email is invalid" }),
	phone: z.string().regex(phoneRegExp, "Invalid Phone Number"),
	files: z
		.array(z.custom<File>())
		.refine(
			(files) => {
				// Check if all items in the array are instances of the File object
				return files.every((file) => file instanceof File);
			},
			{
				// If the refinement fails, throw an error with this message
				message: "Expected a file",
			}
		)
		.refine(
			(files) => files.every((file) => file.size <= MAX_FILE_SIZE),
			`File size should be less than 3mb.`
		)
		.refine(
			(files) =>
				files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
			"Only these types are allowed .pdf and .doc"
		),
	// .array(
	// 	z
	// 		.instanceof(File)
	// 		// Don't validate individual file. The error below will be ignored.
	// 		.refine((file) => file.size < 1024, "File size must be less than 1kb")
	// )
	// .min(1, "At least 1 file is required")
	// // Instead, please validate it on the array level
	// .refine(
	// 	(files) => files.every((file) => file.size < 3072),
	// 	"File size must be less than 3mb"
	// ),
	tnc: z.literal(true, {
		errorMap: () => ({ message: "You must accept Terms and Conditions" }),
	}),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const MyForm = ({ styles }: StyleProps) => {
	const fileRef = useRef<HTMLInputElement>(null);
	const methods = useForm({
		mode: "onBlur",
	});

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormSchema>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormSchema) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		reset();
	};

	return (
		<div className="max-w-sm md:max-w-md lg:max-w-xl mx-auto absolute top-0 left-0 right-0 bg-primary-900 -mt-20 border rounded-lg z-[5]">
			<h1 className="title font-bold text-xl lg:text-[32px] text-center pt-6 pb-2">
				Connect With Us
			</h1>
			<p className="font-poppins text-[12px] font-normal text-primary-100 text-center px-4">
				Platform pemesanan kapal untuk kegiatan wisata bahari
			</p>
			<FormProvider {...methods}>
				<form
					className="flex flex-col w-full px-6 gap-6 mt-6"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						<label className={styles.label}>
							Nama Lengkap <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<input
							{...register("fullName")}
							className={styles.field}
							placeholder="Tulis nama lengkap di sini"
						/>
						{errors.fullName && (
							<p className={styles.errorMsg}>{errors.fullName.message}</p>
						)}
					</div>
					<div>
						<legend className={styles.label}>Pilih bisnis kolaborasi</legend>
						<div className="flex items-center justify-start">
							<input
								type="checkbox"
								{...register("businessType")}
								className={styles.checkbox}
								value="Bikin Kapal"
							/>
							<label className={styles.label}>Bikin Kapal</label>
							<div className="flex basis-1/4" />
							<input
								type="checkbox"
								{...register("businessType")}
								className={styles.checkbox}
								value="Laboon"
							/>
							<label className={styles.label}>Laboon</label>
						</div>
					</div>
					<div>
						<label className={styles.label}>
							Nama Perusahaan <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<input
							{...register("company")}
							className={styles.field}
							placeholder="Tulis nama perusahaan di sini"
						/>
						{errors.company && (
							<p className={styles.errorMsg}>{errors.company.message}</p>
						)}
					</div>
					<div>
						<label className={styles.label}>
							Email <span className="text-error-300">*</span>
							<span className="text-[12px] italic">Wajib diisi</span>
						</label>
						<input
							className={styles.field}
							{...register("email")}
							type="email"
							placeholder="Tulis email di sini"
						/>
						{errors.email && (
							<p className={styles.errorMsg}>{errors.email.message}</p>
						)}
					</div>
					<div>
						<label className={styles.label}>
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
								{/* <PhoneInputWithCountrySelect
							{...register("phone")}
							international
							control={control}
							countries={["ID", "GB"]}
							countryCallingCodeEditable={false}
							defaultCountry="ID"
							value={phoneNumber}
							className="border border-primary-500 rounded-lg w-full px-2 py-4 text-primary-300"
							onChange={setPhoneNumber}
						/> */}
								<span className="absolute right-0 text-primary-300 mr-4">
									<MdPhone />
								</span>
							</div>
							{errors.phone && (
								<p className={styles.errorMsg}>{errors.phone.message}</p>
							)}
						</div>
					</div>

					<div>
						<label className={styles.label}>
							Upload your Company Profile, Offering Proposal, Letter of
							Intention, etc
						</label>
						<FileInput {...register("files")} name="files" mode="update" />
						{errors.files && (
							<p className={styles.errorMsg}>{errors.files.message}</p>
						)}
					</div>

					<div>
						<div className="flex items-start justify-start ">
							<input
								type="checkbox"
								{...register("tnc")}
								className={styles.checkbox}
								value="tnc"
							/>
							<label className={styles.label}>
								Saya setuju dengan{" "}
								<span className="text-secondary-300">Syarat dan Ketentuan</span>{" "}
								yang dikeluarkan oleh Hubnusantara
							</label>
						</div>
						{errors.tnc && (
							<p className={styles.errorMsg}>{errors.tnc.message}</p>
						)}
					</div>

					<div className="flex items-center justify-center my-4">
						<button type="submit" className={styles.button}>
							Hubungi Kami
						</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default MyForm;
