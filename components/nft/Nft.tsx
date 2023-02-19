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
import Timer from "../Timer";
const NftPrice = () => {};

export type NftProps = {
	id?: number;
	name: string;
	price: number;
	image: StaticImageData;
	crypto: string;
	expiryDate: string;
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
	expiryDate,
	image,
}: NftProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const openClassNames = {
		container: "fixed w-full z-10 top-0   h-full  bg-brand-tertiary-dark",
		image:
			"h-80   relative aspect-w-16 aspect-h-16 rounded-t-none rounded-b-xl cursor-pointer",
	};
	const closedClassNames = {
		container: "py-2 z-1 relative",
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
							<motion.div
								initial={{
									x: "100%",
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									type: "tween",
									delay: 0.5,
									duration: 1,
								}}
								className="flex flex-col space-y-2"
							>
								{" "}
								<span className="text-xs text-gray-500"> creator</span>
								<div className="flex items-center space-x-1.5">
									{" "}
									<div className="w-8 h-8 rounded-full bg-brand-secondary"></div>
									{owner?.username && (
										<p className="text-white text-sm"> @{owner.username}</p>
									)}
								</div>
							</motion.div>

							<motion.div
								initial={{ scale: 0 }}
								animate={{
									scale: 1,
								}}
								transition={{
									duration: 1.5,
									type: "tween",
								}}
							>
								<Button
									intent="link"
									className="text-white border-brand-secondary-dark border"
								>
									<AddUser className="w-6" />
								</Button>
							</motion.div>
						</div>
					</div>

					<div className="space-y-12 ">
						<div className="flex  ">
							<motion.div
								initial={{
									scale: 0,
								}}
								animate={{
									scale: 1,
								}}
								transition={{
									duration: 1,
								}}
								className="w-full"
							>
								{expiryDate && (
									<Button
										intent="tertiary"
										fullWidth
										className="tracking-widest"
									>
										<Timer date={expiryDate} />
									</Button>
								)}
							</motion.div>
							<motion.div
								initial={{
									scale: 0,
								}}
								animate={{
									scale: 1,
								}}
								transition={{
									duration: 1.5,
								}}
								className="w-full"
							>
								<Button intent="tertiary" fullWidth>
									<span className="flex px-2 justify-center items-center space-x-2">
										{coin?.Icon && (
											<IconFacade
												Icon={coin.Icon}
												bgClassName="border-brand-tertiary text-brand-tertiary "
												facadeClassName="border-brand-tertiary"
											/>
										)}
										<span className="tracking-widest">{price}</span>
									</span>
								</Button>
							</motion.div>
						</div>

						<div className="fixed bottom-0 w-full pb-3">
							{" "}
							<motion.div
								initial={{
									scale: 0,
									originX: 0,
								}}
								animate={{
									scale: 1,
								}}
								transition={{
									delay: 1,
									duration: 1.3,
								}}
								className="w-full"
							>
								<Button fullWidth right={<Bid className="h-6 w-6" />}>
									<span className="text-xl">place a bid</span>
								</Button>{" "}
							</motion.div>
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

					{expiryDate && (
						<div className="text-gray-400">
							<Timer date={expiryDate} />
						</div>
					)}
				</div>
			)}
		</motion.div>
	);
}
