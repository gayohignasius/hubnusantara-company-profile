"use client";

import { MdClose } from "react-icons/md";
import Image from "next/image";

const WhatsappButton = () => {
	return (
		<div className="fixed bottom-14 lg:bottom-16 xl:bottom-20 right-4 lg:right-14 xl:right-24 outline-none">
			<div className="flex relative justify-end">
				<div className="group">
					<div className="absolute invisible bottom-14 right-0 group-hover:visible w-60 flex flex-row items-start justify-center bg-white text-primary-100 text-sm rounded-md p-2">
						<p className="text-primary-100">
							Got any questions? Hit us up via WhatsApp! ✨
						</p>
						{/* <span className="p-1">
							<MdClose />
						</span> */}
					</div>
					<div className="w-12 h-12 rounded-full border border-secondary-300 flex items-center justify-center">
						<Image
							src="/images/whatsapp.png"
							alt="WhatsApp Logo"
							width={34}
							height={34}
							className="hover:cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatsappButton;
