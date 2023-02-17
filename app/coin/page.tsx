import HeaderCoin from "@/components/headers/HeaderCoin";
import ButtonOrLink from "@/components/ui/Button";
import React from "react";

export default function Coin() {
	return (
		<div
			className="fixed h-full top-0 w-full bg-brand-tertiary-dark 
        
        "
		>
			<HeaderCoin />

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

			<div className="fixed  flex w-full bottom-0">
				<ButtonOrLink intent="secondary" fullWidth>
					sell
				</ButtonOrLink>
				<ButtonOrLink fullWidth>buy</ButtonOrLink>
			</div>
		</div>
	);
}
