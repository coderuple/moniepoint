"use client";
import HeaderCoin from "@/components/headers/HeaderCoin";
import ButtonOrLink from "@/components/ui/Button";
import BuyIcon from "../../../images/svgs/buy.svg";
import SellIcon from "../../../images/svgs/sell.svg";
import data from "../../../data/coins";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	VictoryCandlestick,
	VictoryAxis,
	VictoryChart,
	VictoryTheme,
} from "victory";
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
		{ x: 8, open: 80, close: 81, high: 83, low: 75 },
		{ x: 8, open: 100, close: 81, high: 83, low: 75 },
	];
	return (
		<AnimatePresence>
			<motion.div
				layout
				initial={{
					x: "100vw",
				}}
				animate={{
					x: "0",
				}}
				transition={{
					duration: 1,
					type: "tween",
				}}
				exit={{
					x: "100vw",
					opacity: 0,
				}}
				className="fixed h-full z-20 top-0 w-full bg-brand-tertiary-dark 
        
        "
			>
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
								className="hover:bg-white w-24 lg:w-full "
							>
								15min
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 lg:w-full"
							>
								1h
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 lg:w-full"
							>
								1d
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 lg:w-full"
							>
								1w
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 lg:w-full"
							>
								1m
							</ButtonOrLink>
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white w-24 lg:w-full"
							>
								1y
							</ButtonOrLink>
						</div>
					</motion.div>
				</div>

				<div className="p-12 mb-60 m-w-[450px]">
					<VictoryChart
						animate={{ duration: 2000, easing: "elasticIn" }}
						domainPadding={{ x: 25 }}
						scale={{ x: "time" }}
					>
						<VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
						<VictoryAxis dependentAxis />
						<VictoryCandlestick
							animate={{ duration: 2000, easing: "elasticIn" }}
							candleColors={{ positive: "#b9e39a", negative: "#5957bb" }}
							data={dataSample}
						/>
					</VictoryChart>
				</div>
				<div className="fixed  flex w-full bottom-0 py-10">
					<ButtonOrLink
						intent="secondary"
						fullWidth
						right={<SellIcon className="h-6 w-6" />}
					>
						<span className="text-xl">sell</span>
					</ButtonOrLink>
					<ButtonOrLink fullWidth right={<BuyIcon className="h-6 w-6" />}>
						<span className="text-xl">buy</span>
					</ButtonOrLink>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
