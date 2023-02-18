import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Add from "../../images/svgs/add.svg";

export default function Header() {
	return (
		<div className="px-4 py-6 flex justify-between items-middle ">
			<div>
				<div className="text-base text-gray-500 "> your balance </div>
				<h1 className="text-white text-4xl">$1234.56</h1>
			</div>

			<div>
				<Button intent="white">
					<Add className="h-6 w-6 text-center flex justify-center items-center" />
				</Button>
			</div>
		</div>
	);
}
