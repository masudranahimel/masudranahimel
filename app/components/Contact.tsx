import Container from "./ui/Container";

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
            Open to conversations
            <span className="block text-zinc-500">and opportunities.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I&apos;m open to connecting with developers, discussing projects,
            and exploring future opportunities in software engineering.
          </p>
        </div>

        {/* Contact Row */}
        <div className="mt-10 border-y border-white/10 sm:mt-12 lg:mt-12 xl:mt-16">
          <a
            href="mailto:masudranahimel.info@gmail.com"
            className="group flex flex-col gap-6 py-8 transition-colors sm:flex-row sm:items-center sm:justify-between lg:py-9 xl:py-12"
          >
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Email
              </p>

              <p className="mt-3 break-all text-xl font-medium tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white sm:text-2xl lg:text-2xl xl:text-3xl">
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
