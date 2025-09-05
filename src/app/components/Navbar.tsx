"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SmoothLink from "./SmoothLink"; // Import your SmoothLink component

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close menu on route change
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-shadow",
        "backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-black/40",
        "bg-white/90 dark:bg-black/60", // fallback if no backdrop support
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <SmoothLink href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="David's Tech Reviews logo"
            width={150}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="sr-only">David&apos;s Tech Reviews</span>
        </SmoothLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map(({ href, label }) => (
            <SmoothLink
              key={href}
              href={href}
              className={[
                "text-sm font-medium transition-colors hover:scale-105 transform duration-200",
                "hover:text-blue-600",
                isActive(href)
                  ? "text-blue-600"
                  : "text-gray-700 dark:text-gray-300",
              ].join(" ")}
            >
              {label}
            </SmoothLink>
          ))}
          <SmoothLink
            href="/reviews"
            className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:scale-105 transform duration-200 dark:bg-white dark:text-black"
          >
            Browse Reviews
          </SmoothLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden transition-transform hover:scale-105"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={[
                "block h-0.5 w-5 bg-current transition-all duration-300",
                open ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-current transition-all duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-current transition-all duration-300",
                open ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={[
          "md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4">
          {LINKS.map(({ href, label }) => (
            <SmoothLink
              key={href}
              href={href}
              className={[
                "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105 transform",
                isActive(href)
                  ? "text-blue-600"
                  : "text-gray-800 dark:text-gray-200",
              ].join(" ")}
            >
              {label}
            </SmoothLink>
          ))}
          <SmoothLink
            href="/reviews"
            className="mt-2 rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 transform dark:bg-white dark:text-black"
          >
            Browse Reviews
          </SmoothLink>
        </div>
      </div>

      {/* subtle gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </header>
  );
}
