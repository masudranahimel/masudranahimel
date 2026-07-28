import Container from "./ui/Container";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <Container>
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Open to conversations
            <span className="block text-zinc-500">and opportunities.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m open to connecting with developers, discussing projects,
            and exploring future opportunities in software engineering.
          </p>
        </div>

        {/* Contact Row */}
        <div className="mt-16 border-y border-white/10 sm:mt-20">
          <a
            href="mailto:masudranahimel.info@gmail.com"
            className="group flex flex-col gap-6 py-10 transition-colors sm:flex-row sm:items-center sm:justify-between sm:py-12"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Email
              </p>

              <p className="mt-3 break-all text-xl font-medium tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white sm:text-2xl md:text-3xl">
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

        {/* Footer Note */}
        <div className="flex flex-col gap-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
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
