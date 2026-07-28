import { SiHtml5, SiCss, SiJavascript, SiGit, SiGithub } from "react-icons/si";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const foundations = [
  {
    name: "HTML",
    icon: SiHtml5,
    description:
      "Writing semantic, accessible structure for modern web interfaces.",
  },
  {
    name: "CSS",
    icon: SiCss,
    description:
      "Building responsive layouts and developing a strong understanding of visual styling.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description:
      "Using core programming concepts to add logic, interaction, and behavior to web applications.",
  },
];

const workflow = [
  {
    name: "Git",
    icon: SiGit,
    description:
      "Using version control to track changes, organize development, and maintain project history.",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description:
      "Hosting repositories, managing source code, and sharing projects through a structured workflow.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 md:py-36 lg:py-40">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Building the foundation."
          description="The core technologies and development tools I'm currently using while strengthening my web development fundamentals."
        />

        <div className="mt-16 md:mt-20">
          {/* Core */}
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
                Core
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                Web foundation
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-zinc-500">
                Technologies I&apos;m learning to understand how modern web
                interfaces are structured, styled, and programmed.
              </p>
            </div>

            <div className="border-t border-white/10">
              {foundations.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <Icon
                        aria-hidden="true"
                        className="text-2xl text-zinc-400 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold tracking-[-0.02em] text-white">
                        {skill.name}
                      </h4>

                      <p className="mt-2 max-w-xl leading-7 text-zinc-500">
                        {skill.description}
                      </p>
                    </div>

                    <span className="hidden text-sm font-medium tabular-nums text-zinc-700 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workflow */}
          <div className="mt-20 grid gap-10 md:mt-24 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
                Workflow
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                Development tools
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-zinc-500">
                Tools I use to manage source code and maintain a structured
                development workflow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-7"
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-2xl text-zinc-400 transition-colors duration-300 group-hover:text-white"
                    />

                    <h4 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white">
                      {skill.name}
                    </h4>

                    <p className="mt-3 leading-7 text-zinc-500">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Status */}
          <div className="mt-16 flex items-center gap-3 border-t border-white/10 pt-8 text-sm text-zinc-500">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-400" />
            </span>
            Learning continuously. Expanding deliberately.
          </div>
        </div>
      </Container>
    </section>
  );
}
