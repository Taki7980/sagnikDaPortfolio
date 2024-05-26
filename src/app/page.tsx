import Hero from "@/components/shared/Hero";
import ProjectLinks from "@/components/shared/ProjectLinks";
import ArrowIcon from "@/components/ui/Arrow";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<section>
			<Hero/>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					Over the past decade, I&apos;ve written content on my blog and
					newsletter. I try to keep things simple. You&apos;ll find writing
					about technologies I&apos;m interested in at the time, or how I&apos;m
					learning and growing in my career, sharing knowledge along
					the way.
				</p>
			</div>
			<div className="my-8 flex w-full flex-col space-y-4">
				<ProjectLinks
					name="What Makes A Great Developer Experience?"
					slug="developer-experience"
				/>
				<ProjectLinks name="What is Developer Relations?" slug="devrel" />
				<ProjectLinks name="The Story of Heroku" slug="heroku" />
			</div>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I invest small angel checks into early stage startups
					building tools for developers.
				</p>
			</div>
			<div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
				<div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
					<a href="https://linear.app">
						<svg
							width="78"
							height="20"
							role="img"
							aria-label="Linear logo"
						>
							<use href="/sprite.svg#linear" />
						</svg>
					</a>
				</div>
				<div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
					<a href="https://supabase.com">
						<svg
							width="100"
							height="19"
							role="img"
							aria-label="Supabase logo"
						>
							<use href="/sprite.svg#supabase" />
						</svg>
					</a>
				</div>
				<div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
					<a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
						<svg
							width="96"
							height="19"
							role="img"
							aria-label="Makeswift logo"
						>
							<use href="/sprite.svg#makeswift" />
						</svg>
					</a>
				</div>
				<div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
					<a href="https://resend.com">
						<svg
							width="70"
							height="17"
							role="img"
							aria-label="Resend logo"
						>
							<use href="/sprite.svg#resend" />
						</svg>
					</a>
				</div>
				<div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
					<a href="https://bun.sh">
						<svg
							width="35"
							height="27"
							role="img"
							aria-label="Bun logo"
						>
							<use href="/sprite.svg#bun" />
						</svg>
					</a>
				</div>
			</div>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I&apos;ve worked with and advised companies on{" "}
					<Link href="/blog/developer-marketing">
						developer marketing
					</Link>
					, <Link href="/blog/devrel">developer relations</Link>,
					building open-source communities, product-led growth, and
					more.
				</p>
			</div>
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/leeerob"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">follow me</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://leerob.substack.com"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">get email updates</p>
					</a>
				</li>
			</ul>
		</section>
	);
}
