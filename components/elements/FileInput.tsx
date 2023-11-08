import React, { forwardRef, useEffect, useMemo } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

interface IFileInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
	mode: "update" | "string";
}

const FileInput = forwardRef<HTMLInputElement, IFileInputProps>(
	(props, ref) => {
		const { name, label = name, mode = "update" } = props;
		const { register, unregister, setValue, watch } = useFormContext();
		const files: File[] = watch(name!);
		const onDrop = useMemo(
			(): DropzoneOptions["onDrop"] => (droppedFiles) => {
				console.log(droppedFiles);

				let newFiles =
					mode === "update"
						? droppedFiles
						: [...(files || []), ...droppedFiles];
				setValue(name!, newFiles, { shouldValidate: true });
			},
			[setValue, name, mode, files]
		);

		// useCallback<DropzoneOptions["onDrop"]>(
		// 	(droppedFiles) => {
		// 		setValue(name!, droppedFiles, { shouldValidate: true });
		// 	},
		// 	[setValue, name]
		// );
		const { getRootProps, getInputProps, isDragActive } = useDropzone({
			onDrop,
			accept: {
				"application/pdf": [".pdf"],
				"application/msword": [".doc"],
			},
			maxFiles: 1,
			maxSize: 300000,
		});

		useEffect(() => {
			register(name!);
			return () => {
				unregister(name);
			};
		}, [register, unregister, name]);
		return (
			<>
				<div {...getRootProps()}>
					<input
						{...props}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id={name}
						{...getInputProps()}
					/>
					<div
						className={`w-full p-2 border border-dashed border-primary-300 rounded-lg ${
							isDragActive ? "bg-gray-400" : "bg-gray-200"
						}`}
					>
						<div className="flex flex-col items-center justify-center py-4 px-6">
							<p className="text-sm text-primary-300">
								Seret atau{" "}
								<span className="text-secondary-300 text-bold">Pilih File</span>
							</p>
							<p className="text-sm text-primary-300">.PDF, .DOC (3MB)</p>{" "}
						</div>
						{/* Optionally you may display a preview of the file(s) */}
					</div>
					{!!files &&
						files.map((file) => (
							<aside className="text-sm text-primary-400" key={file.name}>
								{file.name}
							</aside>
						))}
				</div>
			</>
		);
	}
);

export default FileInput;

// const FileInput = ({ name }: IFileInputProps) => {
// 	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
// 		accept: {
// 			"*.pdf": [".pdf"],
// 			"*.doc": [".doc"],
// 		},
// 	});

// 	const files = acceptedFiles.map((file: FileWithPath) => (
// 		<li key={file.path}>
// 			<span className="text-sm text-primary-300">{file.path}</span>
// 			{/* - {file.size} bytes */}
// 		</li>
// 	));

// 	return (
// 		<section className="container">
// 			<div
// 				{...getRootProps({
// 					className:
// 						"dropzone w-full p-2 border border-dashed border-primary-400 rounded-lg",
// 				})}
// 			>
// 				<input {...getInputProps()} name={name} />
// 				<div className="flex flex-col items-center justify-center py-4 px-6">
// 					<p className="text-sm text-primary-300">
// 						Seret atau{" "}
// 						<span className="text-secondary-300 text-bold">Pilih File</span>
// 					</p>
// 					<p className="text-sm text-primary-300">.PDF, .DOC (3MB)</p>
// 				</div>
// 			</div>
// 			<aside>
// 				{/* <h4>Files</h4> */}
// 				<ul>{files}</ul>
// 			</aside>
// 		</section>
// 	);
// };

// export default FileInput;
