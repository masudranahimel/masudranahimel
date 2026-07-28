import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function About() {
  const principles = [
    {
      number: "01",
      title: "Build to understand",
      description:
        "Turning concepts into working projects to understand not only what works, but why it works.",
    },
    {
      number: "02",
      title: "Engineer for clarity",
      description:
        "Writing structured, maintainable code and making deliberate technical decisions instead of adding unnecessary complexity.",
    },
    {
      number: "03",
      title: "Improve continuously",
      description:
        "Strengthening fundamentals, learning from each project, and gradually taking on more challenging engineering problems.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28 md:py-36 lg:py-40">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="Learning by building."
          description="Developing the technical foundation, problem-solving skills, and engineering mindset required to build reliable software."
        />

        <div className="mt-16 grid gap-16 md:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
              My approach
            </p>

            <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              Building the fundamentals before chasing complexity.
            </h3>

            <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              <p>
                I&apos;m Masud Rana Himel, a developer from Bangladesh learning
                software engineering by building projects, understanding how
                systems work, and turning that knowledge into practical
                experience.
              </p>

              <p>
                My current work centers on modern web development while I
                strengthen the broader foundations of software engineering. I
                care about readable code, maintainable architecture,
                performance, and interfaces that feel intentional.
              </p>

              <p>
                With each project, I&apos;m working toward more complex
                problems, stronger technical decisions, and software that is
                useful, reliable, and built with purpose.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-12">
            <div className="divide-y divide-white/10">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`py-8 ${index === 0 ? "lg:pt-0" : ""}`}
                >
                  <span className="text-sm font-medium tabular-nums text-zinc-600">
                    {principle.number}
                  </span>

                  <h4 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                    {principle.title}
                  </h4>

                  <p className="mt-3 max-w-md leading-7 text-zinc-400">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
