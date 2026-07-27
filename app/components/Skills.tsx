import { SiHtml5, SiCss, SiJavascript, SiGit, SiGithub } from "react-icons/si";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const skills = [
  {
    name: "HTML5",
    icon: SiHtml5,
    description: "Structure",
  },
  {
    name: "CSS3",
    icon: SiCss,
    description: "Styling",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description: "Programming",
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Version Control",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description: "Code Collaboration",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I'm Learning"
          description="Building a strong foundation in modern web development, one technology at a time."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-6"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-xs font-medium text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="text-2xl text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        {/* Learning status */}
        <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-400" />
          </span>
          Continuously learning and expanding my stack.
        </div>
      </Container>
    </section>
  );
}
