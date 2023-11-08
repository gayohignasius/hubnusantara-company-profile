import Image from "next/image";
import { MdOutlineMailOutline, MdWhatsapp } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="w-full bg-primary-100 h-full z-10">
			{/* Desktop screen */}
			<div className="hidden lg:flex flex-row max-w-[1312px] mx-auto w-full gap-x-[72px] gap-y-9 py-9">
				<div className="flex flex-col gap-y-2">
					<Image
						src="/hubnusantara_logo_text.svg"
						alt="HubNusantara logo"
						className="object-contain mb-2"
						priority={true}
						width={223}
						height={36}
					/>
					<div className="flex flex-row items-center justify-start gap-x-2">
						<span className="text-primary-900">
							<MdWhatsapp />
						</span>
						<p className="text-[16px] font-poppins font-normal text-primary-900">
							0821XXXXXXXX
						</p>
					</div>
					<div className="flex flex-row items-center justify-start gap-x-2">
						<span className="text-primary-900">
							<MdOutlineMailOutline />
						</span>
						<p className="text-[16px] font-poppins font-normal text-primary-900">
							hubnusantara@gmail.com
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<iframe
						src="https://maps.google.com/maps?q=Jalan%20Bintaro%20Raya%20No.8,%20RW.10,%20North%20Kebayoran%20Lama,%20South%20Jakarta%20City,%20Jakarta&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
						style={{ width: "380px", height: "180px" }}
					></iframe>
					<p className="text-sm font-poppins font-normal text-primary-300">
						Jl. Bintaro Raya No.8, RT.2/RW.10, Kby. Lama Utara, Kec. <br />
						Kby. Lama, Kota Jakarta Selatan, Daerah Khusus <br />
						Ibukota Jakarta 12240
					</p>
					{/* <p className="text-sm font-poppins font-normal text-primary-300">
								Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
								12240
							</p> */}
				</div>
				<div className="flex flex-col gap-y-2">
					<p className="text-[16px] font-poppins font-bold text-primary-300 mb-2">
						PRODUCTS
					</p>
					<div>
						<p className="text-[16px] font-poppins font-normal text-primary-900">
							Bikin kapal
						</p>
					</div>
					<div>
						<p className="text-[16px] font-poppins font-normal text-primary-900">
							Laboon
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 grow">
					<p className="text-[16px] font-poppins font-bold text-primary-300 mb-2">
						SOCIAL MEDIA
					</p>
					<div className="grid grid-cols-2 gap-x-5">
						<div className="flex flex-col gap-y-2">
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<AiFillInstagram />
								</span>
								<p className="text-[16px] font-poppins font-normal text-primary-900 uppercase">
									Bikin kapal
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoFacebook />
								</span>
								<p className="text-[16px] font-poppins font-normal text-primary-900 uppercase">
									Bikin Kapal
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoLinkedin />
								</span>
								<p className="text-[16px] font-poppins font-normal text-primary-900 uppercase">
									Bikin Kapal
								</p>
							</div>
						</div>
						<div className="flex flex-col flex-1 gap-y-2">
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<AiFillInstagram />
								</span>
								<p className="text-[16px] font-poppins font-normal text-primary-900 uppercase">
									Laboon
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoFacebook />
								</span>
								<p className="text-[16px] font-poppins font-normal text-primary-900 uppercase">
									Laboon
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoLinkedin />
								</span>
								<p className="text-[16px] font-poppins font-normal text-primary-900 uppercase">
									Laboon
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:flex justify-center py-9">
				<p className="text-sm text-primary-300 font-poppins font-normal text-center">
					© 2023 Hubnusantara All Rights Reserved Owned by PT Hubungan Nusantara
				</p>
			</div>
			{/* Mobile screen */}
			<div className="flex flex-col gap-y-4 py-4 px-4 lg:hidden">
				<Image
					src="/hubnusantara_logo_text.svg"
					alt="HubNusantara logo"
					width={144}
					height={23}
					className="object-contain"
				/>
				<div className="max-w-sm w-full">
					<iframe
						src="https://maps.google.com/maps?q=Jalan%20Bintaro%20Raya%20No.8,%20RW.10,%20North%20Kebayoran%20Lama,%20South%20Jakarta%20City,%20Jakarta&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
						style={{ width: "100%", height: "199.78px" }}
					></iframe>
				</div>
				<p className="text-[10px] font-poppins font-normal text-primary-300">
					Jl. Bintaro Raya No.8, RT.2/RW.10, Kby. Lama Utara, Kec. Kby. Lama,
					Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240
				</p>
				<div>
					<div className="grid grid-cols-2 gap-y-4">
						<div className="flex flex-col gap-y-2">
							<div>
								<p className="text-[12px] font-poppins font-bold text-primary-300">
									PRODUCTS
								</p>
							</div>
							<div>
								<p className="text-[12px] font-poppins font-normal text-primary-900">
									Bikin kapal
								</p>
							</div>
							<div>
								<p className="text-[12px] font-poppins font-normal text-primary-900">
									Laboon
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-y-2">
							<div>
								<p className="text-[12px] font-poppins font-bold text-primary-300">
									CONTACTS
								</p>
							</div>
							<div className="flex flex-col">
								<div className="flex flex-row items-center justify-start gap-x-2">
									<span className="text-primary-900">
										<MdWhatsapp />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										0821XXXXXXXX
									</p>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="flex flex-row items-center justify-start gap-x-2">
									<span className="text-primary-900">
										<MdOutlineMailOutline />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										hubnusantara@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className="text-[12px] font-poppins font-bold text-primary-300 mb-2">
						SOCIAL MEDIA
					</p>
					<div className="grid grid-cols-2">
						<div className="flex flex-col flex-1 gap-y-2">
							<div className="flex flex-row items-center gap-x-4">
								<span className="text-primary-900">
									<AiFillInstagram />
								</span>
								<p className="text-[12px] font-poppins font-normal text-primary-900 uppercase">
									Bikin kapal
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoFacebook />
								</span>
								<p className="text-[12px] font-poppins font-normal text-primary-900 uppercase">
									Bikin Kapal
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoLinkedin />
								</span>
								<p className="text-[12px] font-poppins font-normal text-primary-900 uppercase">
									Bikin Kapal
								</p>
							</div>
						</div>
						<div className="flex flex-col flex-1 gap-y-2">
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<AiFillInstagram />
								</span>
								<p className="text-[12px] font-poppins font-normal text-primary-900 uppercase">
									Bikin kapal
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoFacebook />
								</span>
								<p className="text-[12px] font-poppins font-normal text-primary-900 uppercase">
									Bikin kapal
								</p>
							</div>
							<div className="flex flex-row items-center gap-x-2">
								<span className="text-primary-900">
									<IoLogoLinkedin />
								</span>
								<p className="text-[12px] font-poppins font-normal text-primary-900 uppercase">
									Bikin kapal
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className="text-[10px] text-primary-300 font-poppins font-normal text-center">
						© 2023 Hubnusantara All Rights Reserved Owned by PT Hubungan
						Nusantara
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
