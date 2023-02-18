import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
const button = cva(
	"group inline-flex items-center justify-center cursor-pointer rounded-2xl  text-lg font-light focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 font-normal",
	{
		variants: {
			intent: {
				primary: [
					"bg-brand",
					"text-brand-tertiary",
					"border-transparent",
					"bg-brand",
					"hover:bg-brand-light",
				],

				secondary: [
					"bg-brand-secondary",
					"text-white",
					"border-transparent",
					"hover:bg-secondary-light",
				],

				tertiary: [
					"bg-brand-tertiary",
					"text-white",
					"border-transparent",
					"hover:bg-brand",
					"hover:text-brand-tertiary",
				],
				white: [
					"bg-white",
					"text-secondary",
					"border-transparent",
					"hover:opacity-70",
				],

				link: ["bg-transparent", "", "text-brand"],
			},
			size: {
				small: ["text-sm", "py-2", "px-4", "rounded-[12px]"],
				medium: ["text-base", "py-4", "px-6"],
				large: ["text-xl", "py-4", "px-8"],
			},
			fullWidth: {
				true: "w-full",
			},
			nospace: {
				true: ["px-0", "py-0", "pr-0", "pl-0", "pt-0", "pb-0"],
			},
		},
		compoundVariants: [{ intent: "primary", size: "medium" }],
		defaultVariants: {
			intent: "primary",
			size: "medium",
		},
	}
);

export interface ButtonOrLinkProps
	extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
		VariantProps<typeof button> {
	href?: string;
	className?: string;
	children?: JSX.Element | string;
	text?: string | JSX.Element;
	left?: string | JSX.Element;
	right?: string | JSX.Element;
}

const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({
	className,
	intent,
	nospace,
	size,
	children,
	text,
	fullWidth,
	left,
	right,
	href,
	...props
}) => {
	if (href) {
		return (
			<Link
				href={href}
				className={button({ nospace, intent, size, fullWidth, className })}
				{...props}
			>
				{left && <span className="pr-3">{left}</span>}
				{text && text}
				{children && children}
				{right && <span className="pl-3">{right}</span>}
			</Link>
		);
	}
	return (
		<button
			className={button({ className, intent, size, fullWidth, nospace })}
			{...props}
		>
			{left && <span className="pr-3">{left}</span>}
			{text && text}
			{children && children}
			{right && <span className="pl-3 ">{right}</span>}
		</button>
	);
};

export default ButtonOrLink;
