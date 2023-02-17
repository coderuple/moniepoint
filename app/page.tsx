import CoinList from "@/components/coin/CoinList";
import Nft from "@/components/nft/Nft";

import coins from "../data/coins";

export default function Home() {
	return (
		<div>
			<CoinList data={coins} />
			<Nft
				price={0.41}
				name="Infnity"
				crypto="Bitcoin"
				owner={{ username: "lotanna" }}
			/>
		</div>
	);
}
