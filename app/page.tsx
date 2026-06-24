"use client";

import ContactForm from "./components/ContactForm";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const skills = [
  { name: "React", level: 82 },
  { name: "Next.js", level: 78 },
  { name: "TypeScript", level: 74 },
  { name: "Tailwind CSS", level: 80 },
  { name: "HTML semántico", level: 90 },
  { name: "Accesibilidad", level: 72 },
];

const projects = [
  {
    title: "Rescatando Sabores",
    description: "Proyecto UX/UI para concienciar sobre el desperdicio de alimentos, con investigación de usuario, diseño de pantallas y prototipado.",
    details: "Diseñé la experiencia visual y la interacción del producto, creando flujos de usuario claros y un prototipo interactivo en Figma como entrega final.",
    link: "https://www.figma.com/proto/SRhXWfszGmaUNIjOPBopIM/RescatandoSabores---Dise%C3%B1o-UX-UI---Codo-a-Codo?type=design&node-id=546-9143&scaling=scale-down"
  },
  {
    title: "Portfolio moderno",
    description: "Sitio personal construido con Next.js y Tailwind CSS para mostrar proyectos y habilidades de forma clara.",
    details: "Creé una estructura de contenidos amigable, diseño responsive y componentes reutilizables, siempre pensando en legibilidad y velocidad.",
    link: "#"
  },
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <main className="relative overflow-hidden bg-[#fdf7ff] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_32%)]" />
      <div className="pointer-events-none absolute left-8 top-24 h-44 w-44 rounded-full bg-fuchsia-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-44 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <header className="relative z-10 mb-10 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-600">Portafolio</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">Lucía Fernández</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      </div>
      <div className="space-y-12">
        <section className="relative grid gap-8 rounded-[2.5rem] border border-slate-200 bg-white/95 p-10 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.12)] sm:grid-cols-[1.45fr_1fr]">
          <div>
            <span className="inline-flex rounded-full bg-fuchsia-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-700">
              Diseño moderno</span>
            <h1 className="mt-7 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">

            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Desarrolladora junior enfocada en crear interfaces limpias, accesibles y adaptadas a experiencias reales. Me apasiona aprender y mejorar constantemente.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="mailto:lulutyinlove@gmail.com" className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400">
                Escríbeme
              </a>
              <a href="#proyectos" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-fuchsia-300 hover:bg-fuchsia-50">
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-fuchsia-100 via-slate-100 to-cyan-100 p-6 shadow-[0_30px_90px_-45px_rgba(236,72,153,0.18)]">
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-fuchsia-200/60 blur-2xl" />
            <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-cyan-200/50 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-fuchsia-200 via-slate-100 to-cyan-200">
                <Image
                  src="/profile.png"
                  alt="Foto de perfil de Lucía"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-sm text-slate-600">
                <code></code>.
              </p>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)]">
            <h2 className="text-2xl font-semibold text-slate-950">Sobre mí</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Soy una desarrolladora junior con ganas de aprender y experiencia en proyectos prácticos. Me enfoco en interfaces limpias, accesibles y adaptadas a experiencias reales.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-fuchsia-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-600">Compromiso</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Entrega puntual</p>
              </div>
              <div className="rounded-3xl bg-cyan-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-600">Aprendizaje</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Mejora constante</p>
              </div>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)]">
            <h2 className="text-2xl font-semibold text-slate-950">Mi enfoque</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Claridad para usuarios</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Cada interfaz debe ser fácil de entender desde el primer vistazo.</p>
              </li>
              <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Rendimiento real</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Prefiero soluciones ligeras y accesibles antes que animaciones innecesarias.</p>
              </li>
              <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Comunicación clara</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Mejor trabajo en equipo cuando los aportes y objetivos están bien documentados.</p>
              </li>
            </ul>
          </aside>
        </section>

        <section id="habilidades" className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Habilidades</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">Tecnologías y buenas prácticas que uso en cada proyecto.</p>
            </div>
            <span className="inline-flex rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-semibold text-fuchsia-700">Interactivas y responsive</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-950">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 transition-all duration-700" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)]">
            <h2 className="text-2xl font-semibold text-slate-950">Proyectos recientes</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">Proyectos que muestran mi capacidad para resolver necesidades reales en UX/UI y desarrollo frontend con enfoque en experiencia de usuario.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:border-fuchsia-300 hover:shadow-[0_28px_90px_-45px_rgba(236,72,153,0.16)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-600">Proyecto</p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
                  </div>
                  <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-700">Junior</span>
                </div>
                <div className="mt-6 h-48 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-100 via-fuchsia-100 to-cyan-100" />
                <p className="mt-6 text-slate-600">{project.description}</p>
                <button
                  type="button"
                  aria-expanded={expandedProject === project.title}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700 transition hover:text-fuchsia-900"
                  onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                >
                  {expandedProject === project.title ? "Ocultar detalles" : "Ver más"}
                  <span aria-hidden="true">→</span>
                </button>
                {expandedProject === project.title ? (
                  <p className="mt-4 rounded-3xl bg-fuchsia-50 p-5 text-sm leading-6 text-slate-600">{project.details}</p>
                ) : null}
                <a href={project.link} className="mt-6 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-900">
                  Ver proyecto completo
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)]">
            <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Hablemos de tu próximo proyecto</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Si necesitas una desarrolladora junior que aporte ganas, claridad y buena comunicación, estaré encantada de colaborar.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Escríbeme a <span className="font-semibold">lulutyinlove@gmail.com</span> o llama al <span className="font-semibold">+54 11 6377 3397</span>.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
      <footer className="mt-12 rounded-[2rem] border border-slate-200 bg-white/95 p-8 text-sm text-slate-600 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.12)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Portfolio de Lucía Fernández · Junior Frontend Developer</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/LMFernandez04" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-900">GitHub</a>
            <a href="https://www.linkedin.com/in/lucía-fernández-753159e" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-900">LinkedIn</a>
            <a href="mailto:lulutyinlove@gmail.com" className="transition hover:text-slate-900">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
