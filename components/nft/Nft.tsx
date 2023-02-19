"use client";
import React, { useState } from "react";
import Bid from "../../images/svgs/bid.svg";
import Back from "../../images/svgs/back.svg";
import AddUser from "../../images/svgs/addUser.svg";
import Button from "../ui/Button";
import coins from "../../data/coins";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import IconFacade from "../IconFacade";
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
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const openClassNames = {
		container:
			"fixed w-full z-10 top-0  overflow-scroll h-[100vh]  bg-brand-tertiary-dark",
		image:
			"h-80   relative aspect-w-16 aspect-h-16 rounded-t-none rounded-b-xl cursor-pointer",
	};
	const closedClassNames = {
		container: "py-8 z-1 relative",
		image: " relative aspect-w-16 aspect-h-14   cursor-pointer",
	};

	const coin = coins.find(({ slug }) => {
		return slug == crypto;
	});
	return (
		<motion.div
			initial={{ opacity: 0, y: "10%" }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 1,
			}}
			className={isOpen ? openClassNames.container : closedClassNames.container}
		>
			{isOpen && (
				<Button
					intent="link"
					className="absolute z-10"
					onClick={() => {
						setIsOpen((prev) => {
							return !prev;
						});
					}}
				>
					<Back className="text-brand-tertiary-dark w-6 drop-shadow-md" />
				</Button>
			)}
			<motion.div
				layout
				transition={{
					layout: { duration: 0.8 },
				}}
				className={isOpen ? openClassNames.image : closedClassNames.image}
				onClick={() => {
					setIsOpen((prev) => {
						return !prev;
					});
				}}
				whileHover={{ scale: !isOpen ? 0.95 : 1 }}
			>
				<Image
					className={`${
						!isOpen ? "rounded-t-3xl" : "rounded-t-none"
					}  rounded-b-xl`}
					{...image}
					alt=""
				/>
			</motion.div>

			{isOpen ? (
				<div className="py-4 space-y-4 overflow-scroll ">
					<div className="px-4 space-y-3 ">
						<h2 className="text-white text-3xl">
							{name} {id && <span className="px-1">#{id}</span>}
						</h2>{" "}
						<div className="flex items-center  justify-between ">
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
								<AddUser className="w-6" />
							</Button>
						</div>
					</div>

					<div className="space-y-12 ">
						<div className="flex  ">
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
				<div className="flex p-6 relative bg-brand-tertiary items-center justify-between rounded-t-xl rounded-b-3xl mt-1">
					<div
						className="text-white text-xl font-semibold flex space-x-2
          "
					>
						{coin?.Icon && (
							<IconFacade
								Icon={coin.Icon}
								bgClassName="border-brand-tertiary text-brand-tertiary"
								facadeClassName="border-brand-tertiary"
							/>
						)}
						<span className="tracking-widest">{price}</span>
					</div>

					<div className="text-gray-400">07 : 24 : 35</div>
				</div>
			)}
		</motion.div>
	);
}
