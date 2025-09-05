import { Mail, Github, Linkedin, ExternalLink, Globe } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:dpzeff@gmail.com",
      icon: Mail,
      description: "Best way to reach me for partnerships or questions",
      color: "text-red-600 dark:text-red-400",
      hoverColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
    },
    {
      name: "GitHub",
      href: "https://github.com/DavidZeff1", // Replace with your actual GitHub
      icon: Github,
      description: "Check out my code and projects",
      color: "text-gray-900 dark:text-gray-100",
      hoverColor: "hover:bg-gray-50 dark:hover:bg-gray-800/50",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/david-zeff-computerscience141592/", // Replace with your actual LinkedIn
      icon: Linkedin,
      description: "Connect with me professionally",
      color: "text-blue-600 dark:text-blue-400",
      hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Portfolio",
      href: "https://davidstechreviews.vercel.app", // replace if different
      icon: Globe,
      description: "Projects, case studies, and resume",
      color: "text-emerald-600 dark:text-emerald-400",
      hoverColor: "hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative mx-auto mb-6 h-32 w-32">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-gray-900">
              <Image
                src="/profile-image.png"
                alt="Portrait of David Zeff"
                fill
                priority
                sizes="128px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {` Questions about reviews? Partnership inquiries? Or just want to chat
          about tech? I'd love to hear from you!`}
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="https://davidstechreviews.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2.5 font-medium shadow-sm hover:shadow-md hover:scale-[1.02] transition"
          >
            <Globe className="h-5 w-5" />
            View Portfolio
            <ExternalLink className="h-4 w-4 opacity-80" />
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* About Me Section */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              About Me
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {`Hi there! I'm `}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  David Zeff
                </span>
                , a Computer Science graduate with a passion for technology and
                web development. I specialize in fullstack development, creating
                everything from sleek user interfaces to robust backend systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {`When I'm not coding, you'll find me diving deep into the latest
                tech products, testing gadgets, and sharing honest reviews to
                help students and professionals make informed decisions about
                their tech purchases.`}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {`I believe technology should be accessible and understandable for
                everyone. That's why I focus on practical, real-world testing
                and clear, jargon-free explanations in all my reviews and
                guides.`}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">{`Let's Connect`}</h2>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");

            const LinkComponent = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { href: link.href };

            return (
              <LinkComponent
                key={link.name}
                {...linkProps}
                className={`group block p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 ${link.hoverColor} hover:shadow-md hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${link.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.name}
                      </h3>
                      {isExternal && (
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {link.description}
                    </p>
                    {link.name === "Email" && (
                      <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mt-2">
                        dpzeff@gmail.com
                      </p>
                    )}
                  </div>
                </div>
              </LinkComponent>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {`Have a Product You'd Like Me to Review?`}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {`I'm always interested in testing new gadgets, software, and tech products. 
            Whether you're a company looking for an honest review or just have a suggestion, 
            don't hesitate to reach out!`}
          </p>
          <a
            href="mailto:contact@dpzeff@gmail.com?subject=Product Review Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transform"
          >
            <Mail className="h-5 w-5" />
            Send Me an Email
          </a>
        </div>
      </div>
    </main>
  );
}
