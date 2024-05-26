import Link from "next/link";

import { Bento } from "./Bento";
import { HeroWords } from "./HeroWord";

const Hero = () => {
	return (
		<div>
			<HeroWords/>
			<p className="prose prose-neutral dark:prose-invert">
				{`I'm a frontend developer, optimist, and community builder. I currently `}
				<Link href="/work">work</Link>
				{` as the VP of Product at `}
				{`, where I help teach the `}
				Next.js
				{` community, an open-source web framework built with `}
			</p>
			
			
			<Bento/>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I create educational content for developers, teaching them
					about web development, JavaScript and TypeScript, React and
					Next.js, and more. This comes in all forms: blog posts,
					videos, tweets, conference talks, and workshops. You can
					watch some of my favorites below.
				</p>
			</div>
		</div>
	);
};

export default Hero;
