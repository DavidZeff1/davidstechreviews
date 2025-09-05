export const dynamic = "force-static";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Hero from "../app/components/hero";
import SmoothLink from "../app/components/SmoothLink"; // Add this import

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
}

export default function Home() {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  const posts: PostMeta[] = files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);

      // simple excerpt fallback from content
      const excerpt =
        (data.description as string) ||
        content
          .replace(/[#>*_\-\[\]\(\)`]/g, " ")
          .slice(0, 140)
          .trim() + "…";

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: data.title as string,
        date: data.date as string,
        description: excerpt,
        image: (data.image as string) || "/images/hero.png",
      };
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <Hero />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold">Latest Reviews & Guides</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <SmoothLink
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="card-int group overflow-hidden rounded-2xl border ring-1 ring-gray-200/70 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 dark:ring-gray-800/60"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/images/hero.png"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width:1024px) 400px, 100vw"
                  priority={false}
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md dark:bg-black/60 dark:text-gray-200 dark:group-hover:bg-black/80">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                  {post.description}
                </p>
                <div className="mt-4">
                  <span className="cta text-blue-600 transition-all duration-300 group-hover:text-blue-700">
                    Read review
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="arrow translate-y-[1px] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h12M13 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </SmoothLink>
          ))}
        </div>
      </main>
    </>
  );
}
