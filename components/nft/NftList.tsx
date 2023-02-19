import React from "react";
import Nft, { NftProps } from "./Nft";

export default function NftList({ data }: { data: NftProps[] }) {
	return (
		<div className="py-4">
			{data.map((nft: NftProps, id) => {
				return <Nft id={id + 1} key={id} {...nft} />;
			})}
		</div>
	);
}
