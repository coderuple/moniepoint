import React from "react";
import Button from "../ui/Button";

export type CoinProps = {
	name: string;
	slug: string;
	Icon?: JSX.Element;
};
export default function Coin({ name, Icon, slug }: CoinProps) {
	return (
		<Button intent="tertiary" href={`/coin/${slug}`} left={Icon} fullWidth>
			{name}
		</Button>
	);
}
