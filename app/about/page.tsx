import Navbar from "@/components/Navbar";

const experience = [
  {
    period: "2023 – 2024",
    role: "Founding Product Designer",
    company: "Guideli",
    description:
      "Led end-to-end product design for an AI-powered immigration platform, guiding the product from concept to launch.",
  },
  {
    period: "2022",
    role: "Product Designer & Frontend Lead",
    company: "Aya Corp",
    description:
      "Owned design and frontend implementation across multiple product lines in a fast-moving startup environment.",
  },
  {
    period: "2021 – 2023",
    role: "Lead UX/UI Designer",
    company: "Zunko",
    description:
      "Defined the design system and led UX research efforts, establishing design processes from the ground up.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/*
        Desktop: two-column flex row.
          – Left  (50%): sticky — stays in place as right column scrolls.
          – Right (50%): scrolls naturally with the page.
        Mobile: single column, stacked, full-page scroll.
      */}
      <div
        className="flex flex-col md:flex-row"
        style={{ paddingTop: 92 }}
      >
        {/* ── LEFT: About (sticky on desktop) ── */}
        <div className="md:w-1/2 px-8 pb-10 md:pb-0 md:sticky md:top-[92px] md:self-start">
          <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-6">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8 uppercase">
            Pascal Ewaat
          </h1>

          <p className="text-sm text-black/60 leading-relaxed mb-4 max-w-sm">
            I&apos;m a UX/UI designer with 4+ years of experience and a
            background in art. Passionate about crafting intuitive,
            user-focused digital experiences that drive results.
          </p>
          <p className="text-sm text-black/60 leading-relaxed mb-12 max-w-sm">
            I specialise in user-centric solutions aligned with business
            objectives, primarily working in startup environments where
            I&apos;ve guided projects from concept through launch.
          </p>

          {/* Contact — lives in left column */}
          <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4">
            Get in touch
          </p>
          <a
            href="mailto:ewaatpascal@gmail.com"
            className="text-lg font-semibold tracking-tight hover:opacity-50 transition-opacity"
          >
            ewaatpascal@gmail.com
          </a>
        </div>

        {/* ── RIGHT: Experience (scrolls with page) ── */}
        <div className="md:w-1/2 px-8 pr-8 pb-20">
          <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8">
            Experience
          </p>

          <div className="space-y-10">
            {experience.map((item) => (
              <div
                key={item.company}
                className="grid grid-cols-[110px_1fr] gap-6"
              >
                <span className="text-xs text-black/40 tracking-wide pt-1">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.08em] uppercase">
                    {item.role}
                  </h3>
                  <p className="text-xs text-black/50 tracking-wide mb-2">
                    {item.company}
                  </p>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/*
            Bottom line: spans the full width of the right column
            (pr-8 keeps it 32px from the right edge of the screen).
            No line on the left column — no mid-page divider.
          */}
          <div className="border-t border-black/10 mt-16" />
        </div>
      </div>
    </main>
  );
}
