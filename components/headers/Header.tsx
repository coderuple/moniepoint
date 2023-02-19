"use client";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Add from "../../images/svgs/add.svg";
import Balance from "../Balance";

import { motion, useScroll } from "framer-motion";

export default function Header() {
	return (
		<motion.div
			layout
			initial={{
				position: "fixed",
				top: 0,
			}}
			className="px-4 py-6 flex justify-between items-middle z-10 w-full h-28  bg-brand-tertiary-dark "
		>
			<Balance amount={200.22} subText="your balance" />
			<motion.div
				initial={{
					scale: 0,
				}}
				animate={{
					scale: 1,
				}}
				transition={{
					duration: 1.2,
					type: "tween",
				}}
			>
				<Button href="/" intent="white" className="py-6">
					<Add className="h-[24px] w-[24px] text-center flex justify-center items-center" />
				</Button>
			</motion.div>
		</motion.div>
	);
}
