import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-gray-100"
        >
          David&apos;s Tech Reviews
        </Link>

        {/* Nav links */}
        <div className="space-x-6 text-sm font-medium">
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
        </div>
      </nav>
    </header>
  );
}
