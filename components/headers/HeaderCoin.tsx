import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Back from "../../images/svgs/back.svg";
import ButtonOrLink from "../ui/Button";

type HeaderCoinProps = {
	slug?: string;
	name?: string;
	Icon?: JSX.Element | string;
	price?: number;
};
export default function HeaderCoin({ name, Icon, price }: HeaderCoinProps) {
	return (
		<div className="px-4 py-8 space-y-8">
			<div className=" flex justify-between items-middle relative  ">
				<ButtonOrLink
					href="/"
					intent="link"
					nospace
					className="absolute top-0 left-0  "
				>
					<Back className="text-white w-6" />
				</ButtonOrLink>

				<h1 className="text-white text-center text-lg justify-center items-center flex flex-1 space-x-2">
					<span className="text-brand-tertiary-dark bg-white flex justify-end items-middle rounded-full text-2xl bg-clip-border border-brand-tertiary-dark">
						{Icon}
					</span>
					<span>{name}</span>
				</h1>
			</div>

			<h2 className="text-white text-5xl">
				${price} <span className="text-brand text-xs">+11.62 (0.74%)</span>
			</h2>
		</div>
	);
}
