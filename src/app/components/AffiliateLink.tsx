import Link from "next/link";

interface AffiliateLinkProps {
  asin: string; // Amazon product ASIN
  children: React.ReactNode;
}

export default function AffiliateLink({ asin, children }: AffiliateLinkProps) {
  const trackingId = "davidstechrev-20"; // your Amazon Associates ID
  const url = `https://www.amazon.com/dp/${asin}?tag=${trackingId}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 opacity-70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6h8m0 0v8m0-8L9 15"
        />
      </svg>
    </Link>
  );
}
