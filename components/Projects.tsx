import { projects } from "@/data/projects";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // Featured projects first, original order otherwise.
  const ordered = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Projects"
        description="School and personal projects. Most cards link to the code on GitHub."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {ordered.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
