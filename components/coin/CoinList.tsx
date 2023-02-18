import React from "react";

import Coin, { CoinProps } from "./Coin";

export default function CoinList({ data }: { data: CoinProps[] }) {
	return (
		<div>
			<div className="flex overflow-scroll">
				{data
					.filter((_, i) => {
						return i < data.length / 2;
					})
					.map((coin: CoinProps, i) => (
						<Coin key={i} {...coin} />
					))}
			</div>

			<div className="flex overflow-scroll">
				{data
					.filter((_, i) => {
						return i >= data.length / 2;
					})
					.map((coin: CoinProps, i) => (
						<Coin key={i} {...coin} />
					))}
			</div>
		</div>
	);
}
