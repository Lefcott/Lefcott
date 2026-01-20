import { Dictionary } from "@/getters/dictionary";
import Image from "next/image";
import Link from "next/link";

type Props = {
  dict: Dictionary;
};
export default function Header({ dict }: Props) {
  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur
        bg-white/80
        border-b border-black/5
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Fila superior */}
        <div className="h-16 flex items-center justify-between">
          {/* Nombre + avatar */}
          <div className="flex items-center gap-3">
            <div
              className="
                relative
                w-10 h-10
                rounded-full
                border border-black/10
                bg-white
                shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                overflow-hidden
              "
            >
              <Image
                src="/avatar.jpeg"
                alt="Leandro Cotti"
                fill
                className="object-cover"
                priority
              />
            </div>

            <span className="font-semibold text-neutral-900 leading-tight">
              Leandro Cotti
            </span>
          </div>

          {/* CTA Contacto y Locale */}
          <div className="flex items-center gap-6">
            <Link
              href={dict.locale === "es" ? "/en" : "/es"}
              className="text-sm"
            >
              {dict.locale === "es" ? "EN" : "ES"}
            </Link>
            <a
              href="#contacto"
              className="
              px-4 py-2
              rounded-full
              border border-black/10
              text-sm text-neutral-900
              transition
              hover:bg-black/5
            "
            >
              {dict.nav.contact}
            </a>
          </div>
        </div>

        {/* Navegación mobile */}
        <nav
          className="
            sm:hidden
            -mx-4
            px-4
            pb-3
            flex gap-6
            text-sm text-neutral-600
            overflow-x-auto
          "
        >
          <NavLink href="#experiencia">{dict.nav.experience}</NavLink>
          <NavLink href="#proyectos">{dict.nav.projects}</NavLink>
          <NavLink href="#skills">{dict.nav.skills}</NavLink>
        </nav>

        {/* Navegación desktop */}
        <nav className="hidden sm:flex items-center gap-8 h-0 pb-4 py-2 text-sm text-neutral-600">
          <NavLink href="#experiencia">{dict.nav.experience}</NavLink>
          <NavLink href="#proyectos">{dict.nav.projects}</NavLink>
          <NavLink href="#skills">{dict.nav.skills}</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="
        relative
        whitespace-nowrap
        transition
        hover:text-neutral-900
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-px
        after:w-0
        after:bg-neutral-900
        after:transition-all
        hover:after:w-full
      "
    >
      {children}
    </a>
  );
}
