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

      {/* Proyecto destacado */}
      <div
        className="
          mt-16
          bg-white
          rounded-3xl
          border border-black/5
          shadow-[0_18px_45px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Carousel */}
          <div className="relative bg-neutral-100">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative min-w-full h-72 sm:h-96 lg:h-full snap-center"
                >
                  <Image
                    src={`/projects/${slugify(featured.title)}/${i}.png`}
                    alt={`${featured.title} screenshot ${i}`}
                    fill
                    className="object-cover"
                    priority={i === 1}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              {featured.title}
            </h3>

            <p className="mt-5 text-neutral-700 leading-relaxed max-w-xl">
              {featured.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <li
                  key={tech}
                  className="
                    px-3
                    py-1
                    text-sm
                    rounded-full
                    bg-neutral-100
                    text-neutral-700
                  "
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Resto de proyectos */}
      <ul className="mt-20 space-y-16">
        {rest.map((project) => (
          <li
            key={project.title}
            className="
              bg-white
              rounded-2xl
              border border-black/5
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              overflow-hidden
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Carousel */}
              <div className="relative bg-neutral-100">
                <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="relative min-w-full h-64 sm:h-80 lg:h-full snap-center"
                    >
                      <Image
                        src={`/projects/${slugify(project.title)}/${i}.png`}
                        alt={`${project.title} screenshot ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-neutral-700 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="
                        px-3
                        py-1
                        text-sm
                        rounded-full
                        bg-neutral-100
                        text-neutral-700
                      "
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Utils */
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
