"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoading } from "./LoadingProvider";
import { ComponentProps, MouseEvent } from "react";

interface SmoothLinkProps extends ComponentProps<typeof Link> {
  href: string;
  delay?: number; // Optional delay before navigation
}

export default function SmoothLink({
  href,
  children,
  delay = 100,
  onClick,
  ...props
}: SmoothLinkProps) {
  const router = useRouter();
  const { setLoading } = useLoading();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Don't intercept if it's an external link or has modifiers
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    // Prevent default navigation
    e.preventDefault();

    // Start loading
    setLoading(true);

    // Navigate after a small delay for smoother UX
    setTimeout(() => {
      router.push(href);
    }, delay);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
