export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4">
        Have questions, suggestions, or partnership inquiries? I’d love to hear
        from you!
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Email</h2>
      <p className="mb-4">
        You can reach me at:{" "}
        <a href="mailto:contact@davidstechreviews.com" className="underline">
          contact@davidstechreviews.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Social Media</h2>
      <p className="mb-4">
        (Optional — add your Twitter, LinkedIn, or other links here if you want
        to connect.)
      </p>
    </main>
  );
}
