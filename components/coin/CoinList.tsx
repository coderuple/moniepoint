"use client";
import React from "react";
import Slider from "react-slick";
import Coin, { CoinProps } from "./Coin";
import { motion } from "framer-motion";
const marqueeVariants = {
	animate: {
		x: [0, -100],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 7,
				type: "tween",
			},
		},
	},

	animateRev: {
		x: [-100, 0],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 7,
				type: "tween",
			},
		},
	},
};
export default function CoinList({ data }: { data: CoinProps[] }) {
	return (
		<motion.div
			layout
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			className="overflow-hidden"
		>
			{
				// data
				// .filter((_, i) => {
				// 	return i < data.length / 2;
				// })
				// .map((coin: CoinProps, i) => (
				// 	<div key={i} className="w-3 h-3 bg-teal-100">
				// 		{/* <Coin {...coin} /> */}
				// 	</div>
				// ))
			}

			<motion.div className="flex" variants={marqueeVariants} animate="animate">
				{data
					.filter((_, i) => {
						return i < data.length / 2;
					})
					.map((coin: CoinProps, i) => (
						<Coin key={i} {...coin} />
					))}
			</motion.div>
			<motion.div
				className="flex"
				variants={marqueeVariants}
				animate="animateRev"
			>
				{data
					.filter((_, i) => {
						return i >= data.length / 2;
					})
					.map((coin: CoinProps, i) => (
						<Coin key={i} {...coin} />
					))}
			</motion.div>
		</motion.div>
	);
}
