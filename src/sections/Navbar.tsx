import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Proces", href: "#proces" },
  { label: "Reference", href: "#reference" },
  { label: "Hodnocení", href: "#hodnoceni" },
  { label: "Proč my", href: "#proc-my" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-steel-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 transition-colors group-hover:bg-gold-600">
              <span className="text-lg font-black text-white leading-none">U</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight tracking-tight transition-colors ${scrolled ? "text-primary-700" : "text-white"}`}>
                UNIHAL
              </span>
              <span className={`text-[10px] font-medium uppercase tracking-widest transition-colors ${scrolled ? "text-steel-500" : "text-white/70"}`}>
                Svět montovaných hal
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-steel-600 hover:text-primary-700 hover:bg-steel-50"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+420702107815"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-steel-600 hover:text-primary-700" : "text-white/85 hover:text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>+420 702 107 815</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4" />
              Nezávazná poptávka
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-steel-700 hover:bg-steel-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-steel-200 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-steel-700 rounded-lg hover:bg-steel-50 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-steel-200 mt-2">
                <a
                  href="tel:+420702107815"
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-steel-600"
                >
                  <Phone className="h-5 w-5" />
                  +420 702 107 815
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-gold-600"
                >
                  <MessageSquare className="h-5 w-5" />
                  Nezávazná poptávka
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
