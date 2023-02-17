import React from "react";
import Button from "../ui/Button";

export type CoinProps = {
	name: string;
};
export default function Coin({ name }: CoinProps) {
	return (
		<Button intent="tertiary" href="/coin">
			{name}
		</Button>
	);
}
