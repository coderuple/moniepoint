"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const NftPrice = () => {};

type NftProps = {
	id?: number;
	name: string;
	price: number;
	crypto: string;
	expiryDate?: Date | string;
	owner?: {
		avatar?: string;
		username: string;
	};
};
export default function Nft({ id, price, crypto, name, owner }: NftProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const openClassNames = {
		container: "fixed w-full top-0",
		image: "bg-brand h-72 rounded-t-none rounded-b-xl cursor-pointer",
	};
	const closedClassNames = {
		container: "py-8",
		image: "bg-brand h-80  rounded-t-3xl rounded-b-xl cursor-pointer",
	};
	return (
		<div
			className={isOpen ? openClassNames.container : closedClassNames.container}
		>
			<div
				className={isOpen ? openClassNames.image : closedClassNames.image}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{isOpen && <Button onClick={() => {}}> Back</Button>}
			</div>

			{isOpen ? (
				<div className="py-4 space-y-4 ">
					<div className="px-4 space-y-3">
						<h2 className="text-white text-3xl">
							{name} {id && <span className="px-1">#{id}</span>}
						</h2>{" "}
						<div className="flex items-center justify-between ">
							<div className="flex flex-col space-y-2">
								{" "}
								<span className="text-xs text-gray-500"> creator</span>
								<div className="flex items-center space-x-1.5">
									{" "}
									<div className="w-8 h-8 rounded-full bg-brand-secondary"></div>
									{owner?.username && (
										<p className="text-white text-sm"> @{owner.username}</p>
									)}
								</div>
							</div>

							<Button
								intent="link"
								className="text-white border-brand-secondary-dark border"
							>
								u
							</Button>
						</div>
					</div>

					<div className="space-y-6">
						<div className="flex">
							<Button intent="tertiary" fullWidth>
								12:21:45
							</Button>
							<Button intent="tertiary" fullWidth>
								1.35
							</Button>
						</div>

						<div className="fixed bottom-0 w-full pb-3">
							{" "}
							<Button fullWidth> place a bid</Button>{" "}
						</div>
					</div>
				</div>
			) : (
				<div className="flex p-6 bg-brand-tertiary items-center justify-between rounded-t-xl rounded-b-3xl mt-1">
					<div
						className="text-white text-xl font-semibold
          "
					>
						{price}
					</div>

					<div className="text-gray-400">07 : 24 : 35</div>
				</div>
			)}
		</div>
	);
}
