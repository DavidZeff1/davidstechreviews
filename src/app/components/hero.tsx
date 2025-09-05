import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* animated gradient background */}
      <div className="absolute inset-0 -z-20 hero-animated-bg" />

      {/* subtle dotted grid overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "rgba(0,0,0,0.06)",
        }}
      />

      {/* soft floating blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-blue-300/40 hero-blob" />
      <div
        className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-fuchsia-300/30 hero-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        {/* Text */}
        <div>
          <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur dark:bg-black/40 dark:text-gray-200">
            David&apos;s Tech Reviews
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Honest reviews for students & professionals
          </h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Laptops, headphones, chairs, tablets — practical picks that won’t
            wreck your budget.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/reviews"
              className="rounded-xl bg-gray-900 px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Browse Reviews
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 px-5 py-3 text-gray-800 transition hover:bg-white/60 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Placeholder media panel (optional) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-gray-200/70 backdrop-blur-sm dark:ring-gray-800/60">
          <Image
            src="/images/hero.png" // or "/images/hero.gif"
            alt="Gadgets montage"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
