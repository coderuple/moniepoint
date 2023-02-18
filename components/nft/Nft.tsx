"use client";
import React, { useState } from "react";
import Bid from "../../images/svgs/bid.svg";
import Back from "../../images/svgs/back.svg";
import Button from "../ui/Button";
import coins from "../../data/coins";
import Image, { StaticImageData } from "next/image";

const NftPrice = () => {};

export type NftProps = {
	id?: number;
	name: string;
	price: number;
	image: StaticImageData;
	crypto: string;
	expiryDate?: string;
	owner?: {
		avatar?: string;
		username: string;
	};
};
export default function Nft({
	id,
	price,
	crypto,
	name,
	owner,
	image,
}: NftProps) {
	console.log(image);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const openClassNames = {
		container: "fixed w-full top-0",
		image:
			"bg-brand h-80  aspect-w-16 aspect-h-9 rounded-t-none rounded-b-xl cursor-pointer",
	};
	const closedClassNames = {
		container: "py-8",
		image:
			"bg-brand h-72  aspect-w-16 aspect-h-16  rounded-t-3xl rounded-b-xl cursor-pointer",
	};

	const coin = coins.find(({ slug }) => {
		return slug == crypto;
	});
	return (
		<div
			className={isOpen ? openClassNames.container : closedClassNames.container}
			// style={{
			// 	backgroundImage: `url(${image})`,
			// }}
		>
			<div
				className={isOpen ? openClassNames.image : closedClassNames.image}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{isOpen && (
					<Button onClick={() => {}}>
						<Back className="text-brand-tertiary-dark w-6" />
					</Button>
				)}

				<Image {...image} alt="" />
			</div>

			{isOpen ? (
				<div className="py-4 space-y-4 ">
					<div className="px-4 space-y-3">
						<h2 className="text-white text-3xl">
							{name} {id && <span className="px-1">#{id}</span>}
						</h2>{" "}
						<div className="flex items-center justify-between ">
							<div className="flex flex-col space-y-2">
								{" "}
								<span className="text-xs text-gray-500"> creator</span>
								<div className="flex items-center space-x-1.5">
									{" "}
									<div className="w-8 h-8 rounded-full bg-brand-secondary"></div>
									{owner?.username && (
										<p className="text-white text-sm"> @{owner.username}</p>
									)}
								</div>
							</div>

							<Button
								intent="link"
								className="text-white border-brand-secondary-dark border"
							>
								u
							</Button>
						</div>
					</div>

					<div className="space-y-6">
						<div className="flex">
							<Button intent="tertiary" fullWidth>
								12:21:45
							</Button>
							<Button intent="tertiary" fullWidth>
								1.35
							</Button>
						</div>

						<div className="fixed bottom-0 w-full pb-3">
							{" "}
							<Button fullWidth right={<Bid className="h-6 w-6" />}>
								<span className="text-xl">place a bid</span>
							</Button>{" "}
						</div>
					</div>
				</div>
			) : (
				<div className="flex p-6 bg-brand-tertiary items-center justify-between rounded-t-xl rounded-b-3xl mt-1">
					<div
						className="text-white text-xl font-semibold flex space-x-2
          "
					>
						{coin && (
							<span className="text-brand-tertiary bg-white flex justify-center w-[24px] h-[24px] items-middle rounded-full  ">
								{coin.Icon}
							</span>
						)}
						<span className="tracking-widest">{price}</span>
					</div>

					<div className="text-gray-400">07 : 24 : 35</div>
				</div>
			)}
		</div>
	);
}
