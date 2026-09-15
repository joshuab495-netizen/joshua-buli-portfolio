import { TbPhone, TbMail } from 'react-icons/tb'
import Reveal from './Reveal'
import { CONTACT } from '../data/contact'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Let's Work Together</h2>
          <p className="mt-4 max-w-xl text-base text-slate-600 leading-relaxed">
            Reach out directly by phone or email — happy to talk through a role or a project.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <Reveal delay={0.05}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <TbMail size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Email</p>
                <p className="text-sm text-slate-600 break-all">{CONTACT.email}</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <TbPhone size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Phone</p>
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block text-sm text-slate-600 hover:text-accent transition-colors duration-200"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
