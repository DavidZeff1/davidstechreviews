import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/DavidZeff1",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/david-zeff-computerscience141592/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:dpzeff@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t mt-12 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Site info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {`David's Tech Reviews`}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Honest reviews for students & professionals
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/disclaimer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Disclaimer
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
            >
              Privacy
            </Link>
          </div>
        </div>

        {/* Bottom: Affiliate disclosure and copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-2">
            <p>
              <strong>Affiliate Disclosure:</strong> As an Amazon Associate, I
              earn from qualifying purchases. This site may contain affiliate
              links.
            </p>
            <p>
              © {new Date().getFullYear()} David Zeff • Built with passion for
              tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
