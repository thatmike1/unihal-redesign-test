import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const hallTypes = [
  { label: "Výrobní haly", href: "#" },
  { label: "Skladové haly", href: "#" },
  { label: "Obchodní centra", href: "#" },
  { label: "Zemědělské haly", href: "#" },
  { label: "Autosalony, servisy", href: "#" },
  { label: "Sportovní haly", href: "#" },
];

const quickLinks = [
  { label: "Reference", href: "#reference" },
  { label: "Hodnocení zákazníků", href: "#hodnoceni" },
  { label: "Ceník hal", href: "#" },
  { label: "ISO a kvalita", href: "#" },
  { label: "Konfigurátor haly", href: "#" },
  { label: "Aktuality", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500">
                <span className="text-lg font-black text-white leading-none">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white">
                  UNIHAL
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-steel-400">
                  Svět montovaných hal
                </span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6 max-w-xs">
              Navrhujeme, vyrábíme a montujeme ocelové haly nejvyšší kvality.
              Řádný člen ČAOK a Svazu podnikatelů ve stavebnictví v ČR.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61558710442530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hall types */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300 mb-5">
              Nabídka hal
            </h4>
            <ul className="space-y-3">
              {hallTypes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300 mb-5">
              Rychlé odkazy
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300 mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+420702107815"
                  className="flex items-center gap-3 text-sm text-steel-400 hover:text-gold-400 transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  +420 702 107 815
                </a>
              </li>
              <li>
                <a
                  href="mailto:poptavky@unihal.cz"
                  className="flex items-center gap-3 text-sm text-steel-400 hover:text-gold-400 transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  poptavky@unihal.cz
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-steel-400">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Česká republika
                  <br />
                  <span className="text-steel-500">CZ + SK pokrytí</span>
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://www.unihal.cz" className="text-xs text-steel-500 hover:text-gold-400 transition-colors">
                unihal.cz
              </a>
              <span className="text-steel-600">·</span>
              <a href="https://www.unihal.sk" className="text-xs text-steel-500 hover:text-gold-400 transition-colors">
                unihal.sk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} UNIHAL s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-4 text-xs text-steel-500">
            <a href="#" className="hover:text-steel-300 transition-colors">
              Zásady ochrany osobních údajů
            </a>
            <a href="#" className="hover:text-steel-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
