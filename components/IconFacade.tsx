import React from "react";

export default function IconFacade({
	Icon,
	bgClassName = "border-brand-tertiary-dark text-brand-tertiary-dark ",
	facadeClassName = "border-brand-tertiary-dark",
}: {
	Icon: JSX.Element;
	facadeClassName?: string;
	bgClassName?: string;
}) {
	return (
		<div
			className={`w-[24px] h-[24px] relative text-2xl  flex justify-center items-center ${bgClassName}`}
		>
			<div
				className={`absolute top-0 w-[26px] h-[26px] border-2 z-10  rounded-full ${facadeClassName}`}
			></div>
			<div className="absolute top-0 w-[24px] h-[24px] bg-white rounded-full ">
				{Icon}
			</div>
		</div>
	);
}
