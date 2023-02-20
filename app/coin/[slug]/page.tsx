"use client";
import HeaderCoin from "@/components/headers/HeaderCoin";
import ButtonOrLink from "@/components/ui/Button";
import BuyIcon from "../../../images/svgs/buy.svg";
import SellIcon from "../../../images/svgs/sell.svg";
import Back from "../../../images/svgs/back.svg";
import data from "../../../data/coins";
import React, { useEffect, useState } from "react";
import {
	motion,
	animate,
	AnimatePresence,
	useAnimationControls,
	useMotionValue,
	useMotionValueEvent,
} from "framer-motion";
import {
	VictoryCandlestick,
	VictoryAxis,
	VictoryChart,
	VictoryTheme,
} from "victory";
import { useRouter } from "next/navigation";
export default function Coin({ params }: { params: { slug: string } }) {
	const coin = data.find(({ slug }) => {
		return params.slug == slug;
	});

	const dataSample = [
		{ x: 1, open: 9, close: 10, high: 56, low: 7 },
		{ x: 2, open: 80, close: 40, high: 120, low: 10 },
		{ x: 3, open: 50, close: 80, high: 90, low: 20 },
		{ x: 4, open: 70, close: 22, high: 70, low: 5 },
		{ x: 5, open: 20, close: 35, high: 50, low: 10 },
		{ x: 6, open: 35, close: 30, high: 40, low: 3 },
		{ x: 7, open: 30, close: 90, high: 95, low: 30 },
		{ x: 8, open: 80, close: 81, high: 83, low: 75 },
		{ x: 9, open: 60, close: 41, high: 83, low: 25 },
		{ x: 10, open: 190, close: 8, high: 90, low: 7 },
		{ x: 12, open: 80, close: 83, high: 8, low: 7 },
		{ x: 13, open: 20, close: 83, high: 33, low: 4 },
		{ x: 14, open: 40, close: 8, high: 44, low: 5 },
		{ x: 15, open: 140, close: 1, high: 63, low: 50 },
		{ x: 16, open: 130, close: 11, high: 33, low: 35 },
	];

	const route = useRouter();
	const controls = useAnimationControls();

	const [graphData, setGraphData] = useState<typeof dataSample>([]);
	useEffect(() => {
		setGraphData(dataSample);
	}, []);

	const x = useMotionValue(0);

	useMotionValueEvent(x, "animationStart", () => {
		alert("animation started on x");
	});
	const [isExits, setIsExit] = useState(false);
	useEffect(() => {
		if (isExits) {
			controls.start({
				x: "100%",
			});
		} else {
			controls.start({
				x: "0",
			});
		}

		return () => {
			//
		};
	}, [isExits]);
	return (
		<AnimatePresence>
			<motion.div
				layout="size"
				initial={{
					x: "100vw",
				}}
				animate={controls}
				onAnimationComplete={() => {
					if (isExits) {
						route.back();
					}
				}}
				transition={{
					duration: 1,
					type: "tween",
				}}
				className="fixed h-full z-20 top-0 w-full bg-brand-tertiary-dark 
        
        "
			>
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
					className="absolute top-0 py-8 px-4 left-0 z-20  "
				>
					<ButtonOrLink
						intent="link"
						onClick={() => {
							setIsExit(true);
						}}
						nospace
					>
						<Back className="text-white w-6" />
					</ButtonOrLink>
				</motion.div>

				<HeaderCoin {...coin} />

				<div className="overflow-scroll">
					<motion.div
						initial={{ x: "100vw" }}
						animate={{
							x: 0,
						}}
						transition={{
							type: "tween",
							duration: 2,
						}}
					>
						<div className=" flex ">
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 md:w-full "
							>
								15min
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 md:w-full"
							>
								1h
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 md:w-full"
							>
								1d
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 md:w-full"
							>
								1w
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 md:w-full"
							>
								1m
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 md:w-full"
							>
								1y
							</ButtonOrLink>
						</div>
					</motion.div>
				</div>

				<div className="p-12 mb-60 flex mx-auto justify-center w-fit">
					<VictoryChart
						theme={VictoryTheme.material}
						animate={{ duration: 2000, easing: "elasticIn" }}
						domainPadding={{ x: 25 }}
						scale={{ x: "time" }}
					>
						<VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
						<VictoryAxis dependentAxis />
						<VictoryCandlestick
							animate={{ duration: 2000, easing: "elasticIn" }}
							candleColors={{ positive: "#b9e39a", negative: "#5957bb" }}
							data={graphData}
						/>
					</VictoryChart>
				</div>
				<div className="fixed  flex w-full bottom-0 py-10">
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
						<ButtonOrLink
							intent="secondary"
							fullWidth
							right={<SellIcon className="h-6 w-6" />}
						>
							<span className="text-xl">sell</span>
						</ButtonOrLink>
					</motion.div>
					<motion.div
						initial={{
							scale: 0,
						}}
						animate={{
							scale: 1,
						}}
						transition={{
							duration: 2.2,
						}}
						className="w-full"
					>
						<ButtonOrLink fullWidth right={<BuyIcon className="h-6 w-6" />}>
							<span className="text-xl">buy</span>
						</ButtonOrLink>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
