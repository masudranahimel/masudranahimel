import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="Learning by building."
          description="Developing the technical foundation, problem-solving skills, and engineering mindset required to build reliable software."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Introduction */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
              My approach
            </p>

            <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              Building the fundamentals before chasing complexity.
            </h3>

            <div className="mt-8 max-w-2xl space-y-6 text-lg leading-9 text-zinc-400">
              <p>
                I&apos;m Masud Rana Himel, an aspiring Software Engineer from
                Bangladesh. I learn by building projects, understanding how
                things work, and turning that knowledge into practical
                experience.
              </p>

              <p>
                My current work centers on web development while I strengthen
                the broader foundations of software engineering. I care about
                readable code, maintainable architecture, performance, and
                creating interfaces that feel intentional.
              </p>

              <p>
                The goal is simple: keep improving, build more capable software,
                and develop the engineering judgment needed to solve real
                problems well.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-12">
            <div className="divide-y divide-white/10">
              <div className="py-8 lg:pt-0">
                <span className="text-sm font-medium text-zinc-600">01</span>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Build to understand
                </h4>

                <p className="mt-3 leading-7 text-zinc-400">
                  Turning concepts into working projects to understand not only
                  what works, but why it works.
                </p>
              </div>

              <div className="py-8">
                <span className="text-sm font-medium text-zinc-600">02</span>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Engineer for clarity
                </h4>

                <p className="mt-3 leading-7 text-zinc-400">
                  Writing structured, maintainable code and making deliberate
                  technical decisions instead of adding unnecessary complexity.
                </p>
              </div>

              <div className="py-8">
                <span className="text-sm font-medium text-zinc-600">03</span>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Improve continuously
                </h4>

                <p className="mt-3 leading-7 text-zinc-400">
                  Strengthening fundamentals, learning from each project, and
                  gradually taking on more challenging engineering problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
