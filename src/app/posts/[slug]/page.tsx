import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types"; // ✅ brings correct type for components

// Define your custom MDX components with proper typing
const components: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold mb-4" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
  // add more overrides if you want
};

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "content/posts");
  const filePath = path.join(postsDir, `${slug}.mdx`);

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{data.date}</p>

      <article className="prose prose-lg">
        <MDXRemote source={content} components={components} />
      </article>
    </main>
  );
}
