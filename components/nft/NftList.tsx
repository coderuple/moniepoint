import React from "react";
import Nft, { NftProps } from "./Nft";

export default function NftList({ data }: { data: NftProps[] }) {
	return (
		<div>
			{data.map((nft: NftProps, id) => {
				return <Nft key={id} {...nft} />;
			})}
		</div>
	);
}
