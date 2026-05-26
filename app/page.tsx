"use client";

import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard, { Project } from "@/components/ProjectCard";
import BarcodeScrollbar from "@/components/BarcodeScrollbar";

// ─── Project data (full list from pascalewaat.framer.website/Projects) ────────
// Swap imageSrc to "/images/your-file.jpg" once you have real project screenshots
const projects: Project[] = [
  {
    id: "lootverse",
    title: "Lootverse",
    subtitle: "Onboarding for a metaverse project",
    tags: ["UX", "Onboarding", "Web3"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    // Neon gaming / metaverse aesthetic
    imageSrc:
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=600&h=800&fit=crop&auto=format&q=80",
    aspectRatio: "portrait",
  },
  {
    id: "otayo",
    title: "Otayo",
    subtitle: "Mauritius' top ticketing platform mobile app",
    tags: ["Mobile", "UX/UI"],
    gradient: "linear-gradient(135deg, #f8841a 0%, #e8530a 60%, #c43b00 100%)",
    // Live event / concert crowd
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop&auto=format&q=80",
    aspectRatio: "landscape",
  },
  {
    id: "guideli",
    title: "Guideli",
    subtitle: "Immigration solution with AI petition drafting",
    tags: ["AI", "Product Design"],
    gradient: "linear-gradient(135deg, #0d7377 0%, #14a085 50%, #1dbc9c 100%)",
    // Abstract AI / tech
    imageSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=800&fit=crop&auto=format&q=80",
    aspectRatio: "portrait",
  },
  {
    id: "project30",
    title: "Project30",
    subtitle: "Habit tracking mobile application",
    tags: ["Mobile", "Health", "UX"],
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    // Productivity / journaling
    imageSrc:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=800&fit=crop&auto=format&q=80",
    aspectRatio: "portrait",
  },
  {
    id: "capacity-planner",
    title: "Capacity Planner",
    subtitle: "Agency tool for team capacity monitoring",
    tags: ["SaaS", "Dashboard", "UX"],
    gradient: "linear-gradient(135deg, #3a0ca3 0%, #4361ee 50%, #4cc9f0 100%)",
    // Team / planning workspace
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&auto=format&q=80",
    aspectRatio: "landscape",
  },
  {
    id: "finwit",
    title: "Finwit",
    subtitle: "Financial services and institutions in one",
    tags: ["FinTech", "Mobile", "UI"],
    gradient: "linear-gradient(135deg, #023e8a 0%, #0077b6 50%, #00b4d8 100%)",
    // Finance / banking visual
    imageSrc:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=800&fit=crop&auto=format&q=80",
    aspectRatio: "portrait",
  },
  {
    id: "lootnance",
    title: "Lootnance",
    subtitle: "Crypto exchange trading platform",
    tags: ["FinTech", "Trading", "UI"],
    gradient: "linear-gradient(135deg, #0b0c1e 0%, #1a237e 50%, #283593 100%)",
    // Trading / finance charts
    imageSrc:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop&auto=format&q=80",
    aspectRatio: "square",
  },
  {
    id: "e-ponya",
    title: "E-Ponya",
    subtitle: "Medical appointment booking app",
    tags: ["Healthcare", "Mobile"],
    gradient: "linear-gradient(135deg, #fce4ec 0%, #f48fb1 50%, #e91e63 100%)",
    // Healthcare / clinical
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop&auto=format&q=80",
    aspectRatio: "portrait",
  },
  {
    id: "sudah-nation",
    title: "Sudah Nation",
    subtitle: "Branding — logo, patterns & guidelines",
    tags: ["Branding", "Identity"],
    gradient: "linear-gradient(135deg, #212121 0%, #424242 50%, #616161 100%)",
    // Creative / branding process
    imageSrc:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=450&fit=crop&auto=format&q=80",
    aspectRatio: "landscape",
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Convert vertical wheel to horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY * 1.2;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <main className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* ── Hero tagline — navbar is ~60px tall (py-5 + text), + 32px gap = 92px ── */}
      <section className="px-8 pb-6 flex items-start justify-between" style={{ paddingTop: 92 }}>
        {/* Left: tagline + availability below it */}
        <div className="flex flex-col gap-4">
          <p className="text-[11px] tracking-[0.18em] uppercase text-black/60 max-w-xs leading-relaxed">
            A UX/UI DESIGNER CRAFTING INTUITIVE,
            <br />
            USER-FOCUSED DIGITAL EXPERIENCES
            <br />
            THAT DRIVE REAL RESULTS.
          </p>
          {/* Availability badge — sits directly below tagline */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] tracking-[0.15em] uppercase text-black/40">
              Available for work
            </span>
          </div>
        </div>

        {/* Right: barcode scroll indicator */}
        <div className="flex items-end mt-1">
          <BarcodeScrollbar scrollRef={scrollRef as React.RefObject<HTMLElement | null>} />
        </div>
      </section>

      {/* ── Horizontal scroll gallery ── */}
      {/*
        pt-3 (12px) on the scroll container is intentional:
        overflow-x:auto implicitly clips overflow-y, so top corner brackets
        (which sit 10px above each card) need top padding to remain visible.
      */}
      <section className="flex-1 flex flex-col justify-center">
        <div
          ref={scrollRef as React.RefObject<HTMLDivElement>}
          className="scroll-container flex gap-5 px-8 pt-3 pb-8 overflow-x-auto"
          style={{ cursor: "grab" }}
          onMouseDown={(e) => {
            const el = e.currentTarget;
            el.style.cursor = "grabbing";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (ev: MouseEvent) => {
              const x = ev.pageX - el.offsetLeft;
              el.scrollLeft = scrollLeft - (x - startX);
            };
            const onUp = () => {
              el.style.cursor = "grab";
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Right padding sentinel */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </section>

      {/* ── Large ghost word ── */}
      <div className="px-6 pb-2 overflow-hidden pointer-events-none select-none">
        <span className="text-[clamp(80px,14vw,160px)] font-bold tracking-tighter text-black/[0.04] uppercase leading-none">
          WORKS
        </span>
      </div>

      {/* ── Footer ── */}
      <footer className="flex items-center justify-between px-8 py-4 border-t border-black/8">
        <span className="text-[10px] tracking-widest uppercase text-black/30">
          © 2025 Pascal Ewaat
        </span>
        <div className="flex gap-6">
          <a
            href="https://twitter.com/PEwaat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase text-black/30 hover:text-black transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/pascal-ewaat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase text-black/30 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://read.cv/ewaat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase text-black/30 hover:text-black transition-colors"
          >
            Read.cv
          </a>
        </div>
      </footer>
    </main>
  );
}
