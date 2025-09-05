import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

interface PostProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const postsDir = path.join(process.cwd(), "content/posts");
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  const title = data.title || "David's Tech Reviews";
  const description =
    data.description || `Read ${data.title} on David's Tech Reviews.`;
  const url = `https://davidstechreviews.vercel.app/posts/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "David's Tech Reviews",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    other: {
      // JSON-LD structured data
      "script:type=application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        author: {
          "@type": "Person",
          name: "David Zeff",
        },
        publisher: {
          "@type": "Organization",
          name: "David's Tech Reviews",
          logo: {
            "@type": "ImageObject",
            url: "https://davidstechreviews.vercel.app/og-image.png",
          },
        },
        url,
        datePublished: data.date,
        dateModified: data.date,
        image: ["https://davidstechreviews.vercel.app/og-image.png"],
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }),
    },
  };
}

export default async function PostPage({ params }: PostProps) {
  const postsDir = path.join(process.cwd(), "content/posts");
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{data.date}</p>

      <article className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>
    </main>
  );
}
