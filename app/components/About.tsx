import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="Engineering with purpose and precision."
          description="I'm passionate about building modern web applications with clean code, thoughtful design and continuous learning."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              Building a strong foundation in modern software engineering.
            </h3>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              I'm Masud Rana Himel, an aspiring Software Engineer from
              Bangladesh. My goal is to master modern web technologies and build
              high-quality digital products that are fast, scalable and
              user-friendly.
            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              Every project I build is an opportunity to improve my problem
              solving, engineering practices and design skills while following
              industry standards.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Focus
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                Frontend Development
              </h4>

              <p className="mt-3 leading-8 text-zinc-400">
                Building responsive, accessible and beautiful user interfaces
                using modern web technologies.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Learning
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                Modern JavaScript Ecosystem
              </h4>

              <p className="mt-3 leading-8 text-zinc-400">
                Continuously improving my knowledge through projects, practice
                and real-world development workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Goal
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                Become a Professional Software Engineer
              </h4>

              <p className="mt-3 leading-8 text-zinc-400">
                Creating high-quality applications and preparing for software
                engineering opportunities in international companies.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
