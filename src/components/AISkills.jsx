import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { AI_HIGHLIGHTS } from '../data/aiSkills'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function AISkills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">AI Stack &amp; Productivity</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Working Faster with AI Tools</h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={shouldReduceMotion ? {} : container}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {AI_HIGHLIGHTS.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={shouldReduceMotion ? {} : card}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
