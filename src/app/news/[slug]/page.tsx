import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllNewsPosts, getNewsPostBySlug } from "@/lib/data/news";
import NewsCoverImage from "@/components/NewsCoverImage";

export function generateStaticParams() {
  return getAllNewsPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.teccipark.com/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const markdownComponents: Components = {
  p: ({ ...props }) => (
    <p className="mb-6 text-base leading-relaxed text-navy/80 md:text-lg" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-navy" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-navy" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 marker:text-purple" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 marker:text-purple" {...props} />
  ),
  a: ({ ...props }) => <a className="text-purple underline hover:text-navy" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote className="my-6 border-l-4 border-purple/30 pl-6 italic text-navy/70" {...props} />
  ),
  code: ({ ...props }) => (
    <code className="rounded bg-navy/5 px-2 py-0.5 font-mono text-sm text-navy" {...props} />
  ),
  strong: ({ ...props }) => <strong className="font-semibold text-navy" {...props} />,
  img: ({ ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-8 rounded-xl" {...props} alt={props.alt ?? ""} />
  ),
};

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) notFound();

  const related = getAllNewsPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author || "TECCI Park" },
    publisher: {
      "@type": "Organization",
      name: "TECCI Park",
      logo: { "@type": "ImageObject", url: "https://www.teccipark.com/images/tecci-logo.png" },
    },
    image: post.cover ? `https://www.teccipark.com${post.cover}` : undefined,
    description: post.excerpt,
    mainEntityOfPage: `https://www.teccipark.com/news/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl px-6 pt-36 pb-20 md:pb-28">
        <Link href="/news" className="text-sm text-navy/60 transition-colors hover:text-purple">
          &larr; Back to News
        </Link>

        {post.cover && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
            <NewsCoverImage src={post.cover} alt={post.title} />
          </div>
        )}

        <div className="mt-8">
          <p className="text-sm uppercase tracking-widest text-emerald-600">
            {formatDate(post.date)}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-navy md:text-5xl">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-4 text-sm text-navy/60">
              By {post.author} &middot; {formatDate(post.date)}
            </p>
          )}
        </div>

        <div className="mt-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <div className="h-px w-full bg-navy/10" />
            <h2 className="mt-8 text-lg font-semibold text-navy">Continue reading</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/news/${p.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <NewsCoverImage src={p.cover} alt={p.title} />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-widest text-emerald-600">
                    {formatDate(p.date)}
                  </p>
                  <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-navy transition-colors group-hover:text-purple">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
