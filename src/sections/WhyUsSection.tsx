import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Shield,
  Lightbulb,
  Users,
  Clock,
  Cog,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Cog,
    title: "Vlastní výroba",
    description:
      "Vlastní projekce, výroba, lakovna i klempířská dílna. Máme plnou kontrolu nad kvalitou každého dílu.",
  },
  {
    icon: Shield,
    title: "ISO certifikace",
    description:
      "Držitelé ISO 9001:2015, EN ISO 3834-2:2005 a výrobkové normy EN 1090-2+A1 — garce nejvyšší kvality.",
  },
  {
    icon: Users,
    title: "Osobní přístup",
    description:
      "Ke každé zakázce přistupujeme individuálně. Navrhujeme řešení přesně dle vašich potřeb a rozpočtu.",
  },
  {
    icon: Clock,
    title: "Rychlá realizace",
    description:
      "Díky vlastní výrobě a zkušenému montážnímu týmu zajistíme efektivní realizaci bez zbytečných prodlev.",
  },
  {
    icon: Lightbulb,
    title: "3D projektování",
    description:
      "Návrhy zpracováváme v profesionálním 3D softwaru Tekla Structures pro maximální přesnost.",
  },
  {
    icon: BadgeCheck,
    title: "Členství ČAOK",
    description:
      "Řádný člen Asociace ocelových konstrukcí a Svazu podnikatelů ve stavebnictví v ČR.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="proc-my" className="py-24 lg:py-32 bg-steel-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:sticky lg:top-32"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3"
            >
              Proč UNIHAL
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6"
            >
              Všechno pod{" "}
              <span className="text-gold-600">jednou střechou</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-steel-500 leading-relaxed mb-8"
            >
              Nejsme zprostředkovatel. Jsme výrobce s vlastním zázemím, které
              nám umožňuje ručit za kvalitu od prvního návrhu po poslední
              šroub. To je důvod, proč si nás za 12 let vybralo přes 650
              zákazníků.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-6 flex-wrap">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary-700">650+</span>
                <span className="text-sm text-steel-500">hal</span>
              </div>
              <div className="w-px h-10 bg-steel-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary-700">12+</span>
                <span className="text-sm text-steel-500">let zkušeností</span>
              </div>
              <div className="w-px h-10 bg-steel-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary-700">CZ+SK</span>
                <span className="text-sm text-steel-500">pokrytí</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-5"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="group flex gap-5 rounded-xl bg-white border border-steel-200 p-6 transition-all hover:border-gold-300 hover:shadow-md hover:shadow-gold-100/50"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gold-50 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                  <reason.icon className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-steel-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
