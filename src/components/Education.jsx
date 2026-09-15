import { TbSchool } from 'react-icons/tb'
import Reveal from './Reveal'
import { EDUCATION } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Education</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Academic Background</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-2xl">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <TbSchool size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">{EDUCATION.degree}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">{EDUCATION.school}</p>
              <p className="text-sm text-slate-500">{EDUCATION.location}</p>
              <p className="mt-2 text-xs font-medium text-accent">{EDUCATION.dates}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
