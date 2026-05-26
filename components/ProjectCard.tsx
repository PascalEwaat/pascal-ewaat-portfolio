"use client";

import Link from "next/link";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  gradient: string;
  /** Drop a real image in /public/images/ and set this to "/images/your-file.jpg" */
  imageSrc?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

interface ProjectCardProps {
  project: Project;
}

const aspectMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

const CORNER_SIZE = 20; // px — length of each corner arm
const CORNER_OFFSET = 10; // px — gap between image edge and corner bracket

export default function ProjectCard({ project }: ProjectCardProps) {
  const aspect = aspectMap[project.aspectRatio ?? "portrait"];

  return (
    <Link
      href={`/works/${project.id}`}
      // hover:mx-[5px] pushes each adjacent card 5px away → 10px total between neighbours
      className="group relative flex-shrink-0 w-[169px] md:w-[191px] cursor-pointer hover:mx-[5px] transition-[margin] duration-300"
    >
      {/* ── Image wrapper (anchor for corner brackets) ── */}
      <div className="relative">
        {/* Image / Gradient placeholder */}
        <div
          className={`relative overflow-hidden ${aspect} transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
          style={project.imageSrc ? {} : { background: project.gradient }}
        >
          {project.imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
        </div>

        {/* ── Corner bracket outline — CORNER_OFFSET px outside image, corners only ── */}
        <div
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ inset: `-${CORNER_OFFSET}px` }}
        >
          {/* Top-left */}
          <div
            className="absolute top-0 left-0"
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderTop: "1.5px solid #545454",
              borderLeft: "1.5px solid #545454",
            }}
          />
          {/* Top-right */}
          <div
            className="absolute top-0 right-0"
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderTop: "1.5px solid #545454",
              borderRight: "1.5px solid #545454",
            }}
          />
          {/* Bottom-left */}
          <div
            className="absolute bottom-0 left-0"
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderBottom: "1.5px solid #545454",
              borderLeft: "1.5px solid #545454",
            }}
          />
          {/* Bottom-right */}
          <div
            className="absolute bottom-0 right-0"
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderBottom: "1.5px solid #545454",
              borderRight: "1.5px solid #545454",
            }}
          />
        </div>
      </div>

      {/* ── Card label — hidden by default, fades in on hover ── */}
      <div className="mt-3 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-sm font-semibold tracking-[0.08em] uppercase">
          {project.title}
        </h3>
        <p className="text-xs text-black/50 tracking-wide">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-widest uppercase border border-black/20 px-2 py-[2px] text-black/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
