import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-40 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block mb-4 text-sm text-neutral-500">
            Full-Stack Engineer · UX/UI Designer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900">
            Diseño y desarrollo <br />
            <span className="text-neutral-600">
              productos digitales <br className="hidden sm:block" />
              bien pensados
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed">
            Trabajo en la intersección entre diseño y desarrollo, construyendo
            experiencias claras, escalables y agradables de usar, desde la idea
            hasta producción.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="
                px-6 py-3
                rounded-full
                bg-neutral-900
                text-white
                text-sm
                transition
                hover:bg-neutral-800
              "
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="
                px-6 py-3
                rounded-full
                border border-black/10
                text-sm text-neutral-900
                transition
                hover:bg-black/5
              "
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
              border border-black/10
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
            "
          >
            <Image
              src="/hero.jpg"
              alt="Diseño y desarrollo de productos digitales"
              width={900}
              height={600}
              className="object-cover"
              priority
            />
          </div>

          {/* Glow sutil */}
          <div
            className="
              absolute -inset-6
              rounded-[2rem]
              bg-[#E7B86A]/20
              blur-3xl
              -z-10
            "
          />
        </div>
      </div>
    </section>
  );
}
