import CoinList from "@/components/coin/CoinList";
import Nft from "@/components/nft/Nft";
import NftList from "@/components/nft/NftList";

import coins from "../data/coins";
import nfts from "../data/nfts";
export default function Home() {
	return (
		<div className="pt-32">
			<CoinList data={coins} />

			<NftList data={nfts} />
		</div>
	);
}
