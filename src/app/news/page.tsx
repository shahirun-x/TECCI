import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllNewsPosts } from "@/lib/data/news";
import NewsCoverImage from "@/components/NewsCoverImage";

export const metadata: Metadata = {
  title: { absolute: "News & Updates — TECCI Park" },
  description:
    "Latest announcements, tenant news, and sustainability updates from TECCI Park — Chennai's LEED Silver certified Grade A IT park on OMR.",
  alternates: { canonical: "https://www.teccipark.com/news" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const posts = getAllNewsPosts();

  return (
    <section className="bg-white pt-36 pb-20 md:pb-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-teal">
            News &amp; Updates
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
            The latest from TECCI Park.
          </h1>
          <p className="mt-4 text-base text-navy/70">
            Announcements, milestones, and updates from Chennai&rsquo;s premier LEED Silver
            certified IT park.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-16 text-center text-navy/50">No news yet. Check back soon.</p>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="group block">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <NewsCoverImage src={post.cover} alt={post.title} />
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-emerald-600">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 line-clamp-2 text-xl font-semibold text-navy transition-colors group-hover:text-purple">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-navy/60">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
