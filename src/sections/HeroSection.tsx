import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        {/* Geometric overlay pattern — evokes steel grid structure */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gradient from gold side */}
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-accent-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              12+ let na trhu · 650+ realizací
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
          >
            Montované haly{" "}
            <span className="text-gold-400">na míru</span>
            <br />
            vašim potřebám
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-steel-300 leading-relaxed max-w-2xl mb-10"
          >
            Navrhujeme, vyrábíme a montujeme ocelové haly nejvyšší kvality.
            Vlastní projekce, výroba a montáž — vše pod jednou střechou
            s certifikací ISO 9001.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-gold-500/25 transition-all hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98]"
            >
              Nezávazná poptávka
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#reference"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
            >
              <Play className="h-4 w-4" />
              Naše realizace
            </a>
          </motion.div>
        </motion.div>

        {/* Hero visual element — abstract steel beam */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-[420px] h-[420px]">
            {/* Steel beam abstract graphic */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              {/* I-beam cross-section pattern */}
              <div className="absolute inset-8 flex flex-col justify-between">
                <div className="h-6 bg-gold-500/20 rounded" />
                <div className="flex-1 flex justify-center py-3">
                  <div className="w-4 bg-gold-500/15 rounded" />
                </div>
                <div className="h-6 bg-gold-500/20 rounded" />
              </div>
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(200,151,62,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(200,151,62,0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-6 py-4">
              <div className="text-3xl font-bold text-gold-400">650+</div>
              <div className="text-sm text-white/70">Zrealizovaných hal</div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-6 py-4">
              <div className="text-3xl font-bold text-gold-400">ISO</div>
              <div className="text-sm text-white/70">9001:2015</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Více</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
