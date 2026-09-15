import { motion, useReducedMotion } from 'framer-motion'
import { HERO } from '../data/hero'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion ? { hidden: {}, visible: {} } : container
  const itemVariants = shouldReduceMotion ? { hidden: {}, visible: {} } : item

  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      {/* Subtle grid pattern background — corporate, not busy */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="relative max-w-container mx-auto px-6 py-28 md:py-36 text-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300"
        >
          {HERO.title}
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          {HERO.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed"
        >
          {HERO.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={HERO.ctaPrimary.href}
            className="inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.03]"
          >
            {HERO.ctaPrimary.label}
          </a>
          <a
            href={HERO.ctaSecondary.href}
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:scale-[1.03]"
          >
            {HERO.ctaSecondary.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
