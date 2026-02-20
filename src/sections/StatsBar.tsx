import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, CalendarDays, Award, Wrench } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 650,
    suffix: "+",
    label: "Zrealizovaných hal",
  },
  {
    icon: CalendarDays,
    value: 12,
    suffix: "+",
    label: "Let na trhu",
  },
  {
    icon: Award,
    value: 3,
    suffix: "",
    label: "ISO certifikace",
  },
  {
    icon: Wrench,
    value: 100,
    suffix: "%",
    label: "Vlastní výroba",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative -mt-1 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl bg-steel-200 overflow-hidden shadow-xl shadow-steel-200/50 -mt-16 relative"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-white px-6 py-8 lg:py-10"
            >
              <stat.icon className="h-6 w-6 text-gold-500 mb-1" />
              <div className="text-3xl lg:text-4xl font-bold text-primary-700">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-steel-500 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
