import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="David's Tech Reviews logo"
            width={200} // tweak size as you like
            height={80}
            className="h-15 w-auto dark:invert"
          />
        </Link>

        {/* Nav links */}
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/reviews" className="hover:underline">
            Reviews
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
        </div>
      </nav>
    </header>
  );
}
