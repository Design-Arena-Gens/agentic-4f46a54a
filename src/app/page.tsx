import HeroCanvas from "@/components/HeroCanvas";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    title: "Celestial Soundscapes",
    description:
      "Audio-reactive WebGL installation translating live music into responsive volumetric waves and light.",
    tags: ["WebGL", "Shader Art", "Music"],
    link: "https://dribbble.com",
  },
  {
    title: "Atlas Explorer",
    description:
      "Immersive data story of future cities with 3D cartography, climate overlays, and playful microinteractions.",
    tags: ["Three.js", "Data Viz", "UX"],
    link: "https://behance.net",
  },
  {
    title: "Pulse Studio",
    description:
      "Modular design system for a fitness tech startup with kinetic typography and motion-driven UI.",
    tags: ["Design Systems", "Motion", "Brand"],
    link: "https://figma.com",
  },
];

const studioHighlights = [
  {
    title: "Immersive Spaces",
    description:
      "Crafting cinematic hero sections, interactive product demos, and experiential narratives for the web.",
  },
  {
    title: "Procedural Art",
    description:
      "Exploring generative sculpture, particle choreography, and code-driven visual identities.",
  },
  {
    title: "Creative Sprints",
    description:
      "Rapid experiments that fuse storytelling, motion design, and cutting-edge front-end technology.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-white/10 via-white/0 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-10 top-48 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 backdrop-blur-lg">
        <Link href="#hero" className="text-lg font-semibold tracking-tight">
          Nova Atlas
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium tracking-wide text-white/80 transition hover:border-white hover:text-white"
        >
          Book a Session
        </Link>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-32">
        <section
          id="hero"
          className="relative mt-4 flex min-h-[80vh] flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-8 py-24"
        >
          <HeroCanvas />
          <div className="relative z-10 flex flex-col gap-8 text-white md:w-2/3">
            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-white/60">
                Creative Technologist
                <span className="h-px w-12 bg-white/30" />
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Designing immersive worlds & interfaces that feel alive.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="max-w-xl text-base text-white/70 md:text-lg">
                I blend 3D, motion, and code to craft expressive digital
                experiences. From interactive stages to data stories, my work
                transforms complex narratives into moments of wonder.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row">
                <Link
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-3 text-black transition hover:bg-white"
                >
                  View Selected Work
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href="mailto:contact@nova-atlas.studio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white/80 transition hover:border-white hover:text-white"
                >
                  Let&apos;s Collaborate
                </a>
              </div>
            </Reveal>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#050409] to-transparent" />
        </section>

        <section id="about" className="grid gap-12 md:grid-cols-[2fr,3fr]">
          <Reveal className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              About
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Building narratives across pixels, motion, and light.
            </h2>
            <p className="text-base text-white/70">
              My practice merges design thinking with technical artistry. I work
              closely with teams to produce multisensory brand moments, immersive
              product journeys, and experimental concepts that stretch the medium
              of the web.
            </p>
            <div className="grid gap-4 text-sm text-white/60 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white">Creative Direction</h3>
                <p>
                  Translating vision into cohesive story arcs, aesthetic systems,
                  and sensory touchpoints.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white">Interactive Engineering</h3>
                <p>
                  Engineering performant experiences with WebGL, motion design,
                  and future-friendly front-end stacks.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
              Timeline
            </h3>
            <div className="space-y-6 border-l border-white/10 pl-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  2023 — Present
                </p>
                <h4 className="text-lg font-semibold">Nova Atlas Studio</h4>
                <p className="text-sm text-white/70">
                  Independent studio crafting bespoke immersive experiences for
                  forward-thinking brands.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  2021 — 2023
                </p>
                <h4 className="text-lg font-semibold">Orbit Labs</h4>
                <p className="text-sm text-white/70">
                  Led real-time 3D initiatives, building interactive launch
                  moments for global product reveals.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  2018 — 2021
                </p>
                <h4 className="text-lg font-semibold">Freelance</h4>
                <p className="text-sm text-white/70">
                  Partnered with agencies and founders to prototype new ventures,
                  raising over $35M in funding.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="space-y-12">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                  Featured Projects
                </span>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                  Selected collaborations with bold teams.
                </h2>
              </div>
              <Link
                href="https://nova-atlas.studio"
                className="text-sm text-white/60 underline-offset-4 transition hover:text-white hover:underline"
              >
                Request case study deck
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.1 * index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
                >
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {project.tags.join(" • ")}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">{project.description}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
                    Explore project
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="studio"
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <Reveal className="space-y-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Studio Practice
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              From idea to immersive launch, built with purpose.
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/70">
              Each collaboration unfolds as a layered journey. We begin with
              narrative architecture, evolve into interactive prototypes, and
              culminate in responsive, production-ready experiences optimized for
              modern platforms.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {studioHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    {highlight.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                    Phase {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contact" className="space-y-8">
          <Reveal className="space-y-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Collaborate
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Let&apos;s build something unforgettable.
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/70">
              Share your story, challenge, or ambitious prototype. I partner with
              founders, creative teams, and future-facing brands to craft
              signature moments that resonate.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white">
                  Start a project
                </h3>
                <p className="text-sm text-white/70">
                  Tell me about your vision, timeline, and success metrics.
                </p>
                <a
                  href="mailto:contact@nova-atlas.studio"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                >
                  contact@nova-atlas.studio →
                </a>
              </div>
              <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Social
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
                    <a
                      href="https://www.instagram.com"
                      className="transition hover:text-white"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      className="transition hover:text-white"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="transition hover:text-white"
                    >
                      X / Twitter
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Studio Availability
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Open for Q3 collaborations, residencies, and art direction
                    partnerships.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Nova Atlas Studio. Crafted with heart.</p>
        <div className="flex gap-4">
          <Link href="#hero" className="transition hover:text-white">
            Back to top
          </Link>
          <a
            href="https://vercel.com"
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed on Vercel
          </a>
        </div>
      </footer>
    </div>
  );
}
