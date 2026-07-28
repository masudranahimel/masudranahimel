import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const technologies = ["Next.js", "TypeScript", "Tailwind CSS"];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative pb-12 pt-20 sm:pb-16 sm:pt-24 xl:pb-20 xl:pt-28"
    >
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Building through practice."
          description="Projects where I apply what I'm learning, solve practical problems, and develop stronger engineering habits."
        />

        <div className="mt-16 border-t border-white/10 sm:mt-20">
          {/* Project */}
          <article className="grid gap-12 py-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-16">
            {/* Project Meta */}
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  Featured
                </span>

                <span aria-hidden="true" className="h-px w-10 bg-white/10" />

                <span className="text-xs text-zinc-700">01</span>
              </div>

              <h3 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Personal Portfolio
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
                A personal portfolio built to apply modern web development
                concepts through a real project, with an emphasis on responsive
                design, reusable components, maintainable code, and performance.
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-10 flex items-center gap-3">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-400" />
                </span>

                <span className="text-sm text-zinc-500">In development</span>
              </div>
            </div>

            {/* Preview */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
              />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
                {/* Browser Bar */}
                <div className="flex h-11 items-center border-b border-white/10 px-4">
                  <div aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>

                  <div className="mx-auto text-[10px] tracking-wide text-zinc-700 sm:text-xs">
                    masudranahimel.com
                  </div>
                </div>

                {/* Website Preview */}
                <div className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden px-6 py-14 text-center sm:min-h-[360px]">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]"
                  />

                  <p className="relative text-[9px] font-semibold uppercase tracking-[0.4em] text-zinc-600 sm:text-xs">
                    Aspiring Software Engineer
                  </p>

                  <h4 className="relative mt-5 bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-3xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl">
                    Masud Rana Himel
                  </h4>

                  <p className="relative mt-5 max-w-md text-xs leading-6 text-zinc-600 sm:text-sm">
                    Building modern web experiences with clean code, thoughtful
                    design, and a growing focus on software engineering.
                  </p>

                  <div aria-hidden="true" className="relative mt-7 flex gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-black sm:text-xs">
                      View Projects
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] text-zinc-500 sm:text-xs">
                      Contact Me
                    </span>
                  </div>
                </div>
              </div>

              {/* Preview Caption */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-zinc-600">Portfolio website</span>

                <span className="text-xs text-zinc-700">2026</span>
              </div>
            </div>
          </article>
        </div>

        {/* Next Project */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Next
              </p>

              <p className="mt-3 text-lg font-medium text-zinc-400">
                More projects coming as I continue building.
              </p>
            </div>

            <span className="text-sm text-zinc-700">02 —</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
