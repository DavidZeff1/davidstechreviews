import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface PostMeta {
  title: string;
  date: string;
  slug: string;
}

export default function ReviewsPage() {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  // Load posts and filter only "review-style" ones (heuristic: title includes "Best")
  const posts: PostMeta[] = files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: data.title as string,
        date: data.date as string,
      };
    })
    .filter((post) => post.title.toLowerCase().includes("best"));

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Product Reviews</h1>
      <p className="mb-6 text-gray-600">
        Our latest product roundups and recommendations.
      </p>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="p-4 border rounded-xl hover:bg-gray-50"
          >
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
