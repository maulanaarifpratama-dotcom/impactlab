import { contact } from '../../data/content'
import { trackEvent } from '../../lib/analytics'

export function Footer({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void; onOpenTerms: () => void }) {
  const quickLinks = [
    ['#program', 'Program'], ['#jadwal', 'Jadwal'], ['#fasilitator', 'Fasilitator'], ['#faq', 'FAQ'],
  ]

  const programs = ['MEAL for Impact', 'Project Management for Impact', 'AI for Impact']

  return (
    <footer className="relative overflow-hidden bg-navy py-14 pb-28 text-white md:pb-14">
      <div className="noise-overlay absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center" aria-label="Immersia - kembali ke beranda"><img src="/brand/immersia-logo-light.png" alt="Immersia" className="h-10 w-auto object-contain" /></a>
            <p className="mt-6 max-w-sm font-display text-3xl leading-tight text-white">Designing Impact. Strengthening Decisions.</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-stone">Public training praktis untuk memperkuat sistem MEAL, project management, dan pemanfaatan AI di sektor social development.</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Tautan</h2>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              {quickLinks.map(([href, label]) => <li key={href}><a href={href} className="transition hover:text-white">{label}</a></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Program</h2>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              {programs.map((program) => <li key={program}>{program}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Kontak</h2>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              <li><a href={`https://${contact.website}`} className="transition hover:text-white">{contact.website}</a></li>
              <li><a href={`mailto:${contact.email}`} className="transition hover:text-white">{contact.email}</a></li>
              <li><a href={contact.waLink} onClick={() => trackEvent('whatsapp_click')} className="transition hover:text-white">{contact.whatsapp}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-stone md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-stone/70">Copyright © 2025 Immersia</p>
          <div className="flex flex-wrap gap-4">
            <button onClick={onOpenPrivacy} className="underline-offset-4 transition hover:text-white hover:underline">Privacy Policy</button>
            <button onClick={onOpenTerms} className="underline-offset-4 transition hover:text-white hover:underline">Syarat & Ketentuan</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
