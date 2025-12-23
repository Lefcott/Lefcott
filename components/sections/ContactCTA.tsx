export default function ContactCTA() {
  return (
    <section id="contacto" className="px-6 py-32">
      <div
        className="
          max-w-6xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br from-neutral-50 to-white
          border border-black/5
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          px-8 py-16
          md:px-16
          text-center
        "
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          ¿Hablamos?
        </h2>

        <p className="mt-6 text-neutral-600 max-w-2xl mx-auto text-lg">
          Estoy abierto a nuevas oportunidades donde pueda aportar desde el
          desarrollo fullstack y el diseño UX/UI, creando productos digitales
          sólidos y bien pensados.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/541130696440"
            target="_blank"
            rel="noopener noreferrer"
            className="
    px-8 py-4
    rounded-full
    text-sm font-medium
    text-[#25D366]
    border border-[#25D366]/40
    bg-white
    transition-all
    hover:bg-[#25D366]/10
    hover:border-[#25D366]/70
    hover:-translate-y-px
    hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
    active:translate-y-0
  "
          >
            Hablemos por WhatsApp
          </a>

          {/* Email visible */}
          <a
            href="mailto:lefcott@hotmail.com"
            className="
              text-sm
              text-neutral-700
              hover:text-neutral-900
              underline
              underline-offset-4
            "
          >
            lefcott@hotmail.com
          </a>

          {/* Links secundarios */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/leandro-cotti/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-full
                text-sm
                text-neutral-700
                border border-black/10
                hover:border-black/30
                hover:text-neutral-900
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/lefcott/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-full
                text-sm
                text-neutral-700
                border border-black/10
                hover:border-black/30
                hover:text-neutral-900
                transition
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
