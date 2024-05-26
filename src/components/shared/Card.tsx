import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
	title: string;
	description: string;
	image: string;
	link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
	return (
		<>
			<div className="w-full h-full flex space-x-4">
				<div className="w-1/2">
					<Image
						src={`/images/${image}`}
						alt="jordans"
						height="400"
						width="400"
						className="object-contain w-full h-full rounded-xl"
					/>
				</div>
				<div className="w-1/2 flex flex-col items-start ">
					<h1 className=" text-neutral-100 dark:text-neutral-400 pb-4 text-2xl font-medium tracking-tighter">
						{title}
					</h1>

					<p className="text-sm text-neutral-200 dark:text-neutral-400">
						{description}
					</p>
					<Link
						href={link}
						className="inline-flex items-center py-2 text-sm font-medium text-center text-inherit"
					>
						Read more
						<svg
							className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</div>
			</div>
			<hr className="my-6 border-neutral-500 dark:border-neutral-800" />
		</>
	);
};

export default Card;
