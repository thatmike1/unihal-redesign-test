import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side — info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-3"
            >
              Kontaktujte nás
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4"
            >
              Začněte s nezávaznou poptávkou
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-steel-500 leading-relaxed mb-10"
            >
              Vyplňte formulář nebo nám zavolejte. Ozveme se vám do 24 hodin
              s předběžnou cenovou nabídkou a možnostmi řešení.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-5">
              <motion.a
                variants={fadeInUp}
                href="tel:+420702107815"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 group-hover:bg-gold-50 transition-colors">
                  <Phone className="h-5 w-5 text-primary-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-steel-400">Telefon</div>
                  <div className="font-semibold text-primary-800">
                    +420 702 107 815
                  </div>
                </div>
              </motion.a>
              <motion.a
                variants={fadeInUp}
                href="mailto:poptavky@unihal.cz"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 group-hover:bg-gold-50 transition-colors">
                  <Mail className="h-5 w-5 text-primary-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-steel-400">E-mail</div>
                  <div className="font-semibold text-primary-800">
                    poptavky@unihal.cz
                  </div>
                </div>
              </motion.a>
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-steel-400">Sídlo</div>
                  <div className="font-semibold text-primary-800">
                    Česká republika
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-steel-400">Odpovíme do</div>
                  <div className="font-semibold text-primary-800">
                    24 hodin
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-steel-200 bg-white p-8 lg:p-10 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-steel-700"
                  >
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Jan Novák"
                    className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-800 placeholder:text-steel-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-steel-700"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="jan@firma.cz"
                    className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-800 placeholder:text-steel-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-steel-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+420 123 456 789"
                  className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-800 placeholder:text-steel-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:bg-white transition-all outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-steel-700"
                >
                  Zpráva / Popis projektu
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Popište nám váš projekt — jaký typ haly potřebujete, přibližné rozměry, termín realizace..."
                  className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-800 placeholder:text-steel-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:bg-white transition-all outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/25 active:scale-[0.99]"
              >
                <Send className="h-4 w-4" />
                Odeslat poptávku
                <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </button>
              <p className="mt-4 text-center text-xs text-steel-400">
                Odesláním souhlasíte se zpracováním osobních údajů. Odpovíme do
                24 hodin.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
