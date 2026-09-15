import Reveal from './Reveal'
import { ABOUT_PARAGRAPHS } from '../data/about'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Professional Summary</h2>
        </Reveal>

        <div className="mt-8 max-w-3xl space-y-5">
          {ABOUT_PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 0.1}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
