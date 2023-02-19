"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

function Counter({
	from,
	to,
	animated = true,
}: {
	from: number;
	to: number;
	animated?: boolean;
}) {
	const nodeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = nodeRef.current;

		if (animated) {
			const controls = animate(from, to, {
				duration: 1.5,
				delay: 2,

				onUpdate(value) {
					if (node) {
						node.textContent = value.toFixed(2);
					}
				},
			});

			return () => controls.stop();
		} else {
			if (node) node.textContent = to.toString();
		}
	}, [from, to]);

	return <div ref={nodeRef} />;
}
export default function Balance({
	amount = 0.0,
	size = "small",
	subText,
	animated = false,
	isHome = true,
	right,
}: {
	amount?: number;
	size?: "small" | "large";
	subText?: string;
	right?: string | JSX.Element;
	animated?: boolean;
	isHome?: boolean;
}) {
	const TheCounter = (
		<div className="flex space-x-2 items-end  ">
			<h1
				className={`text-white flex  ${
					size == "small" ? "text-4xl" : "text-5xl"
				}`}
			>
				$ <Counter from={0} to={amount} animated={animated} />
			</h1>
			{right && (
				<motion.div
					initial={{
						y: "-100%",
					}}
					animate={{
						y: 0,
					}}
					transition={{
						duration: 1.5,

						type: "tween",
					}}
					className="flex-shrink"
				>
					{" "}
					{right}
				</motion.div>
			)}
		</div>
	);

	return (
		<motion.div layout>
			<div className="">
				{isHome ? (
					<motion.div
						initial={{
							y: "-100%",
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1.2,
							ease: "easeIn",
						}}
					>
						{subText ? (
							<div className="text-base text-gray-500 "> {subText}</div>
						) : null}

						{TheCounter}
					</motion.div>
				) : (
					<div> {TheCounter}</div>
				)}
			</div>
		</motion.div>
	);
}
