import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import addIcon from "../../images/svgs/add.svg";

export default function Header() {
	return (
		<div className="px-4 py-6 flex justify-between items-middle ">
			<div>
				<div className="text-base text-gray-500 "> your balance </div>
				<h1 className="text-white text-4xl">$1234.56</h1>
			</div>

			<div>
				<Button intent="white">
					<Image src={addIcon} alt="I" />
				</Button>
			</div>
		</div>
	);
}
