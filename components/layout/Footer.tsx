import { Dictionary } from "@/getters/dictionary";

type Props = {
  dict: Dictionary;
};

export default function Footer({ dict }: Props) {
  return (
    <footer className="px-6 pb-20">
      <div
        className="
          max-w-6xl mx-auto
          rounded-3xl
          border border-black/5
          bg-neutral-50
          px-8 py-12
          shadow-[0_20px_60px_rgba(0,0,0,0.05)]
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Identidad */}
          <div>
            <p className="text-lg font-medium text-neutral-900">
              Leandro Cotti
            </p>

            <p className="mt-2 text-sm text-neutral-600 max-w-sm">
              {dict.footer.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:items-end gap-4 text-sm">
            <a
              href="mailto:lefcott@hotmail.com"
              className="text-neutral-700 hover:text-neutral-900 transition"
            >
              {dict.footer.email}
            </a>

            <div className="flex gap-6 text-neutral-600">
              <a
                href="https://www.linkedin.com/in/leandro-cotti/"
                target="_blank"
                className="hover:text-neutral-900 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/lefcott/"
                target="_blank"
                className="hover:text-neutral-900 transition"
              >
                GitHub
              </a>

              <a
                href="https://wa.me/541130696440"
                target="_blank"
                className="hover:text-neutral-900 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-black/5" />

        {/* Copyright */}
        <p className="text-xs text-neutral-500 text-center">
          © {new Date().getFullYear()} — {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
