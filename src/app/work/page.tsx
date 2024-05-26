import CardDetails from "@/CardDetails/Data";
import Card from "@/components/shared/Card";
import React from "react";

const page = () => {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">
				my work
			</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					On a mission to build products developers and along the way,
					teach the next generation of developers. Here&apos;s a
					summary of my work so far.
				</p>
				<hr className="my-6 border-neutral-500 dark:border-neutral-800" />

				<div className="containerBox">
					{CardDetails.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							description={item.description}
							image={item.image}
							link={item.link}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default page;
