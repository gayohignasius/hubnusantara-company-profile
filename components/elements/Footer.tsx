import { TFooterProps } from "@/types";
import Image from "next/image";
import { MdOutlineMailOutline, MdWhatsapp } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

const Footer = ({ footer }: { footer: TFooterProps }) => {
	return (
		<footer className="w-full bg-primary-100 h-full border-t border-primary-300">
			{/* Desktop screen */}
			<div className="hidden lg:flex flex-row max-w-[1312px] mx-auto w-full lg:gap-x-5 xl:gap-x-12 gap-y-9 py-9 lg:px-6">
				<div className="flex flex-col gap-y-2">
					<Image
						src="/images/hubnusantara_logo_text.svg"
						alt="HubNusantara logo"
						className="object-contain mb-2"
						width={223}
						height={36}
					/>
					<Link
						href={"https://api.whatsapp.com/send?phone=6281299381120&text="}
						target="_blank"
						rel="noopener noreferer"
					>
						{/* "https://api.whatsapp.com/send?phone=6281299381120&text=Send20%a20%quote" */}
						<div className="flex flex-row items-center justify-start gap-x-2">
							<span className="text-primary-900">
								<MdWhatsapp />
							</span>
							<p className="text-[16px] font-poppins font-normal text-primary-900">
								+6281299381120 (Satrio)
							</p>
						</div>
					</Link>
					<Link
						href={"mailto:contact@hubnusantara.com"}
						target="_blank"
						rel="noopener noreferer"
					>
						<div className="flex flex-row items-center justify-start gap-x-2">
							<span className="text-primary-900">
								<MdOutlineMailOutline />
							</span>
							<p className="text-[16px] font-poppins font-normal text-primary-900">
								contact@hubnusantara.com
							</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col gap-y-2">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d695.5841673076369!2d106.77633802475356!3d-6.253282073729614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f103f5278aa5%3A0x9661d8fe63a2458c!2sEnablerspace.id!5e0!3m2!1sen!2sus!4v1715542556632!5m2!1sen!2sus"
						style={{ width: "380px", height: "180px" }}
					></iframe>
					<p className="text-sm font-poppins font-normal text-primary-300">
						Enablerspace.id
					</p>
					<p className="text-sm font-poppins font-normal text-primary-300">
						Jl. Bintaro Raya No.8, RT.2/RW.10, Kby. Lama Utara, Kec. <br />
						Kby. Lama, Kota Jakarta Selatan, Daerah Khusus <br />
						Ibukota Jakarta 12240
					</p>
				</div>
				<div className="flex flex-col gap-y-2">
					<p className="text-[16px] font-poppins font-bold text-primary-300 mb-2">
						{footer.product}
					</p>
					<div>
						<Link
							href={"https://bikinkapal.com"}
							target="_blank"
							rel="noopener noreferer"
						>
							<p className="text-[16px] font-poppins font-normal text-primary-900">
								BIKINKAPAL
							</p>
						</Link>
					</div>
					<div>
						<Link
							href={"https://laboon.app"}
							target="_blank"
							rel="noopener noreferer"
						>
							<p className="text-[16px] font-poppins font-normal text-primary-900">
								Laboon
							</p>
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 grow">
					<p className="text-[16px] font-poppins font-bold text-primary-300 mb-2">
						{footer.social_media}
					</p>
					<div className="grid lg:grid-rows lg:gap-y-5 xl:grid-cols-2 xl:gap-x-12">
						<div className="flex flex-col gap-y-2">
							<Link
								href={
									"https://www.instagram.com/bikinkapal.indonesia?igsh=NnBtcGwxYjgzNGpr"
								}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<AiFillInstagram />
									</span>
									<p className="text-[16px] font-poppins font-normal text-primary-900">
										@bikinkapal.indonesia
									</p>
								</div>
							</Link>
							<Link
								href={"https://www.facebook.com/bikinkapal?mibextid=ZbWKwL"}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoFacebook />
									</span>
									<p className="text-[16px] font-poppins font-normal text-primary-900">
										BIKINKAPAL
									</p>
								</div>
							</Link>
							<Link
								href={"https://www.linkedin.com/company/bikinkapal/"}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoLinkedin />
									</span>
									<p className="text-[16px] font-poppins font-normal text-primary-900">
										BIKINKAPAL
									</p>
								</div>
							</Link>
						</div>
						<div className="flex flex-col flex-1 gap-y-2">
							<Link
								href={
									"https://www.instagram.com/laboon.app?igsh=MXBudzNoMHZybHBzaw=="
								}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<AiFillInstagram />
									</span>
									<p className="text-[16px] font-poppins font-normal text-primary-900">
										@laboon.app
									</p>
								</div>
							</Link>
							<Link
								href={
									"https://www.facebook.com/people/laboonapp/100088184241788/?mibextid=qi2Omg&rdid=nwQ1QtPFhF7PDhfv"
								}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoFacebook />
									</span>
									<p className="text-[16px] font-poppins font-normal text-primary-900">
										Laboon
									</p>
								</div>
							</Link>
							<Link
								href={"https://www.linkedin.com/company/laboon-indonesia/"}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoLinkedin />
									</span>
									<p className="text-[16px] font-poppins font-normal text-primary-900">
										Laboon Indonesia
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:flex justify-center py-9">
				<p className="text-sm text-primary-300 font-poppins font-normal text-center">
					© 2023 Hubnusantara All Rights Reserved Owned by PT Penghubung Laut
					Nusantara
				</p>
			</div>
			{/* Mobile screen */}
			<div className="flex flex-col gap-y-4 py-4 px-6 lg:hidden">
				<Image
					src="/images/hubnusantara_logo_text.svg"
					alt="HubNusantara logo"
					width={144}
					height={23}
					className="object-contain"
				/>
				<div className="max-w-sm w-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d695.5841673076369!2d106.77633802475356!3d-6.253282073729614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f103f5278aa5%3A0x9661d8fe63a2458c!2sEnablerspace.id!5e0!3m2!1sen!2sus!4v1715542556632!5m2!1sen!2sus"
						style={{ width: "100%", height: "199.78px" }}
					></iframe>
				</div>
				<p className="text-[10px] font-poppins font-normal text-primary-300">
					Enablerspace.id
				</p>
				<p className="text-[10px] font-poppins font-normal text-primary-300">
					Jl. Bintaro Raya No.8, RT.2/RW.10, Kby. Lama Utara, Kec. Kby. Lama,
					Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240
				</p>
				<div>
					<div className="grid grid-cols-2 gap-y-4">
						<div className="flex flex-col gap-y-2">
							<div>
								<p className="text-[12px] font-poppins font-bold text-primary-300">
									{footer.product}
								</p>
							</div>
							<div>
								<Link
									href={"https://bikinkapal.com"}
									target="_blank"
									rel="noopener noreferer"
								>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										BIKINKAPAL
									</p>
								</Link>
							</div>
							<div>
								<Link
									href={"https://laboon.app"}
									target="_blank"
									rel="noopener noreferer"
								>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										Laboon
									</p>
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-y-2">
							<div>
								<p className="text-[12px] font-poppins font-bold text-primary-300">
									{footer.contact}
								</p>
							</div>
							<div className="flex flex-col">
								<Link
									href={
										"https://api.whatsapp.com/send?phone=6281299381120&text="
									}
									target="_blank"
									rel="noopener noreferer"
								>
									<div className="flex flex-row items-center justify-start gap-x-2">
										<span className="text-primary-900">
											<MdWhatsapp />
										</span>
										<p className="text-[12px] font-poppins font-normal text-primary-900">
											+628129938120 (Satrio)
										</p>
									</div>
								</Link>
							</div>
							<div className="flex flex-col">
								<Link
									href={"mailto:contact@hubnusantara.com"}
									target="_blank"
									rel="noopener noreferer"
								>
									<div className="flex flex-row items-center justify-start gap-x-2">
										<span className="text-primary-900">
											<MdOutlineMailOutline />
										</span>
										<p className="text-[12px] font-poppins font-normal text-primary-900">
											contact@hubnusantara.com
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className="text-[12px] font-poppins font-bold text-primary-300 mb-2">
						{footer.social_media}
					</p>
					<div className="grid grid-cols-2">
						<div className="flex flex-col flex-1 gap-y-2">
							<Link
								href={
									"https://www.instagram.com/bikinkapal.indonesia?igsh=NnBtcGwxYjgzNGpr"
								}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<AiFillInstagram />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										@bikinkapal.indonesia
									</p>
								</div>
							</Link>
							<Link
								href={"https://www.facebook.com/bikinkapal?mibextid=ZbWKwL"}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoFacebook />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										BIKINKAPAL
									</p>
								</div>
							</Link>
							<Link
								href={"https://www.linkedin.com/company/bikinkapal/"}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoLinkedin />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										BIKINKAPAL
									</p>
								</div>
							</Link>
						</div>
						<div className="flex flex-col flex-1 gap-y-2">
							<Link
								href={
									"https://www.instagram.com/laboon.app?igsh=MXBudzNoMHZybHBzaw=="
								}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<AiFillInstagram />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										@laboon.app
									</p>
								</div>
							</Link>
							<Link
								href={
									"https://www.facebook.com/people/laboonapp/100088184241788/?mibextid=qi2Omg&rdid=nwQ1QtPFhF7PDhfv"
								}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoFacebook />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										Laboon
									</p>
								</div>
							</Link>
							<Link
								href={"https://www.linkedin.com/company/laboon-indonesia/"}
								target="_blank"
								rel="noopener noreferer"
							>
								<div className="flex flex-row items-center gap-x-2">
									<span className="text-primary-900">
										<IoLogoLinkedin />
									</span>
									<p className="text-[12px] font-poppins font-normal text-primary-900">
										Laboon Indonesia
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<p className="text-[10px] text-primary-300 font-poppins font-normal text-center">
						© 2023 Hubnusantara All Rights Reserved Owned by PT Penghubung Laut
						Nusantara
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
