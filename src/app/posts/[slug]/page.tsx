import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

interface PostProps {
  params: { slug: string };
}

// ✅ Generate SEO metadata dynamically from frontmatter
export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const postsDir = path.join(process.cwd(), "content/posts");
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title || "David's Tech Reviews",
    description:
      data.description || `Read ${data.title} on David's Tech Reviews.`,
    openGraph: {
      title: data.title,
      description:
        data.description || `Read ${data.title} on David's Tech Reviews.`,
      url: `https://davidstechreviews.vercel.app/posts/${params.slug}`,
      siteName: "David's Tech Reviews",
      images: [
        {
          url: "/og-image.png", // fallback image
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description:
        data.description || `Read ${data.title} on David's Tech Reviews.`,
      images: ["/og-image.png"],
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
