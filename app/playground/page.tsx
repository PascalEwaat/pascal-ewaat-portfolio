import Navbar from "@/components/Navbar";

export default function Playground() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6">
          Playground
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-black/[0.06] select-none">
          COMING SOON
        </h1>
        <p className="mt-8 text-sm text-black/40 tracking-wide max-w-xs">
          A space for experiments, side projects, and creative explorations.
          Check back soon.
        </p>
      </div>
    </main>
  );
}
