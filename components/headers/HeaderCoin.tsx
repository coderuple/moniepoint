import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Back from "../../images/svgs/back.svg";
import ButtonOrLink from "../ui/Button";

import { motion } from "framer-motion";
import Balance from "../Balance";
import { type } from "os";
import IconFacade from "../IconFacade";

type HeaderCoinProps = {
	slug?: string;
	name?: string;
	Icon?: JSX.Element;
	price?: number;
};
export default function HeaderCoin({ name, Icon, price }: HeaderCoinProps) {
	return (
		<div className="px-4 py-8 space-y-8">
			<div className=" flex justify-between items-middle relative  ">
				<motion.div
					initial={{
						rotate: "90deg",
						scale: 0,
					}}
					animate={{
						rotate: "0",
						scale: 1,
					}}
					transition={{
						duration: 1,
						delay: 0.8,
						type: "tween",
					}}
					className="absolute top-0 left-0  "
				>
					<ButtonOrLink href="/" intent="link" nospace>
						<Back className="text-white w-6" />
					</ButtonOrLink>
				</motion.div>

				<h1 className="text-white text-center text-lg justify-center items-center flex flex-1 space-x-2">
					<motion.span
						initial={{
							scale: 0,
						}}
						animate={{
							scale: 1.3,
						}}
						transition={{
							duration: 1,
							delay: 1,
							type: "tween",
						}}
					>
						{Icon && <IconFacade Icon={Icon} />}
					</motion.span>
					<motion.span
						initial={{
							y: "-100%",
						}}
						animate={{
							y: 1,
						}}
						transition={{
							duration: 1,
							delay: 0.8,
							type: "tween",
						}}
					>
						{name}
					</motion.span>
				</h1>
			</div>

			<Balance
				amount={price}
				size="large"
				animated
				isHome={false}
				right={
					<span>
						<motion.span className="text-xs text-brand">
							{" "}
							+22.33 (0.72%)
						</motion.span>
					</span>
				}
			/>
			{/* <h2 className="text-white text-5xl">
				${price} <span className="text-brand text-xs">+11.62 (0.74%)</span>
			</h2> */}
		</div>
	);
}
