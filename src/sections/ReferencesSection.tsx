import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MapPin, Ruler, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Výrobní a skladový komplex Impec Technology",
    location: "Huštěnovice",
    size: "3 544 m²",
    type: "Výrobní hala",
    description:
      "Kompletní dodávka montovaných ocelových hal — od návrhu, výroby až po montáž konstrukce a opláštění.",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Montovaná střelnice CB SERVIS CENTRUM",
    location: "České Budějovice",
    size: "28 × 65 m",
    type: "Speciální stavba",
    description:
      "Moderní střelnice pro krátké i dlouhé zbraně s kancelářskými a prodejními prostory.",
    gradient: "from-emerald-600 to-emerald-800",
  },
  {
    title: "Ocelové haly pro Profirent",
    location: "Libochovice",
    size: "4 haly",
    type: "Skladové haly",
    description:
      "Čtyři ocelové montované haly realizované postupně v průběhu let pro jednoho spokojeného investora.",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    title: "Autoservis s moderním designem",
    location: "Česká republika",
    size: "Na míru",
    type: "Autoservis",
    description:
      "Jednopodlažní autoservis s přístřeškem vynikající funkčností, konstrukcí a atraktivním vzhledem.",
    gradient: "from-violet-600 to-violet-800",
  },
];

export default function ReferencesSection() {
  return (
    <section id="reference" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3"
            >
              Naše realizace
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4"
            >
              Reference, které mluví za nás
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-steel-500 max-w-xl"
            >
              Každá hala je unikátní projekt. Podívejte se na vybrané realizace
              z našeho portfolia 650+ dokončených staveb.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-gold-600 transition-colors"
            >
              Všechny reference
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background gradient placeholder (for project photos) */}
              <div
                className={`h-72 sm:h-80 bg-gradient-to-br ${project.gradient} relative`}
              >
                {/* Overlay pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                {/* Type badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white border border-white/10">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-white border border-t-0 border-steel-200 rounded-b-2xl group-hover:border-steel-300 transition-colors">
                <h3 className="text-lg font-semibold text-primary-800 mb-2 group-hover:text-gold-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-steel-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Ruler className="h-3.5 w-3.5" />
                    {project.size}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
