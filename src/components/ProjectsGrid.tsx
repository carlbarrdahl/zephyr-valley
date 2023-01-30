import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { useMouseHovered } from "react-use";
import { Image } from "components/Image";
import { Project, projects } from "data/projects";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
  hidden: { opacity: 0, y: 0 },
};

export const ProjectsGrid = () => (
  <div className="grid gap-12 sm:grid-cols-2">
    {projects
      .filter((p) => p.tags.includes("project"))
      .map((project, i) => (
        <ProjectCard key={i} custom={i} project={project} />
      ))}
  </div>
);

const ProjectCard = ({
  custom,
  project,
}: {
  custom: number;
  project: Project;
}) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const m = useMouseHovered(ref, { bound: true });

  return (
    <motion.div
      custom={custom}
      variants={variants}
      initial="hidden"
      className="group cursor-pointer text-xl text-stone-500 sm:text-xl "
      animate="visible"
    >
      <div className="mb-4 flex aspect-video overflow-hidden rounded-xl border-4 bg-stone-200 transition-colors group-hover:border-emerald-500">
        <Image
          ref={ref}
          className="object-cover object-top transition-[object-position] duration-700 hover:transition-none"
          src={project.images[0] as string}
          width={640}
          height={320}
          alt={project.title}
          style={{
            objectPosition: hover ? `0 ${(m.elY / m.elH) * 100}%` : "top",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <span className="font-bold text-stone-900">{project.title}.</span>{" "}
      {project.tagline}
    </motion.div>
  );
};
