import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import useIsMobile from '../hooks/useIsMobile'
import { EXPERIENCE } from '../data/experience'

function TimelineEntry({ entry, index }) {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()
  const fromLeft = isMobile ? true : index % 2 === 0

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, x: fromLeft ? -40 : 40 }

  return (
    <div className={`relative flex ${!isMobile && !fromLeft ? 'md:justify-end' : ''}`}>
      {/* Timeline dot */}
      <span
        className={`hidden md:block absolute top-6 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-white ${
          entry.current ? 'bg-accent' : 'bg-slate-300'
        } z-10`}
        aria-hidden="true"
      />

      <motion.div
        initial={initial}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-[46%] rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-navy">{entry.role}</h3>
          <span className="text-xs font-medium text-accent">{entry.dates}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-slate-500">{entry.company}</p>

        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="text-sm text-slate-600 leading-relaxed pl-4 relative">
              <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Experience</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Where I've Worked</h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Center line, desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {EXPERIENCE.map((entry, index) => (
              <TimelineEntry key={entry.company} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
