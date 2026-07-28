import Container from "./ui/Container";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/masudranahimel",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/masudranahimel/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 sm:py-16 lg:py-16 xl:py-20">
      <Container>
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-5xl xl:text-6xl">
            Let&apos;s connect.
            <span className="block text-zinc-500">
              I&apos;m always open to learning.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I&apos;m interested in connecting with developers, discussing
            technology, sharing ideas, and learning from people building
            meaningful software.
          </p>
        </div>

        {/* Email */}
        <div className="mt-10 border-y border-white/10 sm:mt-12 xl:mt-16">
          <a
            href="mailto:masudranahimel.info@gmail.com"
            className="group flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:py-9 xl:py-12"
          >
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Email
              </p>

              <p className="mt-3 break-all text-xl font-medium tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white sm:text-2xl xl:text-3xl">
                masudranahimel.info@gmail.com
              </p>
            </div>

            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black"
            >
              ↗
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Elsewhere
          </p>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Based in Bangladesh.</p>

          <a
            href="#home"
            className="w-fit transition-colors duration-300 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </section>
  );
}
