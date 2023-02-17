import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import addIcon from "../../images/svgs/add.svg";
import ButtonOrLink from "../ui/Button";

export default function HeaderCoin() {
	return (
		<div className="px-4 py-8 space-y-8">
			<div className=" flex justify-between items-middle relative  ">
				<ButtonOrLink
					href="/"
					intent="link"
					nospace
					className="absolute top-0 left-0 "
				>
					Back
				</ButtonOrLink>

				<h1 className="text-white text-center text-lg justify-center items-center flex flex-1">
					etherum
				</h1>
			</div>

			<h1 className="text-white text-5xl">
				$1234.56 <span className="text-brand text-xs">+11.62 (0.74%)</span>
			</h1>
		</div>
	);
}
