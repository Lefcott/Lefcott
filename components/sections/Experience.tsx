import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 py-28 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold font-display">Experiencia</h2>

      <div className="mt-16 relative">
        {/* Línea */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200/70" />

        <ul className="space-y-8">
          {experience.map((item, index) => (
            <li key={index} className="relative pl-16">
              {/* Punto */}
              <span className="absolute left-0 top-5 w-8 h-8 rounded-full bg-[#E7B86A]/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#E7B86A]" />
              </span>

              {/* Card */}
              <div
                className="
                  bg-white
                  rounded-2xl
                  border border-black/5
                  p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                "
              >
                <span className="text-sm text-neutral-500">{item.period}</span>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {item.role}
                </h3>

                <p className="text-neutral-600">{item.company}</p>

                <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="
                        px-3
                        py-1
                        text-sm
                        rounded-full
                        bg-neutral-100
                        text-neutral-700
                      "
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
