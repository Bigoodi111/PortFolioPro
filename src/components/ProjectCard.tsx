// src/components/ProjectCard.tsx
import Image from "next/image";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-200">{project.category}</p>
      </div>
    </div>
  );
}
