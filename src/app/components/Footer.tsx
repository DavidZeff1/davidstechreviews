import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-6 text-center text-sm text-gray-500">
      <p>
        <strong>Affiliate Disclosure:</strong> As an Amazon Associate, I earn
        from qualifying purchases. This site may contain affiliate links.
      </p>
      <p className="mt-2">
        <Link href="/disclaimer" className="underline hover:text-gray-700">
          Read full Disclaimer
        </Link>
      </p>
    </footer>
  );
}
