import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      url: `https://davidstechreviews.vercel.app/posts/${filename.replace(
        /\.mdx?$/,
        ""
      )}`,
      lastModified: data.date || new Date().toISOString(),
    };
  });

  return [
    {
      url: "https://davidstechreviews.vercel.app",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://davidstechreviews.vercel.app/reviews",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://davidstechreviews.vercel.app/disclaimer",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://davidstechreviews.vercel.app/privacy-policy",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://davidstechreviews.vercel.app/contact",
      lastModified: new Date().toISOString(),
    },
    ...posts,
  ];
}
