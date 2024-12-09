"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
	children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
	return (
		<>
			{children}
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
			<ToastContainer
				toastClassName={(context) =>
					"bg-white relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
				}
				bodyClassName={() => "text-sm text-black font-med block p-3"}
				position="top-right"
				autoClose={5000}
			/>
		</>
	);
}
