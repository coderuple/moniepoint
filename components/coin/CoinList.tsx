import React from "react";

import Coin, { CoinProps } from "./Coin";

export default function CoinList({ data }: { data: CoinProps[] }) {
	return (
		<div className="">
			{data.map((coin: CoinProps) => (
				<Coin {...coin} />
			))}
		</div>
	);
}