import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="proyectos" className="px-6 py-28 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold font-display">Proyectos</h2>

      <p className="mt-4 text-neutral-600 max-w-2xl">
        Productos reales donde combino desarrollo fullstack y diseño UX/UI, con
        foco en experiencia de usuario, performance y escalabilidad.
      </p>

      {/* ================== PROYECTO DESTACADO ================== */}
      <ProjectCard project={featured} featured />

      {/* ================== RESTO DE PROYECTOS ================== */}
      <ul className="mt-20 space-y-16">
        {rest.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ========================================================= */
/* ================== COMPONENTES ========================== */
/* ========================================================= */

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`
        mt-16
        bg-white
        rounded-3xl
        border border-black/5
        shadow-[0_18px_45px_rgba(0,0,0,0.08)]
        overflow-hidden
      `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Carousel
          title={project.title}
          images={project.images}
          featured={featured}
        />

        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <h3
            className={`font-semibold tracking-tight ${
              featured ? "text-3xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-5 text-neutral-700 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech: string) => (
              <li
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-neutral-100 text-neutral-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Carousel({
  title,
  images,
  featured,
}: {
  title: string;
  images: number;
  featured: boolean;
}) {
  return (
    <div className="relative bg-neutral-50">
      <div
        className="
          flex
          overflow-x-auto
          snap-x snap-mandatory
          scroll-smooth
          gap-6
          px-6
          py-10
        "
      >
        {Array(images)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`
                relative
                snap-center
                shrink-0
                rounded-2xl
                bg-neutral-100
                border border-black/5
                shadow-sm
                flex items-center justify-center
                ${
                  featured
                    ? "min-w-[85%] aspect-[16/10]"
                    : "min-w-[80%] aspect-[16/10]"
                }
              `}
            >
              <Image
                src={`/projects/${slugify(title)}/${i + 1}.png`}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-contain p-4"
                priority={featured && i === 0}
              />
            </div>
          ))}
      </div>

      {/* ===== Fade lateral ===== */}
      {images > 1 && (
        <>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" />
        </>
      )}

      {/* ===== Dots ===== */}
      {images > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array(images)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-neutral-400/40"
              />
            ))}
        </div>
      )}
    </div>
  );
}

/* ========================================================= */
/* ================== UTILS ================================ */
/* ========================================================= */

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
