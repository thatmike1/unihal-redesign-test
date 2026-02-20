import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Factory, Warehouse, ShoppingBag, Tractor, Car, Dumbbell, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Výrobní haly",
    description:
      "Moderní výrobní prostory navržené pro maximální efektivitu provozu s ohledem na technologické požadavky.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
  },
  {
    icon: Warehouse,
    title: "Skladové haly",
    description:
      "Prostorné skladovací řešení s optimálním využitím plochy a přizpůsobením logistickým potřebám.",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: ShoppingBag,
    title: "Obchodní centra",
    description:
      "Komerční prostory a prodejny s atraktivním designem, které přitahují zákazníky a maximalizují prodej.",
    color: "from-violet-500/10 to-violet-600/5",
    iconColor: "text-violet-600",
  },
  {
    icon: Tractor,
    title: "Zemědělské haly",
    description:
      "Funkční haly pro skladování plodin, ustájení zvířat a zemědělskou techniku odolné náročným podmínkám.",
    color: "from-amber-500/10 to-amber-600/5",
    iconColor: "text-amber-600",
  },
  {
    icon: Car,
    title: "Autosalony a servisy",
    description:
      "Reprezentativní prostory pro prezentaci vozidel a technicky vybavené servisní haly na míru.",
    color: "from-red-500/10 to-red-600/5",
    iconColor: "text-red-600",
  },
  {
    icon: Dumbbell,
    title: "Sportovní haly",
    description:
      "Víceúčelové sportovní objekty s dostatečnou výškou a variabilitou pro různé sporty a aktivity.",
    color: "from-cyan-500/10 to-cyan-600/5",
    iconColor: "text-cyan-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="sluzby" className="py-24 lg:py-32 bg-white">
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
            Naše specializace
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4"
          >
            Montované haly dle odvětví
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-steel-500 max-w-2xl mx-auto"
          >
            Každá hala je navržena s ohledem na specifické požadavky vašeho
            oboru. Od projekce po montáž — vše zajistíme.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group relative rounded-2xl border border-steel-200 bg-white p-8 transition-all duration-300 hover:border-steel-300 hover:shadow-lg hover:shadow-steel-200/50 hover:-translate-y-1"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
              >
                <service.icon className={`h-7 w-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                {service.title}
              </h3>
              <p className="text-steel-500 leading-relaxed text-[15px]">
                {service.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Více informací
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
