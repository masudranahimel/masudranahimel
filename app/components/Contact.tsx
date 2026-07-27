import Container from "./ui/Container";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-16 text-center sm:rounded-[2rem] sm:px-12 sm:py-24">
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[130px]"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              Contact
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:mt-6 sm:text-5xl md:text-6xl">
              Have something in mind?
              <span className="block text-zinc-500">Let&apos;s connect.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">
              I&apos;m open to connecting, learning from other developers and
              discussing future software engineering opportunities.
            </p>

            <div className="mx-auto mt-9 flex max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href="mailto:masudranahimel.info@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
              >
                Send an Email
              </a>

              <a
                href="#home"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Back to Top
              </a>
            </div>

            <p className="mt-8 break-all text-xs text-zinc-600 sm:mt-10 sm:text-sm">
              masudranahimel.info@gmail.com
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
