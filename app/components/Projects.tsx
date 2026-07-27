import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const technologies = ["Next.js", "TypeScript", "Tailwind CSS"];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Building through practice."
          description="Projects where I apply what I'm learning and turn concepts into working web experiences."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] sm:mt-16 sm:rounded-[2rem]">
          {/* Project Preview */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-white/10 p-5 sm:min-h-[440px] sm:p-12">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]"
            />

            {/* Browser Mockup */}
            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-2xl shadow-black/50">
              {/* Browser Top Bar */}
              <div className="flex h-11 items-center border-b border-white/10 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <div className="mx-auto rounded-md bg-white/5 px-8 py-1 text-[10px] text-zinc-600 sm:px-16">
                  masudranahimel.com
                </div>
              </div>

              {/* Mock Website */}
              <div className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center sm:min-h-[330px]">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px]"
                />

                <p className="relative text-[9px] font-semibold uppercase tracking-[0.4em] text-zinc-600 sm:text-xs">
                  Software Engineer
                </p>

                <h3 className="relative mt-4 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  Masud Rana Himel
                </h3>

                <p className="relative mt-4 max-w-lg text-xs leading-6 text-zinc-600 sm:text-sm">
                  Building fast, modern and thoughtfully crafted web
                  experiences.
                </p>

                <div className="relative mt-6 flex gap-3">
                  <span className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-black sm:text-xs">
                    View Projects
                  </span>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] text-zinc-400 sm:text-xs">
                    Contact
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="grid gap-10 p-5 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
                  Featured Project
                </span>

                <span className="h-px w-10 bg-white/10" />

                <span className="text-xs text-zinc-600">01</span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Personal Portfolio
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                A personal portfolio built while learning modern web
                development, with a focus on responsive layouts, reusable
                components, clean visual design and performance.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="lg:text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Status
              </p>

              <div className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-400" />
                </span>
                In Development
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects */}
        <div className="mt-6 rounded-3xl border border-dashed border-white/10 px-5 py-8 text-center sm:mt-8 sm:px-8 sm:py-10">
          <p className="text-sm text-zinc-500">
            More projects will be added as I continue learning and building.
          </p>
        </div>
      </Container>
    </section>
  );
}
