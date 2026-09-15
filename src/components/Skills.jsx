import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { SKILL_GROUPS, ADDITIONAL_SKILLS } from '../data/skills'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const chip = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

function SkillChip({ label, Icons }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : chip}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm"
    >
      <span className="flex items-center gap-1 text-accent shrink-0">
        {Icons.map((Icon, i) => (
          <Icon key={i} size={18} aria-hidden="true" />
        ))}
      </span>
      <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{label}</span>
    </motion.div>
  )
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Skills</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Tools &amp; Technologies</h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.name}>
              <h3 className="text-sm font-semibold text-slate-500">{group.name}</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={shouldReduceMotion ? {} : container}
                className="mt-4 flex flex-wrap gap-3"
              >
                {group.items.map((item) => (
                  <SkillChip key={item.label} {...item} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <h3 className="text-sm font-semibold text-slate-500">Additional Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {ADDITIONAL_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
