import Image from "next/image";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]"
      />

      <Container className="flex min-h-screen items-center justify-center">
        <section className="flex w-full max-w-5xl flex-col items-center px-0 pb-20 pt-32 text-center md:pb-24 md:pt-36">
          {/* Eyebrow */}
          <p className="hero-reveal text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500 sm:text-sm">
            Software Engineer
          </p>

          {/* Name */}
          <h1 className="hero-reveal hero-delay-1 mt-6 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-5xl font-semibold tracking-[-0.05em] text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            Masud Rana Himel
          </h1>

          {/* Description */}
          <p className="hero-reveal hero-delay-2 mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
            Building fast, modern and thoughtfully crafted web experiences with
            clean engineering, thoughtful design and attention to performance.
          </p>

          {/* CTA */}
          <div className="hero-reveal hero-delay-3 mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#projects">View Projects</Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          {/* Portrait */}
          <div className="hero-reveal hero-delay-4 relative mt-16 sm:mt-20">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-blue-400/20 blur-3xl"
            />

            <div className="relative rounded-full border border-white/10 bg-white/5 p-1.5 shadow-2xl shadow-black/50">
              <Image
                src="/masudranahimel.jpg"
                alt="Portrait of Masud Rana Himel"
                width={320}
                height={320}
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                className="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64 md:h-80 md:w-80"
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="hero-reveal hero-delay-4 mt-14 flex flex-col items-center gap-3 text-zinc-500 transition-colors hover:text-white"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
              Explore
            </span>

            <span className="flex h-10 w-6 justify-center rounded-full border border-white/20">
              <span className="mt-2 h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
            </span>
          </a>
        </section>
      </Container>
    </main>
  );
}
