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

      <div className="px-8 pt-28 pb-20 max-w-3xl">
        {/* Name + title */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-6">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8 uppercase">
          Pascal Ewaat
        </h1>

        {/* Bio */}
        <p className="text-base text-black/60 leading-relaxed mb-4 max-w-lg">
          I&apos;m a UX/UI designer with 4+ years of experience and a background
          in art. Passionate about crafting intuitive, user-focused digital
          experiences that drive results.
        </p>
        <p className="text-base text-black/60 leading-relaxed mb-12 max-w-lg">
          I specialise in user-centric solutions aligned with business
          objectives, primarily working in startup environments where I&apos;ve
          guided projects from concept through launch.
        </p>

        {/* Divider */}
        <div className="border-t border-black/10 mb-10" />

        {/* Experience */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8">
          Experience
        </p>
        <div className="space-y-10">
          {experience.map((item) => (
            <div key={item.company} className="grid grid-cols-[120px_1fr] gap-6">
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

        {/* Divider */}
        <div className="border-t border-black/10 mt-12 mb-10" />

        {/* Contact */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4">
          Get in touch
        </p>
        <a
          href="mailto:ewaatpascal@gmail.com"
          className="text-2xl font-semibold tracking-tight hover:opacity-50 transition-opacity"
        >
          ewaatpascal@gmail.com
        </a>
      </div>
    </main>
  );
}
