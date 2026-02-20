import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PenTool, Factory, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    step: "01",
    title: "Projekce & návrh",
    description:
      "Individuální návrh haly v 3D softwaru Tekla Structures. Zohledníme vaše potřeby, rozměry pozemku a technologické požadavky.",
  },
  {
    icon: Factory,
    step: "02",
    title: "Vlastní výroba",
    description:
      "Výroba ocelové konstrukce v naší dílně s precizní přípravou. Dílenská kontrola kvality zajišťuje dokonalé díly.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Montáž",
    description:
      "Profesionální montážní tým s letitými zkušenostmi. Rychlá a efektivní realizace s důrazem na bezpečnost a kvalitu.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Předání díla",
    description:
      "Kompletní dokumentace, záruka a poprodejní servis. Hlídáme kvalitu od prvního návrhu po poslední šroub.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proces" className="py-24 lg:py-32 bg-steel-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3"
          >
            Jak pracujeme
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4"
          >
            Od návrhu po realizaci
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-steel-500 max-w-2xl mx-auto"
          >
            Celý proces realizace haly máme pod kontrolou díky vlastní projekci,
            výrobě a montáži. Žádný mezičlánek, plná odpovědnost.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div key={step.step} variants={fadeInUp} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px]">
                  <div className="h-full bg-gradient-to-r from-gold-400/50 to-gold-400/10 rounded" />
                </div>
              )}
              <div className="text-center">
                {/* Step number & icon */}
                <div className="relative mx-auto mb-6 h-20 w-20 rounded-2xl bg-white border border-steel-200 flex items-center justify-center shadow-sm">
                  <step.icon className="h-8 w-8 text-gold-600" />
                  <span className="absolute -top-2.5 -right-2.5 h-7 w-7 rounded-full bg-primary-700 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-steel-500 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
