import HeaderCoin from "@/components/headers/HeaderCoin";
import ButtonOrLink from "@/components/ui/Button";
import BuyIcon from "../../../images/svgs/buy.svg";
import SellIcon from "../../../images/svgs/sell.svg";
import data from "../../../data/coins";
import React from "react";
import Image from "next/image";

export default function Coin({ params }: { params: { slug: string } }) {
	const coin = data.find(({ slug }) => {
		return params.slug == slug;
	});

	return (
		<div
			className="fixed h-full top-0 w-full bg-brand-tertiary-dark 
        
        "
		>
			<HeaderCoin {...coin} />

			<div>
				<div className="w-full flex overflow-scroll">
					{[1, 2, 3, 4, 5].map(() => {
						return (
							<ButtonOrLink
								intent="tertiary"
								size="small"
								className="hover:bg-white"
							>
								15min
							</ButtonOrLink>
						);
					})}
				</div>
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
		</div>
	);
}
