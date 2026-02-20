import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Přístup firmy Unihal se mi moc líbil, byli velmi tvůrčí a spolupráce mě s nimi velmi bavila.",
    author: "Ing. Arch. Petr Šíma",
    role: "Autor projektu, České Budějovice",
    rating: 5,
  },
  {
    quote:
      "Hodnotíme celé dílo 11 bodů z 10! Velká spokojenost s kvalitou a profesionálním postupem prací.",
    author: "Bedřich Černý",
    role: "Investor, Hořovice",
    rating: 5,
  },
  {
    quote:
      "Stavba proběhla bez problémů. Rychlost, kvalita, super cena. Můžu jen doporučit.",
    author: "Josef Kopecký",
    role: "Investor, Pernarec",
    rating: 5,
  },
  {
    quote:
      "Spolupráce od začátku stavby až po předání vynikající, bez jakýchkoli problémů, skvělá komunikace.",
    author: "Bc. Lukáš Cejthamr",
    role: "Zástupce investora, Floranada",
    rating: 5,
  },
  {
    quote:
      "Spolehlivý a kvalitní dodavatel montované haly. Jsme velmi spokojeni s celým průběhem realizace.",
    author: "Ing. Pavel Kadlček",
    role: "Investor, Kastek Nivnice",
    rating: 5,
  },
  {
    quote:
      "100% spokojenost. Rádi budeme dále spolupracovat. Vynikající spolupráce, velmi dobrá kvalita i cena.",
    author: "Olesya Kraynyanska",
    role: "Jednatelka, Bel Solution",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="hodnoceni" className="py-24 lg:py-32 bg-primary-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(200,151,62,0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-3"
          >
            Co říkají zákazníci
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Hodnocení našich zákazníků
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-steel-400 max-w-2xl mx-auto"
          >
            Naši zákazníci jsou naší nejlepší referencí. Přečtěte si, jak
            hodnotí spolupráci s UNIHAL.
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7 transition-colors hover:bg-white/8 hover:border-white/15"
            >
              <Quote className="h-8 w-8 text-gold-500/30 mb-4" />
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-white/85 text-[15px] leading-relaxed mb-6 min-h-[72px]">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white text-sm">
                  {t.author}
                </div>
                <div className="text-steel-400 text-xs mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
